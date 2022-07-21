import { z } from 'zod';

const hasCodeSchema = z.object({
  code: z.string(),
});

export const hasCode = (object: unknown): object is { code: string } => {
  const { success } = hasCodeSchema.safeParse(object);
  return success;
};
