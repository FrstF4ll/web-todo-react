import { TodosWrapper } from './TodosWrapper';
import { Suspense } from 'react';
import { TodoListContent } from './TodoListContent';
import { Loader } from '../UI/Loader';

export const TodosContainer = () => {
  return (
    <TodosWrapper>
      <Suspense fallback={<Loader />}>
        <TodoListContent />
      </Suspense>
    </TodosWrapper>
  );
};
