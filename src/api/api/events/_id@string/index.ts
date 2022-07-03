import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  delete: {
    resBody: {
      message: 'deleted';
    };
  };
}>;
