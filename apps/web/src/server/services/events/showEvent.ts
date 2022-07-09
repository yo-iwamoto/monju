import { prisma } from '@/server/lib/prisma';

export const showEvent = async ({ id }: { id: string }) =>
  prisma.event.findFirst({
    where: {
      id,
    },
  });
