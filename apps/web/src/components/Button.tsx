import { FaCircleNotch } from 'react-icons/fa';
import type { ButtonHTMLAttributes, FC } from 'react';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  isLoading?: boolean;
};

export const Button: FC<Props> = ({ children, isLoading = false, ...props }) => {
  return (
    <button
      className='h-8 rounded-md bg-teal-500 px-2 py-1.5 text-sm text-white shadow-md transition-all hover:bg-teal-400'
      {...props}
    >
      {isLoading ? <FaCircleNotch className='animate-spin text-white' /> : children}
    </button>
  );
};
