import type { SortOption } from '../../../shared/hooks/useOptionsDisplay';
import { DangerButton } from '../inputs/DangerButton';
import { FilterContainer } from './filter/FilterContainer';
import styles from './OptionBar.module.css';

interface OptionBarProps {
  filter: SortOption[];
  onFilterChange: (option: SortOption) => void;
  getOptionClassName: (option: SortOption) => string;
}

export const OptionBar = ({
  filter,
  onFilterChange,
  getOptionClassName,
}: OptionBarProps) => (
  <nav className={`flex-row ${styles.optionBar}`}>
    <FilterContainer
      selected={filter}
      onSelect={onFilterChange}
      getOptionClassName={getOptionClassName}
    />
    <DangerButton text="Clear all" aria-label="Delete everything" />
  </nav>
);
