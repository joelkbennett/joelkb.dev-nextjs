import { AppProps } from 'next/app';
// import { Provider } from 'next-auth/client';
import { SWRConfig } from 'swr';
import LocalizationProvider from '@locales/localizationProvider';
import { RecoilRoot } from 'recoil';

import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Provider session={pageProps.session}>
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}>
      <LocalizationProvider>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </LocalizationProvider>
    </SWRConfig>
    // </Provider>
  );
}
