import { handleDeleteEvent } from '@/server/controllers/events/handleDeleteEvent';
import { handleShowEvent } from '@/server/controllers/events/handleShowEvent';
import { createHandler } from '@/server/lib/createHandler';

export default createHandler({
  GET: handleShowEvent,
  DELETE: handleDeleteEvent,
});
