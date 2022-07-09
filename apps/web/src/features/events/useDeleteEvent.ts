import { useCallback } from 'react';
import { aspida } from '@/lib/aspida';

export const useDeleteEvent = () => {
  return useCallback((id: string) => {
    return aspida.api.events._id(id).$delete();
  }, []);
};
