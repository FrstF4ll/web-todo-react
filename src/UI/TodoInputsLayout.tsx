import { TodoInputs } from './TodoInputs';
import mainMenuStyles from './MainMenu.module.css';

export const TodoInputsLayout = () => {
  return (
    <form className={`flex-column ${mainMenuStyles.todoInputs}`}>
      <TodoInputs />
    </form>
  );
};
