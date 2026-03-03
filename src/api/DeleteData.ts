import { TODO_URL } from '../shared/variable';
import { apiHandleError } from './apiHandleError';

export async function deleteData(id?: number): Promise<void> {
  try {
    const completeURL = id ? `${TODO_URL}?id=eq.${id}` : TODO_URL;
    await fetch(completeURL, {
      method: 'DELETE',
    }).then(apiHandleError);
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to delete todo: ${(error as Error).message}`);
  }
}
