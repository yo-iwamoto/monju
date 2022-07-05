import { prisma } from '@/server/lib/prisma';

export const indexEvents = async () => prisma.event.findMany();
