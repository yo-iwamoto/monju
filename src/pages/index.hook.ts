import { useEvents } from '@/features/events/useEvents';
import { useCreateEvent } from '@/features/events/useCreateEvent';
import { useDeleteEvent } from '@/features/events/useDeleteEvent';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useSession } from 'next-auth/react';

const formSchema = z.object({
  name: z.string(),
});
type FormSchema = z.infer<typeof formSchema>;

export const useHook = () => {
  const session = useSession();

  const { register, handleSubmit } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });

  const { events, mutate: mutateEvents } = useEvents();

  const deleteEvent = useDeleteEvent();

  const createEvent = useCreateEvent();

  const createAndMutateEvents = useCallback(
    async (data: FormSchema) => {
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

  return {
    session,
    form: {
      register,
    },
    onSubmit,
    events,
    deleteAndMutateEvents,
  };
};
