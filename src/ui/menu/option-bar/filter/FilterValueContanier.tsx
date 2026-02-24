import styles from './TodoFilter.module.css';
export const FilterValueContainer = () => {
  return (
    <div className={`${styles.valueContainer}`}>
      <select className={styles.hiddenSelect}>
        <option value="random">Randomized</option>
      </select>
    </div>
  );
};
