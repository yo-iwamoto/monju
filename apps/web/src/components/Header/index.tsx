import { View } from './view';
// import { useUserImage } from '@/hooks/useUserImage';
import { images } from '@/lib/images';
import { useSession } from 'next-auth/react';
import { type FC, useState } from 'react';

export const Header: FC = () => {
  const session = useSession();
  // const userImage = useUserImage();
  // const userImageOrDefault = useMemo(() => userImage ?? images.no_img_png, [userImage]);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View
      sessionStatus={session.status}
      userImage={images.no_img_png}
      // userImage={userImageOrDefault}
      showMenu={showMenu}
      onClickIcon={() => setShowMenu(true)}
      onClickMenuBackground={() => setShowMenu(false)}
    />
  );
};
