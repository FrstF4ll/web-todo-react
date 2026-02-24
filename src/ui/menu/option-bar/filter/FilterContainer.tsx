import { useState } from 'react';
import { FilterLayout } from './FilterLayout';
import { FilterValueContainer } from './FilterValueContanier';
import styles from './TodoFilter.module.css';

export const FilterContainer = () => {
  const SORT_OPTIONS = ['Any', 'Name', 'Date', 'Undone', 'Done'] as const;
  type SortOption = (typeof SORT_OPTIONS)[number];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SortOption[]>([SORT_OPTIONS[0]]);

  const toggleOption = (option: SortOption) => {
    setSelected((prev: SortOption[]) => {
      if (option === 'Any') return ['Any'];

      const cleanPrev = prev.filter((item) => item !== 'Any');

      const isAlreadySelected = cleanPrev.includes(option);

      if (isAlreadySelected) {
        const filtered = cleanPrev.filter((item) => item !== option);
        return filtered.length === 0 ? ['Any'] : filtered;
      }

      return [...cleanPrev, option];
    });
  };

  const getOptionClassName = (option: SortOption) => {
    const classes = [styles.option];
    if (selected.includes(option)) classes.push(styles.selectedOption);
    return classes.join(' ');
  };
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
