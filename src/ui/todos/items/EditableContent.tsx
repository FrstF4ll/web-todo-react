import { useState, useEffect } from 'react';

import type { ElementType } from 'react';

interface EditableContentProps {
  value: string;
  type: string;
  onSave: (newValue: string) => void;
  tagName?: ElementType;
}

export const EditableContent = ({
  value,
  type,
  onSave,
  tagName: Tag = 'p',
}: EditableContentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const [year, month, day] = value.split('-');
  const formatted = `${day}/${month}/${year}`;

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
      value={type === 'date' && !/^\d{4}-\d{2}-\d{2}$/.test(draft) ? '' : draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={handleBlur}
    />
  ) : (
    <Tag onClick={() => setIsEditing(true)} style={{ cursor: 'pointer' }}>
      {type === 'date' ? formatted : value}{' '}
    </Tag>
  );
};
