import { prisma } from '@/server/lib/prisma';
import type { Event } from '@prisma/client';

export const createEvent = async (data: Pick<Event, 'userId' | 'name'>) => prisma.event.create({ data });
