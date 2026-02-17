import './App.css';
import { TodosContainer } from './Todos/TodosContainer';
import { OptionBar } from './UI/OptionBar';
import { MainMenuWrapper } from './UI/MainMenuWrapper';

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
