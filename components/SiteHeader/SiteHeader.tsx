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
          <a href="https://www.github.com/joelkbennett">github</a>
        </section>
      </div>
    </header>
  );
}
