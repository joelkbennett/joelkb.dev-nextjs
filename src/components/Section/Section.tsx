import * as React from 'react';
import styles from './section.module.css';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  accessibleLabel?: string;
  className?: string;
};

export default function Section({
  children,
  title,
  accessibleLabel,
  className = '',
}: SectionProps): JSX.Element {
  return (
    <section
      className={`${styles.wrapper} ${className}`}
      aria-label={accessibleLabel || title}>
      <div className={`${styles.column}`}>
        <h2>{title}</h2>
      </div>
      <div className={`${styles.column} ${styles.content}`}>{children}</div>
    </section>
  );
}
