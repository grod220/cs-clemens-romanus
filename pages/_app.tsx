import type { AppProps } from 'next/app';

import '../styles/layout.css';
import '../styles/stay-in-touch.css';
import { initializeGoogleAnalytics } from '../utils/google-analytics';

initializeGoogleAnalytics();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
