import { DefineMethods } from 'aspida';
import type { Event, User } from '@/types/Api';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      events: (Event & {
        user: Pick<User, 'name' | 'image'>;
      })[];
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
