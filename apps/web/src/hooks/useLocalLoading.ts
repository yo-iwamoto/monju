import { useCallback, useState } from 'react';

export const useLocalLoading = <T>(): [boolean, (cb: () => T | Promise<T>) => Promise<T>] => {
  const [isLoading, setIsLoading] = useState(false);

  const load = useCallback(async (cb: () => T | Promise<T>) => {
    setIsLoading(true);
    const result = await cb();
    setIsLoading(false);
    return result;
  }, []);

  return [isLoading, load];
};
