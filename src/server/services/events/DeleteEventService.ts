import { ServiceBase } from '../concerns/ServiceBase';
import type { Event } from '@prisma/client';

export interface IDeleteEventService {
  execute: (id: string) => Promise<Event>;
}

export class DeleteEventService extends ServiceBase implements IDeleteEventService {
  execute = async (id: string) => this.prisma.event.delete({ where: { id } });
}
