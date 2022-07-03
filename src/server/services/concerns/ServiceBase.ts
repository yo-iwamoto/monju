import { getPrisma } from '@/server/lib/prisma';

export abstract class ServiceBase {
  protected prisma = getPrisma();
}
