import './App.css';
import { TodoInputs } from './Todos';

const Title = () => {
  return (
    <header className="heading">
      <h1>Welcome</h1>
      <p className="status-message">Status message</p>
    </header>
  );
};

const App = () => {
  return (
    <main>
      <section className="flex-column">
        <Title />
        <TodoInputs />
      </section>
    </main>
  );
};

export default App;
