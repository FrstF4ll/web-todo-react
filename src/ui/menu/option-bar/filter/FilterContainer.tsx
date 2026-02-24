import { useState } from 'react';
import { FilterLayout } from './FilterLayout';
import { FilterValueContainer } from './FilterValueContanier';
import styles from './TodoFilter.module.css';

export const FilterContainer = () => {
  const SORT_OPTIONS = ['Name', 'Date', 'Undone', 'Done'];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Any');
  return (
    <div
      className={`${styles.sortWrapper} flex-row`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <FilterLayout>
        <span className={styles.label}>Sort:</span>
        <span className={styles.currentText}>{selected}</span>
        {isOpen && (
          <FilterValueContainer>
            {SORT_OPTIONS.map((option) => (
              <div
                key={option}
                className={styles.option}
                onClick={() => setSelected(option)}
              >
                {option}
              </div>
            ))}
          </FilterValueContainer>
        )}
      </FilterLayout>
    </div>
  );
};
