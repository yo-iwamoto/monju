import { SWRConfig } from 'swr';
import '@/styles/global.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { fetcher } from '@/lib/swr/fetcher';
import { Layout } from '@/components/Layout';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SWRConfig value={{ fetcher }}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </SWRConfig>
  );
};

export default App;
