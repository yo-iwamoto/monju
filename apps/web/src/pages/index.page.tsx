import View from './index.view';
import { useEvents } from '@/features/events/hooks/useEvents';

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
