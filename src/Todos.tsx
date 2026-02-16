import type { ReactNode } from 'react';
import type { TodoItemsProps } from './Interfaces';
import mainMenuStyles from './MainMenu.module.css';
import optionBarStyles from './OptionBar.module.css';
import todoListStyles from './TodoList.module.css';

const TodoInputs = () => {
  return (
    <>
      <div className={mainMenuStyles.inputWrapper}>
        <input type="text" placeholder="Enter title" />
        <input type="date" />
      </div>
      <textarea placeholder="Enter a description..." />
      <button type="button" className={mainMenuStyles.addTodo}>
        Add to list
      </button>
    </>
  );
};

const DangerButton = ({ text, ...props }: { text: string }) => (
  <button className="danger-button" {...props}>
    {text}
  </button>
);

export const TodoList = ({ children }: { children: ReactNode }) => (
  <ul className={`flex-column ${todoListStyles.todoList}`}>{children}</ul>
);

export const OptionBar = () => (
  <nav className={`flex-row ${optionBarStyles.optionBar}`}>
    <div>Filter</div>
    <DangerButton text="Clear all" aria-label="Delete everything" />
  </nav>
);

export const TodoItems = ({ title, dueDate }: TodoItemsProps) => {
  const displayDueDate = dueDate || 'No date';

  return (
    <li className={`${todoListStyles.todoItem} flex-row`}>
      <span>
        <input type="checkbox" />
        {title}
      </span>
      <span>
        {displayDueDate}
        <DangerButton text="X" aria-label={`Delete task ${title}`} />
      </span>
    </li>
  );
};
export const TodoInputsLayout = () => {
  return (
    <form className={`flex-column ${mainMenuStyles.todoInputs}`}>
      <TodoInputs />
    </form>
  );
};
