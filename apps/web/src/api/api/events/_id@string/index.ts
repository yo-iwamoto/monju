import type { Event } from '@/types/Api';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      event: Event;
    };
  };

  delete: {
    resBody: {
      message: 'deleted';
    };
  };
}>;
