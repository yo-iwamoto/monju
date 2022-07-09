import { handleGetSignedImageUrls } from '@/server/controllers/utils/handleGetSignedImageUrl';
import { createHandler } from '@/server/lib/createHandler';

export default createHandler({
  POST: handleGetSignedImageUrls,
});
