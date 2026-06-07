import { verify } from "hono/jwt";
import { Context, Next } from "hono";

export const authMiddleware = async (c: Context, next: Next) => {
    const authHeader = c.req.header('authorization')

    if (!authHeader?.startsWith("Bearer ")) {
        return c.json(
            { message: "Unauthorized" },
            401
        );
    }

    try {
        const token = authHeader.split(" ")[1];
        const user = await verify(token, c.env.JWT_SECRET, "HS256") as {id : string; role: string}

        c.set("userId", user.id)
        c.set("role", user.role)

        await next()
    } catch {
        c.status(401)
        return c.json({
            message: "Unauthorized"
        })
    }
}