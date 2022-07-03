import type { RESTRequestMethod } from '@/server/lib/RESTRequestMethod';
import type { NextApiHandler } from 'next';

export interface IController {
  method: RESTRequestMethod;
  handle: NextApiHandler;
}
