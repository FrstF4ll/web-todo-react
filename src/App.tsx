import './App.css';
import { TodoInputs } from './Todos';

const App = () => {
  return (
    <main>
      <section className='flex-column'>
        <header className='heading'>
          <h1>Welcome</h1>
          <p className='status-message'>Status message</p>
        </header>
        <TodoInputs/>
      </section>
    </main>
  );
};

export default App;
