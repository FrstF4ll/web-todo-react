import type { Todos } from '../Interfaces';
import { FILTER } from '../variable';
import { type SortOption } from './useOptionsDisplay';
import { useMemo } from 'react';

export function useFilterTodos(filter: SortOption[], todos: Todos[]) {
  return useMemo(() => {
    let result = [...todos];

    const compareByName = (a: Todos, b: Todos) =>
      a.title.localeCompare(b.title, 'fr', {
        numeric: true,
        sensitivity: 'base',
        caseFirst: 'upper',
      });

    const compareByDate = (a: Todos, b: Todos) => {
      const timeA = a.due_date ? new Date(a.due_date).getTime() : Infinity;
      const timeB = b.due_date ? new Date(b.due_date).getTime() : Infinity;
      return timeA - timeB;
    };

    if (filter.includes(FILTER.DONE)) result = result.filter((t) => t.done);
    if (filter.includes(FILTER.NOT_DONE))
      result = result.filter((t) => !t.done);

    if (filter.includes(FILTER.BY_NAME)) result.sort(compareByName);
    if (filter.includes(FILTER.BY_DATE)) result.sort(compareByDate);

    return result;
  }, [filter, todos]);
}
