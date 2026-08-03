import { useState } from 'react';
import { PROFILE, EDUCATION, CERTIFICATES, COURSES } from '../../../constants/portfolio';
import styles from './PerfilTab.module.css';

const STATS = [
  { value: '8+',        label: 'Años de experiencia',    icon: 'ti-calendar-stats' },
  { value: 'GCP · AWS', label: 'Plataformas cloud',      icon: 'ti-cloud'          },
  { value: '5',         label: 'Empresas en producción', icon: 'ti-building-skyscraper' },
  { value: 'ETL · BI',  label: 'Especialización core',   icon: 'ti-stack-2'        },
];

export function PerfilTab() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={styles.tab}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroMain}>
          <div className={styles.photoWrap}>
            {!imgError ? (
              <img
                src={PROFILE.photo}
                alt="Nadia Zurita"
                className={styles.photo}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className={styles.photoFallback} aria-label="NZ">NZ</div>
            )}
            <span className={styles.availableDot} aria-label="Disponible" />
          </div>

          <div className={styles.heroText}>
            <div>
              <h1 className={styles.name}>{PROFILE.name}</h1>
              <p className={styles.titleRole}>{PROFILE.title}</p>
            </div>
            <div className={styles.bioBlock}>
              {PROFILE.bio.map((p, i) => (
                <p key={i} className={styles.bio}>{p}</p>
              ))}
            </div>
            <div className={styles.social}>
              <a href={`mailto:${PROFILE.email}`} className={styles.socialLink}>
                <i className="ti ti-mail" aria-hidden="true" />
                <span>{PROFILE.email}</span>
              </a>
              <a href={PROFILE.linkedin} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <i className="ti ti-brand-linkedin" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.statsPanel}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <i className={`ti ${s.icon} ${styles.statIcon}`} aria-hidden="true" />
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Formación + Certificados (tarjeta unificada) ── */}
      <div className={styles.mainCard}>
        <div className={styles.mainCardGrid}>

          {/* Columna izquierda: Formación + CV */}
          <div className={styles.col}>
            <h2 className={styles.cardTitle}>
              <i className="ti ti-school" aria-hidden="true" />
              Formación académica
            </h2>
            <div className={styles.eduList}>
              {EDUCATION.map((edu) => (
                <div key={edu.id} className={styles.eduItem}>
                  <div className={styles.eduHeader}>
                    <p className={styles.eduDegree}>{edu.degree}</p>
                    {edu.status === 'in-progress' && (
                      <span className={`${styles.badge} ${styles.badgeProgress}`}>En curso</span>
                    )}
                    {edu.status === 'awaiting-certificate' && (
                      <span className={`${styles.badge} ${styles.badgeAwaiting}`}>Cert. pendiente</span>
                    )}
                  </div>
                  <p className={styles.eduInstitution}>{edu.institution}</p>
                  <p className={styles.eduMeta}>
                    {edu.graduated ? `Titulada el ${edu.graduated}` : edu.period}
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.cardDivider} />

            <h2 className={styles.cardTitle}>
              <i className="ti ti-file-cv" aria-hidden="true" />
              Currículum Vitae
            </h2>
            <p className={styles.cvSub}>Versión actualizada · PDF</p>
            <a href="/CV_Nadia_Zurita_DE.pdf" download className={styles.cvBtn}>
              <i className="ti ti-download" aria-hidden="true" />
              Descargar CV
            </a>
          </div>

          {/* Divisor vertical */}
          <div className={styles.colDivider} />

          {/* Columna derecha: Certificados descargables */}
          <div className={styles.col}>
            <h2 className={styles.cardTitle}>
              <i className="ti ti-certificate" aria-hidden="true" />
              Certificados
            </h2>
            <div className={styles.certList}>
              {CERTIFICATES.map((cert) => (
                <div key={cert.id} className={styles.certItem}>
                  <div className={styles.certInfo}>
                    <div className={styles.certHeader}>
                      <p className={styles.certName}>{cert.name}</p>
                      <span className={`${styles.badge} ${styles.badgeCert}`}>Certificado</span>
                    </div>
                    <p className={styles.certInstitution}>{cert.institution}</p>
                    {cert.detail && <p className={styles.certDetail}>{cert.detail}</p>}
                    {cert.date  && <p className={styles.certDate}>{cert.date}</p>}
                  </div>
                  <a
                    href={cert.file}
                    download
                    className={styles.downloadBtn}
                    aria-label={`Descargar ${cert.name}`}
                    title="Descargar PDF"
                  >
                    <i className="ti ti-download" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Cursos (sección separada abajo) ── */}
      <section className={styles.coursesSection}>
        <h2 className={styles.cardTitle}>
          <i className="ti ti-books" aria-hidden="true" />
          Cursos
        </h2>
        <div className={styles.coursesGrid}>
          {COURSES.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <div className={styles.courseLeft}>
                <i className="ti ti-certificate-2" aria-hidden="true" />
              </div>
              <div className={styles.courseInfo}>
                <div className={styles.certHeader}>
                  <p className={styles.certName}>{course.name}</p>
                  {course.status === 'in-progress'
                    ? <span className={`${styles.badge} ${styles.badgeProgress}`}>En curso</span>
                    : <span className={`${styles.badge} ${styles.badgeCourse}`}>Completado</span>
                  }
                </div>
                <p className={styles.certInstitution}>{course.institution}</p>
                {course.detail && <p className={styles.certDetail}>{course.detail}</p>}
              </div>
              {course.date && <span className={styles.courseYear}>{course.date}</span>}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
