import { View } from './view';
import { createEventForm, type CreateEventForm } from '@/forms/createEventForm';
import { useCreateEvent } from '@/hooks/queries/useCreateEvent';
import { useFormWithSchema } from '@/hooks/useFormWithSchema';
import { pagesPath } from '@/lib/$path';
import { type FC, type RefCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import type { FieldAttributes } from '@/types/FieldAttributes';

export const CreateEventButton: FC = () => {
  const router = useRouter();

  const [isShown, setIsShown] = useState(false);

  const { register, handleSubmit, reset: resetForm } = useFormWithSchema<CreateEventForm>(createEventForm);

  const { create, isCreating } = useCreateEvent();

  const onSubmit = handleSubmit(async (data) => {
    const result = await create(data);
    resetForm();
    setIsShown(false);
    router.push(pagesPath.events._id(result.event.id).settings.$url());
  });

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!isShown) {
      return;
    }

    inputRef.current?.focus();
  }, [isShown]);

  const formNameAttributes = useMemo<FieldAttributes & { ref: RefCallback<HTMLInputElement> }>(() => {
    const hookFormAttrs = register('title');
    return {
      ...hookFormAttrs,
      ref: (e) => {
        hookFormAttrs.ref(e);
        inputRef.current = e;
      },
    };
  }, [register]);

  return (
    <View
      {...{
        isShown,
        open: () => setIsShown(true),
        close: () => setIsShown(false),
        onSubmit,
        formNameAttributes,
        isCreating,
      }}
    />
  );
};
