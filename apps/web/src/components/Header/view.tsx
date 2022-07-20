import { pagesPath } from '@/lib/$path';
import { Link } from '@/components/Link';
import { CreateEventButton } from '@/components/Header/components/CreateEventButton';
import { SignInButton } from '@/components/Header/components/SignInButton';
import type { FC } from 'react';
import type { SessionStatus } from '@/types/SessionStatus';

type Props = {
  sessionStatus: SessionStatus;
  userImage: string;
};

export const View: FC<Props> = ({ sessionStatus, userImage }) => {
  return (
    <header className='flex items-center justify-between p-4'>
      <Link href={pagesPath.$url()}>
        <p className='font-mono text-2xl font-bold'>monju</p>
      </Link>

      {sessionStatus === 'authenticated' && (
        <div className='flex items-center gap-4'>
          <CreateEventButton />
          <button type='button'>
            <img
              src={userImage}
              alt='メニュー'
              height='40'
              width='40'
              className='rounded-full transition-opacity duration-75 hover:opacity-80'
            />
          </button>
        </div>
      )}

      {sessionStatus === 'unauthenticated' && <SignInButton />}
    </header>
  );
};
