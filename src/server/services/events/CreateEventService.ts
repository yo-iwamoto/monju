import { ServiceBase } from '../concerns/ServiceBase';

type Args = {
  name: string;
  userId: string;
};

export class CreateEventService extends ServiceBase {
  /**
   * insert into events
   *
   * @return created event data
   */
  execute = async (args: Args) => {
    return await this.prisma.event.create({ data: args });
  };
}
