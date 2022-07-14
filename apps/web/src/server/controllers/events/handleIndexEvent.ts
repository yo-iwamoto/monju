import type { NextApiHandler } from 'next';
import { indexEvents } from '@/server/services/events/indexEvents';

export const handleIndexEvents: NextApiHandler = async (_req, res) => {
  const events = await indexEvents();

  res.json({
    events,
  });
};
