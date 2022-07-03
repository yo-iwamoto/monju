import { ServiceBase } from '../concerns/ServiceBase';
import type { Event } from '@prisma/client';

export interface DeleteEventService {
  execute: (id: string) => Promise<Event>;
}

export class DeleteEventService extends ServiceBase implements DeleteEventService {
  execute = async (id: string) => this.prisma.event.delete({ where: { id } });
}
