import { Context, Hono } from "hono";
import { getPrisma } from "../db/prisma";
import { authMiddleware } from "../middlewares/authMiddleware";
import { Prisma } from "../generated/prisma/client";
import { plantInput, updatePlantInput } from "@adarsh31/common-herbal-app";
import { getPagination } from "../utils/pagination";

type AppEnv = {
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        "userId": string;
        "role": string;
    }
};

const slugify = (value: string) =>
    value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

const requireAdmin = (c: Context<AppEnv>) => {
    if (c.get("role") !== "ADMIN") {
        return c.json({ message: "Forbidden" }, 403);
    }

    return null;
}

const isUniqueConstraintError = (e: unknown) =>
    e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002";

const formatPlant = (plant: any) => {
    if (!plant) return null;
    return {
        ...plant,
        image: plant.imageUrl ?? "",
        category: plant.category?.name ?? "",
        categoryDetails: plant.category
    };
};

export const plantsRouter = new Hono<AppEnv>();

plantsRouter.get("/", async (c) => {
    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const { page, limit } = getPagination(c.req.query("page"), c.req.query("limit"));

        const search = c.req
            .query("search")
            ?.trim()
            .slice(0, 100);
        const category = c.req.query("category");

        const where = {
            ...(search && {
                OR: [
                    {
                        name: {
                            contains: search,
                            mode: "insensitive" as const
                        }
                    },
                    {
                        scientificName: {
                            contains: search,
                            mode: "insensitive" as const
                        }
                    }
                ]
            }),

            ...(category && {
                category: {
                    slug: category
                }
            })
        };

        const [plants, total] = await Promise.all([
            prisma.plant.findMany({
                where,

                select: {
                    id: true,
                    name: true,
                    slug: true,
                    scientificName: true,
                    imageUrl: true,
                    summary: true,

                    category: {
                        select: {
                            id: true,
                            name: true,
                            slug: true
                        }
                    }
                },

                skip: (page - 1) * limit,
                take: limit,

                orderBy: {
                    createdAt: "desc"
                }
            }),


            prisma.plant.count({
                where
            })
        ]);

        const formattedPlants = plants.map(formatPlant);

        return c.json({
            plants: formattedPlants,

            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
                hasNextPage: page < Math.ceil(total / limit),
                hasPrevPage: page > 1
            }
        });
    } catch (e) {
        console.error("Get plants error:", e);
        return c.json(
            { message: "Internal server error" },
            500
        );
    }
})

plantsRouter.post("/", authMiddleware, async (c) => {
    const forbidden = requireAdmin(c);
    if (forbidden) return forbidden;

    const body = await c.req.json();
    const parsed = plantInput.safeParse(body);

    if (!parsed.success) {
        return c.json({ message: "Invalid input", errors: parsed.error.flatten() }, 400);
    }

    const { categorySlug, categoryId, slug, ...plantData } = parsed.data;

    const prisma = getPrisma(c.env.DATABASE_URL);

    try {
        const category = categoryId
            ? await prisma.category.findUnique({ where: { id: categoryId } })
            : await prisma.category.findUnique({ where: { slug: categorySlug! } });

        if (!category) {
            return c.json({ message: "Category not found" }, 404);
        }

        const plant = await prisma.plant.create({
            data: {
                ...plantData,
                slug: slug ? slugify(slug) : slugify(plantData.name),
                categoryId: category.id
            },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true
                    }
                }
            }
        });

        const formatted = formatPlant(plant);
        return c.json({
            ...formatted,
            plant: formatted
        }, 201);
    } catch (e) {
        console.error("Create plant error:", e);
        if (isUniqueConstraintError(e)) {
            return c.json({ message: "Plant with this name, slug, or scientific name already exists" }, 409);
        }

        return c.json({ message: "Internal server error" }, 500);
    }
})

plantsRouter.get("/:identifier", async (c) => {
    const identifier = c.req.param("identifier");

    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const plant = await prisma.plant.findFirst({
            where: {
                OR: [
                    { id: identifier },
                    { slug: identifier }
                ]
            },

            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true
                    }
                }
            }

        });

        if (!plant) {
            return c.json(
                { message: "Plant not found" },
                404
            );
        }

        const formatted = formatPlant(plant);
        return c.json({
            ...formatted,
            plant: formatted
        });
    } catch {
        c.status(500)
        return c.json(
            {
                message: "Internal server error"
            }
        );
    }
});

plantsRouter.patch("/:id", authMiddleware, async (c) => {
    const forbidden = requireAdmin(c);
    if (forbidden) return forbidden;

    const id = c.req.param("id");
    const body = await c.req.json();
    const parsed = updatePlantInput.safeParse(body);

    if (!parsed.success) {
        return c.json({ message: "Invalid input", errors: parsed.error.flatten() }, 400);
    }

    const { categorySlug, categoryId, slug, ...plantData } = parsed.data;

    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const existingPlant = await prisma.plant.findUnique({ where: { id } });
        if (!existingPlant) {
            return c.json({ message: "Plant not found" }, 404);
        }

        let resolvedCategoryId = categoryId;

        if (categoryId || categorySlug) {
            const category = categoryId
                ? await prisma.category.findUnique({ where: { id: categoryId } })
                : await prisma.category.findUnique({ where: { slug: categorySlug! } });

            if (!category) {
                return c.json({ message: "Category not found" }, 404);
            }
            resolvedCategoryId = category.id;
        }

        const plant = await prisma.plant.update({
            where: { id },
            data: {
                ...plantData,
                ...(slug && { slug: slugify(slug) }),
                ...(resolvedCategoryId && { categoryId: resolvedCategoryId })
            },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true
                    }
                }
            }
        });

        const formatted = formatPlant(plant);
        return c.json({
            ...formatted,
            plant: formatted
        });
    } catch (e) {
        console.error("Update plant error:", e);
        if (isUniqueConstraintError(e)) {
            return c.json({ message: "Plant with this name, slug, or scientific name already exists" }, 409);
        }

        return c.json({ message: "Internal server error" }, 500);
    }
})

plantsRouter.delete("/:id", authMiddleware, async (c) => {
    const forbidden = requireAdmin(c);
    if (forbidden) return forbidden;

    const id = c.req.param("id");

    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const existingPlant = await prisma.plant.findUnique({ where: { id } });
        if (!existingPlant) {
            return c.json({ message: "Plant not found" }, 404);
        }

        await prisma.plant.delete({ where: { id } });

        return c.json({ message: "Plant deleted successfully" });
    } catch (e) {
        console.error("Delete plant error:", e);
        return c.json({ message: "Internal server error" }, 500);
    }
})
