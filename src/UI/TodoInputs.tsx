import type { TodoFieldProps } from '../shared/Interfaces';

export const TodoInputs = ({
  name,
  value,
  event,
  ...props
}: TodoFieldProps<HTMLInputElement>) => {
  return <input name={name} value={value} onChange={event} {...props} />;
};
export const TodoTextarea = ({
  name,
  value,
  event,
  ...props
}: TodoFieldProps<HTMLTextAreaElement>) => {
  return <textarea name={name} value={value} onChange={event} {...props} />;
};
