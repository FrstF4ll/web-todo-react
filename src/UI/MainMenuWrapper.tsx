import { TodoInputsLayout } from './TodoInputsLayout';
import MainMenuStyles from './MainMenu.module.css';

const Title = () => {
  return (
    <header className={`flex-column ${MainMenuStyles.heading}`}>
      <h1>Welcome</h1>
    </header>
  );
};

export const MainMenuWrapper = () => {
  return (
    <section className={`flex-column ${MainMenuStyles.mainMenu}`}>
      <Title />
      <TodoInputsLayout />
    </section>
  );
};
