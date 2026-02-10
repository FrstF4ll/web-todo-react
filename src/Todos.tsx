export const TodoInputs = () => {
  return (
    <form id="todo-inputs" className="flex-column">
      <div id="date-title-wrapper">
        <input type="text" />
        <input type="date" />
      </div>
      <textarea />
      <button type="button">Add to list</button>
    </form>
  );
};