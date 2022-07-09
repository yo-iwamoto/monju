import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const usePageQuery = (name: string) => {
  const router = useRouter();

  const [query, setQuery] = useState<string>();

  useEffect(() => {
    console.log(router.query);
    const queryValue = router.query[name];
    if (typeof queryValue !== 'string') {
      return;
    }

    setQuery(queryValue);
  }, [name, router.query]);

  return query;
};
