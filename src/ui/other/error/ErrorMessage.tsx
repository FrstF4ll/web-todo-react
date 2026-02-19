import { ErrorIcon } from './ErrorIcon';
import styles from './ErrorMessageStyle.module.css';

export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className={styles.errorToast}>
      <div className={`flex-row ${styles.messageWrapper}`}>
        <ErrorIcon />
        <span className={styles.errorMessageText}>{message}</span>
      </div>
    </div>
  );
};
