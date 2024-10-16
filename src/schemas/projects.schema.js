import { z } from 'zod';

export const createTaskSchema = z.object({
    projectId: z
        .string({
            required_error: "Project ID is required",
        }),
    client: z
        .string({
            required_error: "Client is required",
        }),
    object: z
        .string({
            required_error: "Object is required",
        }),
    date: z.string().datetime().optional(),
});
