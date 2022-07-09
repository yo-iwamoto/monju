import { aspida } from '@/lib/aspida';
import { useCallback } from 'react';

export const useCreateEvent = () => {
  return useCallback((data: { name: string }) => {
    return aspida.api.events.$post({ body: data });
  }, []);
};
