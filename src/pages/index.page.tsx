import { View } from './index.view';
import { useCreateEvent } from '@/features/events/useCreateEvent';
import { useDeleteEvent } from '@/features/events/useDeleteEvent';
import { useEvents } from '@/features/events/useEvents';
import { createEventForm } from '@/forms/createEventForm';
import { useFormWithSchema } from '@/hooks/useFormWithSchema';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useCallback, useMemo } from 'react';
import type { CreateEventForm } from '@/forms/createEventForm';

export default function Page() {
  const { status: sessionStatus } = useSession();

  const signInWithGitHub = useCallback(() => signIn('github'), []);

  const { register, handleSubmit } = useFormWithSchema<CreateEventForm>(createEventForm);

  const formNameAttributes = useMemo(() => register('name'), [register]);

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
        onSubmit,
        formNameAttributes,
        deleteAndMutateEvents,
      }}
    />
  );
}
