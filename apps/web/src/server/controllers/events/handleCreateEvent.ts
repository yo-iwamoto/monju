import { respond400 } from '@/server/helpers/respondError';
import { getUserId } from '@/server/helpers/getUserId';
import { createEvent } from '@/server/services/events/createEvent';
import { z } from 'zod';
import type { NextApiHandler } from 'next';

const bodySchema = z.object({
  title: z.string(),
});

export const handleCreateEvent: NextApiHandler = async (req, res) => {
  const parseResult = bodySchema.safeParse(req.body);
  if (!parseResult.success) {
    return respond400(res);
  }

  const userId = await getUserId.apiRoutes(req, res);
  const { title } = parseResult.data;

  const event = await createEvent({
    userId,
    title,
  });

  res.status(201).json({
    event,
  });
};
