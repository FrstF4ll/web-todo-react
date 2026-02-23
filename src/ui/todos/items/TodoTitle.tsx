import type { ReactNode } from 'react';
import { EditableContent } from './EditableContent';

interface TodoTitleProps {
  title: string;
  onSave: (newValue: string) => void;
  children: ReactNode;
}
export const TodoTitle = ({ title, onSave, children }: TodoTitleProps) => {
  return (
    <span>
      {children}
      <EditableContent
        value={title}
        type="text"
        onSave={(newVal: string) => onSave(newVal)}
      />
    </span>
  );
};
