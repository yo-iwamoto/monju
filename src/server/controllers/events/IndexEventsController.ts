import { ControllerBase } from '../concerns/ControllerBase';
import { restRequestMethod } from '@/server/lib/RESTRequestMethod';
import { respondSuccess } from '@/server/lib/respondSuccess';
import { NextApiHandler } from 'next';
import type { IIndexEventService } from '@/server/services/events/IndexEventService';

export class IndexEventsController extends ControllerBase<IIndexEventService> {
  method = restRequestMethod.get;

  handle: NextApiHandler = async (_req, res) => {
    const events = await this.service.execute();

    respondSuccess({
      res,
      data: {
        events,
      },
    });
  };
}
