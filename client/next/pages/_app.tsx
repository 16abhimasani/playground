import type { AppProps } from 'next/app';
import { ThemedGlobalStyle } from '../styles';
import '../styles/styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemedGlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
