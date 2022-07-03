import { View } from './index.view';
import { useEvent } from '@/features/events/useEvent';
import { usePageQuery } from '@/hooks/usePageQuery';

export default function Page() {
  const idQuery = usePageQuery('id');

  const { event, error } = useEvent(idQuery);

  if (error) {
    console.log(error);
    return <p>error!</p>;
  }

  return (
    <View
      {...{
        event,
      }}
    />
  );
}
