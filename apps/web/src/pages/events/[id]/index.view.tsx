import type { Event } from '@/types/Resource';
import type { FC } from 'react';

type Props = {
  event: Event | undefined;
};

export const View: FC<Props> = ({ event }) => {
  return (
    <>
      <h1>Hello here an event</h1>
      <p>{event?.title}</p>
    </>
  );
};
