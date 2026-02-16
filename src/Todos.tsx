import type { ReactNode } from 'react';
import type { TodoItemsProps } from './Interfaces';
import { DangerButton } from './Atom';
import todoListStyles from './TodoList.module.css';

export const TodoList = ({ children }: { children: ReactNode }) => (
  <ul className={`flex-column ${todoListStyles.todoList}`}>{children}</ul>
);

export const TodoItems = ({ title, dueDate }: TodoItemsProps) => {
  const displayDueDate = dueDate || 'No date';

  return (
    <li className={`${todoListStyles.todoItem} flex-row`}>
      <span>
        <input type="checkbox" />
        {title}
      </span>
      <span>
        {displayDueDate}
        <DangerButton text="X" aria-label={`Delete task ${title}`} />
      </span>
    </li>
  );
};
