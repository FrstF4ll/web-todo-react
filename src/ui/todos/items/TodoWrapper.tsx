import styles from '../TodoList.module.css';
import type { Todos } from '../../../shared/Interfaces';
import { TodoTitle } from './TodoTitle';
import { TodoCheckbox } from './TodoCheckbox';
import { TodoDescription } from './TodoDescription';
import { TodoDate } from './TodoDate';
import { DangerButton } from '../../other/atoms/DangerButton';

interface TodoWrapperProps {
  source: Todos;
  onDelete: React.MouseEventHandler;
}

export const TodoWrapper = ({ source, onDelete }: TodoWrapperProps) => {
  return (
    <li className={`${styles.todoItem} flex-row`}>
      <TodoTitle title={source.title}>
        <TodoCheckbox isDone={source.done}></TodoCheckbox>
      </TodoTitle>
      <TodoDescription content={source.content} />
      <TodoDate dueDate={source.due_date} />
      <DangerButton
        text="X"
        aria-label={`Delete task ${source.title}`}
        onClick={onDelete}
      />
    </li>
  );
};
