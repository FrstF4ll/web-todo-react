import './App.css';
import { TodosContainer } from './Todos/TodosContainer';
import { OptionBar } from './UI/OptionBar';
import { MainMenuWrapper } from './UI/MainMenuWrapper';
import { TodoListContent } from './Todos/TodoListContent';
import { TodoInputs } from './UI/TodoInputs';

const App = () => {
  return (
    <main>
      <MainMenuWrapper>
        <TodoInputs />
      </MainMenuWrapper>
      <OptionBar />
      <TodosContainer>
        <TodoListContent />
      </TodosContainer>
    </main>
  );
};

export default App;
