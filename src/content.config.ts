import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    status: z.enum(['draft', 'published', 'archived']),
    publishedAt: z.coerce.date(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    language: z.string().min(2),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
