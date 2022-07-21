import View from './index.view';
import { useEvents } from '@/hooks/queries/useEvents';
import { Head } from '@/components/Head';

export default function () {
  const { events } = useEvents();

  return (
    <>
      <Head />
      <View events={events} />
    </>
  );
}
