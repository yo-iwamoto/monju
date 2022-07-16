import { aliveQuery } from '@/server/lib/logicalDeletion';
import { prisma } from '@/server/lib/prisma';

export const showEvent = async ({ id }: { id: string }) =>
  prisma.event.findFirst({
    where: {
      AND: [
        aliveQuery,
        {
          id,
        },
      ],
    },
  });
