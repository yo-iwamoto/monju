import type { User } from '@/types/Resource';
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
