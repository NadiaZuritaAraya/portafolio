import { STACK_CORE, STACK_CATEGORIES } from '../../../constants/portfolio';
import styles from './StackTab.module.css';

export function StackTab() {
  return (
    <div className={styles.tab}>

      {/* ── NÚCLEO ── */}
      <section className={styles.core}>
        <p className={styles.coreLabel}>
          <i className="ti ti-bolt" aria-hidden="true" /> NÚCLEO
        </p>
        <div className={styles.corePills}>
          {STACK_CORE.map((tool) => (
            <div key={tool.name} className={styles.corePill}>
              <i className={`ti ${tool.icon}`} aria-hidden="true" />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categorías ── */}
      <div className={styles.grid}>
        {STACK_CATEGORIES.map((cat) => (
          <div key={cat.id} className={`${styles.card} ${styles[cat.variant]}`}>
            <div className={styles.cardHeader}>
              <i className={`ti ${cat.icon}`} aria-hidden="true" />
              <h3>{cat.name}</h3>
            </div>
            <ul className={styles.toolList}>
              {cat.tools.map((tool) => (
                <li key={tool} className={styles.toolItem}>
                  <i className="ti ti-point-filled" aria-hidden="true" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}
