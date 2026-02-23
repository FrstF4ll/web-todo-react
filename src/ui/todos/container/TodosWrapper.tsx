import type { ReactNode } from 'react';
import styles from '../TodoList.module.css';

export const TodosWrapper = ({ children }: { children: ReactNode }) => {
  return <ul className={`flex-column ${styles.todoList}`}>{children}</ul>;
};
