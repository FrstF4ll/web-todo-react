import mainMenuStyles from './MainMenu.module.css';
import type { ReactNode } from 'react';

export const AddTodoButton = ({
  event,
}: {
  event: React.MouseEventHandler;
}) => {
  return (
    <button type="button" className={mainMenuStyles.addTodo} onClick={event}>
      Add to list
    </button>
  );
};

export const TodoForm = ({ children }: { children: ReactNode }) => {
  return (
    <form className={`flex-column ${mainMenuStyles.todoInputs}`}>
      {children}
    </form>
  );
};
