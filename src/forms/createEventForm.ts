import { z } from 'zod';

export const createEventForm = z.object({
  name: z.string(),
});

export type CreateEventForm = z.infer<typeof createEventForm>;
