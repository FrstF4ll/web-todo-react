import { TODO_URL } from '../shared/variable';

export async function deleteData(id: number): Promise<void> {
  const completeURL = `${TODO_URL}?id=eq.${id}`;
  const response = await fetch(completeURL, {
    method: 'DELETE',
  });
  return response.json();
}
