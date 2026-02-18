import { TodosWrapper } from './TodosWrapper';
import { Suspense, type ReactNode } from 'react';
import { Loader } from '../other/loader/Loader';

export const TodosContainer = ({ children }: { children: ReactNode }) => {
  return (
    <TodosWrapper>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </TodosWrapper>
  );
};
