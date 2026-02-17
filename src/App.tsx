import './App.css';
import { TodosWrapper } from './Todos';
import { TodoListContent } from './TodoListContent';
import { OptionBar, TodoInputsLayout } from './UI';
import MainMenuStyles from './MainMenu.module.css';
import { Suspense } from 'react';
import { Loader } from './UI';

const Title = () => {
  return (
    <header className={`flex-column ${MainMenuStyles.heading}`}>
      <h1>Welcome</h1>
    </header>
  );
};

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
      <section className={`flex-column ${MainMenuStyles.mainMenu}`}>
        <Title />
        <TodoInputsLayout />
      </section>

      <OptionBar />

      <TodosContainer />
    </main>
  );
};

export default App;
