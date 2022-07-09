import { useEvents } from '@/features/events/hooks/useEvents';
import { aspida } from '@/lib/aspida';
import { useCallback } from 'react';

export const useCreateEvent = () => {
  const { events, mutate: mutateEvents } = useEvents();

  return useCallback(
    async (data: { name: string }) => {
      if (events === undefined) {
        return;
      }

      const { event } = await aspida.api.events.$post({ body: data });

      mutateEvents({
        events: [...events, event],
      });

      return event;
    },
    [events, mutateEvents]
  );
};
