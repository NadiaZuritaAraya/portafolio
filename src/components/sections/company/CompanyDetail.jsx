import styles from './CompanyDetail.module.css';

export function CompanyDetail({ company, onBack }) {
  const { name, role, period, location, description, achievements, technologies } = company;

  return (
    <article className={styles.page}>

      <button className={styles.back} onClick={onBack} aria-label="Volver al portafolio">
        <i className="ti ti-arrow-left" aria-hidden="true" /> Volver
      </button>

      <header className={styles.header}>
        <div className={styles.meta}>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.role}>{role}</p>
          <p className={styles.period}>
            <i className="ti ti-calendar" aria-hidden="true" /> {period}
          </p>
          <p className={styles.location}>
            <i className="ti ti-map-pin" aria-hidden="true" /> {location}
          </p>
        </div>
      </header>

      <p className={styles.description}>{description}</p>

      {achievements.length > 0 && (
        <section className={styles.achievementsSection}>
          <h2 className={styles.sectionTitle}>
            <i className="ti ti-trophy" aria-hidden="true" /> Logros principales
          </h2>
          <ul className={styles.achievementsList}>
            {achievements.map((achievement, i) => (
              <li key={i} className={styles.achievementItem}>
                <i className="ti ti-check" aria-hidden="true" /> {achievement}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className={styles.stackSection}>
        <h2 className={styles.sectionTitle}>
          <i className="ti ti-stack" aria-hidden="true" /> Stack técnico
        </h2>
        <div className={styles.stackTags}>
          {technologies.map((tech, i) => (
            <span key={tech} className={`${styles.stag} ${i % 2 === 1 ? styles.stagC : ''}`}>
              {tech}
            </span>
          ))}
        </div>
      </section>

    </article>
  );
}
