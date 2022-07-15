import { View } from './view';
import { useSignIn } from '@/features/auth/hooks/useSignIn';
import { FC, useState } from 'react';

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
