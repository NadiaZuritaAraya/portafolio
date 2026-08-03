import { COMPANIES } from '../../../constants/companies.js';
import styles from './CompanyGrid.module.css';

export function CompanyGrid({ onSelect }) {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Mi trayectoria profesional</p>
      <h2 className={styles.title}>Empresas</h2>

      <div className={styles.grid}>
        {COMPANIES.map(c => (
          <article
            key={c.id}
            className={styles.card}
            onClick={() => onSelect(c.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && onSelect(c.slug)}
            aria-label={`Ver trayectoria en ${c.name}`}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.cardName}>{c.name}</h3>
              <p className={styles.cardRole}>{c.role}</p>
            </div>
            <p className={styles.cardPeriod}>
              <i className="ti ti-calendar" aria-hidden="true" /> {c.period}
            </p>
            <p className={styles.cardDesc}>{c.description}</p>
            <div className={styles.cardTechs}>
              {c.technologies.slice(0, 3).map((tech, i) => (
                <span key={tech} className={`${styles.tag} ${i % 2 === 1 ? styles.tagC : ''}`}>
                  {tech}
                </span>
              ))}
              {c.technologies.length > 3 && (
                <span className={styles.tagMore}>+{c.technologies.length - 3}</span>
              )}
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.link}>
                <i className="ti ti-arrow-right" aria-hidden="true" /> Ver trayectoria
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
