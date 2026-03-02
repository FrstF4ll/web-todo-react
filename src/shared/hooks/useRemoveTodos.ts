import type { SetStateAction } from 'react';
import { deleteData } from '../../api/DeleteData';
import type { Dispatch } from 'react';
import type { Todos } from '../Interfaces';

type StateSetter<T> = Dispatch<SetStateAction<T>>;

export function useRemoveTodos(
  setTodos: StateSetter<Todos[]>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
) {
  const handleRemove = async (id: number) => {
    setError(null);
    try {
      await deleteData(id);

      setTodos((currentTodos: Todos[]) =>
        currentTodos.filter((todo) => todo.id !== id),
      );
    } catch (err) {
      setError((err as Error).message || 'Failed to remove task');
      console.error('Delete failed:', err);
    }
  };

  return {
    handleRemove,
  };
}
