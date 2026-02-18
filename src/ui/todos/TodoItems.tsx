import styles from './TodoList.module.css';
import type { Todos } from '../../shared/Interfaces';
import type { ReactNode } from 'react';

export const TodoItems = ({
  source,
  children,
}: {
  source: Todos;
  children: ReactNode;
}) => {
  return (
    <li className={`${styles.todoItem} flex-row`}>
      <span>
        <input type="checkbox" defaultChecked={source.done} />
        {source.title}
      </span>
      <span>{source.content}</span>
      <span>
        {source.due_date}
        {children}
      </span>
    </li>
  );
};
