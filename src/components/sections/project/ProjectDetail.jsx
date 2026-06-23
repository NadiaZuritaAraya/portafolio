import styles from './ProjectDetail.module.css';

export function ProjectDetail({ project, onBack }) {
  const { name, company, period, typeLabel, type, problem, solution, result,
          stack, impacts, images, codeSnippet, github } = project;

  return (
    <article className={styles.page}>

      <button className={styles.back} onClick={onBack} aria-label="Volver al portafolio">
        <i className="ti ti-arrow-left" aria-hidden="true" /> Volver
      </button>

      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={`${styles.typeBadge} ${styles[type]}`}>{typeLabel}</span>
          <span className={styles.period}>{company} · {period}</span>
        </div>
        <h1 className={styles.title}>{name}</h1>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className={styles.ghLink}>
            <i className="ti ti-brand-github" aria-hidden="true" /> Ver en GitHub
          </a>
        )}
      </header>

      <div className={styles.caseGrid}>
        <div className={styles.caseCard}>
          <p className={styles.caseLabel}>
            <i className="ti ti-alert-circle" aria-hidden="true" /> Problema
          </p>
          <p className={styles.caseText}>{problem}</p>
        </div>
        <div className={styles.caseCard}>
          <p className={styles.caseLabel}>
            <i className="ti ti-bulb" aria-hidden="true" /> Solución
          </p>
          <p className={styles.caseText}>{solution}</p>
        </div>
        <div className={styles.caseCard}>
          <p className={styles.caseLabel}>
            <i className="ti ti-trending-up" aria-hidden="true" /> Resultado
          </p>
          <p className={styles.caseText}>{result}</p>
        </div>
      </div>

      {impacts.length > 0 && (
        <div className={styles.impacts}>
          {impacts.map((imp, i) => (
            <span key={imp} className={`${styles.impact} ${i % 2 === 1 ? styles.impactC : ''}`}>
              {imp}
            </span>
          ))}
        </div>
      )}

      {images.length > 0 && (
        <section className={styles.imagesSection}>
          <h2 className={styles.sectionTitle}>
            <i className="ti ti-photo" aria-hidden="true" /> Capturas y diagramas
          </h2>
          <div className={styles.imagesGrid}>
            {images.map((img) => (
              <figure key={img.src} className={styles.imgFigure}>
                <img src={img.src} alt={img.caption} className={styles.img} loading="lazy" />
                {img.caption && <figcaption className={styles.caption}>{img.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}

      {codeSnippet && (
        <section className={styles.codeSection}>
          <h2 className={styles.sectionTitle}>
            <i className="ti ti-code" aria-hidden="true" /> Código destacado
          </h2>
          <div className={styles.codeBox}>
            <div className={styles.codeHeader}>
              <span className={styles.codeLang}>{codeSnippet.language}</span>
              <span className={styles.codeLabel}>{codeSnippet.label}</span>
            </div>
            <pre className={styles.codePre}>
              <code>{codeSnippet.code}</code>
            </pre>
          </div>
        </section>
      )}

      <section className={styles.stackSection}>
        <h2 className={styles.sectionTitle}>
          <i className="ti ti-stack" aria-hidden="true" /> Stack técnico
        </h2>
        <div className={styles.stackTags}>
          {stack.map((s, i) => (
            <span key={s} className={`${styles.stag} ${i % 2 === 1 ? styles.stagC : ''}`}>{s}</span>
          ))}
        </div>
      </section>

    </article>
  );
}
