import NextLink, { type LinkProps } from 'next/link';
import type { FC, ReactNode } from 'react';

type Props = Omit<LinkProps, 'passHref'> & {
  children: ReactNode;
};

export const Link: FC<Props> = ({ children, ...props }) => {
  return (
    <NextLink {...props} passHref>
      <a>{children}</a>
    </NextLink>
  );
};
