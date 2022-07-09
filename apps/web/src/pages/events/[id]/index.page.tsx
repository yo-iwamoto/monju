import { View } from './index.view';
import { usePageQuery } from '@/hooks/usePageQuery';
import { useEvent } from '@/features/events/hooks/useEvent';

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
