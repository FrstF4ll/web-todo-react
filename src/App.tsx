import './App.css';
import { TodosContainer } from './Todos/TodosContainer';
import { OptionBar } from './UI/OptionBar';
import { MainMenuWrapper } from './UI/MainMenuWrapper';
import { TodoListContent } from './Todos/TodoListContent';
import { AddTodoButton, TodoForm } from './UI/TodoForm';
import { TodoInputs, TodoTextarea } from './UI/TodoInputs';
import { useState } from 'react';
import type { ClientTodos } from './Interfaces';
import { postData } from './API/PostData';
import mainMenuStyles from './UI/MainMenu.module.css';

const newTodo: ClientTodos = {
  title: '',
  content: '',
  due_date: '',
  done: false,
};

const App = () => {
  const [formData, setFormData] = useState(newTodo);

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleClick = () => {
    postData(formData);
  };

  return (
    <main>
      <MainMenuWrapper>
        <TodoForm>
          <div className={mainMenuStyles.inputWrapper}>
            <TodoInputs
              type="text"
              placeholder="Enter title"
              name="title"
              value={formData.title}
              event={handleInputChange}
            />
            <TodoInputs
              type="date"
              name="due_date"
              value={formData.due_date}
              event={handleInputChange}
            />
          </div>
          <TodoTextarea
            placeholder="Enter description"
            name="content"
            value={formData.content}
            event={handleInputChange}
          />
          <AddTodoButton event={handleClick} />
        </TodoForm>
      </MainMenuWrapper>
      <OptionBar />
      <TodosContainer>
        <TodoListContent />
      </TodosContainer>
    </main>
  );
};

export default App;
