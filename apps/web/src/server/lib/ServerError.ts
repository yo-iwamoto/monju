import { NextApiResponse } from 'next';

export const serverErrorCode = {
  invalidRequest: 'invalid-request',
  unauthorized: 'unauthorized',
  forbidden: 'forbidden',
  methodNotAllowed: 'method-not-allowed',
  internal: 'internal',
  notFound: 'not-found',
};
type ServerErrorCode = typeof serverErrorCode[keyof typeof serverErrorCode];

export class ServerError {
  private constructor(public code: ServerErrorCode, public message: string, public returnableStatus: number) {}

  public respondError = (res: NextApiResponse) => {
    res.status(this.returnableStatus).json({
      code: this.code,
      message: this.message,
    });
  };

  static invalidRequest = (message = 'リクエストが謝っています') =>
    new ServerError(serverErrorCode.invalidRequest, message, 400);
  static unauthorized = (message = 'ログインしてください') =>
    new ServerError(serverErrorCode.unauthorized, message, 401);
  static forbidden = (message = 'アクセス権限がありません') => new ServerError(serverErrorCode.forbidden, message, 403);
  static methodNotAllowed = (message = 'メソッドが許可されていません') =>
    new ServerError(serverErrorCode.methodNotAllowed, message, 405);
  static internal = (message = '不明なエラーが発生しました') => new ServerError(serverErrorCode.internal, message, 500);
  static notFound = (message = '指定したデータが存在しません') =>
    new ServerError(serverErrorCode.notFound, message, 404);
}
