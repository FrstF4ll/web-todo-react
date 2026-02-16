import type { ReactNode } from 'react';

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

const DangerButton = ({ placeholder }: { placeholder: string }) => (
  <button className="danger-button">{placeholder}</button>
);

export const TodoList = ({ children }: { children: ReactNode }) => (
  <ul id="todo-list" className="flex-column">
    {children}
  </ul>
);

export const OptionBar = () => (
  <nav id="option-bar" className="flex-row">
    <div>Filter</div>
    <DangerButton placeholder="Clear all" />
  </nav>
);

export const TodoItems = ({
  title,
  dueDate,
}: {
  title: string;
  dueDate?: string;
}) => {
  const displayDueDate = dueDate || "No date"


  return (
    <li className="todo-item flex-row">
      <span>
        <input type="checkbox" />
        {title}
      </span>
      <span>
        {displayDueDate}
        <DangerButton placeholder="X" />
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
