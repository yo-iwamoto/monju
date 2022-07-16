import { View } from './view';
import { createEventForm, type CreateEventForm } from '@/features/events/forms/createEventForm';
import { useCreateEvent } from '@/features/events/hooks/useCreateEvent';
import { useFormWithSchema } from '@/hooks/useFormWithSchema';
import { FieldAttributes } from '@/types/FieldAttributes';
import { pagesPath } from '@/lib/$path';
import { FC, RefCallback, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';

export const CreateEventButton: FC = () => {
  const router = useRouter();

  const [isShown, setIsShown] = useState(false);

  const { register, handleSubmit, reset: resetForm } = useFormWithSchema<CreateEventForm>(createEventForm);

  const { create, isCreating, result } = useCreateEvent();

  const createEventAndCloseDialog = useCallback((data: CreateEventForm) => create(data), [create]);

  const onSubmit = handleSubmit(createEventAndCloseDialog);

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

  useEffect(() => {
    if (result !== undefined) {
      resetForm();
      setIsShown(false);
      router.push(pagesPath.events._id(result.event.id).settings.$url());
    }
  }, [resetForm, result, router]);

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
