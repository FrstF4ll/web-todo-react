import { useState } from 'react';
import { FilterLayout } from './FilterLayout';
import { FilterValueContainer } from './FilterValueContanier';
import styles from './TodoFilter.module.css';
import { useOptionsDisplay } from '../../../../shared/hooks/useOptionsDisplay';

export const FilterContainer = () => {
  const SORT_OPTIONS = ['Any', 'Name', 'Date', 'Undone', 'Done'] as const;
  type SortOption = (typeof SORT_OPTIONS)[number];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SortOption[]>([SORT_OPTIONS[0]]);
  const {toggleOption, getOptionClassName} = useOptionsDisplay(selected, setSelected)

  return (
    <div
      className={`${styles.sortWrapper} flex-row`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <FilterLayout>
        <span className={styles.label}>Sort:</span>
        <span className={styles.currentText}>
          <span className={styles.currentText}>{selected.join(', ')}</span>
        </span>
        {isOpen && (
          <FilterValueContainer>
            {SORT_OPTIONS.map((option) => (
              <div
                key={option}
                className={getOptionClassName(option)}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleOption(option);
                  setIsOpen(false);
                }}
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
