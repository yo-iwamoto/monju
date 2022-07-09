import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { DeepPartial, FieldValues, UnpackNestedValue } from 'react-hook-form';
import type { z } from 'zod';

export const useFormWithSchema = <F extends FieldValues>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: z.ZodObject<any, 'strict'>,
  defaultValues?: UnpackNestedValue<DeepPartial<F>>
) =>
  useForm<F>({
    resolver: zodResolver(schema),
    defaultValues,
  });
