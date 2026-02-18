import MainMenuStyles from './MainMenu.module.css';
import { type ReactNode } from 'react';

const Title = () => {
  return (
    <header className={`flex-column ${MainMenuStyles.heading}`}>
      <h1>Welcome</h1>
    </header>
  );
};

export const MainMenuWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className={`flex-column ${MainMenuStyles.mainMenu}`}>
      <Title />
      {children}
    </section>
  );
};
