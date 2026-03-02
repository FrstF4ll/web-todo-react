import { CloseErrorButton } from './CloseErrorButton';
import { ErrorIcon } from './ErrorIcon';
import styles from './ErrorMessageStyle.module.css';

export const ErrorMessage = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => {
  return (
    <div className={styles.errorToast}>
      <div className={`flex-row ${styles.messageWrapper}`}>
        <ErrorIcon />
        <span className={styles.errorMessageText}>{message}</span>
      </div>
      <CloseErrorButton onClick={onClose} />
    </div>
  );
};
