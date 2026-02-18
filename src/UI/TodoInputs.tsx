import { type TodoInputsProps, type TodoTextArea } from '../Interfaces';

export const TodoInputs = ({
  name,
  value,
  event,
  ...props
}: TodoInputsProps) => {
  return <input name={name} value={value} onChange={event} {...props} />;
};
export const TodoTextarea = ({
  name,
  value,
  event,
  ...props
}: TodoTextArea) => {
  return <textarea name={name} value={value} onChange={event} {...props} />;
};
