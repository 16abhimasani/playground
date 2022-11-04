import type { AppProps } from 'next/app';
import { AppProvider } from '../contexts/app';
import { ThemedGlobalStyle } from '../styles';
import '../styles/styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemedGlobalStyle />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}
