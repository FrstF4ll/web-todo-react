import type { ReactNode } from 'react';
import styles from './TodoFilter.module.css';

export const FilterValueContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.valueContainer}>{children}</div>;
};
