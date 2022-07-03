import { ServiceBase } from '../concerns/ServiceBase';

export class DeleteEventService extends ServiceBase {
  execute = async (id: string) => this.prisma.event.delete({ where: { id } });
}
