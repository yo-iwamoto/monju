import { aliveQuery } from '@/server/lib/logicalDeletion';
import { prisma } from '@/server/lib/prisma';

export const indexEvents = async () =>
  prisma.event.findMany({
    where: aliveQuery,
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
