import type { ButtonHTMLAttributes } from 'react';

interface DangerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
export const DangerButton = ({ text, ...props }: DangerButtonProps) => (
  <button className="danger-button" {...props}>
    {text}
  </button>
);
