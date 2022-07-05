import { handleCreateEvent } from '@/server/controllers/events/handleCreateEvent';
import { handleIndexEvents } from '@/server/controllers/events/handleIndexEvent';
import { createHandler } from '@/server/lib/createHandler';

export default createHandler({
  GET: handleIndexEvents,
  POST: handleCreateEvent,
});
