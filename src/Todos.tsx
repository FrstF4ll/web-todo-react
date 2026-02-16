import type { ReactNode } from 'react';
import { DangerButton } from './Atom';
import todoListStyles from './TodoList.module.css';
import type { Todos } from './Interfaces';

export const TodosWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ul className={`flex-column ${todoListStyles.todoList}`}>{children}</ul>
  );
};

export const TodoItems = ({ source }: { source: Todos }) => {
  return (
    <li className={`${todoListStyles.todoItem} flex-row`}>
      <span>
        <input type="checkbox" defaultChecked={source.done} />
        {source.title}
      </span>
      <span>
        {source.due_date}
        <DangerButton text="X" aria-label={`Delete task ${source.title}`} />
      </span>
    </li>
  );
};
