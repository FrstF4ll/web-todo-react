import type { ReactNode } from 'react';
interface TodoTitleProps {
  title: string;
  children: ReactNode;
}

export const TodoTitle = ({ title, children }: TodoTitleProps) => (
  <span>
    {children}
    {title}
  </span>
);
