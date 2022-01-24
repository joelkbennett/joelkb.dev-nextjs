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
          React/React Native, Unity, UX/UI design
          <br />
          Vancouver BC
          <br />
        </h1>

        <section className={styles.links}>
          <ExternalLink href="https://www.github.com/joelkbennett">
            {t({ id: 'link.github.title', message: 'Github' })}
          </ExternalLink>

          {/* <ExternalLink href="https://www.twitter.com/j0benk0">
            {t({ id: 'link.twitter.title', message: 'Twitter' })}
          </ExternalLink> */}

          <ExternalLink href="https://joelkb.notion.site/Joel-Kristopher-Bennett-38915aa47b5046afa7db24c644d15c3d">
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
