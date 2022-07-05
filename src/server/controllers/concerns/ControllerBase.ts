import type { IController } from './IController';
import type { NextApiHandler } from 'next';

export abstract class ControllerBase<T> implements IController {
  public abstract handle: NextApiHandler;

  constructor(protected service: T, protected queryId?: string) {}
}
