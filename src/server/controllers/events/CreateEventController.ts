import { ControllerBase } from '../concerns/ControllerBase';
import { restRequestMethod } from '@/server/lib/RESTRequestMethod';
import { getUserId } from '@/server/lib/getUserId';
import { CreateEventService } from '@/server/services/events/CreateEventService';
import { respond400 } from '@/server/lib/respondError';
import { respondSuccess } from '@/server/lib/respondSuccess';
import { z } from 'zod';
import type { NextApiHandler } from 'next';

const bodySchema = z.object({
  name: z.string(),
});

export class CreateEventController extends ControllerBase {
  public method = restRequestMethod.post;

  handle: NextApiHandler = async (req, res) => {
    const parseResult = bodySchema.safeParse(req.body);
    if (!parseResult.success) {
      return respond400(res);
    }

    const userId = await getUserId(req);
    const data = { name: parseResult.data.name, userId };

    const service = new CreateEventService();
    const event = await service.execute(data);

    respondSuccess({
      res,
      status: 201,
      data: {
        event,
      },
    });
  };
}
