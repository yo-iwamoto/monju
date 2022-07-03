import { ServiceBase } from '../concerns/ServiceBase';
import { Event } from '@prisma/client';

export interface IShowEventService {
  execute: (id: string) => Promise<Event | null>;
}

export class ShowEventService extends ServiceBase implements IShowEventService {
  execute = async (id: string) => this.prisma.event.findFirst({ where: { id } });
}
