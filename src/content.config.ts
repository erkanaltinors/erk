import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
// 1. Import utilities from `astro:content`
import { z } from "astro/zod";
// 2. Define your collection(s)
const blogCollection = defineCollection({
	loader: glob({
		base: "./src/content/blog",
		pattern: "**/*.{md,mdx}",
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

const blogEnCollection = defineCollection({
	loader: glob({
		base: "./src/content/blog_en",
		pattern: "**/*.{md,mdx}",
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	blog: blogCollection,
	blog_en: blogEnCollection,
};
