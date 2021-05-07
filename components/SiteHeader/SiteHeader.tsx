import React from 'react';
import styles from './siteHeader.module.css';
import Wave from '../Wave/Wave';
import useViewport from '../../hooks/useViewport';

export default function SiteHeader() {
  const { width, height } = useViewport();

  return (
    <header className={styles.wrapper} style={{ height }}>
      <div className={styles.wave}>
        <Wave />
      </div>
      <div className={styles.inner}>
        <div>
          <h1>Joel K Bennett</h1>
          <h1>UX/UI design, React/React Native, Unity</h1>
          <h1>Vancouver BC</h1>
        </div>

        <section className={styles.links}>
          <a href="https://www.github.com/joelkbennett">github</a>
        </section>
      </div>
    </header>
  );
}
