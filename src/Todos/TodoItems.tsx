import todoListStyles from './TodoList.module.css'
import type { Todos } from '../Interfaces';
import { DangerButton } from '../Atom';

export const TodoItems = ({ source }: { source: Todos }) => {
  return (
    <li className={`${todoListStyles.todoItem} flex-row`}>
      <span>
        <input type="checkbox" defaultChecked={source.done} />
        {source.title}
      </span>
      <span>
        {source.due_date}
        <DangerButton text="X" aria-label={`Delete task ${source.title}`} />
      </span>
    </li>
  );
};