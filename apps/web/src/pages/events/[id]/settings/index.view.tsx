import type { Event } from '@/types/Api';

type Props = {
  event: Event | undefined;
};

export default function ({ event }: Props) {
  return (
    <>
      <h1>イベントの設定ページです</h1>
      <p>{event?.title}</p>
    </>
  );
}
