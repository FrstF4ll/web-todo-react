import { EditableContent } from './EditableContent';

interface TodoDateProps {
  dueDate: string;
  onSave: (newDate: string) => void;
}

export const TodoDate = ({ dueDate, onSave }: TodoDateProps) => {
  return <EditableContent value={dueDate} type="date" onSave={onSave} />;
};
