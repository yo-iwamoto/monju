import { signIn } from 'next-auth/react';
import { useCallback } from 'react';

type AuthProvider = 'github';

export const useSignIn = (provider: AuthProvider) => {
  return useCallback(async () => signIn(provider), [provider]);
};
