import React from 'react';
import styles from './siteHeader.module.scss';
import Wave from '@components/Wave/Wave';
import useViewport from '@hooks/useViewport';

export default function SiteHeader() {
  const { height } = useViewport();

  return (
    <header className={styles.wrapper} style={{ height: height || 1080 }}>
      <div className={`${styles.inner}`}>
        <h1>
          Joel K Bennett
          <br />
          UX/UI design, React/React Native, Unity
          <br />
          Vancouver BC
          <br />
        </h1>

        <section className={styles.links}>
          <a href="https://www.github.com/joelkbennett" target="_blank">
            Github
          </a>
          <a href="https://www.twitter.com/j0benk0" target="_blank">
            Twitter
          </a>
          <a
            href="https://www.notion.so/joelkb/Joel-Kristopher-Bennett-0bd43f07673047e38d871fab21dd992d"
            target="_blank">
            Resume
          </a>
        </section>
      </div>
      <div className={styles.wave}>
        <Wave />
      </div>
    </header>
  );
}
