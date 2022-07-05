import { getQuery } from '@/server/helpers/getQuery';
import { respond400 } from '@/server/helpers/respondError';
import { updateUserName } from '@/server/services/users/updateUser';
import { z } from 'zod';
import type { NextApiHandler } from 'next';

const bodySchema = z.object({
  name: z.string(),
});

export const handleUpdateUserName: NextApiHandler = async (req, res) => {
  const id = getQuery(req);

  const parseResult = bodySchema.safeParse(req.body);
  if (!parseResult.success) {
    return respond400(res);
  }

  const { name } = parseResult.data;

  const user = await updateUserName({
    id,
    name,
  });

  res.json({
    user,
  });
};
