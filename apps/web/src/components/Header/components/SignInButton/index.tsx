import { View } from './view';
import { useSignIn } from '@/hooks/useSignIn';
import { type FC, useState } from 'react';

export const SignInButton: FC = () => {
  const [isShown, setIsShown] = useState(false);

  const signInWithGitHub = useSignIn('github');

  return (
    <View
      isShown={isShown}
      open={() => setIsShown(true)}
      close={() => setIsShown(false)}
      signInWithGitHub={signInWithGitHub}
    />
  );
};
