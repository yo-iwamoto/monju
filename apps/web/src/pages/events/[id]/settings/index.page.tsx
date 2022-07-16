import View from './index.view';
import { useEvent } from '@/features/events/hooks/useEvent';
import { usePageQuery } from '@/hooks/usePageQuery';

export default function () {
  const idQuery = usePageQuery('id');

  const { event, error } = useEvent(idQuery);

  if (error) {
    console.log(error);
    return <p>error!</p>;
  }

  return <View event={event} />;
}
