import mainMenuStyles from './MainMenu.module.css';

export const TodoInputs = () => {
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
