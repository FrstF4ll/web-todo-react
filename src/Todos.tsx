const TodoInputs = () => {
  return (
    <>
      <div id="date-title-wrapper">
        <input type="text" placeholder="Enter a title..." />
        <input type="date" />
      </div>
      <textarea placeholder="Enter a description..." />
      <button type="button">Add to list</button>
    </>
  );
};

export const TodoInputsLayout = () => {
  return (
    <form id="todo-inputs" className="flex-column">
      <TodoInputs />
    </form>
  );
};
