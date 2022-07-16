import { Link } from '@/components/Link';
import { pagesPath } from '@/lib/$path';
import type { FC } from 'react';
import type { Event } from '@/types/Api';

type Props = {
  event: Event;
};

export const EventCard: FC<Props> = ({ event }) => {
  return (
    <Link href={pagesPath.events._id(event.id).$url()}>
      <p key={event.id}>{event.title}</p>
    </Link>
  );
};
