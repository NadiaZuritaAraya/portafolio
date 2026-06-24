import styles from './ProjectDetail.module.css';

const LAYER_COLORS = {
  amber:  { border: 'rgba(245,158,11,0.4)',  bg: 'rgba(245,158,11,0.08)',  text: '#f59e0b' },
  purple: { border: 'rgba(147,51,234,0.4)',   bg: 'rgba(147,51,234,0.08)',  text: '#a855f7' },
  teal:   { border: 'rgba(20,184,166,0.4)',   bg: 'rgba(20,184,166,0.08)',  text: '#14b8a6' },
};

export function ProjectDetail({ project, company, onBack }) {
  const { name, description, stack, image, architecture } = project;

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

      {image && (
        <section className={styles.diagramSection}>
          <h2>Diagrama de Arquitectura</h2>
          <div className={styles.diagramWrapper}>
            <img
              src={image}
              alt={`Diagrama de arquitectura — ${name}`}
              className={styles.diagram}
            />
          </div>
        </section>
      )}

      {architecture && (
        <section className={styles.architecture}>
          <h2>Arquitectura en Detalle</h2>

          {architecture.layers && (
            <div className={styles.layers}>
              {architecture.layers.map((layer) => {
                const color = LAYER_COLORS[layer.color] ?? LAYER_COLORS.teal;
                return (
                  <div
                    key={layer.name}
                    className={styles.layer}
                    style={{ borderColor: color.border, background: color.bg }}
                  >
                    <h3 style={{ color: color.text }}>{layer.name}</h3>
                    <p>{layer.description}</p>
                  </div>
                );
              })}
            </div>
          )}

          {architecture.realCase && (
            <div className={styles.realCase}>
              <div className={styles.realCaseHeader}>
                <i className="ti ti-database" aria-hidden="true" />
                <h3>Caso Real AFP — Flujo Cotizaciones</h3>
              </div>
              <p>{architecture.realCase}</p>
            </div>
          )}

          {architecture.crossCuttingTools?.length > 0 && (
            <div className={styles.crossTools}>
              <h3>Herramientas Transversales</h3>
              <ul>
                {architecture.crossCuttingTools.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

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
