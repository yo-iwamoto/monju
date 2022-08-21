interface ServerError {
  cause: Error | null;
  code: string;
  responseMessage: string;
}

export class NotFoundError implements ServerError {
  constructor(
    public cause: Error | null = null,
    public code = 'not-found',
    public responseMessage = 'データが存在しません'
  ) {}
}
