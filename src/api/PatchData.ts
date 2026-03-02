import type { ClientTodos } from '../shared/Interfaces';
import { TODO_URL } from '../shared/variable';
import { apiHandleError } from './apiHandleError';

export async function patchData(
  todo: ClientTodos,
  id: number,
): Promise<ClientTodos> {
  try {
    const completeURL = `${TODO_URL}?id=eq.${id}`;

    const response = await fetch(completeURL, {
      method: 'PATCH',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify(todo),
    });

    await apiHandleError(response);
    const responseFile = await response.json();
    if (!Array.isArray(responseFile) || responseFile.length === 0) {
      throw new Error(
        'Invalid API response: expected an array with at least one item.',
      );
    }
    const unwrappedData = responseFile[0] as ClientTodos;
    return unwrappedData;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to modify todo: ${(error as Error).message}`);
  }
}
