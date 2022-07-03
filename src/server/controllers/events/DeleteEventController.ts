import { ControllerBase } from '../concerns/ControllerBase';
import { restRequestMethod } from '@/server/lib/RESTRequestMethod';
import { ServerError } from '@/server/lib/ServerError';
import { DeleteEventService } from '@/server/services/events/DeleteEventService';
import { respondSuccess } from '@/server/lib/respondSuccess';
import { NextApiHandler } from 'next';

export class DeleteEventController extends ControllerBase {
  method = restRequestMethod.delete;

  handle: NextApiHandler = async (req, res) => {
    const { id } = req.query;
    if (typeof id !== 'string') {
      throw ServerError.invalidRequest('URLが正しくありません');
    }

    const service = new DeleteEventService();
    await service.execute(id);

    respondSuccess({
      res,
      data: {
        message: 'deleted',
      },
    });
  };
}
