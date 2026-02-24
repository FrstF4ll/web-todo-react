import styles from './TodoFilter.module.css';
export const FilterValueContainer = () => {
  return (
    <div className={`${styles.valueContainer}`}>
        <div className={styles.option}>Randomized</div>
        <div className={styles.option}>Name</div>
        <div className={styles.option}>Date</div>
    </div>
  );
};
