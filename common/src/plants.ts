import z from "zod";

const plantBaseInput = z.object({
    name: z.string().min(2).max(100),
    slug: z.string().min(2).max(120).optional(),
    scientificName: z.string().min(2).max(150).optional().nullable(),
    description: z.string().min(10),
    benefits: z.array(z.string().min(1)).default([]),
    uses: z.array(z.string().min(1)).default([]),
    imageUrl: z.string().url().optional().nullable(),
    sunlight: z.string().max(100).optional().nullable(),
    watering: z.string().max(100).optional().nullable(),
    soilType: z.string().max(100).optional().nullable(),
    categoryId: z.string().optional(),
    categorySlug: z.string().optional(),
    summary: z.string().optional().nullable(),
    tagline: z.string().optional().nullable(),
    hindiName: z.string().optional().nullable(),
    family: z.string().optional().nullable(),
    region: z.string().optional().nullable(),
    caution: z.string().optional().nullable(),
    partsUsed: z.array(z.string()).default([]),
    careTips: z.array(z.string()).default([]),
    synonyms: z.array(z.string()).default([]),
    categoryTags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    difficulty: z.string().optional().nullable(),
    growthRate: z.string().optional().nullable(),
    season: z.string().optional().nullable(),
    images: z.any().optional().nullable(),
    identification: z.any().optional().nullable(),
    modernResearch: z.any().optional().nullable(),
    safetyDosage: z.any().optional().nullable()
});

export const plantInput = plantBaseInput.refine((data) => data.categoryId || data.categorySlug, {
    message: "categoryId or categorySlug is required",
    path: ["categoryId"]
});

export const updatePlantInput = plantBaseInput.partial().refine(
    (data) => Object.keys(data).length > 0,
    {
        message: "At least one field is required"
    }
);

export type PlantInput = z.infer<typeof plantInput>;
export type UpdatePlantInput = z.infer<typeof updatePlantInput>;
