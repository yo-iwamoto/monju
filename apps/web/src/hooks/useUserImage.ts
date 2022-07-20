import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

/**
 * session.data?.user?.imageをnull|stringとして扱うだけ
 */
export const useUserImage = () => {
  const session = useSession();

  const imageUrl = useMemo(() => {
    const url = session.data?.user?.image;
    if (!url) {
      return null;
    }

    return url;
  }, [session.data?.user?.image]);

  return imageUrl;
};
