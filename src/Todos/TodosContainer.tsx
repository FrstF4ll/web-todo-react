import { TodosWrapper } from './TodosWrapper';
import { Suspense, type ReactNode } from 'react';
import { Loader } from '../UI/Loader';

export const TodosContainer = ({ children }: { children: ReactNode }) => {
  return (
    <TodosWrapper>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </TodosWrapper>
  );
};
