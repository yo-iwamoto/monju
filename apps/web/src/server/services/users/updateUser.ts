import { prisma } from '@/server/lib/prisma';

export const updateUserName = async ({ id, name }: { id: string; name: string }) =>
  await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
