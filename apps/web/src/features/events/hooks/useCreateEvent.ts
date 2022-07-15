import { useEvents } from '@/features/events/hooks/useEvents';
import { aspida } from '@/lib/aspida';
import { useCallback, useState } from 'react';

export const useCreateEvent = () => {
  const { events, mutate: mutateEvents } = useEvents();

  const [isCreating, setIsCreating] = useState(false);

  const create = useCallback(
    async (data: { title: string }) => {
      setIsCreating(true);
      if (events === undefined) {
        return;
      }

      const { event } = await aspida.api.events.$post({ body: data });

      mutateEvents({
        events: [...events, event],
      });

      setIsCreating(false);
      return event;
    },
    [events, mutateEvents]
  );

  return {
    create,
    isCreating,
  };
};
