import { PrismaClient } from "@prisma/client";
import { plantDetailsMockData } from "./seedMockData";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL
});

const slugify = (value: string) =>
    value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

async function main() {
    console.log("Seeding categories...");
    
    const categoriesData = [
        { name: "Medicinal", slug: "medicinal", description: "Medicinal plants and herbs" },
        { name: "Herbs", slug: "herbs", description: "Culinary and therapeutic herbs" },
        { name: "Roots", slug: "roots", description: "Medicinal roots and rhizomes" }
    ];

    const categoryMap: Record<string, string> = {};

    for (const cat of categoriesData) {
        const category = await prisma.category.upsert({
            where: { slug: cat.slug },
            update: {
                name: cat.name,
                description: cat.description
            },
            create: {
                name: cat.name,
                slug: cat.slug,
                description: cat.description
            }
        });
        categoryMap[cat.name] = category.id;
        console.log(`Saved category: ${category.name} (${category.id})`);
    }

    console.log("Seeding plants...");

    for (const mockPlant of plantDetailsMockData) {
        const categoryId = categoryMap[mockPlant.category];
        if (!categoryId) {
            console.error(`Category not found for plant ${mockPlant.name}: ${mockPlant.category}`);
            continue;
        }

        const plantSlug = mockPlant.slug || slugify(mockPlant.name);

        const plantData = {
            name: mockPlant.name,
            slug: plantSlug,
            scientificName: mockPlant.scientificName || null,
            description: mockPlant.description || "",
            benefits: mockPlant.benefits || [],
            uses: mockPlant.uses || [],
            imageUrl: mockPlant.image || null,
            summary: mockPlant.summary || null,
            tagline: mockPlant.tagline || null,
            hindiName: mockPlant.hindiName || null,
            family: mockPlant.family || null,
            region: mockPlant.region || null,
            caution: mockPlant.caution || null,
            partsUsed: mockPlant.partsUsed || [],
            careTips: mockPlant.careTips || [],
            synonyms: mockPlant.synonyms || [],
            categoryTags: mockPlant.categoryTags || [],
            featured: false,
            images: mockPlant.images || null,
            identification: mockPlant.identification || null,
            modernResearch: mockPlant.modernResearch || null,
            safetyDosage: mockPlant.safetyDosage || null,
            categoryId: categoryId
        };

        const plant = await prisma.plant.upsert({
            where: { slug: plantSlug },
            update: plantData,
            create: plantData
        });

        console.log(`Upserted plant: ${plant.name} (${plant.id})`);
    }

    console.log("Seeding completed successfully!");
}

main()
    .catch((e) => {
        console.error("Seeding failed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
