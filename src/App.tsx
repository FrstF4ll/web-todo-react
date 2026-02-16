import './App.css';
import { TodoItems, TodoList } from './Todos';
import { OptionBar, TodoInputsLayout } from './UI';
import MainMenuStyles from './MainMenu.module.css';

const Title = () => {
  return (
    <header className={`flex-column ${MainMenuStyles.heading}`}>
      <h1>Welcome</h1>
      <p className="status-message">Status message</p>
    </header>
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
      <TodoList>
        <TodoItems />
      </TodoList>
    </main>
  );
};

export default App;
