import { Serialized } from '@/api/$types';
import { DefineMethods } from 'aspida';
import type { Event } from '@prisma/client';

type SerializedEvent = Serialized<Event>;

export type Methods = DefineMethods<{
  get: {
    resBody: {
      events: SerializedEvent[];
    };
  };

  post: {
    reqBody: {
      name: string;
    };
    resBody: {
      event: SerializedEvent;
    };
  };
}>;
