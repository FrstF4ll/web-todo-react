interface TodoDateProps {
  dueDate: string | null;
}

export const TodoDate = ({ dueDate }: TodoDateProps) => <span>{dueDate}</span>;
