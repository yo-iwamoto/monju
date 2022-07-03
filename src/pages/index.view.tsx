import type { CreateEventForm } from '@/forms/createEventForm';
import type { UseFormRegister } from 'react-hook-form';
import type { Event } from '@/types/event';
import type { FC, FormEventHandler } from 'react';
import type { SessionStatus } from '@/types/SessionStatus';

type Props = {
  sessionStatus: SessionStatus;
  signInWithGitHub: () => void;
  signOut: () => void;
  events: Event[] | undefined;
  register: UseFormRegister<CreateEventForm>;
  onSubmit: FormEventHandler;
  deleteAndMutateEvents: (id: string) => void;
};

export const View: FC<Props> = ({
  sessionStatus,
  signInWithGitHub,
  signOut,
  events,
  register,
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
            <input type='text' {...register('name')} className='rounded-md border' />
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
