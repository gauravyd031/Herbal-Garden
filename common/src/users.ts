import z from "zod";

export const updateProfileInput = z.object({
    username: z.string().min(3).max(20).optional(),
    email: z.email().optional(),
    name: z.string().min(2).max(50).optional()
}).refine((data) => Object.keys(data).length > 0, {
    message: "At least one field is required"
});

export type UpdateProfileInput = z.infer<typeof updateProfileInput>;
