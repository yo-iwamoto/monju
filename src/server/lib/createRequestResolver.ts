import { RESTRequestMethod } from './RESTRequestMethod';
import { respond400, respond405, respond500 } from '@/server/lib/respondError';
import { ServerError } from '@/server/lib/ServerError';
import type { IController } from '@/server/controllers/concerns/IController';
import type { NextApiRequest, NextApiResponse } from 'next';

type GetControllerInstance = () => IController;

type Args = Partial<{
  [method in RESTRequestMethod]: GetControllerInstance;
}>;

export const createRequestResolver = (args: Args) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const reqMethod = req.method;
    if (reqMethod === undefined) {
      return respond400(res);
    }

    const getControllerInstance = args[reqMethod as RESTRequestMethod];
    if (getControllerInstance === undefined) {
      return respond405(res);
    }

    const controller = getControllerInstance();

    try {
      return await controller.handle(req, res);
    } catch (err) {
      if (err instanceof ServerError) {
        return err.respondError(res);
      } else {
        return respond500(res);
      }
    }
  };
};
