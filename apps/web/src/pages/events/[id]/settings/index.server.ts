import { getUserId } from '@/server/helpers/getUserId';
import { ServerError, serverErrorCode } from '@/server/lib/ServerError';
import { showEvent } from '@/server/services/events/showEvent';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    // sessionからuserIdを取得
    const userId = await getUserId.gssp(ctx);

    // queryからidパラメータを取得
    const { id } = ctx.query;
    // idが無いまたは複数あれば404
    if (typeof id !== 'string') {
      throw ServerError.notFound();
    }

    // eventを取得(存在しなければ)
    const event = await showEvent({ id });
    if (event === null) {
      throw ServerError.notFound();
    }

    // ログインユーザーがeventのownerでなければ例外
    // 存在しないように扱える方がいいのでnotFound
    if (event.userId !== userId) {
      throw ServerError.notFound();
    }

    return {
      props: {},
    };
  } catch (err) {
    // notFoundのServerErrorなら404を返す
    if (err instanceof ServerError && err.code === serverErrorCode.notFound) {
      return {
        notFound: true,
      };
    }

    // それ以外の時トップページにリダイレクト
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
