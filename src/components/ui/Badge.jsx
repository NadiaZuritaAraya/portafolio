import styles from './Badge.module.css';

export function Badge({ children }) {
  return (
    <span className={styles.badge}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </span>
  );
}
