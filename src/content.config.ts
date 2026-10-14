import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per project in src/content/projects/.
// Files starting with "_" (like _TEMPLATE.md) are ignored.
const projects = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    track: z.enum(['Tools', 'Apps', 'Explorations', 'Learning']),
    question: z.string(),
    for: z.string(),
    status: z.enum(['Concept', 'Prototype', 'Active', 'Published']),
    version: z.string().default('v0.1'),
    updated: z.string(),
    role: z.string(),
    limitations: z.string(),
    link: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
