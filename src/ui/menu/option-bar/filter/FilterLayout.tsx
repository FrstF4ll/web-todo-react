import type { ReactNode } from 'react';
import styles from './TodoFilter.module.css';

interface FilterLayoutProps {
  children: ReactNode;
}

export const FilterLayout = ({ children }: FilterLayoutProps) => {
  return (
    <>
      <span className={styles.icon}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      </span>
      {children}

      <span className={styles.chevron}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </span>
    </>
  );
};
