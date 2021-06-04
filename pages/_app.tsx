import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}