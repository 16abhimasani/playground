import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { AppProvider } from '../contexts/app';
import { ThemedGlobalStyle } from '../styles';
import '../styles/styles.scss';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemedGlobalStyle />
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </QueryClientProvider>
    </>
  );
}
