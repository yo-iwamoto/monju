import type { IController } from './IController';
import type { RESTRequestMethod } from '@/server/lib/RESTRequestMethod';
import type { NextApiHandler } from 'next';

export abstract class ControllerBase<T> implements IController {
  public abstract method: RESTRequestMethod;

  public abstract handle: NextApiHandler;

  constructor(protected service: T, protected queryId?: string) {}
}
