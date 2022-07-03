import { ServiceBase } from '../concerns/ServiceBase';
import type { Event } from '@prisma/client';

export interface IndexEventService {
  execute: () => Promise<Event[]>;
}

export class IndexEventService extends ServiceBase {
  execute = async () => this.prisma.event.findMany();
}
