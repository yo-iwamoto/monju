import { GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_CLIENT_SECRET } from '@/config/const';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import nextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const handler = nextAuth({
  adapter: PrismaAdapter(new PrismaClient()),
  providers: [
    GitHubProvider({
      clientId: GITHUB_OAUTH_CLIENT_ID,
      clientSecret: GITHUB_OAUTH_CLIENT_SECRET,
    }),
  ],
});

export default handler;
