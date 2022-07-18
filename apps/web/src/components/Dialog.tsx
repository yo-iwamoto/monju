import { FC, ReactNode } from 'react';

type Props = {
  title: string;
  description?: string;
  isShown: boolean;
  close: () => void;
  children: ReactNode;
};

export const Dialog: FC<Props> = ({ title, description, isShown = false, close, children }) => {
  return (
    <>
      {isShown && (
        <>
          {/* back */}
          <div className='fixed inset-0 h-screen w-screen bg-gray-400 opacity-90' onClick={close} />

          {/* dialog body */}
          <div className='absolute top-64 left-0 right-0 z-10 mx-auto w-96 rounded-md bg-white p-6 shadow-lg'>
            <p className='mb-2 font-bold'>{title}</p>
            <p className='mb-2 text-xs text-gray-700'>{description}</p>
            {children}
          </div>
        </>
      )}
    </>
  );
};
