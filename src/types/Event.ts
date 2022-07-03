import { Event as PEvent } from '@prisma/client';
import type { Serialized } from '@/types/serialized';

export type Event = Serialized<PEvent>;
