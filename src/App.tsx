import './App.css';
import { TodosContainer } from './Todos/TodosContainer';
import { OptionBar } from './UI/OptionBar';
import { MainMenuWrapper } from './UI/MainMenuWrapper';
import { AddTodoButton, TodoForm } from './UI/TodoForm';
import { TodoInputs, TodoTextarea } from './UI/TodoInputs';
import { useState } from 'react';
import type { ClientTodos } from './Interfaces';
import { postData } from './API/PostData';
import mainMenuStyles from './UI/MainMenu.module.css';
import { getData } from './API/GetData';
import { use } from 'react';
import type { Todos } from './Interfaces';
import { TodoItems } from './Todos/TodoItems';
import { StatusMessage } from './Atom';

const newTodo: ClientTodos = {
  title: '',
  content: '',
  due_date: '',
  done: false,
};

const todosPromise = getData();

const App = () => {
  const initialTodos = use(todosPromise);

  const [todos, setTodos] = useState(initialTodos);
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

  const handleClick = async () => {
    if (formData.due_date === '') {
      formData.due_date = null;
    }
    if (!formData.title.trim()) {
      return;
    }

    const postedTodo = await postData(formData);

    setTodos((prev: Todos[]) => [...prev, postedTodo]);
  };

  const isEmpty = () => {
    const initialTodos = use(todosPromise);
    const TodoLength = initialTodos.length === 0;
    if (TodoLength) {
      return <StatusMessage statusMessage="No tasks to complete !" />;
    }
  };

  return (
    <main>
      <MainMenuWrapper>
        {isEmpty()}
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
              value={formData.due_date ?? ''}
              event={handleInputChange}
            />
          </div>
          <TodoTextarea
            placeholder="Enter description"
            name="content"
            value={formData.content ?? ''}
            event={handleInputChange}
          />
          <AddTodoButton event={handleClick} />
        </TodoForm>
      </MainMenuWrapper>
      <OptionBar />
      <TodosContainer>
        {todos.map((todo: Todos) => (
          <TodoItems key={todo.id} source={todo} />
        ))}
      </TodosContainer>
    </main>
  );
};

export default App;
