import { AppProps, NextWebVitalsMetric } from 'next/app';
// import { Provider } from 'next-auth/client';
import { SWRConfig } from 'swr';
import LocalizationProvider from '@locales/localizationProvider';
import { RecoilRoot } from 'recoil';

import '../styles/global.scss';

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  const body = JSON.stringify(metric);
  if (navigator.sendBeacon) {
    // navigator.sendBeacon(url, body);
    console.log(metric);
  } else {
    // todo: call fetch
  }
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
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
