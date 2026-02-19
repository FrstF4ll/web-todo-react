import type { Todos, ClientTodos } from '../shared/Interfaces';
import { TODO_URL } from '../shared/variable';
import { apiHandleError } from './apiHandleError';

export async function postData(todo: ClientTodos): Promise<Todos> {
  try {
    const response = await fetch(TODO_URL, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify(todo),
    }).then(apiHandleError);
    const responseFile = await response.json();
    if (!Array.isArray(responseFile) || responseFile.length === 0) {
      throw new Error(
        'Invalid API response: expected an array with at least one item.',
      );
    }

    const unwrappedData = responseFile[0] as Todos;
    return unwrappedData;
  } catch (error) {
    throw new Error(`Failed to send datas : ${error}`);
  }
}
