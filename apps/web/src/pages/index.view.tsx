import { Link } from '@/components/Link';
import { pagesPath } from '@/lib/$path';
import type { Event } from '@/types/Resource';
import type { FC } from 'react';

type Props = {
  events: Event[] | undefined;
};

export const View: FC<Props> = ({ events }) => {
  return (
    <>
      {events &&
        events.map((event) => (
          <Link key={event.id} href={pagesPath.events._id(event.id).$url()}>
            <p key={event.id}>{event.name}</p>
          </Link>
        ))}
    </>
  );
};
