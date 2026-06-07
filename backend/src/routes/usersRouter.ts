import { Hono } from "hono";
import { getPrisma } from "../db/prisma";
import { authMiddleware } from "../middlewares/authMiddleware";
import { updateProfileInput } from "@adarsh31/common-herbal-app";

type AppEnv = {
    Bindings: {
        JWT_SECRET: string,
        DATABASE_URL: string
    },
    Variables: {
        userId: string;
        role: string;
    }
}

const profileSelect = {
    id: true,
    username: true,
    email: true,
    name: true,
    role: true,
    createdAt: true,
    updatedAt: true
};

export const usersRouter = new Hono<AppEnv>();

usersRouter.get("/profile", authMiddleware, async (c) => {
    const userId = c.get("userId");

    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: profileSelect
        });

        if (!user) {
            return c.json({ message: "User not found" }, 404);
        }

        return c.json({ user });
    } catch (e) {
        console.error("Get profile error:", e);
        return c.json({ message: "Internal server error" }, 500);
    }
})

usersRouter.patch("/profile", authMiddleware, async (c) => {
    const userId = c.get("userId");
    const body = await c.req.json();
    const parsed = updateProfileInput.safeParse(body);

    if (!parsed.success) {
        return c.json({ message: "Invalid input", errors: parsed.error.flatten() }, 400);
    }

    const { email, username, name } = parsed.data;

    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        if (email || username) {
            const existingUser = await prisma.user.findFirst({
                where: {
                    id: {
                        not: userId
                    },
                    OR: [
                        ...(email ? [{ email }] : []),
                        ...(username ? [{ username }] : [])
                    ]
                }
            });

            if (existingUser) {
                return c.json({ message: "Email or username already in use" }, 409);
            }
        }

        const user = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                ...(email && { email }),
                ...(username && { username }),
                ...(name && { name })
            },
            select: profileSelect
        });

        return c.json({ user });
    } catch (e) {
        console.error("Update profile error:", e);
        return c.json({ message: "Internal server error" }, 500);
    }
})
