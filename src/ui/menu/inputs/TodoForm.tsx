import mainMenuStyles from '../MainMenu.module.css';
import type { ReactNode } from 'react';

interface TodoFormProps {
  children: ReactNode;
  onSave: () => void; // Le nom de variable que tu as demandé
}

export const TodoForm = ({ children, onSave }: TodoFormProps) => {
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    onSave();
  };

  return (
    <form
      className={`flex-column ${mainMenuStyles.todoInputs}`}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};
