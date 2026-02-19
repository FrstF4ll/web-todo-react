import { TODO_URL } from '../shared/variable';

export async function deleteData(id: number): Promise<void> {
  try {
    const completeURL = `${TODO_URL}?id=eq.${id}`;
    await fetch(completeURL, {
      method: 'DELETE',
    });
  } catch (error) {
    throw new Error(`Data failed to delete : ${error}`)
  }
}
