import * as React from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import SiteHeader from '../SiteHeader/SiteHeader';
import SiteFooter from '../SiteFooter/SiteFooter';

import { useSetRecoilState } from 'recoil';
import * as Window from '../../state/window';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const setScrollState = useSetRecoilState(Window.scrollPositionState);
  const setViewport = useSetRecoilState(Window.viewportState);

  const isInitialLoad = React.useRef(true);
  const isTicking = React.useRef(false);
  const lastKnownScrollPosition = React.useRef({ x: 0, y: 0 });
  const lastKnownViewportSize = React.useRef({ width: 0, height: 0 });

  React.useEffect(() => {
    const handleScroll = () => {
      lastKnownScrollPosition.current = {
        x: window.scrollX,
        y: window.scrollY,
      };

      window.scrollTo(
        lastKnownScrollPosition.current.x,
        lastKnownScrollPosition.current.y,
      );

      if (!isTicking.current || isInitialLoad.current) {
        window.requestAnimationFrame(() => {
          setScrollState({
            position: { ...lastKnownScrollPosition.current },
          });
          isTicking.current = false;
        });
      }

      isTicking.current = true;
    };

    const handleWindowResize = () => {
      lastKnownViewportSize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      if (!isTicking.current || isInitialLoad.current) {
        window.requestAnimationFrame(() => {
          setViewport(lastKnownViewportSize.current);
          isTicking.current = false;
        });
      }

      isTicking.current = true;
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleWindowResize);

    handleScroll();
    handleWindowResize();

    isInitialLoad.current = false;

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <meta property="og:image" content={``} />
        <meta name="og:title" content={'joelkb.dev'} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>

      <div className={styles.container}>
        <SiteHeader />
        <main className={styles.mainContent}>{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
