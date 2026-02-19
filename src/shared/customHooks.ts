import type { Dispatch, SetStateAction } from 'react';
import { postData } from '../api/PostData';
import type { ClientTodos, Todos } from '../shared/Interfaces';

type StateSetter<T> = Dispatch<SetStateAction<T>>;

export function useAddTodos(
  formData: ClientTodos,
  setTodos: StateSetter<Todos[]>,
  setFormData: StateSetter<ClientTodos>,
) {
  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    const finalValue = value === '' ? null : value;

    setFormData({
      ...formData,
      [name]: finalValue,
    });
  }

  const handleAdd = async () => {
    if (!formData.title.trim()) return;

    const postedTodo = await postData(formData);

    setTodos((prev: Todos[]) => [...prev, postedTodo]);

    setFormData({ ...formData, title: '' });
  };

  return {
    handleInputChange,
    handleAdd,
  };
}
