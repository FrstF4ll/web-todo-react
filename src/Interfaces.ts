import {
  type TextareaHTMLAttributes,
  type ChangeEventHandler,
  type InputHTMLAttributes,
} from 'react';

export interface ClientTodos {
  title: string;
  content: string;
  due_date: string;
  done: boolean;
}

export interface Todos extends ClientTodos {
  id: number;
}

export interface TodoInputsProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  event: ChangeEventHandler<HTMLInputElement>;
}

export interface TodoTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  value: string;
  event: ChangeEventHandler<HTMLTextAreaElement>;
}
