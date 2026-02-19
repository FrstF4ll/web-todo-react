import { TODO_URL } from '../shared/variable';
import { apiHandleError } from './apiHandleError';

export async function deleteData(id: number): Promise<void> {
  try {
    const completeURL = `${TODO_URL}?id=eq.${id}`;
    await fetch(completeURL, {
      method: 'DELETE',
    }).then(apiHandleError);
  } catch (error) {
    throw new Error(`Data failed to delete : ${error}`);
  }
}
