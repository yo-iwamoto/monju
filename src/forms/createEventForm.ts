import { z } from 'zod';

export const createEventForm = z
  .object({
    name: z.string(),
  })
  .strict();

export type CreateEventForm = z.infer<typeof createEventForm>;
