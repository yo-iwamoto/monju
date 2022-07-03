import { DeleteEventController } from '@/server/controllers/events/DeleteEventController';
import { createRequestResolver } from '@/server/lib/createRequestResolver';

export default createRequestResolver([new DeleteEventController()]);
