import type { ReactNode } from 'react';

const TodoInputs = () => {
  return (
    <>
      <div id="date-title-wrapper">
        <input type="text" placeholder="Enter title" />
        <input type="date" />
      </div>
      <textarea placeholder="Enter a description..." />
      <button type="button">Add to list</button>
    </>
  );
};

export const TodoList = ({ children }: { children: ReactNode }) => (
  <ul id="todo-list">{children}</ul>
);
export const TodoItems = ({ title, dueDate}: { title: string, dueDate?: string }) => {

  if(!dueDate){
    dueDate = "No due date"
  }

  return (
  <li className="todo-item flex-row">
    <span>
      <input type="checkbox" />
      {title}
    </span>
    <span>
      {dueDate}<button>X</button>
    </span>
  </li>
);
}
export const TodoInputsLayout = () => {
  return (
    <form id="todo-inputs" className="flex-column">
      <TodoInputs />
    </form>
  );
};
