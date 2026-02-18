import './App.css';
import { TodosContainer } from './Todos/TodosContainer';
import { OptionBar } from './UI/OptionBar';
import { MainMenuWrapper } from './UI/MainMenuWrapper';
import { AddTodoButton } from './UI/menu/AddTodoButton';
import { TodoForm } from './UI/TodoForm';
import { TodoInputs } from './UI/TodoInputs';
import { TodoTextarea } from './UI/TodoTextarea';
import { useState } from 'react';
import type { ClientTodos } from './shared/Interfaces';
import { postData } from './API/PostData';
import mainMenuStyles from './UI/MainMenu.module.css';
import { getData } from './API/GetData';
import { use } from 'react';
import type { Todos } from './shared/Interfaces';
import { TodoItems } from './Todos/TodoItems';
import { StatusMessage } from './StatusMessage';

const newTodo: ClientTodos = {
  title: '',
  content: '',
  due_date: null,
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
    const finalValue = value === '' ? null : value;

    setFormData({
      ...formData,
      [name]: finalValue,
    });
  }

  const handleClick = async () => {
    if (!formData.title.trim()) {
      return;
    }

    const postedTodo = await postData(formData);
    console.log(postedTodo);

    setTodos((prev: Todos[]) => [...prev, postedTodo]);
  };

  return (
    <main>
      <MainMenuWrapper>
        {todos.length === 0 && (
          <StatusMessage statusMessage="No tasks to complete !" />
        )}
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
