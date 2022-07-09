import { View } from './index.view';
import { useEvents } from '@/features/events/hooks/useEvents';

export default function Page() {
  const { events } = useEvents();

  return (
    <View
      {...{
        events,
      }}
    />
  );
}
