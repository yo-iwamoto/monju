import { useEvents } from '@/features/events/hooks/useEvents';
import { aspida } from '@/lib/aspida';
import { useCallback } from 'react';

export const useDeleteEvent = () => {
  const { events, mutate: mutateEvents } = useEvents();

  return useCallback(
    async (id: string) => {
      if (events === undefined) {
        return;
      }

      await aspida.api.events._id(id).$delete();

      mutateEvents({
        events: events.filter((e) => e.id !== id),
      });
    },
    [events, mutateEvents]
  );
};
