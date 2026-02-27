import mainMenuStyles from '../MainMenu.module.css';
import type { ReactNode } from 'react';

interface TodoFormProps {
  children: ReactNode;
  onSave: () => void; // Le nom de variable que tu as demandé
}

export const TodoForm = ({ children, onSave }: TodoFormProps) => {
  return (
    <form className={`flex-column ${mainMenuStyles.todoInputs}`} onSubmit={onSave}>
      {children}
    </form>
  );
};
