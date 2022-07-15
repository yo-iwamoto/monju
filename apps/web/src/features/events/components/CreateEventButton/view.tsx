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
  isCreating: boolean;
};

export const View: FC<Props> = ({ isShown, open, close, onSubmit, formNameAttributes, isCreating }) => {
  return (
    <>
      <Button onClick={open}>イベントを作成</Button>
      <Dialog title='イベントを作成' close={close} isShown={isShown}>
        <form onSubmit={onSubmit} className='flex flex-col'>
          <label className='mb-2'>
            <p className='text-sm'>タイトル</p>

            <Input {...formNameAttributes} placeholder='ML Ops の最先端を学ぼう' />
          </label>

          <div className='flex justify-end'>
            <Button type='submit' isLoading={isCreating}>
              作成
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};
