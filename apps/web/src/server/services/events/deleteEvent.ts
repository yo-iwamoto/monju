import { prisma } from '@/server/lib/prisma';

export const deleteEvent = async ({ id }: { id: string }) =>
  prisma.event.delete({
    where: {
      id,
    },
  });
