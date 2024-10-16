import type { AppProps } from 'next/app';
import '../styles/layout.css';
import '../styles/stay-in-touch.css';
import { initializeGoogleAnalytics } from '../utils/google-analytics';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'typeface-open-sans';
import 'typeface-open-sans-condensed';
import 'typeface-crimson-text';

initializeGoogleAnalytics();
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
export default MyApp;
