import { TODO_URL } from "../shared/variable";

const queryHeader = {
  accept: 'application/json',
  'Range-Unit': 'items',
};

export async function getData() {
  const response = await fetch(TODO_URL, {
    method: 'GET',
    headers: queryHeader,
  });
  return response.json();
}
