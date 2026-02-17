import type { ReactNode } from 'react';
import todoListStyles from './TodoList.module.css';

export const TodosWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ul className={`flex-column ${todoListStyles.todoList}`}>{children}</ul>
  );
};
