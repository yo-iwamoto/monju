import { GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_CLIENT_SECRET } from '@/config/const';
import nextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const handler = nextAuth({
  providers: [
    GitHubProvider({
      clientId: GITHUB_OAUTH_CLIENT_ID,
      clientSecret: GITHUB_OAUTH_CLIENT_SECRET,
    }),
  ],
});

export default handler;
