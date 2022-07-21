import { EventCard } from './components/EventCard';
import type { Event, User } from '@/types/Api';

type Props = {
  events:
    | (Event & {
        user: Pick<User, 'image' | 'name'>;
      })[]
    | undefined;
};

export default function ({ events }: Props) {
  return (
    <>
      <ul className='flex flex-col gap-4 p-8'>
        {events &&
          events.map((event) => (
            <li key={event.id}>
              <EventCard key={event.id} event={event} />
            </li>
          ))}
      </ul>
    </>
  );
}
