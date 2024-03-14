import { AppProps } from 'next/app';

import '../styles/tokens.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
