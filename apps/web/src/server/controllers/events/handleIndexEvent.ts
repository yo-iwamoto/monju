import { indexEvents } from '@/server/services/events/indexEvents';
import type { NextApiHandler } from 'next';

export const handleIndexEvents: NextApiHandler = async (_req, res) => {
  const events = await indexEvents();

  res.json({
    events,
  });
};
