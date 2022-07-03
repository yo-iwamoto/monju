import { aspida } from '../aspida';

export const swrKeys = {
  events: aspida.api.events.$path,
  event: (id: string) => aspida.api.events._id(id).$path,
};
