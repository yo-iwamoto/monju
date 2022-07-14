import type { NextApiHandler } from 'next';
import { getQuery } from '@/server/helpers/getQuery';
import { showEvent } from '@/server/services/events/showEvent';

export const handleShowEvent: NextApiHandler = async (req, res) => {
  const id = getQuery(req);

  const event = await showEvent({ id });

  res.json({
    event,
  });
};
