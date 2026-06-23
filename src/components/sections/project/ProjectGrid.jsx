import { useState } from 'react';
import { PROJECTS, PROJECT_TYPES } from '../../../constants/projects.js';
import styles from './ProjectGrid.module.css';

export function ProjectGrid({ onSelect }) {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.type === active);

  return (
    <section className={styles.section}>
      <p className={styles.label}>Portafolio privado</p>
      <h2 className={styles.title}>Proyectos destacados</h2>

      <div className={styles.filters} role="group" aria-label="Filtrar proyectos">
        {PROJECT_TYPES.map(t => (
          <button
            key={t.key}
            className={`${styles.fbtn} ${active === t.key ? styles.on : ''}`}
            onClick={() => setActive(t.key)}
            aria-pressed={active === t.key}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map(p => (
          <article
            key={p.id}
            className={styles.card}
            onClick={() => onSelect(p.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && onSelect(p.slug)}
            aria-label={`Ver proyecto ${p.name}`}
          >
            <div className={`${styles.cardImg} ${styles[p.type]}`}>
              <i className={`ti ${typeIcon(p.type)}`} aria-hidden="true" />
            </div>
            <div className={styles.cardBody}>
              <p className={`${styles.cardType} ${styles[p.type]}`}>{p.typeLabel}</p>
              <h3 className={styles.cardName}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.summary}</p>
              <div className={styles.cardTags}>
                {p.stack.slice(0, 4).map((s, i) => (
                  <span key={s} className={`${styles.tag} ${i % 2 === 1 ? styles.tagC : ''}`}>{s}</span>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.company}>{p.company}</span>
                <span className={styles.link}>
                  <i className="ti ti-eye" aria-hidden="true" /> Ver proyecto
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function typeIcon(type) {
  return {
    arch: 'ti-topology-star-3',
    etl:  'ti-arrows-transfer-down',
    dash: 'ti-chart-bar',
  }[type] ?? 'ti-folder';
}
