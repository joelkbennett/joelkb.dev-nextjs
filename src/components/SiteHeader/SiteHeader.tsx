import React from 'react';
import styles from './siteHeader.module.scss';
import Wave from '@components/Wave/Wave';
import useViewport from '@hooks/useViewport';
import { t } from '@lingui/macro';
import ExternalLink from '@components/ExternalLink/ExternalLink';

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
          <ExternalLink href="https://www.github.com/joelkbennett">
            {t({ id: 'link.github.title', message: 'Github' })}
          </ExternalLink>

          <ExternalLink href="https://www.twitter.com/j0benk0">
            {t({ id: 'link.twitter.title', message: 'Twitter' })}
          </ExternalLink>

          <ExternalLink href="https://www.notion.so/joelkb/Joel-Kristopher-Bennett-0bd43f07673047e38d871fab21dd992d">
            {t({ id: 'link.resume.title', message: 'Resume' })}
          </ExternalLink>
        </section>
      </div>
      <div className={styles.wave}>
        <Wave />
      </div>
    </header>
  );
}
