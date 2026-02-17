import './App.css';
import { TodosWrapper } from './Todos';
import { TodoListContent } from './TodoListContent';
import MainMenuStyles from './UI/MainMenu.module.css';
import { Suspense } from 'react';
import { Loader } from './UI/Loader';
import { TodoInputsLayout } from './UI/TodoInputsLayout';
import { OptionBar } from './UI/OptionBar';
import { MainTitleWrapper } from './UI/MainTitleWrapper';

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
      <MainTitleWrapper />

      <OptionBar />

      <TodosContainer />
    </main>
  );
};

export default App;
