import './App.css';
import { TodoInputsLayout, TodoItems, TodoList } from './Todos';

const Title = () => {
  return (
    <header id="heading" className="flex-column">
      <h1>Welcome</h1>
      <p className="status-message">Status message</p>
    </header>
  );
};

const App = () => {
  return (
    <main>
      <section id="main-menu" className="flex-column">
        <Title />
        <TodoInputsLayout />
      </section>
      <TodoList>
        <TodoItems title="Buy milk" />
        <TodoItems title="Finish React project" />
        <TodoItems title="Walk the dog"  dueDate='15.11.2027'/>
      </TodoList>
    </main>
  );
};

export default App;
