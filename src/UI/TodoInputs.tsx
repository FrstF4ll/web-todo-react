import mainMenuStyles from './MainMenu.module.css';
import type { ClientTodos } from '../Interfaces';
import { useState } from 'react';
import { postData } from '../API/PostData';
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
        <input
          name="title"
          type="text"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          name="due_date"
          type="date"
          value={formData.due_date}
          onChange={handleInputChange}
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
