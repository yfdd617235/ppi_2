import { z } from 'zod';


export const createProjectSchema = z.object({
    projectId: z
        .string({
            required_error: "Project ID is required",
        }),
    customerEmail: z
        .string({
            required_error: "Customer Email is required",
        }),
    script: z
        .string({
            required_error: "Number of scripts is required",
        }),
    description: z
        .string({
            required_error: "Description is required",
        }),
    date: z.string().datetime().optional(),
});
