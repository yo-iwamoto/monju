import { Header } from '@/components/Header';
import type { ReactNode, FC } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <div className='absolute -z-10 h-screen w-screen bg-gray-50'></div>
        {children}
      </main>
    </>
  );
};
