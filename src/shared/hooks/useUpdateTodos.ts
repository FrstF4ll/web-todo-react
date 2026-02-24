import { useState } from 'react';
import type { Todos } from '../Interfaces';
import { patchData } from '../../api/PatchData';

export function useUpdateTodos(
  todos: Todos[],
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>,
) {
  const [error, setError] = useState<string | null>(null);

  const handleUpdate = async (id: number, changes: Partial<Todos>) => {
    setError(null);

    if (
      changes.title !== undefined &&
      (!changes.title || changes.title.trim() === '')
    )
      return;

    if (
      changes.content !== undefined &&
      (!changes.content || changes.content.trim() === '')
    ) {
      changes.content = 'No description';
    }

    if (
      changes.due_date !== undefined &&
      (!changes.due_date || changes.due_date === '')
    ) {
      changes.due_date = null;
    }

    try {
      const currentTodo = todos.find((t) => t.id === id);
      if (!currentTodo) return;

      const updatedTodo = { ...currentTodo, ...changes };
      const { id: _, ...dataForApi } = updatedTodo;

      await patchData(dataForApi, id);

      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === id ? updatedTodo : t)),
      );
    } catch (err: any) {
      setError(err.message);
      console.error('Update failed:', err);
    }
  };
  return {
    error,
    handleUpdate,
    setError,
  };
}
