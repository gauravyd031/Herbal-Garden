import { Hono } from "hono";
import { getPrisma } from "../db/prisma";

export const statsRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
    }
}>();

statsRouter.get("/", async (c) => {
    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const [plants, categories, favorites] = await Promise.all([
            prisma.plant.count(),
            prisma.category.count(),
            prisma.favorite.count()
        ]);

        return c.json({
            plants,
            categories,
            favorites
        });
    } catch (e) {
        console.error("Get stats error:", e);
        return c.json(
            { message: "Internal server error" },
            500
        );
    }
});
