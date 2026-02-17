import './App.css';
import { TodosWrapper } from './Todos';
import { TodoListContent } from './TodoListContent';
import { Suspense } from 'react';
import { Loader } from './UI/Loader';
import { OptionBar } from './UI/OptionBar';
import { MainMenuWrapper } from './UI/MainMenuWrapper';

const TodosContainer = () => {
  return (
    <TodosWrapper>
      <Suspense fallback={<Loader />}>
        <TodoListContent />
      </Suspense>
    </TodosWrapper>
  );
};

const App = () => {
  return (
    <main>
      <MainMenuWrapper />
      <OptionBar />
      <TodosContainer />
    </main>
  );
};

export default App;
