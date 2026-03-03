import { DangerButton } from '../inputs/DangerButton';
import { FilterContainer } from './filter/FilterContainer';
import styles from './OptionBar.module.css';
import type { SortOption } from '../../../useFilterStore';

interface OptionBarProps {
  filter: SortOption[];
  onFilterChange: (option: SortOption) => void;
  getOptionClassName: (option: SortOption) => string;
  onDanger: () => Promise<void>;
}

export const OptionBar = ({
  filter,
  onFilterChange,
  getOptionClassName,
  onDanger,
}: OptionBarProps) => {
  const handleDangerClick = () => {
    if (window.confirm('Everything will be lost, are you sure?')) {
      onDanger();
    }
  };

  return (
    <nav className={`flex-row ${styles.optionBar}`}>
      <FilterContainer
        selected={filter}
        onSelect={onFilterChange}
        getOptionClassName={getOptionClassName}
      />
      <DangerButton
        text="Clear all"
        aria-label="Delete everything"
        onClick={handleDangerClick}
      />
    </nav>
  );
};
