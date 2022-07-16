import type { User } from '@/types/Api';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  patch: {
    reqBody: {
      name: string;
    };

    resBody: {
      user: User;
    };
  };
}>;
