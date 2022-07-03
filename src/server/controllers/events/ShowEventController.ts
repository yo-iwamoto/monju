import { ControllerBase } from '../concerns/ControllerBase';
import { restRequestMethod } from '@/server/lib/RESTRequestMethod';
import { respond404 } from '@/server/lib/respondError';
import { respondSuccess } from '@/server/lib/respondSuccess';
import { getQuery } from '@/server/lib/getQuery';
import { NextApiHandler } from 'next';
import type { IShowEventService } from '@/server/services/events/ShowEventService';

export class ShowEventController extends ControllerBase<IShowEventService> {
  method = restRequestMethod.get;

  handle: NextApiHandler = async (req, res) => {
    const id = getQuery(req, 'id');

    const event = await this.service.execute(id);
    if (event === null) {
      return respond404(res);
    }

    respondSuccess({
      res,
      data: {
        event,
      },
    });
  };
}
