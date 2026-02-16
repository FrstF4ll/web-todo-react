import { DangerButton } from './Atom';

import mainMenuStyles from './MainMenu.module.css';
import optionBarStyles from './OptionBar.module.css';

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

export const TodoInputsLayout = () => {
  return (
    <form className={`flex-column ${mainMenuStyles.todoInputs}`}>
      <TodoInputs />
    </form>
  );
};

export const OptionBar = () => (
  <nav className={`flex-row ${optionBarStyles.optionBar}`}>
    <div>Filter</div>
    <DangerButton text="Clear all" aria-label="Delete everything" />
  </nav>
);
