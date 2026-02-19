import { TODO_URL } from '../shared/variable';
import type { Todos } from '../shared/Interfaces';
const queryHeader = {
  accept: 'application/json',
  'Range-Unit': 'items',
};

export async function getData(): Promise<Todos[]> {
  try {

    const response = await fetch(TODO_URL, {
      method: 'GET',
      headers: queryHeader,
    });
    const responseFile = await response.json();

    return responseFile as Todos[];
  } catch (error) {
    throw new Error(`Can't get datas from server : ${error}`)
  }
}
