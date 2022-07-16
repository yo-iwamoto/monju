import { respond400, respond401, respond403, respond405, respond500 } from '@/server/helpers/respondError';
import { NextApiResponse } from 'next';

const serverErrorCode = {
  invalidRequest: 'invalid-request',
  unauthorized: 'unauthorized',
  forbidden: 'forbidden',
  methodNotAllowed: 'method-not-allowed',
  internal: 'internal',
  notFound: 'not-found',
};
type ServerErrorCode = typeof serverErrorCode[keyof typeof serverErrorCode];

export class ServerError {
  private constructor(
    public code: ServerErrorCode,
    public message: string,
    public respondError: (res: NextApiResponse, code?: string) => void
  ) {}

  static invalidRequest = (message = 'リクエストが謝っています') =>
    new ServerError(serverErrorCode.invalidRequest, message, respond400);
  static unauthorized = (message = 'ログインしてください') =>
    new ServerError(serverErrorCode.unauthorized, message, respond401);
  static forbidden = (message = 'アクセス権限がありません') =>
    new ServerError(serverErrorCode.forbidden, message, respond403);
  static methodNotAllowed = (message = 'メソッドが許可されていません') =>
    new ServerError(serverErrorCode.methodNotAllowed, message, respond405);
  static internal = (message = '不明なエラーが発生しました') =>
    new ServerError(serverErrorCode.internal, message, respond500);
  static notFound = (message = '指定したデータが存在しません') =>
    new ServerError(serverErrorCode.notFound, message, respond500);
}
