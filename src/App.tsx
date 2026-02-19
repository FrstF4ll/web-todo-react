import './App.css';
import { TodosContainer } from './ui/todos/TodosContainer';
import { OptionBar } from './ui/menu/option-bar/OptionBar';
import { MainMenuWrapper } from './ui/menu/wrapper/MainMenuWrapper';
import { AddTodoButton } from './ui/menu/inputs/AddTodoButton';
import { TodoForm } from './ui/menu/inputs/TodoForm';
import { TodoInputs } from './ui/menu/inputs/TodoInputs';
import { TodoTextarea } from './ui/menu/inputs/TodoTextarea';
import { useState } from 'react';
import type { ClientTodos } from './shared/Interfaces';
import { postData } from './api/PostData';
import { getData } from './api/GetData';
import { use } from 'react';
import type { Todos } from './shared/Interfaces';
import { TodoItems } from './ui/todos/TodoItems';
import { StatusMessage } from './ui/other/atoms/StatusMessage';
import mainMenuStyles from './ui/menu/MainMenu.module.css';
import { deleteData } from './api/DeleteData';
import { DangerButton } from './ui/other/atoms/DangerButton';

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

  const handleAdd = async () => {
    if (!formData.title.trim()) {
      return;
    }

    const postedTodo = await postData(formData);
    console.log(postedTodo);

    setTodos((prev: Todos[]) => [...prev, postedTodo]);
  };

  const handleRemove = async (id: number) => {
    await deleteData(id);
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
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
          <AddTodoButton event={handleAdd} />
        </TodoForm>
      </MainMenuWrapper>
      <OptionBar />
      <TodosContainer>
        {todos.map((todo: Todos) => (
          <TodoItems key={todo.id} source={todo}>
            <DangerButton
              text="X"
              aria-label={`Delete task ${todo.title}`}
              onClick={() => handleRemove(todo.id)}
            />
          </TodoItems>
        ))}
      </TodosContainer>
    </main>
  );
};

export default App;
