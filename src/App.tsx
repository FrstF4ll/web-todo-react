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
import { StatusMessage } from './ui/other/message/StatusMessage';
import mainMenuStyles from './ui/menu/MainMenu.module.css';
import { ErrorMessage } from './ui/other/message/ErrorMessage';
import { useAddTodos } from './shared/hooks/useAddTodos';
import { useEffect } from 'react';
import { useUpdateTodos } from './shared/hooks/useUpdateTodos';
import { useRemoveTodos } from './shared/hooks/useRemoveTodos';
import { FILTER } from './shared/variable';
import { useFilterTodos } from './shared/hooks/useFilterTodos';
import { type SortOption } from './shared/hooks/useOptionsDisplay';
import { useOptionsDisplay } from './shared/hooks/useOptionsDisplay';

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
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<SortOption[]>([FILTER.ANY]);
  const filteredTodos = useFilterTodos(filter, todos);
  const { toggleOption, getOptionClassName } = useOptionsDisplay(
    filter,
    setFilter,
  );

  const {
    handleInputChange,
    handleAdd,
    error: addError,
    setError: setAddError,
  } = useAddTodos(formData, setTodos, setFormData);
  const {
    error: updateError,
    setError: setUpdateError,
    handleUpdate,
  } = useUpdateTodos(todos, setTodos);

  const {
    error: removeError,
    setError: setRemoveError,
    handleRemove,
  } = useRemoveTodos(setTodos);

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
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
      {addError && (
        <ErrorMessage
          message={addError}
          onClose={() => {
            setAddError(null);
          }}
        />
      )}
      {updateError && (
        <ErrorMessage
          message={`Update failed: ${updateError}`}
          onClose={() => setUpdateError(null)}
        />
      )}
      {removeError && (
        <ErrorMessage
          message={`Deletion failed: ${removeError}`}
          onClose={() => setRemoveError(null)}
        />
      )}
      <MainMenuWrapper>
        {filteredTodos.length === 0 && (
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
        filter={filter}
        onFilterChange={toggleOption}
        getOptionClassName={getOptionClassName}
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
