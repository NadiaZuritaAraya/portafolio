import { STACK_CORE, STACK_CATEGORIES } from '../../../constants/portfolio';
import styles from './StackTab.module.css';

export function StackTab() {
  return (
    <div className={styles.tab}>

      {/* ── NÚCLEO ── */}
      <section className={styles.coreSection}>
        <p className={styles.sectionLabel}>
          <i className="ti ti-bolt" aria-hidden="true" />
          Tecnologías Núcleo
        </p>
        <div className={styles.coreGrid}>
          {STACK_CORE.map((tool) => (
            <div key={tool.name} className={`${styles.coreCard} ${styles[tool.color]}`}>
              <i className={`ti ${tool.icon} ${styles.coreIcon}`} aria-hidden="true" />
              <span className={styles.coreName}>{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categorías ── */}
      <div className={styles.catGrid}>
        {STACK_CATEGORIES.map((cat) => (
          <div key={cat.id} className={`${styles.catCard} ${styles[cat.variant]}`}>
            <div className={styles.catHeader}>
              <div className={styles.catIconWrap}>
                <i className={`ti ${cat.icon}`} aria-hidden="true" />
              </div>
              <div>
                <h3 className={styles.catName}>{cat.name}</h3>
                <span className={styles.catCount}>{cat.tools.length} herramientas</span>
              </div>
            </div>
            <div className={styles.chipGrid}>
              {cat.tools.map((tool) => (
                <span key={tool} className={styles.chip}>{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
