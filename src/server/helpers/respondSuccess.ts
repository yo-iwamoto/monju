import type { NextApiResponse } from 'next';

type Args = {
  res: NextApiResponse;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  status?: 200 | 201;
};

export const respondSuccess = ({ res, data, status = 200 }: Args) => res.status(status).json(data);
