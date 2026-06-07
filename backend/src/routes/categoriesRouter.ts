import { Hono } from "hono";
import { getPrisma } from "../db/prisma";
import { getPagination } from "../utils/pagination";


const formatPlant = (plant: any) => {
    if (!plant) return null;
    return {
        ...plant,
        image: plant.imageUrl ?? "",
        category: plant.category?.name ?? "",
        categoryDetails: plant.category
    };
};

export const categoriesRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
    }
}>();

categoriesRouter.get("/", async (c) => {
    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const categories = await prisma.category.findMany({
            select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                _count: {
                    select: {
                        plants: true
                    }
                }
            },
            orderBy: {
                name: "asc"
            }
        });

        return c.json({ categories });
    } catch (e) {
        console.error("List categories error:", e);
        return c.json({ message: "Internal server error" }, 500);
    }
})

categoriesRouter.get("/:identifier/plants", async (c) => {
    const identifier = c.req.param("identifier");
    const { page, limit } = getPagination(c.req.query("page"), c.req.query("limit"));
    const search = c.req
        .query("search")
        ?.trim()
        .slice(0, 100);

    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const category = await prisma.category.findFirst({
            where: {
                OR: [
                    { id: identifier },
                    { slug: identifier }
                ]
            },
            select: {
                id: true,
                name: true,
                slug: true,
                description: true
            }
        });

        if (!category) {
            return c.json({ message: "Category not found" }, 404);
        }

        const where = {
            categoryId: category.id,

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
                    name: "asc"
                }
            }),
            prisma.plant.count({
                where
            })
        ]);

        const totalPages = Math.ceil(total / limit);
        const formattedPlants = plants.map(formatPlant);

        return c.json({
            category: {
                id: category.id,
                name: category.name,
                slug: category.slug,
                description: category.description
            },
            plants: formattedPlants,
            pagination: {
                page,
                limit,
                total,
                totalPages,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            }
        });
    } catch (e) {
        console.error("List category plants error:", e);
        return c.json({ message: "Internal server error" }, 500);
    }

})
