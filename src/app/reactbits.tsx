'use client';

import { ReactNode } from 'react';
import styles from './reactbits.module.css';

interface TicketProps {
  children: ReactNode;
  tone?: 'primary' | 'secondary';
  className?: string;
}

export const Ticket = ({ children, tone = 'primary', className }: TicketProps) => {
  const classes = [styles.ticket];
  if (tone === 'secondary') {
    classes.push(styles.secondary);
  }
  if (className) {
    classes.push(className);
  }

  return (
    <div className={classes.join(' ')}>
      <div className={styles.perforation} aria-hidden />
      {children}
    </div>
  );
};

interface BitProps {
  label: string;
  value: ReactNode;
}

export const Bit = ({ label, value }: BitProps) => (
  <div className={styles.bit}>
    <span className={styles.bitLabel}>{label}</span>
    <span className={styles.bitValue}>{value}</span>
  </div>
);

interface ChipProps {
  children: ReactNode;
  accent?: boolean;
}

export const Chip = ({ children, accent = false }: ChipProps) => (
  <span className={`${styles.chip} ${accent ? styles.chipAccent : ''}`}>{children}</span>
);

interface MeterProps {
  label: string;
  value: number;
}

export const Meter = ({ label, value }: MeterProps) => (
  <div className={styles.meter}>
    <div className={styles.meterHeader}>
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className={styles.meterTrack}>
      <div className={styles.meterFill} style={{ width: `${value}%` }} />
    </div>
  </div>
);
