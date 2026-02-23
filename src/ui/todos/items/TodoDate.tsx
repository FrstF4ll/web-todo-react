import { EditableContent } from './EditableContent';

interface TodoDateProps {
  dueDate: string;
  onSave: (newDate: string) => void;
}

export const TodoDate = ({ dueDate, onSave }: TodoDateProps) => {
  if (!dueDate) {
    dueDate = 'No due date';
  }
  return <EditableContent value={dueDate} type="date" onSave={onSave} />;
};
