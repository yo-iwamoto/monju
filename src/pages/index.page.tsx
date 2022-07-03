import { View } from './index.view';
import { useCreateEvent } from '@/features/events/useCreateEvent';
import { useDeleteEvent } from '@/features/events/useDeleteEvent';
import { useEvents } from '@/features/events/useEvents';
import { createEventForm } from '@/forms/createEventForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import type { CreateEventForm } from '@/forms/createEventForm';

export default function Page() {
  const { status: sessionStatus } = useSession();

  const signInWithGitHub = useCallback(() => signIn('github'), []);

  const { register, handleSubmit } = useForm<CreateEventForm>({ resolver: zodResolver(createEventForm) });

  const { events, mutate: mutateEvents } = useEvents();

  const deleteEvent = useDeleteEvent();

  const createEvent = useCreateEvent();

  const createAndMutateEvents = useCallback(
    async (data: CreateEventForm) => {
      const res = await createEvent(data);

      if (events !== undefined) {
        mutateEvents({ events: [...events, res.event] });
      }
    },
    [createEvent, events, mutateEvents]
  );

  const onSubmit = handleSubmit(createAndMutateEvents);

  const deleteAndMutateEvents = useCallback(
    async (id: string) => {
      await deleteEvent(id);

      if (events !== undefined) {
        mutateEvents({ events: events.filter((e) => e.id !== id) });
      }
    },
    [deleteEvent, events, mutateEvents]
  );

  return (
    <View
      {...{
        sessionStatus,
        signInWithGitHub,
        signOut,
        events,
        register,
        onSubmit,
        deleteAndMutateEvents,
      }}
    />
  );
}
