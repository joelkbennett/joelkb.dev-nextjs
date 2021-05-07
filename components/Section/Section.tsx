import * as React from 'react';
import styles from './section.module.css';
import useViewport from '../../hooks/useViewport';

type SectionProps = {
  title: string;
  fullHeight?: boolean;
  className?: string;
};

export default function Section({
  title,
  fullHeight = false,
  children,
  className = '',
}: React.PropsWithChildren<SectionProps>) {
  const { height } = useViewport();
  return (
    <section
      className={`${styles.wrapper} ${className}`}
      style={{ height: fullHeight ? height : 'auto' }}>
      <div className={`${styles.column}`}>
        <h2>{title}</h2>
      </div>
      <div className={`${styles.column} ${styles.content}`}>{children}</div>
    </section>
  );
}
