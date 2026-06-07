import { Hono } from "hono";
import { getPrisma } from "../db/prisma";
import { sign } from "hono/jwt";
import bcrypt from "bcryptjs";
import { signinInput, signupInput } from "@adarsh31/common-herbal-app";
import { authMiddleware } from "../middlewares/authMiddleware";

export const authRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        "userId": string;
        "role": string;
    }
}>();

authRouter.post("/signup", async (c) => {
    const body = await c.req.json();
    const parsed = signupInput.safeParse(body);

    if (!parsed.success) {
        return c.json({ message: "Invalid input", errors: parsed.error.flatten() }, 400);
    }

    const { email, username, password, name } = parsed.data;

    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email },
                    { username }
                ]
            }
        });

        if (existingUser) {
            return c.json({ message: "User already exists" }, 409);
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                username,
                passwordHash: hashedPassword,
                name,
            }
        })

        const jwt = await sign({id: user.id, role: user.role}, c.env.JWT_SECRET)

        return c.json({
            token: jwt,
            user: {
                id: user.id,
                username: user.username,
                name: user.name,
                role: user.role
            }
        }, 
        201
        )
    } catch (e) {
        console.error("Signup Error:", e)
        return c.text("Internal server error", 500);
    }
})

authRouter.post("/signin", async (c) => {
    const body = await c.req.json();
    const parsed = signinInput.safeParse(body);

    if (!parsed.success) {
        return c.json({ message: "Invalid input", errors: parsed.error.flatten() }, 400);
    }

    const { identifier, password } = parsed.data;

    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: identifier },
                    { username: identifier }
                ]
            }
        });

        if (!user) {
            return c.json({ message: "Invalid credentials" }, 401);
        }

        const validPassword = await bcrypt.compare(password, user.passwordHash);
        if (!validPassword) {
            return c.json({ message: "Invalid credentials" }, 401);
        }

        const jwt = await sign({ id: user.id, role: user.role }, c.env.JWT_SECRET);

        return c.json({
            token: jwt,
            user: {
                id: user.id,
                username: user.username,
                name: user.name,
                role: user.role,
                
            }
        });
    } catch (e) {
        console.error("Signin Error:", e);
        return c.text("Internal server error", 500);
    }   
})

authRouter.get("/me",authMiddleware, async (c) => {
    const userId = c.get("userId")
    const prisma = getPrisma(c.env.DATABASE_URL);
    
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }, 
        select: {
            id: true,
            username: true,
            email: true,
            name: true,
            role: true,
            createdAt: true
        }
    });

    if (!user) {
        return c.json(
            { message: "User not found" },
            404
        );
    }

    return c.json(user);
})

authRouter.post("/logout",authMiddleware, async (c) => {
    return c.json({
        message: "Logged out successfully"
    });
})