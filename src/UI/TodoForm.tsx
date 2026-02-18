import mainMenuStyles from './MainMenu.module.css';
import type { ClientTodos } from '../Interfaces';
import { useState } from 'react';
import { postData } from '../API/PostData';
import { TodoInputs } from './TodoInputs';

const newTodo: ClientTodos = {
  title: '',
  content: '',
  due_date: '',
  done: false,
};

export const TodoForm = () => {
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
    <form className={`flex-column ${mainMenuStyles.todoInputs}`}>
      <div className={mainMenuStyles.inputWrapper}>
        <TodoInputs
          type="text"
          name="title"
          placeholder="Enter a title"
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
      <textarea
        name="content"
        placeholder="Enter a description..."
        value={formData.content}
        onChange={handleInputChange}
      />
      <button
        type="button"
        className={mainMenuStyles.addTodo}
        onClick={handleClick}
      >
        Add to list
      </button>
    </form>
  );
};
