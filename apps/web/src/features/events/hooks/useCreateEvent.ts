import { useLocalLoading } from '@/hooks/useLocalLoading';
import { aspida } from '@/lib/aspida';
import { useCallback } from 'react';

export const useCreateEvent = () => {
  const [isCreating, load, result] = useLocalLoading<ReturnType<typeof aspida.api.events.$post>>();

  const create = useCallback(
    (data: { title: string }) => {
      load(() => aspida.api.events.$post({ body: data }));
    },
    [load]
  );

  return {
    create,
    isCreating,
    result,
  };
};
