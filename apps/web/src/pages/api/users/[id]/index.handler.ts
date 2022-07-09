import { handleUpdateUserName } from '@/server/controllers/users/handleUpdateUserName';
import { createHandler } from '@/server/lib/createHandler';

export default createHandler({
  PATCH: handleUpdateUserName,
});
