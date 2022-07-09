import { respond400 } from '@/server/helpers/respondError';
import { getSignedImageUrl } from '@/server/services/utils/getSignedImageUrl';
import { z } from 'zod';
import type { NextApiHandler } from 'next';

const bodySchema = z
  .object({
    url: z.string().url(),
  })
  .strict();

export const handleGetSignedImageUrls: NextApiHandler = async (req, res) => {
  const parseResult = bodySchema.safeParse(req.body);
  if (!parseResult.success) {
    return respond400(res);
  }

  const { url } = parseResult.data;

  const signedUrl = await getSignedImageUrl(url);

  res.json({
    signedUrl,
  });
};
