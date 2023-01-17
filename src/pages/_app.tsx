import type { AppProps } from 'next/app';
import { Layout, Modal } from '@/components/index';
import { AppProvider } from '@/context/App/AppProvider';
import { AuthProvider } from '@/context/Auth/AuthProvider';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AuthProvider>
        <Modal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </AppProvider>
  );
}
