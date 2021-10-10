import type { AppProps } from 'next/app';

import '../styles/layout.css';
import '../styles/stay-in-touch.css';
import { initializeGoogleAnalytics } from '../utils/google-analytics';
import { QueryClient, QueryClientProvider } from 'react-query';

initializeGoogleAnalytics();
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
export default MyApp;
