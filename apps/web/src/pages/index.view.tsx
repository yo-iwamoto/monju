import { EventCard } from './components/EventCard';
import type { Event } from '@/types/Api';

type Props = {
  events: Event[] | undefined;
};

export default function ({ events }: Props) {
  return <>{events && events.map((event) => <EventCard key={event.id} event={event} />)}</>;
}
