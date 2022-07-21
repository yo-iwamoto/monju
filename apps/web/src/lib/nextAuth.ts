import { hasCode } from './error';
import { GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_CLIENT_SECRET } from '@/config/const';
import { prisma } from '@/server/lib/prisma';
import GitHubProvider from 'next-auth/providers/github';
import type { NextAuthOptions } from 'next-auth';

export const nextAuthOptions: NextAuthOptions = {
  adapter: {
    createUser: (data) => prisma.user.create({ data }),
    getUser: (id) => prisma.user.findUnique({ where: { id } }),
    getUserByAccount: async (provider_providerAccountId) => {
      const account = await prisma.account.findUnique({
        where: { provider_providerAccountId },
        select: { user: true },
      });
      return account?.user ?? null;
    },
    getUserByEmail: (email) => prisma.user.findUnique({ where: { email } }),
    updateUser: ({ id, ...data }) => prisma.user.update({ where: { id }, data }),
    deleteUser: (id) => prisma.user.delete({ where: { id } }),
    linkAccount: (data) => void prisma.account.create({ data }),
    unlinkAccount: (provider_providerAccountId) =>
      void prisma.account.delete({ where: { provider_providerAccountId } }),
    getSessionAndUser: async (sessionToken) => {
      const userAndSession = await prisma.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });
      if (!userAndSession) {
        return null;
      }

      const { user, ...session } = userAndSession;
      return {
        user,
        session,
      };
    },
    createSession: (data) => prisma.session.create({ data }),
    updateSession: (data) => prisma.session.update({ where: { sessionToken: data.sessionToken }, data }),
    deleteSession: (sessionToken) => prisma.session.delete({ where: { sessionToken } }),
    createVerificationToken: (data) => prisma.verificationToken.create({ data }),
    useVerificationToken: (identifier_token) => {
      try {
        return prisma.verificationToken.delete({ where: { identifier_token } });
      } catch (err) {
        if (hasCode(err) && err.code === 'P2025') {
          return null;
        } else {
          throw err;
        }
      }
    },
  },
  providers: [
    GitHubProvider({
      clientId: GITHUB_OAUTH_CLIENT_ID,
      clientSecret: GITHUB_OAUTH_CLIENT_SECRET,
    }),
  ],
};
