import { prisma } from '@/server/lib/prisma';
import { ServerError } from '@/server/lib/ServerError';
import type { Event } from '@prisma/client';

type EditableProperties = Partial<Pick<Event, 'title' | 'description' | 'openAt'>>;

export const updateEvent = async ({ userId, id, data }: { userId: string; id: string; data: EditableProperties }) => {
  const event = await prisma.event.findUnique({
    where: {
      id,
    },
  });
  if (event === null) {
    throw ServerError.notFound();
  }
  if (event.userId !== userId) {
    throw ServerError.unauthorized();
  }

  return prisma.event.update({
    where: {
      id: userId,
    },
    data: {
      title: data.title,
      description: data.description,
      openAt: data.openAt,
    },
  });
};
