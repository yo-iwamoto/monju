import { z } from 'zod';

export const createEventForm = z
  .object({
    title: z.string(),
  })
  .strict();

export type CreateEventForm = z.infer<typeof createEventForm>;
