import { getServerSideProps } from './index.server';
import View from './index.view';
// import { useEvent } from '@/hooks/queries/useEvent';
import { usePageQuery } from '@/hooks/usePageQuery';
import { Head } from '@/components/Head';

export { getServerSideProps };

export default function () {
  const idQuery = usePageQuery('id');

  // const { event, error } = useEvent(idQuery);

  // if (error) {
  //   console.log(error);
  //   return <p>error!</p>;
  // }

  return (
    <>
      <Head title='イベント設定' />
      {/* <View event={event} /> */}
    </>
  );
}
