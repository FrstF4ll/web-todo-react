import './App.css';
import { TodoInputsLayout } from './Todos';

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
    </main>
  );
};

export default App;
