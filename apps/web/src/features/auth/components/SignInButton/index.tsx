import { View } from './view';
import { FC, useState } from 'react';
import { useSignIn } from '@/features/auth/hooks/useSignIn';

export const SignInButton: FC = () => {
  const [isShown, setIsShown] = useState(false);

  const signInWithGitHub = useSignIn('github');

  return (
    <View
      {...{
        isShown,
        open: () => setIsShown(true),
        close: () => setIsShown(false),
        signInWithGitHub,
      }}
    />
  );
};
