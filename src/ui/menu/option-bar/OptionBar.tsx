import { DangerButton } from '../inputs/DangerButton';
import { FilterContainer } from './filter/FilterContainer';
import styles from './OptionBar.module.css';

export const OptionBar = () => (
  <nav className={`flex-row ${styles.optionBar}`}>
    <FilterContainer />
    <DangerButton text="Clear all" aria-label="Delete everything" />
  </nav>
);
