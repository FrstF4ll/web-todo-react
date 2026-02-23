import styles from '../TodoList.module.css';
import type { Todos } from '../../../shared/Interfaces';
import { TodoTitle } from './TodoTitle';
import { TodoCheckbox } from './TodoCheckbox';
import { TodoDescription } from './TodoDescription';
import { TodoDate } from './TodoDate';
import { DangerButton } from '../../menu/inputs/DangerButton';

interface TodoWrapperProps {
  source: Todos;
  onUpdate: (changes: Partial<Todos>) => Promise<void>;
  onDelete: React.MouseEventHandler;
}

export const TodoWrapper = ({
  source,
  onDelete,
  onUpdate,
}: TodoWrapperProps) => {
  return (
    <li className={`${styles.todoItem} flex-row`}>
      <TodoTitle
        title={source.title}
        onSave={(newVal) => onUpdate({ title: newVal })}
      >
        <TodoCheckbox isDone={source.done} />
      </TodoTitle>
      <TodoDescription
        content={source.content || 'No description'}
        onSave={(newVal) => onUpdate({ content: newVal })}
      />
      <span>
        <TodoDate
          dueDate={source.due_date || 'No due date'}
          onSave={(newVal) => onUpdate({ due_date: newVal })}
        />
        <DangerButton
          text="X"
          aria-label={`Delete task ${source.title}`}
          onClick={onDelete}
        />
      </span>
    </li>
  );
};
