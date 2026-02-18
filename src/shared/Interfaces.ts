export interface ClientTodos {
  title: string;
  content: string | null;
  due_date: string | null;
  done: boolean;
}

export interface Todos extends ClientTodos {
  id: number;
}
