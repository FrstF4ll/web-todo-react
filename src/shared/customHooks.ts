import type { Dispatch, SetStateAction } from 'react';
import { postData } from '../api/PostData';
import type { ClientTodos, Todos } from '../shared/Interfaces';
import { useState } from 'react';

type StateSetter<T> = Dispatch<SetStateAction<T>>;

export function useAddTodos(
  formData: ClientTodos,
  setTodos: StateSetter<Todos[]>,
  setFormData: StateSetter<ClientTodos>,
) {
  const [error, setError] = useState<string | null>(null);

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    const finalValue = value === '' ? null : value;

    if (error) setError(null);

    setFormData({
      ...formData,
      [name]: finalValue,
    });
  }

  const handleAdd = async () => {
    setError(null);

    if (!formData.title.trim()) {
      setError('Please enter a title');
      return;
    }

    try {
      const postedTodo = await postData(formData);
      setTodos((prev: Todos[]) => [...prev, postedTodo]);

      setFormData({
        title: '',
        content: '',
        due_date: null,
        done: false,
      });
    } catch (err: any) {
      setError("Server error: Could not save the todo.");
    }
  };

  return {
    handleInputChange,
    handleAdd,
    error,
  };
}