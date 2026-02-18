import type { ChangeEventHandler } from 'react';

interface TodoTextareaProps {
  type?: string;
  placeholder?: string;
  name: string;
  value: string;
  event: ChangeEventHandler<HTMLTextAreaElement>;
}

export const TodoTextarea = ({
  name,
  value,
  event,
  ...props
}: TodoTextareaProps) => {
  return <textarea name={name} value={value} onChange={event} {...props} />;
};
