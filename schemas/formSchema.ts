import { z } from 'zod';

export const formSchema = z.object({
    country: z
        .object({
            value: z.string(),
            label: z.string(),
        })
        .nullable()
        .refine((value) => value !== null, {
            message: 'Please select a country',
        }),
});

export type FormValues = z.infer<typeof formSchema>;