import type { Event } from '@prisma/client';
import { prisma } from '@/server/lib/prisma';

export const createEvent = async (data: Pick<Event, 'userId' | 'title'>) => prisma.event.create({ data });
