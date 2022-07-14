import { useCallback } from 'react';
import { aspida } from '@/lib/aspida';

export const useUpdateUserName = () => {
  return useCallback(({ id, name }: { id: string; name: string }) => {
    return aspida.api.users._id(id).$patch({ body: { name } });
  }, []);
};
