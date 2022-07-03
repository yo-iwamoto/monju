import { ServiceBase } from '../concerns/ServiceBase';
import type { Event } from '@prisma/client';

export interface IIndexEventService {
  execute: () => Promise<Event[]>;
}

export class IndexEventService extends ServiceBase implements IIndexEventService {
  execute = async () => this.prisma.event.findMany();
}
