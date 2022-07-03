import { CreateEventController } from '@/server/controllers/events/CreateEventController';
import { createRequestResolver } from '@/server/lib/createRequestResolver';
import { IndexEventsController } from '@/server/controllers/events/IndexEventsController';
import { IndexEventService } from '@/server/services/events/IndexEventService';
import { CreateEventService } from '@/server/services/events/CreateEventService';

// TODO: DI コンテナを抽象化
export default createRequestResolver([
  new IndexEventsController({ service: new IndexEventService() }),
  new CreateEventController({ service: new CreateEventService() }),
]);
