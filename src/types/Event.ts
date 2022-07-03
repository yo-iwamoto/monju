import { Event as PEvent } from '@prisma/client';
import type { Serialized } from '@/types/Serialized';

export type Event = Serialized<PEvent>;
