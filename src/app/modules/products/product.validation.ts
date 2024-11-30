import { z } from 'zod';

export const StationeryProductZodSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).trim(),
  brand: z.string().min(1, { message: 'Brand is required' }).trim(),
  price: z.number().min(0, { message: 'Price must be a non-negative number' }),
  category: z.enum([
    'Writing',
    'Office Supplies',
    'Art Supplies',
    'Education',
    'Technology',
  ]),
  description: z.string().min(1, { message: 'Description is required' }).trim(),
  quantity: z
    .number()
    .min(0, { message: 'Quantity must be a non-negative number' }),
  inStock: z.boolean(),
});
