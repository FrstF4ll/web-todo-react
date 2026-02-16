import type { ReactNode } from 'react';
import type { TodoItemsProps } from './Interfaces';

const TodoInputs = () => {
  return (
    <>
      <div id="date-title-wrapper">
        <input type="text" placeholder="Enter title" />
        <input type="date" />
      </div>
      <textarea placeholder="Enter a description..." />
      <button type="button" id="add-todo">
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
  <ul id="todo-list" className="flex-column">
    {children}
  </ul>
);

export const OptionBar = () => (
  <nav id="option-bar" className="flex-row">
    <div>Filter</div>
    <DangerButton text="Clear all" aria-label="Delete everything" />
  </nav>
);

export const TodoItems = ({ title, dueDate }: TodoItemsProps) => {
  const displayDueDate = dueDate || 'No date';

  return (
    <li className="todo-item flex-row">
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
    <form id="todo-inputs" className="flex-column">
      <TodoInputs />
    </form>
  );
};
