export {};
// import { swrKeys } from '@/lib/swr/keys';
// import useSWR from 'swr';
// import { useMemo } from 'react';
// import type { Methods } from '@/api/api/events/_id@string';

// type ResponseData = Methods['get']['resBody'];

// export const useEvent = (id: string | undefined) => {
//   const key = useMemo(() => {
//     if (id === undefined) {
//       return null;
//     }
//     return swrKeys.event(id);
//   }, [id]);

//   const { data, error, mutate } = useSWR<ResponseData>(key);

//   return {
//     event: data?.event,
//     error,
//     mutate,
//   };
// };
