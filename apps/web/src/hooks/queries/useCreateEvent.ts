export {};
// import { Methods } from '@/api/api/events';
// import { useLocalLoading } from '@/hooks/useLocalLoading';
// import { aspida } from '@/lib/aspida';
// import { useCallback } from 'react';

// export const useCreateEvent = () => {
//   const [isCreating, load] = useLocalLoading<Methods['post']['resBody']>();

//   const create = useCallback(
//     (data: { title: string }) => {
//       return load(() => aspida.api.events.$post({ body: data }));
//     },
//     [load]
//   );

//   return {
//     create,
//     isCreating,
//   };
// };
