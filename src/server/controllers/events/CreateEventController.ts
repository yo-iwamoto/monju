import { ControllerBase } from '../concerns/ControllerBase';
import { getUserId } from '@/server/lib/getUserId';
import { respond400 } from '@/server/lib/respondError';
import { respondSuccess } from '@/server/lib/respondSuccess';
import { z } from 'zod';
import type { ICreateEventService } from '@/server/services/events/CreateEventService';
import type { NextApiHandler } from 'next';

const bodySchema = z.object({
  name: z.string(),
});

export class CreateEventController extends ControllerBase<ICreateEventService> {
  handle: NextApiHandler = async (req, res) => {
    const parseResult = bodySchema.safeParse(req.body);
    if (!parseResult.success) {
      return respond400(res);
    }

    const userId = await getUserId(req);
    const data = { name: parseResult.data.name, userId };

    const event = await this.service.execute(data);

    respondSuccess({
      res,
      status: 201,
      data: {
        event,
      },
    });
  };
}
