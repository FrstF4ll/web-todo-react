import './App.css';
import { TodoItems, TodosWrapper } from './Todos';
import { OptionBar, TodoInputsLayout } from './UI';
import MainMenuStyles from './MainMenu.module.css';
import { getData } from './Api';
import { Suspense, use } from 'react';
import type { Todos } from './Interfaces';
import { Loader } from './UI';

const StatusMessage = ({ statusMessage }: { statusMessage: string }) => {
  return <p>{statusMessage}</p>;
};

const Title = () => {
  return (
    <header className={`flex-column ${MainMenuStyles.heading}`}>
      <h1>Welcome</h1>
    </header>
  );
};

const todosPromise = getData();

const TodoListContent = () => {
  const todos = use(todosPromise);
  const isEmpty = todos.length === 0;

  if (isEmpty) {
    return <StatusMessage statusMessage="No tasks to complete !" />;
  }

  return (
    <>
      {todos.map((todo: Todos) => (
        <TodoItems key={todo.id} source={todo} />
      ))}
    </>
  );
};

const TodosContainer = () => {
  return (
    <TodosWrapper>
      <Suspense fallback={<Loader />}>
        {/* On appelle le composant qui contient le use() */}
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
