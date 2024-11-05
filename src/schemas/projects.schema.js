import { z } from 'zod';

export const createProjectSchema = z.object({
    projectId: z
        .string({
            required_error: "Project ID is required",
        }),
    script: z
        .string({
            required_error: "Number of scrpts is required",
        }),
    description: z
        .string({
            required_error: "Description is required",
        }),
    date: z.string().datetime().optional(),
});
