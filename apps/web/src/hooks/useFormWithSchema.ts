import { useForm, type DeepPartial, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';

export const useFormWithSchema = <F extends FieldValues>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: z.ZodObject<any, 'strict'>,
  defaultValues?: DeepPartial<F>
) =>
  useForm<F>({
    resolver: zodResolver(schema),
    defaultValues,
  });
