import styles from '../TodoList.module.css';
import type { Todos } from '../../../shared/Interfaces';
import { TodoTitle } from './TodoTitle';
import { TodoCheckbox } from './TodoCheckbox';
import { TodoDescription } from './TodoDescription';
import { TodoDate } from './TodoDate';
import { DangerButton } from '../../other/atoms/DangerButton';
import { useState } from 'react';
import { patchData } from '../../../api/PatchData';

interface TodoWrapperProps {
  source: Todos;
  onDelete: React.MouseEventHandler;
}

export const TodoWrapper = ({ source, onDelete }: TodoWrapperProps) => {
  const [todoData, setTodoData] = useState<Todos>(source);

  const handleUpdate = async (changes: Partial<Todos>) => {
    const updatedTodo = { ...todoData, ...changes };
    const { id, ...dataForApi } = updatedTodo;
    setTodoData(updatedTodo);
    await patchData(dataForApi, todoData.id);
  };

  return (
    <li className={`${styles.todoItem} flex-row`}>
      <TodoTitle
        title={todoData.title}
        onSave={(newVal) => handleUpdate({ title: newVal })}
      >
        <TodoCheckbox isDone={todoData.done} />
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
