import mainMenuStyles from './MainMenu.module.css';
import type { ReactNode } from 'react';

export const TodoForm = ({ children }: { children: ReactNode }) => {
  return (
    <form className={`flex-column ${mainMenuStyles.todoInputs}`}>
      {children}
    </form>
  );
};
