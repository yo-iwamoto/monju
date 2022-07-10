import { R2_JWT_SECRET } from '@/config/const';
import { NextApiHandler } from 'next';
import jwt from 'jsonwebtoken';

const handler: NextApiHandler = (_req, res) => {
  const signature = res.send(verified);
};

export default handler;
