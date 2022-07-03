import type { RESTRequestMethod } from '@/server/lib/RESTRequestMethod';
import type { ServiceBase } from '@/server/services/concerns/ServiceBase';
import type { NextApiHandler } from 'next';

export abstract class ControllerBase<T extends ServiceBase> {
  public abstract method: RESTRequestMethod;

  public abstract handle: NextApiHandler;

  protected service: T;

  constructor({ service }: { service: T }) {
    this.service = service;
  }
}
