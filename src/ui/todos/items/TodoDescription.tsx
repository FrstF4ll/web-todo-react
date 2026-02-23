import { EditableContent } from './EditableContent';

interface TodoDescriptionProps {
  content: string | null;
  onSave: (newContent: string) => void;
}

export const TodoDescription = ({ content, onSave }: TodoDescriptionProps) => {
  return (
    <EditableContent
      value={content ?? ''}
      type="text"
      tagName="p"
      onSave={onSave}
    />
  );
};
