import styles from './ProjectDetail.module.css';

export function ProjectDetail({ project, company, onBack }) {
  const { name, description, stack } = project;

  return (
    <article className={styles.page}>
      <button className={styles.back} onClick={onBack} aria-label="Volver a la empresa">
        <i className="ti ti-arrow-left" aria-hidden="true" /> Volver a {company.name}
      </button>

      <div className={styles.header}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.company}>{company.name} • {company.period}</p>
      </div>

      <section className={styles.description}>
        <p>{description}</p>
      </section>

      <section className={styles.stack}>
        <h2>Stack Tecnológico</h2>
        <div className={styles.technologies}>
          {stack.map((tech, idx) => (
            <div key={idx} className={styles.techItem}>
              <div className={styles.techHeader}>
                <i className="ti ti-code-plus" aria-hidden="true" />
                <h3>{tech.split(':')[0]}</h3>
              </div>
              <p className={styles.techDescription}>{tech.split(':')[1]?.trim()}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
