// import View from './index.view';
import { Head } from '@/components/Head';
import { aspida } from '@/lib/aspida';
import { useCallback } from 'react';

export default function () {
  // const { events } = useEvents();

  const req = useCallback(() => aspida.user.example.$get(), []);

  return (
    <>
      <Head />
      <button onClick={req}>click</button>
      {/* <View events={events} /> */}
    </>
  );
}
