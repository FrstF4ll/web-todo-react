import styles from './ErrorMessageStyle.module.css';

interface CloseErrorButtonProps {
  onClick: () => void;
}

export const CloseErrorButton = ({ onClick }: CloseErrorButtonProps) => {
  return (
    <button
      type="button"
      aria-label="close-error"
      className={styles.closeButton}
      onClick={onClick}
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
  );
};
