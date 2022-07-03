import { ControllerBase } from '../concerns/ControllerBase';
import { restRequestMethod } from '@/server/lib/RESTRequestMethod';
import { ServerError } from '@/server/lib/ServerError';
import { respondSuccess } from '@/server/lib/respondSuccess';
import { NextApiHandler } from 'next';
import type { DeleteEventService } from '@/server/services/events/DeleteEventService';

export class DeleteEventController extends ControllerBase<DeleteEventService> {
  method = restRequestMethod.delete;

  handle: NextApiHandler = async (req, res) => {
    const { id } = req.query;
    if (typeof id !== 'string') {
      throw ServerError.invalidRequest('URLが正しくありません');
    }

    await this.service.execute(id);

    respondSuccess({
      res,
      data: {
        message: 'deleted',
      },
    });
  };
}
