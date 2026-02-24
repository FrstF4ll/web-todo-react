import { useState } from 'react';
import { FilterLayout } from './FilterLayout';
import { FilterValueContainer } from './FilterValueContanier';
import styles from './TodoFilter.module.css';

export const FilterContainer = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    
      <div className={`${styles.sortWrapper} flex-row`} onClick={() => setIsOpen(!isOpen)}>
        <FilterLayout>
          <span className={styles.label}>Sort:</span>
          <span className={styles.currentText}>Random</span> 
          { isOpen && <FilterValueContainer />}
        </FilterLayout>
      </div>
  );
};
