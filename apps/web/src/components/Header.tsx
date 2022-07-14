import { Link } from './Link';
import { useSession } from 'next-auth/react';
import type { FC } from 'react';
import { SignInButton } from '@/features/auth/components/SignInButton';
import { CreateEventButton } from '@/features/events/components/CreateEventButton';
import { pagesPath } from '@/lib/$path';

export const Header: FC = () => {
  const session = useSession();

  return (
    <header className='flex items-center justify-between p-4'>
      <Link href={pagesPath.$url()}>
        <p className='font-mono text-2xl font-bold'>monju</p>
      </Link>

      {session.status === 'authenticated' && <CreateEventButton />}

      {session.status === 'unauthenticated' && <SignInButton />}
    </header>
  );
};
