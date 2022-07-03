import { RESTRequestMethod } from '@/server/lib/RESTRequestMethod';
import type { NextApiHandler } from 'next';

export abstract class ControllerBase {
  public abstract method: RESTRequestMethod;

  public abstract handle: NextApiHandler;

  constructor() {
    console.log();
  }
}
