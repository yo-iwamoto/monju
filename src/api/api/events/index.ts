import { DefineMethods } from 'aspida';
import type { Event } from '@/types/Resource';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      events: Event[];
    };
  };

  post: {
    reqBody: {
      name: string;
    };
    resBody: {
      event: Event;
    };
  };
}>;
