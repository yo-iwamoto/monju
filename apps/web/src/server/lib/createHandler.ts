import { RESTRequestMethod } from '@/server/lib/RESTRequestMethod';
import { respond400, respond405, respond500 } from '@/server/helpers/respondError';
import { ServerError } from '@/server/lib/ServerError';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

type methodToHandler = Partial<{
  [method in RESTRequestMethod]: NextApiHandler;
}>;

export const createHandler = (methodToHandler: methodToHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const reqMethod = req.method;
    if (reqMethod === undefined) {
      return respond400(res);
    }

    const handle = methodToHandler[reqMethod as RESTRequestMethod];
    if (handle === undefined) {
      return respond405(res);
    }

    try {
      return await handle(req, res);
    } catch (err) {
      console.error(err);
      if (err instanceof ServerError) {
        return err.respondError(res);
      } else {
        return respond500(res);
      }
    }
  };
};
