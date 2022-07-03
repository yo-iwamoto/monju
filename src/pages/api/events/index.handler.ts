import { CreateEventController } from '@/server/controllers/events/CreateEventController';
import { createRequestResolver } from '@/server/lib/createRequestResolver';
import { IndexEventsController } from '@/server/controllers/events/IndexEventsController';
import { IndexEventService } from '@/server/services/events/IndexEventService';
import { CreateEventService } from '@/server/services/events/CreateEventService';

export default createRequestResolver({
  GET: () => new IndexEventsController(new IndexEventService()),
  POST: () => new CreateEventController(new CreateEventService()),
});
