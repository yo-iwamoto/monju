import View from './index.view';
import { usePageQuery } from '@/hooks/usePageQuery';
import { useEvent } from '@/hooks/queries/useEvent';

export default function () {
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
