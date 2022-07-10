import { R2_JWT_SECRET } from '@/config/const';
import jwt from 'jsonwebtoken';
import { v4 as uuidV4 } from 'uuid';

export const getSignedUrl = () => {
  const id = uuidV4();

  const token = jwt.sign(id, R2_JWT_SECRET, {
    expiresIn: 60 * 60,
    algorithm: 'HS256',
  });
};
