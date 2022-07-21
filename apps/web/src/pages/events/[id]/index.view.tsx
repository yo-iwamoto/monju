import { Link } from '@/components/Link';
import { pagesPath } from '@/lib/$path';
import type { Event } from '@/types/Api';

type Props = {
  event: Event | undefined;
};

export default function ({ event }: Props) {
  if (!event) return <p>loading...</p>;

  return (
    <>
      <h1>ここは詳細ページ</h1>
      <p>{event.title}</p>
      <div className='mt-10'></div>
      <Link href={pagesPath.events._id(event.id).settings.$url()}>
        <span className='hover:underline'>設定ページへ</span>
      </Link>
    </>
  );
}
