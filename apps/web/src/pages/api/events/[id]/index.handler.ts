import { handleDeleteEvent } from '@/server/controllers/events/handleDeleteEvent';
import { handleShowEvent } from '@/server/controllers/events/handleShowEvent';
import { handleUpdateEvent } from '@/server/controllers/events/handleUpdateEvent';
import { createHandler } from '@/server/lib/createHandler';

export default createHandler({
  GET: handleShowEvent,
  PUT: handleUpdateEvent,
  DELETE: handleDeleteEvent,
});
