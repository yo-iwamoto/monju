import type { Event } from '@/types/Api';

type Props = {
  event: Event | undefined;
};

export default function ({ event }: Props) {
  return (
    <>
      <h1>Hello here an setting page</h1>
      <p>{event?.title}</p>
    </>
  );
}
