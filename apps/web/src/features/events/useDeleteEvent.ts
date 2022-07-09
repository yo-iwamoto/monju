import { aspida } from '@/lib/aspida';
import { useCallback } from 'react';

export const useDeleteEvent = () => {
  return useCallback((id: string) => {
    return aspida.api.events._id(id).$delete();
  }, []);
};
