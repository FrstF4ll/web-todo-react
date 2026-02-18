import type { ChangeEventHandler } from 'react';

interface TodoInputProps {
  type?: string;
  placeholder?: string;
  name: string;
  value: string;
  event: ChangeEventHandler<HTMLInputElement>;
}

export const TodoInputs = ({
  name,
  value,
  event,
  ...props
}: TodoInputProps) => {
  return <input name={name} value={value} onChange={event} {...props} />;
};
