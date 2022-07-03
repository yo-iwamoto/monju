import { respond405, respond500 } from '@/server/lib/respondError';
import { ServerError } from '@/server/lib/ServerError';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { ControllerBase } from '@/server/controllers/concerns/ControllerBase';

export const createRequestResolver = (controllers: ControllerBase[]) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    for (const controller of controllers) {
      if (req.method !== controller.method) {
        continue;
      }

      try {
        return await controller.handle(req, res);
      } catch (err) {
        if (err instanceof ServerError) {
          return err.respondError(res);
        } else {
          return respond500(res);
        }
      }
    }

    respond405(res);
  };
};
