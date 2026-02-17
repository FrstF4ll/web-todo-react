import type { Todos } from '../Interfaces';

export async function postData(todo: Todos) {
  const response = await fetch('https://api.todos.in.jt-lab.ch:443/todos', {
    method: 'POST',
    headers: { accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  return response.json();
}
