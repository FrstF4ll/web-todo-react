import { useState } from 'react';
import { FilterLayout } from './FilterLayout';
import { FilterValueContainer } from './FilterValueContainer';
import styles from './TodoFilter.module.css';
import { useOptionsDisplay } from '../../../../shared/hooks/useOptionsDisplay';
import { FilterOption } from './FilterOption';
const SORT_OPTIONS = ['Any', 'Name', 'Date', 'Undone', 'Done'] as const;
export type SortOption = (typeof SORT_OPTIONS)[number];

export const FilterContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SortOption[]>([SORT_OPTIONS[0]]);

  const { toggleOption, getOptionClassName } = useOptionsDisplay(
    selected,
    setSelected,
  );

  const handleSelect = (option: SortOption) => {
    toggleOption(option);
    setIsOpen(false);
  };

  const handleToggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className={`${styles.sortWrapper} flex-row`}
      onClick={handleToggleMenu}
    >
      <FilterLayout>
        <span className={styles.label}>Sort:</span>
        <span className={styles.currentText}>
          <span className={styles.currentText}>{selected.join(', ')}</span>
        </span>
        {isOpen && (
          <FilterValueContainer>
            {SORT_OPTIONS.map((option) => (
              <FilterOption
                sortOption={option}
                optionClassName={getOptionClassName}
                selectOption={handleSelect}
              ></FilterOption>
            ))}
          </FilterValueContainer>
        )}
      </FilterLayout>
    </div>
  );
};
