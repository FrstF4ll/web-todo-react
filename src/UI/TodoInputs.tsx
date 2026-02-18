import { type ChangeEventHandler, type InputHTMLAttributes } from 'react';

interface TodoInputsProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  event: ChangeEventHandler<HTMLInputElement>;
}

export const TodoInputs = ({
  name,
  value,
  event,
  ...props
}: TodoInputsProps) => {
  return <input name={name} value={value} onChange={event} {...props} />;
};
