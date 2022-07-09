import useSWR from 'swr';
import { swrKeys } from '@/lib/swr/keys';
import { Methods } from '@/api/api/events';

type ResponseData = Methods['get']['resBody'];

export const useEvents = () => {
  const { data, error, mutate } = useSWR<ResponseData>(swrKeys.events);

  return {
    events: data?.events,
    error,
    mutate,
  };
};
