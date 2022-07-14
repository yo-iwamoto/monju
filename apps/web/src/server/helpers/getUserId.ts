import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '@/server/lib/prisma';
import { ServerError } from '@/server/lib/ServerError';

export const getUserId = async (req: NextApiRequest) => {
  const email = (await getSession({ req }))?.user?.email;
  if (email === null || email === undefined) {
    throw ServerError.unauthorized();
  }

  const userId = (await prisma.user.findFirst({ where: { email } }))?.id;
  if (userId === undefined) {
    throw ServerError.internal();
  }

  return userId;
};
