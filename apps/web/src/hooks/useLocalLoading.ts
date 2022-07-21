import { useCallback, useState } from 'react';
import type { Awaitable } from '@/types/utils';

export const useLocalLoading = <T>(): [boolean, (cb: () => T | Promise<T>) => Promise<T>] => {
  const [isLoading, setIsLoading] = useState(false);

  const load = useCallback(async (cb: () => Awaitable<T>) => {
    setIsLoading(true);
    const result = await cb();
    setIsLoading(false);
    return result;
  }, []);

  return [isLoading, load];
};
