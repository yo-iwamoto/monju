import { ServiceBase } from '../concerns/ServiceBase';

export class IndexEventService extends ServiceBase {
  execute = () => this.prisma.event.findMany();
}
