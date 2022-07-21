import { Menu } from './components/Menu';
import { pagesPath } from '@/lib/$path';
import { Link } from '@/components/Link';
import { CreateEventButton } from '@/components/Header/components/CreateEventButton';
import { SignInButton } from '@/components/Header/components/SignInButton';
import type { FC } from 'react';
import type { SessionStatus } from '@/types/SessionStatus';

type Props = {
  sessionStatus: SessionStatus;
  userImage: string;
  showMenu: boolean;
  onClickIcon: () => void;
  onClickMenuBackground: () => void;
};

export const View: FC<Props> = ({ sessionStatus, userImage, showMenu, onClickIcon, onClickMenuBackground }) => {
  return (
    <>
      <header className='relative flex items-center justify-between p-4 shadow-md'>
        <Link href={pagesPath.$url()}>
          <p className='font-mono text-2xl font-bold'>monju</p>
        </Link>

        {sessionStatus === 'authenticated' && (
          <>
            <div className='flex items-center gap-4'>
              <CreateEventButton />
              <button aria-label='メニューを開く' type='button' onClick={onClickIcon}>
                <img
                  src={userImage}
                  alt='メニュー'
                  height='40'
                  width='40'
                  className='rounded-full transition-opacity duration-75 hover:opacity-80'
                />
              </button>
            </div>
            {showMenu && (
              <div className='absolute right-4 top-14 z-10'>
                <Menu />
              </div>
            )}
          </>
        )}

        {sessionStatus === 'unauthenticated' && <SignInButton />}
      </header>
      {showMenu && (
        <div className='fixed h-screen w-screen origin-bottom scale-y-110' onClick={onClickMenuBackground} />
      )}
    </>
  );
};
