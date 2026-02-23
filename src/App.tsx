import './App.css';
import { TodosContainer } from './ui/todos/container/TodosContainer';
import { OptionBar } from './ui/menu/option-bar/OptionBar';
import { MainMenuWrapper } from './ui/menu/wrapper/MainMenuWrapper';
import { AddTodoButton } from './ui/menu/inputs/AddTodoButton';
import { TodoForm } from './ui/menu/inputs/TodoForm';
import { TodoInputs } from './ui/menu/inputs/TodoInputs';
import { TodoTextarea } from './ui/menu/inputs/TodoTextarea';
import { useState } from 'react';
import type { ClientTodos } from './shared/Interfaces';
import { getData } from './api/GetData';
import type { Todos } from './shared/Interfaces';
import { TodoWrapper } from './ui/todos/items/TodoWrapper';
import { StatusMessage } from './ui/other/atoms/StatusMessage';
import mainMenuStyles from './ui/menu/MainMenu.module.css';
import { deleteData } from './api/DeleteData';
import { ErrorMessage } from './ui/other/error/ErrorMessage';
import { useAddTodos } from './shared/customHooks';
import { useEffect } from 'react';
import { patchData } from './api/PatchData';

const newTodo: ClientTodos = {
  title: '',
  content: '',
  due_date: null,
  done: false,
};

const todosPromise = getData();

const App = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [formData, setFormData] = useState<ClientTodos>(newTodo);

  const {
    handleInputChange,
    handleAdd,
    error: addError,
  } = useAddTodos(formData, setTodos, setFormData);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    todosPromise
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleUpdate = async (id: number, changes: Partial<Todos>) => {
    setError(null);

    if (
      changes.title !== undefined &&
      (!changes.title || changes.title.trim() === '')
    )
      return;

    if (
      changes.content !== undefined &&
      (!changes.content || changes.content.trim() === '')
    ) {
      changes.content = 'No description';
    }

    if (
      changes.due_date !== undefined &&
      (!changes.due_date || changes.due_date === '')
    ) {
      changes.due_date = null;
    }

    try {
      const currentTodo = todos.find((t) => t.id === id);
      if (!currentTodo) return;

      const updatedTodo = { ...currentTodo, ...changes };
      const { id: _, ...dataForApi } = updatedTodo;

      await patchData(dataForApi, id);

      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === id ? updatedTodo : t)),
      );
    } catch (err: any) {
      setError(err.message);
      console.error('Update failed:', err);
    }
  };

  const handleRemove = async (id: number) => {
    try {
      await deleteData(id);
      setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
    } catch (error: any) {
      setError(error.message);
      console.error('Cannot delete task : ', error);
    }
  };

  return (
    <main>
      {error && <ErrorMessage message={error} />}
      {addError && <ErrorMessage message={addError} />}

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
          <TodoWrapper
            key={todo.id}
            source={todo}
            onUpdate={(changes) => handleUpdate(todo.id, changes)}
            onDelete={() => handleRemove(todo.id)}
          />
        ))}
      </TodosContainer>
    </main>
  );
};

export default App;
