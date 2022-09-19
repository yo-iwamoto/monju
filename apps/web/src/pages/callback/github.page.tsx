import { usePageQuery } from '@/hooks/usePageQuery';
import { aspida } from '@/lib/aspida';
import { useCallback, useEffect } from 'react';

export default function Page() {
  const code = usePageQuery('code');

  const signIn = useCallback(async () => {
    if (!code) return;

    const res = await aspida.auth.github.code.$post({ query: { code } });
    alert(res.token);
  }, [code]);

  useEffect(() => {
    signIn();
  }, [signIn]);

  return null;
}
