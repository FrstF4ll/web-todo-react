import { useState, useEffect } from 'react';

interface EditableContentProps {
  value: string;
  type: string;
  onSave: (newValue: string) => void;
}

export const EditableContent = ({
  value,
  type,
  onSave,
}: EditableContentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  const handleBlur = () => {
    setIsEditing(false);
    if (draft !== value) onSave(draft);
  };

  return isEditing ? (
    <input
      autoFocus
      type={type}
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={(e) => e.key === 'Enter' && handleBlur()}
    />
  ) : (
    <p onClick={() => setIsEditing(true)} style={{ cursor: 'pointer' }}>
      {draft}
    </p>
  );
};
