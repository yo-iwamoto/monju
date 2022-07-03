import { CreateEventController } from '@/server/controllers/events/CreateEventController';
import { createRequestResolver } from '@/server/lib/createRequestResolver';
import { IndexEventsController } from '@/server/controllers/events/IndexEventsController';

export default createRequestResolver([new IndexEventsController(), new CreateEventController()]);
