import { ControllerBase } from '../concerns/ControllerBase';
import { restRequestMethod } from '@/server/lib/RESTRequestMethod';
import { IndexEventService } from '@/server/services/events/IndexEventService';
import { respondSuccess } from '@/server/lib/respondSuccess';
import { NextApiHandler } from 'next';

export class IndexEventsController extends ControllerBase {
  method = restRequestMethod.get;

  handle: NextApiHandler = async (_req, res) => {
    const service = new IndexEventService();
    const events = await service.execute();

    respondSuccess({
      res,
      data: {
        events,
      },
    });
  };
}
