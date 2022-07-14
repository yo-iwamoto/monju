import type { NextApiHandler } from 'next';
import { getQuery } from '@/server/helpers/getQuery';
import { deleteEvent } from '@/server/services/events/deleteEvent';

export const handleDeleteEvent: NextApiHandler = async (req, res) => {
  const id = getQuery(req);

  const event = await deleteEvent({ id });

  res.json({
    event,
  });
};
