import { signIn, signOut, useSession } from 'next-auth/react';

export default function Page() {
  const session = useSession();

  return (
    <>
      <h1>hello</h1>
      <button type='button' onClick={() => signIn('github')}>
        ろぐいん
      </button>
      <button type='button' onClick={() => signOut()}>
        ろぐあうと
      </button>
      {session.status === 'authenticated' && <p>{session.data.user?.name}</p>}
    </>
  );
}
