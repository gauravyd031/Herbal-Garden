import z from "zod";

export const signupInput = z.object({
    username: z.string().min(3).max(20),
    email: z.email(),
    password: z.string().min(6),
    name: z.string().min(2).max(50),
})

export const signinInput = z.object({
    identifier: z.string().min(3),
    password: z.string().min(6)
})


export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;