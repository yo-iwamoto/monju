import type { FieldAttributes } from '@/types/FieldAttributes';
import type { Event } from '@/types/Resource';
import type { SessionStatus } from '@/types/SessionStatus';
import type { FC, FormEventHandler } from 'react';

type Props = {
  sessionStatus: SessionStatus;
  signInWithGitHub: () => void;
  signOut: () => void;
  events: Event[] | undefined;
  formNameAttributes: FieldAttributes;
  onSubmit: FormEventHandler;
  deleteAndMutateEvents: (id: string) => void;
};

export const View: FC<Props> = ({
  sessionStatus,
  signInWithGitHub,
  signOut,
  events,
  formNameAttributes,
  onSubmit,
  deleteAndMutateEvents,
}) => {
  return (
    <>
      <h1 className='text-2xl font-bold'>e-ticket</h1>
      {sessionStatus === 'authenticated' && (
        <>
          <button type='button' onClick={signOut}>
            Sign out
          </button>
          <form onSubmit={onSubmit} className='flex flex-col'>
            <input type='text' {...formNameAttributes} className='rounded-md border' />
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

      {sessionStatus === 'unauthenticated' && (
        <button type='button' onClick={signInWithGitHub}>
          Sign in
        </button>
      )}
    </>
  );
};
