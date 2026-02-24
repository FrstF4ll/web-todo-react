import { FilterLayout } from './FilterLayout';
import styles from './TodoFilter.module.css';

export const FilterContainer = () => {
  return (
    <div className={`${styles.sortWrapper} flex-row`}>
      <FilterLayout>
        <span className={styles.label}>Sort by:</span>
        <span className={styles.currentText}>Random</span>
      </FilterLayout>
    </div>
  );
};
