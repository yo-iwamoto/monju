import { prisma } from '@/server/lib/prisma';

// TODO: 物理削除オプション
export const deleteEvent = async ({ id }: { id: string }) => {
  const now = new Date();
  return prisma.event.update({
    where: {
      id,
    },
    data: {
      deletedAt: now,
    },
  });
};
