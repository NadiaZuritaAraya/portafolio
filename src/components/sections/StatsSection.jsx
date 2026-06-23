import { STATS } from '../../constants';
import styles from './StatsSection.module.css';

export function StatsSection() {
  return (
    <div className={styles.row} role="list" aria-label="Estadísticas">
      {STATS.map((s) => (
        <div key={s.label} className={styles.card} role="listitem">
          <span className={`${styles.number} ${styles[s.variant]}`}>
            {s.number}
          </span>
          <span className={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
