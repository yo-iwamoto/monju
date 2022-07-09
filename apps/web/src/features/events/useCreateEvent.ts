import { useCallback } from 'react';
import { aspida } from '@/lib/aspida';

export const useCreateEvent = () => {
  return useCallback((data: { name: string }) => {
    return aspida.api.events.$post({ body: data });
  }, []);
};
