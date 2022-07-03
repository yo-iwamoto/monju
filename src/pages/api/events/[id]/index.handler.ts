import { DeleteEventController } from '@/server/controllers/events/DeleteEventController';
import { createRequestResolver } from '@/server/lib/createRequestResolver';
import { DeleteEventService } from '@/server/services/events/DeleteEventService';

// TODO: DI コンテナを抽象化
export default createRequestResolver([new DeleteEventController({ service: new DeleteEventService() })]);
