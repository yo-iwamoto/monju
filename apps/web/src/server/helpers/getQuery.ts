import type { NextApiRequest } from 'next';
import { ServerError } from '@/server/lib/ServerError';

/**
 * @throws ServerError
 */
export const getQuery = (req: NextApiRequest, name = 'id') => {
  const queryValue = req.query[name];
  if (typeof queryValue !== 'string') {
    throw ServerError.invalidRequest('invalid-uri');
  }

  return queryValue;
};
