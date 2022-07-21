import NextHead from 'next/head';
import type { FC } from 'react';

type Props = {
  title?: string;
  description?: string;
};

export const Head: FC<Props> = ({ title, description }) => {
  return (
    <NextHead>
      <title>{!title ? 'monju' : `${title} | monju`}</title>
      {description && <meta name='description' content={description} />}
    </NextHead>
  );
};
