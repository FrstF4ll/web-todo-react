export interface ClientTodos {
  title: string;
  content?: string;
  due_date?: string;
  done: boolean;
}

export interface Todos extends ClientTodos {
  id: number;
}
