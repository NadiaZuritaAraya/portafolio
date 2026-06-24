import styles from './ProjectDetail.module.css';

const LAYER_COLORS = {
  amber:  { border: 'rgba(245,158,11,0.4)',  bg: 'rgba(245,158,11,0.08)',  text: '#f59e0b' },
  purple: { border: 'rgba(147,51,234,0.4)',   bg: 'rgba(147,51,234,0.08)',  text: '#a855f7' },
  teal:   { border: 'rgba(20,184,166,0.4)',   bg: 'rgba(20,184,166,0.08)',  text: '#14b8a6' },
};

export function ProjectDetail({ project, company, onBack }) {
  const { name, description, stack, image, architecture, realCase, diagrams } = project;

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

      {diagrams?.length > 0 && (
        <section className={styles.diagramsSection}>
          <h2>Diagramas de Arquitectura</h2>
          <div className={styles.diagramsList}>
            {diagrams.map((diagram, idx) => (
              <div key={diagram.id} className={styles.diagramBlock}>
                <div className={styles.diagramBlockHeader}>
                  <span className={styles.diagramIndex}>{idx + 1}</span>
                  <div>
                    <h3>{diagram.title}</h3>
                    <p className={styles.diagramBlockDesc}>{diagram.description}</p>
                  </div>
                </div>
                <div className={styles.diagramWrapper}>
                  <img
                    src={diagram.image}
                    alt={diagram.title}
                    className={styles.diagram}
                  />
                </div>
                {diagram.steps?.length > 0 && (
                  <div className={styles.steps}>
                    {diagram.steps.map((step, sIdx) => (
                      <div key={sIdx} className={styles.step}>
                        <div className={styles.stepNumber}>{sIdx + 1}</div>
                        <div className={styles.stepContent}>
                          <strong>{step.label}</strong>
                          <p>{step.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {realCase && (
        <section className={styles.realCaseSection}>
          <h2>Caso Real AFP — Flujo Cotizaciones</h2>
          <div className={styles.ioGrid}>
            <div className={styles.ioCard}>
              <div className={styles.ioHeader}>
                <i className="ti ti-arrow-right-circle" aria-hidden="true" />
                <h3>Lo que entra</h3>
              </div>
              <ul>
                {realCase.inputs.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.ioCard}>
              <div className={styles.ioHeader}>
                <i className="ti ti-sparkles" aria-hidden="true" />
                <h3>Lo que sale</h3>
              </div>
              <ul>
                {realCase.outputs.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
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
