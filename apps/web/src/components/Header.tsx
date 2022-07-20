import { Link } from './Link';
import { SignInButton } from '@/components/SignInButton';
import { CreateEventButton } from '@/components/CreateEventButton';
import { pagesPath } from '@/lib/$path';
import { useUserImage } from '@/hooks/useUserImage';
import { images } from '@/lib/images';
import { useSession } from 'next-auth/react';
import { FC, useMemo } from 'react';

export const Header: FC = () => {
  const session = useSession();
  const userImage = useUserImage();
  const userImageOrDefault = useMemo(() => userImage ?? images.no_img_png, [userImage]);

  return (
    <header className='flex items-center justify-between p-4'>
      <Link href={pagesPath.$url()}>
        <p className='font-mono text-2xl font-bold'>monju</p>
      </Link>

      {session.status === 'authenticated' && (
        <div className='flex items-center gap-4'>
          <CreateEventButton />
          <button type='button'>
            <img
              src={userImageOrDefault}
              alt='メニュー'
              height='40'
              width='40'
              className='rounded-full transition-opacity duration-75 hover:opacity-80'
            />
          </button>
        </div>
      )}

      {session.status === 'unauthenticated' && <SignInButton />}
    </header>
  );
};
