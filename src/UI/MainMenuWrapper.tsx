import { TodoInputsLayout } from './TodoInputsLayout';
import MainMenuStyles from './MainMenu.module.css';
import { StatusMessage } from '../Atom';
import { use } from 'react';
import { todosPromise } from '../Todos/TodoListContent';

const Title = () => {
  return (
    <header className={`flex-column ${MainMenuStyles.heading}`}>
      <h1>Welcome</h1>
    </header>
  );
};

const isEmpty = () => {
  const initialTodos = use(todosPromise);
  const TodoLength = initialTodos.length === 0;
  if (TodoLength) {
    return <StatusMessage statusMessage="No tasks to complete !" />;
  }
};

export const MainMenuWrapper = () => {
  return (
    <section className={`flex-column ${MainMenuStyles.mainMenu}`}>
      <Title />
      {isEmpty()}
      <TodoInputsLayout />
    </section>
  );
};
