import { respond400 } from '@/server/helpers/respondError';
import { getUserId } from '@/server/helpers/getUserId';
import { updateEvent } from '@/server/services/events/updateEvent';
import { getQuery } from '@/server/helpers/getQuery';
import { z } from 'zod';
import type { NextApiHandler } from 'next';

const bodySchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  openAt: z.date().optional(),
});

export const handleUpdateEvent: NextApiHandler = async (req, res) => {
  const id = getQuery(req);

  const parseResult = bodySchema.safeParse(req.body);
  if (!parseResult.success) {
    return respond400(res);
  }

  const userId = await getUserId(req);

  const event = await updateEvent({
    userId,
    id,
    data: parseResult.data,
  });

  res.status(200).json({
    event,
  });
};
