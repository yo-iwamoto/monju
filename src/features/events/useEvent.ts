import { swrKeys } from '@/lib/swr/keys';
import useSWR from 'swr';
import type { Methods } from '@/api/api/events/_id@string';

type ResponseData = Methods['get']['resBody'];

export const useEvent = (id: string | undefined) => {
  const { data, error, mutate } = useSWR<ResponseData>(id ? swrKeys.event(id) : null);

  return {
    event: data?.event,
    error,
    mutate,
  };
};
