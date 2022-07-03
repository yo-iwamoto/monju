import { DeleteEventController } from '@/server/controllers/events/DeleteEventController';
import { ShowEventController } from '@/server/controllers/events/ShowEventController';
import { createRequestResolver } from '@/server/lib/createRequestResolver';
import { DeleteEventService } from '@/server/services/events/DeleteEventService';
import { ShowEventService } from '@/server/services/events/ShowEventService';

export default createRequestResolver({
  GET: () => new ShowEventController(new ShowEventService()),
  DELETE: () => new DeleteEventController(new DeleteEventService()),
});
