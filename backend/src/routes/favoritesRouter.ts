import { Hono } from "hono";
import { getPrisma } from "../db/prisma";
import { authMiddleware } from "../middlewares/authMiddleware";
import { Prisma } from "../generated/prisma/client";
import { getPagination } from "../utils/pagination";

type AppEnv = {
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string;
        role: string;
    }
}

export const favoritesRouter = new Hono<AppEnv>();

const isRecordNotFoundError = (e: unknown) =>
    e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025";

favoritesRouter.get("/", authMiddleware, async (c) => {
    const userId = c.get("userId");
    const { page, limit } = getPagination(c.req.query("page"), c.req.query("limit"));

    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const [favorites, total] = await Promise.all([
            prisma.favorite.findMany({
                where: {
                    userId
                },
                select: {
                    createdAt: true,

                    plant: {
                        select: {
                            id: true,
                            name: true,
                            slug: true,
                            scientificName: true,
                            imageUrl: true,

                            category: {
                                select: {
                                    id: true,
                                    name: true,
                                    slug: true
                                }
                            }
                        }
                    }
                },
                skip: (page - 1) * limit,
                take: limit,
                orderBy: {
                    createdAt: "desc"
                }
            }),
            prisma.favorite.count({
                where: {
                    userId
                }
            })
        ]);

        const totalPages = Math.ceil(total / limit);

        return c.json({
            favorites,
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
        console.error("List favorites error:", e);
        return c.json({ message: "Internal server error" }, 500);
    }
})

favoritesRouter.get("/:plantId", authMiddleware, async (c) => {
    const userId = c.get("userId");
    const plantId = c.req.param("plantId");

    if (!plantId) {
        return c.json({ message: "Plant id is required" }, 400);
    }

    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const favorite = await prisma.favorite.findUnique({
            where: {
                userId_plantId: {
                    userId,
                    plantId
                }
            },
            select: {
                userId: true
            }
        });

        return c.json({
            isFavorite: Boolean(favorite)
        });
    } catch (e) {
        console.error("Get favorite status error:", e);
        return c.json({ message: "Internal server error" }, 500);
    }
})

favoritesRouter.post("/:plantId", authMiddleware, async (c) => {
    const userId = c.get("userId");
    const plantId = c.req.param("plantId");

    if (!plantId) {
        return c.json({ message: "Plant id is required" }, 400);
    }

    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const plant = await prisma.plant.findUnique({
            where: {
                id: plantId
            }
        });

        if (!plant) {
            return c.json({ message: "Plant not found" }, 404);
        }

        const favorite = await prisma.favorite.upsert({
            where: {
                userId_plantId: {
                    userId,
                    plantId
                }
            },
            update: {},
            create: {
                userId,
                plantId
            },
            include: {
                plant: {
                    include: {
                        category: {
                            select: {
                                id: true,
                                name: true,
                                slug: true
                            }
                        }
                    }
                }
            }
        });

        return c.json({ favorite }, 201);
    } catch (e) {
        console.error("Create favorite error:", e);
        return c.json({ message: "Internal server error" }, 500);
    }
})

favoritesRouter.delete("/:plantId", authMiddleware, async (c) => {
    const userId = c.get("userId");
    const plantId = c.req.param("plantId");

    if (!plantId) {
        return c.json({ message: "Plant id is required" }, 400);
    }

    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        await prisma.favorite.delete({
            where: {
                userId_plantId: {
                    userId,
                    plantId
                }
            }
        });

        return c.json({ message: "Favorite removed successfully" });
    } catch (e) {
        console.error("Delete favorite error:", e);
        if (isRecordNotFoundError(e)) {
            return c.json(
                {
                    message: "Favorite not found"
                },
                404
            );
        }

        return c.json({ message: "Internal server error" }, 500);
    }
})
