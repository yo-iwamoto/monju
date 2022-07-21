import View from './index.view';
import { usePageQuery } from '@/hooks/usePageQuery';
import { useEvent } from '@/hooks/queries/useEvent';
import { Head } from '@/components/Head';

export default function () {
  const idQuery = usePageQuery('id');

  const { event, error } = useEvent(idQuery);

  if (error) {
    console.log(error);
    return <p>error!</p>;
  }

  return (
    <>
      <Head title={event?.title ?? undefined} />
      <View event={event} />
    </>
  );
}
