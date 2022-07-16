import { DefineMethods } from 'aspida';
import type { Event } from '@/types/Api';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      events: Event[];
    };
  };

  post: {
    reqBody: {
      title: string;
    };
    resBody: {
      event: Event;
    };
  };
}>;
