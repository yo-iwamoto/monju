import { forwardRef, type InputHTMLAttributes } from 'react';
import cn from 'classnames';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> & {
  fullWidth?: boolean;
};

export const Input = forwardRef<HTMLInputElement, Props>(({ fullWidth = true, ...props }, ref) => {
  return (
    <input
      className={cn('rounded-md border p-2 text-sm focus:outline-teal-600', {
        'w-full': fullWidth,
      })}
      {...props}
      ref={ref}
    />
  );
});
