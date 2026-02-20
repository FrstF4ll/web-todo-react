import styles from '../TodoList.module.css';
import type { Todos } from '../../../shared/Interfaces';
import type { ReactNode } from 'react';
import { TodoTitle } from './TodoTitle';
import { TodoCheckbox } from './TodoCheckbox';

export const TodoItems = ({
  source,
  children,
}: {
  source: Todos;
  children: ReactNode;
}) => {
  return (
    <li className={`${styles.todoItem} flex-row`}>
      <TodoTitle title={source.title}>
        <TodoCheckbox isDone={source.done}></TodoCheckbox>
      </TodoTitle>
      <span>{source.content}</span>
      <span>
        {source.due_date}
        {children}
      </span>
    </li>
  );
};
