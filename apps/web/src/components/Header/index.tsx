import { View } from './view';
import { useUserImage } from '@/hooks/useUserImage';
import { images } from '@/lib/images';
import { useSession } from 'next-auth/react';
import { FC, useMemo } from 'react';

export const Header: FC = () => {
  const session = useSession();
  const userImage = useUserImage();
  const userImageOrDefault = useMemo(() => userImage ?? images.no_img_png, [userImage]);

  return (
    <View
      {...{
        sessionStatus: session.status,
        userImage: userImageOrDefault,
      }}
    />
  );
};
