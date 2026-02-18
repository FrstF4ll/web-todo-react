import type { Todos, ClientTodos } from '../Interfaces';
import { TODO_URL } from '../shared/variable';

export async function postData(todo: ClientTodos): Promise<Todos> {
  const response = await fetch(TODO_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(todo),
  });
  const responseArray = await response.json();
  const unwrappedData = responseArray[0] as Todos;
  return unwrappedData;
}
