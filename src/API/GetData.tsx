const queryHeader = {
  accept: 'application/json',
  'Range-Unit': 'items',
};

export async function getData() {
  const response = await fetch('https://api.todos.in.jt-lab.ch:443/todos', {
    method: 'GET',
    headers: queryHeader,
  });
  return response.json();
}

