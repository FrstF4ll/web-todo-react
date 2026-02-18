import s from './MainMenu.module.css';
import { type ReactNode } from 'react';
import { Title } from './Title';

export const MainMenuWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className={`flex-column ${s.mainMenu}`}>
      <Title />
      {children}
    </section>
  );
};
