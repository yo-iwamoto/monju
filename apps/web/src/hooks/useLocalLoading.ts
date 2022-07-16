import { useCallback, useState } from 'react';

export const useLocalLoading = <T>(): [
  boolean,
  (cb: () => T | Promise<T>) => Promise<void>,
  Awaited<T> | undefined
] => {
  const [isLoading, setIsLoading] = useState(false);

  const [result, setResult] = useState<Awaited<T>>();

  const load = useCallback(async (cb: () => T | Promise<T>) => {
    setIsLoading(true);
    setResult(await cb());
    setIsLoading(false);
  }, []);

  return [isLoading, load, result];
};
