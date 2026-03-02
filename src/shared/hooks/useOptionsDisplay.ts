import type { Dispatch, SetStateAction } from 'react';
import styles from '../../ui/menu/option-bar/filter/TodoFilter.module.css';
import { FILTER } from '../variable';

export const SORT_OPTIONS = [
  FILTER.ANY,
  FILTER.BY_NAME,
  FILTER.BY_DATE,
  FILTER.NOT_DONE,
  FILTER.DONE,
] as const;
export type SortOption = (typeof SORT_OPTIONS)[number];

type StateSetter<T> = Dispatch<SetStateAction<T>>;

export function useOptionsDisplay(
  selected: SortOption[],
  setSelected: StateSetter<SortOption[]>,
) {
  const toggleOption = (option: SortOption) => {
    setSelected((prev: SortOption[]) => {
      if (option === FILTER.ANY) return [FILTER.ANY];

      const cleanPrev = prev.filter((item) => item !== FILTER.ANY);
      const isAlreadySelected = cleanPrev.includes(option);

      if (isAlreadySelected) {
        const filtered = cleanPrev.filter((item) => item !== option);
        return filtered.length === 0 ? [FILTER.ANY] : filtered;
      }

      return [...cleanPrev, option];
    });
  };

  const getOptionClassName = (option: SortOption) => {
    const classes = [styles.option];
    if (selected.includes(option)) {
      classes.push(styles.selectedOption);
    }
    return classes.join(' ');
  };

  return {
    toggleOption,
    getOptionClassName,
  };
}
