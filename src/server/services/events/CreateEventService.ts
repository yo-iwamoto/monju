import { ServiceBase } from '../concerns/ServiceBase';
import type { Event } from '@prisma/client';

type Args = {
  name: string;
  userId: string;
};

export interface ICreateEventService {
  execute: (args: Args) => Promise<Event>;
}

export class CreateEventService extends ServiceBase implements ICreateEventService {
  /**
   * insert into events
   *
   * @return created event data
   */
  execute = async (args: Args) => {
    return await this.prisma.event.create({ data: args });
  };
}
