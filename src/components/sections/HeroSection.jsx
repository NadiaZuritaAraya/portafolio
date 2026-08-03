import { useState } from 'react';
import { Badge }          from '../ui/Badge';
import { SkillTag }       from '../ui/SkillTag';
import { ParticleCanvas } from '../ui/ParticleCanvas';
import { useAccessRequest } from '../../hooks/useAccessRequest';
import { SKILLS } from '../../constants';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const [email, setEmail] = useState('');
  const { requestAccess, isLoading, isSuccess, isError, message } = useAccessRequest();

  async function handleSubmit(e) {
    e.preventDefault();
    await requestAccess(email);
    if (!isError) setEmail('');
  }

  return (
    <section className={styles.hero}>
      <div className={styles.gridBg} aria-hidden="true" />
      <ParticleCanvas />

      <div className={styles.content}>

        {/* ── Columna izquierda: presentación ── */}
        <div className={styles.left}>
          <Badge>Disponible para nuevos proyectos</Badge>

          <h1 className={styles.title}>
            <span className={styles.violet}>Nadia Zurita</span>
            <br />
            <span className={styles.cyan}>Data Engineer</span>
            {' & BI'}
          </h1>

          <p className={styles.bio}>
            Ingeniera en Informática con más de 6 años de experiencia en ingeniería de
            datos y Business Intelligence, especializada en plataformas GCP (BigQuery,
            Dataflow, Cloud Run, Cloud Functions, Pub/Sub) y AWS (Glue, Redshift, Lambda,
            MWAA). Ha liderado proyectos de migración de datos on-premise a la nube y
            desarrollo de pipelines end-to-end en organizaciones del sector financiero y
            aeronáutico. Con experiencia consolidada en modelamiento ETL, gobierno de datos,
            reportería avanzada en Power BI y gestión ágil de proyectos.
          </p>

          <div className={styles.skillsRow} role="list" aria-label="Tecnologías principales">
            {SKILLS.map((s) => (
              <span key={s.label} role="listitem">
                <SkillTag label={s.label} variant={s.variant} />
              </span>
            ))}
          </div>

          <div className={styles.social}>
            <a href="mailto:nadia.zuritaaraya@gmail.com" className={styles.socialLink}>
              <i className="ti ti-mail" aria-hidden="true" />
              <span>nadia.zuritaaraya@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nadia-soledad-zurita-araya/"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ti ti-brand-linkedin" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* ── Columna derecha: formulario de acceso ── */}
        <div className={styles.right}>
          <div className={styles.formBox}>
            <p className={styles.formLabel}>
              <i className="ti ti-lock" aria-hidden="true" />
              Acceso al portafolio completo
            </p>

            <form onSubmit={handleSubmit} className={styles.formRow} noValidate>
              <input
                type="email"
                className={styles.input}
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading || isSuccess}
                aria-label="Correo electrónico"
                required
              />
              <button
                type="submit"
                className={styles.btn}
                disabled={isLoading || isSuccess}
              >
                {isLoading ? 'Enviando…' : 'Solicitar'}
              </button>
            </form>

            <p className={styles.hint}>
              <i className="ti ti-clock" aria-hidden="true" />
              Link válido por 24 h · Sin spam, sin cuentas
            </p>

            {message && (
              <p className={`${styles.msg} ${isSuccess ? styles.msgSuccess : styles.msgError}`}>
                {message}
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}