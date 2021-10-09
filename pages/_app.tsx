import type { AppProps } from 'next/app';
import '../styles/layout.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
