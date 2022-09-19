import { fetcher } from '@/lib/swr/fetcher';
import { Layout } from '@/components/Layout';
import { SWRConfig } from 'swr';
import '@/styles/global.css';
// import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

export default function ({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
