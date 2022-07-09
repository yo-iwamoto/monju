import type { ButtonHTMLAttributes, FC } from 'react';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

export const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      className='rounded-md bg-teal-500 px-2 py-1.5 text-white shadow-md transition-colors hover:bg-teal-400'
      {...props}
    >
      {children}
    </button>
  );
};
