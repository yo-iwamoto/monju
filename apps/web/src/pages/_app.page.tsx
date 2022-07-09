import '@/styles/global.css';
import { fetcher } from '@/lib/swr/fetcher';
import { Layout } from '@/components/Layout';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';

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
