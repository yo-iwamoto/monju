import { useHook } from './index.hook';
import { signIn, signOut } from 'next-auth/react';

export default function Page() {
  const { session, form, onSubmit, events, deleteAndMutateEvents } = useHook();

  return (
    <>
      <h1 className='text-2xl font-bold'>e-ticket</h1>
      {session.status === 'unauthenticated' && (
        <button type='button' onClick={() => signIn('github')}>
          Sign in
        </button>
      )}
      {session.status === 'authenticated' && (
        <>
          <p>{session.data.user?.name}</p>
          <button type='button' onClick={() => signOut()}>
            Sign out
          </button>
          <form onSubmit={onSubmit} className='flex flex-col'>
            <input type='text' {...form.register('name')} className='rounded-md border' />
            <button type='submit'>submit</button>
          </form>
          {events &&
            events.map((event) => (
              <p onClick={() => deleteAndMutateEvents(event.id)} key={event.id}>
                {event.name}
              </p>
            ))}
        </>
      )}
    </>
  );
}
