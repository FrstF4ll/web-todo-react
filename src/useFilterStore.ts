import { create } from 'zustand';
import type { Todos } from './shared/Interfaces';
import { FILTER } from './shared/variable';

interface FilterState {
  sorting: SortOption[];
  compareByName: (a: Todos, b: Todos) => number;
  compareByDate: (a: Todos, b: Todos) => number;
  setSorting: (options: SortOption) => void;
  getOptionClassName: (option: SortOption) => string;
}

export type SortOption = (typeof SORT_OPTIONS)[number];

export const SORT_OPTIONS = [
  FILTER.ANY,
  FILTER.BY_NAME,
  FILTER.BY_DATE,
  FILTER.NOT_DONE,
  FILTER.DONE,
] as const;

export const useFilterStore = create<FilterState>((set, get) => ({
  sorting: [FILTER.ANY],

  compareByName: (a: Todos, b: Todos) =>
    a.title.localeCompare(b.title, 'fr', {
      numeric: true,
      sensitivity: 'base',
      caseFirst: 'upper',
    }),

  compareByDate: (a: Todos, b: Todos) => {
    const timeA = a.due_date ? new Date(a.due_date).getTime() : Infinity;
    const timeB = b.due_date ? new Date(b.due_date).getTime() : Infinity;
    return timeA - timeB;
  },

  setSorting: (option: SortOption) =>
    set((state) => {
      if (option === FILTER.ANY) return { sorting: [FILTER.ANY] };

      const cleanPrev = state.sorting.filter((item) => item !== FILTER.ANY);
      const isAlreadySelected = cleanPrev.includes(option);

      let nextSorting: SortOption[];
      if (isAlreadySelected) {
        const filtered = cleanPrev.filter((item) => item !== option);
        nextSorting = filtered.length === 0 ? [FILTER.ANY] : filtered;
      } else {
        nextSorting = [...cleanPrev, option];
      }

      return { sorting: nextSorting };
    }),

  getOptionClassName: (option: SortOption) => {
    const { sorting } = get();
    const isSelected = sorting.includes(option);
    return isSelected ? 'option selectedOption' : 'option';
  },
}));
