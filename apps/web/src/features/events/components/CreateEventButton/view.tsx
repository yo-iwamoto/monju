import { Button } from '@/components/Button';
import { Dialog } from '@/components/Dialog';
import { Input } from '@/components/Input';
import type { FieldAttributes } from '@/types/FieldAttributes';
import type { FC, FormEventHandler } from 'react';

type Props = {
  isShown: boolean;
  open: () => void;
  close: () => void;
  onSubmit: FormEventHandler;
  formNameAttributes: FieldAttributes;
};

export const View: FC<Props> = ({ isShown, open, close, onSubmit, formNameAttributes }) => {
  return (
    <>
      <Button onClick={open}>イベントを作成</Button>
      <Dialog title='イベントを作成' close={close} isShown={isShown}>
        <form onSubmit={onSubmit} className='flex flex-col'>
          <div className='mb-2'>
            <Input {...formNameAttributes} />
          </div>

          <div className='flex justify-end'>
            <Button type='submit'>作成</Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};
