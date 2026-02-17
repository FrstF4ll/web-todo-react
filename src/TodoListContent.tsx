import { getData } from './API/GetData';
import { use } from 'react';
import { TodoItems } from './Todos';
import type { Todos } from './Interfaces';
import { StatusMessage } from './Atom';

const todosPromise = getData();

export const TodoListContent = () => {
  const todos = use(todosPromise);
  const isEmpty = todos.length === 0;

  if (isEmpty) {
    return <StatusMessage statusMessage="No tasks to complete !" />;
  }

  return (
    <>
      {todos.map((todo: Todos) => (
        <TodoItems key={todo.id} source={todo} />
      ))}
    </>
  );
};
