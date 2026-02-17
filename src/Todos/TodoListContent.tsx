import { getData } from '../API/GetData';
import { use } from 'react';
import { TodoItems } from './TodoItems';
import type { Todos } from '../Interfaces';
import { StatusMessage } from '../Atom';

const todosPromise = getData();

export const TodoListContent = () => {
  const initialTodos = use(todosPromise);
  const isEmpty = initialTodos.length === 0;

  if (isEmpty) {
    return <StatusMessage statusMessage="No tasks to complete !" />;
  }
  return (
    <>
      {initialTodos.map((todo: Todos) => (
        <TodoItems key={todo.id} source={todo} />
      ))}
    </>
  );
};
