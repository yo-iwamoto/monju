import { View } from './view';
import { FC, RefCallback, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createEventForm, type CreateEventForm } from '@/features/events/forms/createEventForm';
import { useCreateEvent } from '@/features/events/hooks/useCreateEvent';
import { useFormWithSchema } from '@/hooks/useFormWithSchema';
import { FieldAttributes } from '@/types/FieldAttributes';

export const CreateEventButton: FC = () => {
  const [isShown, setIsShown] = useState(false);

  const { register, handleSubmit, reset: resetForm } = useFormWithSchema<CreateEventForm>(createEventForm);

  const createEvent = useCreateEvent();

  const createEventAndCloseDialog = useCallback(
    async (data: CreateEventForm) => {
      await createEvent(data);
      resetForm();
      setIsShown(false);
    },
    [createEvent, resetForm]
  );

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

  return (
    <View
      {...{
        isShown,
        open: () => setIsShown(true),
        close: () => setIsShown(false),
        onSubmit,
        formNameAttributes,
      }}
    />
  );
};
