import { useState } from 'react';
import { FilterLayout } from './FilterLayout';
import { FilterValueContainer } from './FilterValueContainer';
import styles from './TodoFilter.module.css';
import { FilterOption } from './FilterOption';
import { type SortOption, SORT_OPTIONS } from '../../../../useFilterStore';
interface FilterContainerProps {
  selected: SortOption[];
  onSelect: (option: SortOption) => void;
  getOptionClassName: (option: SortOption) => string;
}

export const FilterContainer = ({
  selected,
  onSelect,
  getOptionClassName,
}: FilterContainerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: SortOption) => {
    onSelect(option);
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
        <span className={styles.currentText}>{selected.join(', ')}</span>
        
        {isOpen && (
          <FilterValueContainer>
            {SORT_OPTIONS.map((option) => (
              <FilterOption
                key={option}
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
