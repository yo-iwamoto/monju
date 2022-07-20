import { nextAuthOptions } from '@/lib/nextAuth';
import { prisma } from '@/server/lib/prisma';
import { ServerError } from '@/server/lib/ServerError';
import { Session, unstable_getServerSession } from 'next-auth';
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';

const getUserIdFromSession = async (session: Session | null) => {
  const email = session?.user?.email;
  if (email === null || email === undefined) {
    throw ServerError.unauthorized();
  }

  const userId = (await prisma.user.findFirst({ where: { email } }))?.id;
  if (userId === undefined) {
    throw ServerError.internal();
  }

  return userId;
};

export const getUserId = {
  apiRoutes: async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await unstable_getServerSession(req, res, nextAuthOptions);
    return getUserIdFromSession(session);
  },
  gssp: async ({ req, res }: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(req, res, nextAuthOptions);
    return getUserIdFromSession(session);
  },
};
