import './App.css';
import { TodosContainer } from './Todos/TodosContainer';
import { OptionBar } from './UI/OptionBar';
import { MainMenuWrapper } from './UI/MainMenuWrapper';
import { TodoListContent } from './Todos/TodoListContent';
import { TodoForm } from './UI/TodoForm';
const App = () => {
  return (
    <main>
      <MainMenuWrapper>
        <TodoForm />
      </MainMenuWrapper>
      <OptionBar />
      <TodosContainer>
        <TodoListContent />
      </TodosContainer>
    </main>
  );
};

export default App;
