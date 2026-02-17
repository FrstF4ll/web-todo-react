import { DangerButton } from '../Atom';
import optionBarStyles from './OptionBar.module.css';

export const OptionBar = () => (
  <nav className={`flex-row ${optionBarStyles.optionBar}`}>
    <div>Filter</div>
    <DangerButton text="Clear all" aria-label="Delete everything" />
  </nav>
);
