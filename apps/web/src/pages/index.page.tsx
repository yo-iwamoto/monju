import View from './index.view';
import { useEvents } from '@/hooks/queries/useEvents';

export default function () {
  const { events } = useEvents();

  return (
    <View
      {...{
        events,
      }}
    />
  );
}
