import styles from './TodoList.module.css';
import type { Todos } from '../shared/Interfaces';
import { DangerButton } from '../DangerButton';

export const TodoItems = ({ source }: { source: Todos }) => {
  return (
    <li className={`${styles.todoItem} flex-row`}>
      <span>
        <input type="checkbox" defaultChecked={source.done} />
        {source.title}
      </span>
      <span>{source.content}</span>
      <span>
        {source.due_date}
        <DangerButton text="X" aria-label={`Delete task ${source.title}`} />
      </span>
    </li>
  );
};
