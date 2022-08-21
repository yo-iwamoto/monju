import { Button } from '@/components/Button';
import { Dialog } from '@/components/Dialog';
import { API_URL } from '@/config/const';
import { aspida } from '@/lib/aspida';
import type { FC } from 'react';

type Props = {
  isShown: boolean;
  open: () => void;
  close: () => void;
};

export const View: FC<Props> = ({ isShown, open, close }) => {
  return (
    <>
      <Button onClick={open}>ログイン</Button>
      <Dialog title='ログイン' close={close} isShown={isShown}>
        <div className='text-center'>
          <a href={aspida.auth.github.$path()}>GitHub でログイン</a>
        </div>
      </Dialog>
    </>
  );
};
