import { fetcher } from '@/lib/swr/fetcher';
import '@/styles/global.css';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SWRConfig value={{ fetcher }}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </SWRConfig>
  );
};

export default App;
