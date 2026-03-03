import './App.css';
import { TodosContainer } from './ui/todos/container/TodosContainer';
import { OptionBar } from './ui/menu/option-bar/OptionBar';
import { MainMenuWrapper } from './ui/menu/wrapper/MainMenuWrapper';
import { AddTodoButton } from './ui/menu/inputs/AddTodoButton';
import { TodoForm } from './ui/menu/inputs/TodoForm';
import { TodoInputs } from './ui/menu/inputs/TodoInputs';
import { TodoTextarea } from './ui/menu/inputs/TodoTextarea';
import { getData } from './api/GetData';
import type { Todos } from './shared/Interfaces';
import { TodoWrapper } from './ui/todos/items/TodoWrapper';
import { StatusMessage } from './ui/other/message/StatusMessage';
import mainMenuStyles from './ui/menu/MainMenu.module.css';
import { ErrorMessage } from './ui/other/message/ErrorMessage';
import { useEffect } from 'react';
import { useFormStore } from './useFormStore';
import { useFilterStore } from './useFilterStore';
import { useShallow } from 'zustand/shallow';

const todosPromise = getData();

const App = () => {
  const formData = useFormStore((s) => s.formData);
  const handleInputChange = useFormStore((s) => s.handleInputChange);
  const handleAdd = useFormStore((s) => s.handleAdd);
  const setTodos = useFormStore((s) => s.setTodos);
  const todos = useFormStore((s) => s.todos);
  const handleRemove = useFormStore((s) => s.handleRemove);
  const handleUpdate = useFormStore((s) => s.handleUpdate);
  const setError = useFormStore((s) => s.setError);
  const error = useFormStore((s) => s.error);
  const filteredTodos = useFilterStore(
    useShallow((state) => state.filterTodos(todos)),
  );
  const getOptionClassName = useFilterStore((s) => s.getOptionClassName);
  const sorting = useFilterStore((s) => s.sorting);
  const setSorting = useFilterStore((s) => s.setSorting);
  const handleRemoveAll = useFormStore((s) => s.handleRemoveAll)

  useEffect(() => {
    todosPromise
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <main>
      {error && (
        <ErrorMessage message={error.message} onClose={() => setError(null)} />
      )}
      <MainMenuWrapper>
        {todos.length === 0 && (
          <StatusMessage statusMessage="No tasks to complete !" />
        )}
        <TodoForm onSave={handleAdd}>
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
      <OptionBar
        filter={sorting}
        onFilterChange={setSorting}
        getOptionClassName={getOptionClassName}
        onDanger={handleRemoveAll}
      />
      <TodosContainer>
        {filteredTodos.map((todo: Todos) => (
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
