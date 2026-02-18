import styles from './Atom.module.css';

export const StatusMessage = ({ statusMessage }: { statusMessage: string }) => {
  return <p className={styles.statusMessage}>{statusMessage}</p>;
};
