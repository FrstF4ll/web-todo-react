import type { SetStateAction } from 'react';
import { deleteData } from '../../api/DeleteData';
import type { Dispatch } from 'react';
import type { Todos } from '../Interfaces';
import { useState } from 'react';

type StateSetter<T> = Dispatch<SetStateAction<T>>;

export function useRemoveTodos(setTodos: StateSetter<Todos[]>) {
  const [error, setError] = useState<string | null>(null);

  const handleRemove = async (id: number) => {
    setError(null);
    try {
      await deleteData(id);

      setTodos((currentTodos: Todos[]) =>
        currentTodos.filter((todo) => todo.id !== id),
      );
    } catch (err: any) {
      const message = err.message || 'Cannot delete task';
      setError(message);
      console.error('Delete failed:', err);
    }
  };

  return {
    handleRemove,
    error,
    setError,
  };
}
