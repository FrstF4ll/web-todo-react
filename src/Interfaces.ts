import { type ChangeEventHandler } from 'react';

export interface ClientTodos {
  title: string;
  content: string | null;
  due_date: string | null;
  done: boolean;
}

export interface Todos extends ClientTodos {
  id: number;
}

export interface TodoFieldProps<T = HTMLElement> {
  type?: string;
  placeholder?: string;
  name: string;
  value: string;
  event: ChangeEventHandler<T>;
}
