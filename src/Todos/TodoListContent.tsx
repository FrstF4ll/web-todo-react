import { getData } from '../API/GetData';
import { use } from 'react';
import { TodoItems } from './TodoItems';
import type { Todos } from '../Interfaces';

export const todosPromise = getData();

export const TodoListContent = () => {
  const initialTodos = use(todosPromise);

  return (
    <>
      {initialTodos.map((todo: Todos) => (
        <TodoItems key={todo.id} source={todo} />
      ))}
    </>
  );
};
