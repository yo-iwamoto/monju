import type { NextApiHandler } from 'next';

export interface IController {
  handle: NextApiHandler;
}
