import { Suspense, type ReactNode } from 'react';
import { Loader } from '../../other/loader/Loader';
import styles from '../TodoList.module.css';

export const TodosContainer = ({ children }: { children: ReactNode }) => {
  return (
    <ul className={`flex-column ${styles.todoList}`}>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </ul>
  );
};
