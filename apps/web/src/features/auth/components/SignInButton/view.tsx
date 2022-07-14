import type { FC } from 'react';
import { Button } from '@/components/Button';
import { Dialog } from '@/components/Dialog';

type Props = {
  isShown: boolean;
  open: () => void;
  close: () => void;
  signInWithGitHub: () => void;
};

export const View: FC<Props> = ({ isShown, open, close, signInWithGitHub }) => {
  return (
    <>
      <Button onClick={open}>ログイン</Button>
      <Dialog title='ログイン' close={close} isShown={isShown}>
        <div className='text-center'>
          <Button onClick={signInWithGitHub}>GitHub でログイン</Button>
        </div>
      </Dialog>
    </>
  );
};
