import type { Event } from '@/types/Api';

type Props = {
  event: Event | undefined;
};

export default function ({ event }: Props) {
  return (
    <>
      <h1>Hello here an event</h1>
      <p>{event?.title}</p>
    </>
  );
}
