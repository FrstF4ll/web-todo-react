import { EditableContent } from './EditableContent';

interface TodoDescriptionProps {
  content: string | null;
  onSave: (newContent: string) => void;
}

export const TodoDescription = ({ content, onSave }: TodoDescriptionProps) => {
  return (
    <EditableContent
      // On convertit le null en chaîne vide pour l'input
      value={content ?? ''}
      type="text"
      tagName="p"
      onSave={onSave}
    />
  );
};
