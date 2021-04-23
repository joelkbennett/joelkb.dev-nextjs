import React from 'react';
import styles from './siteHeader.module.css';
import Wave from '../Wave/Wave';

export default function SiteHeader() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.wave}>
        <Wave />
      </div>
      <div className={styles.inner}>
        <div>
          <h3>Joel K Bennett</h3>
          <h3>UX/UI design, React/React Native, Unity</h3>
          <h3>Vancouver BC</h3>
        </div>

        <section className={styles.links}>
          <a href="https://www.github.com/joelkbennett">github</a>
        </section>
      </div>
    </header>
  );
}
