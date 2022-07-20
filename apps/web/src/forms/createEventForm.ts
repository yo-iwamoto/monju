import { z } from 'zod';

export const createEventForm = z.object({
  title: z.string(),
});

export type CreateEventForm = z.infer<typeof createEventForm>;
