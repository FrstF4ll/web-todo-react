import type { ReactNode } from 'react';
import { use } from 'react';
import { DangerButton } from './Atom';
import todoListStyles from './TodoList.module.css';
import { getData } from './Api';
import type { Todos } from './Interfaces';

const todosPromise = getData();

export const TodoList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className={`flex-column ${todoListStyles.todoList}`}>{children}</ul>
  );
};

export const TodoItems = () => {
  const todos = use(todosPromise);
  return todos.map((todo: Todos) => {
    return (
      <li key={todo.id} className={`${todoListStyles.todoItem} flex-row`}>
        <span>
          <input type="checkbox" defaultChecked={todo.done} />
          {todo.title}
        </span>
        <span>
          {todo.due_date}
          <DangerButton text="X" aria-label={`Delete task ${todo.title}`} />
        </span>
      </li>
    );
  });
};
