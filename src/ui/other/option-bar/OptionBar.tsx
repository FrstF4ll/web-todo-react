import { DangerButton } from '../../DangerButton';
import styles from './OptionBar.module.css';

export const OptionBar = () => (
  <nav className={`flex-row ${styles.optionBar}`}>
    <div>Filter</div>
    <DangerButton text="Clear all" aria-label="Delete everything" />
  </nav>
);
