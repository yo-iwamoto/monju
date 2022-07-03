import { swrKeys } from '@/lib/swr/keys';
import { aspida } from '@/lib/aspida';
import useSWR from 'swr';

type ResponseData = Awaited<ReturnType<typeof aspida.api.events.$get>>;

export const useEvents = () => {
  const { data, error, mutate } = useSWR<ResponseData>(swrKeys.events);

  return {
    events: data?.events,
    error,
    mutate,
  };
};
