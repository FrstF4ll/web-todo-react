import s from '../MainMenu.module.css';
export const AddTodoButton = ({
  event,
}: {
  event: React.MouseEventHandler;
}) => {
  return (
    <button type="button" className={s.addTodo} onClick={event}>
      Add to list
    </button>
  );
};
