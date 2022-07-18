import View from './index.view';
import { getServerSideProps } from './index.server';
import { useEvent } from '@/features/events/hooks/useEvent';
import { usePageQuery } from '@/hooks/usePageQuery';
import { InferGetServerSidePropsType } from 'next';

export { getServerSideProps };

export default function (props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <h1>Hello setting page</h1>;
  // const idQuery = usePageQuery('id');

  // const { event, error } = useEvent(idQuery);

  // if (error) {
  //   console.log(error);
  //   return <p>error!</p>;
  // }

  // return <View event={event} />;
}
