import { PrismaAdapter } from '@next-auth/prisma-adapter';
import nextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_CLIENT_SECRET } from '@/config/const';
import { prisma } from '@/server/lib/prisma';

const handler = nextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: GITHUB_OAUTH_CLIENT_ID,
      clientSecret: GITHUB_OAUTH_CLIENT_SECRET,
    }),
  ],
});

export default handler;
