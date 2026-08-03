import { useState } from 'react';
import { PROFILE, EDUCATION, CERTIFICATES, COURSES } from '../../../constants/portfolio';
import styles from './PerfilTab.module.css';

const STATS = [
  { value: '8+',        label: 'Años de experiencia',    icon: 'ti-calendar-stats' },
  { value: 'GCP · AWS', label: 'Plataformas cloud',      icon: 'ti-cloud'          },
  { value: '5',         label: 'Empresas en producción', icon: 'ti-building-skyscraper' },
  { value: 'ETL · BI',  label: 'Especialización core',   icon: 'ti-stack-2'        },
];

function BadgeType({ type, status }) {
  if (status === 'in-progress') return <span className={`${styles.badge} ${styles.badgeProgress}`}>En curso</span>;
  if (type === 'course')        return <span className={`${styles.badge} ${styles.badgeCourse}`}>Curso</span>;
  return <span className={`${styles.badge} ${styles.badgeCert}`}>Certificado</span>;
}

export function PerfilTab() {
  const [imgError, setImgError] = useState(false);
  const allItems = [...CERTIFICATES, ...COURSES];

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
              <a
                href={PROFILE.linkedin}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ti ti-brand-linkedin" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats panel */}
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

      {/* ── Fila inferior ── */}
      <div className={styles.bottomGrid}>

        {/* Formación + CV combinados */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>
            <i className="ti ti-school" aria-hidden="true" />
            Formación académica
          </h2>
          {EDUCATION.map((edu) => (
            <div key={edu.id} className={styles.eduItem}>
              <p className={styles.eduDegree}>{edu.degree}</p>
              <p className={styles.eduInstitution}>{edu.institution}</p>
              <p className={styles.eduMeta}>{edu.location}</p>
              <p className={styles.eduMeta}>Titulada el {edu.graduated}</p>
            </div>
          ))}

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
        </section>

        {/* Certificados y cursos */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>
            <i className="ti ti-certificate" aria-hidden="true" />
            Certificados y cursos
          </h2>
          <div className={styles.certList}>
            {allItems.map((item) => (
              <div key={item.id} className={styles.certItem}>
                <div className={styles.certInfo}>
                  <div className={styles.certHeader}>
                    <p className={styles.certName}>{item.name}</p>
                    <BadgeType type={item.type} status={item.status} />
                  </div>
                  <p className={styles.certInstitution}>{item.institution}</p>
                  {item.detail && <p className={styles.certDetail}>{item.detail}</p>}
                  {item.date && <p className={styles.certDate}>{item.date}</p>}
                </div>
                {item.file && (
                  <a
                    href={item.file}
                    download
                    className={styles.downloadBtn}
                    aria-label={`Descargar ${item.name}`}
                    title="Descargar PDF"
                  >
                    <i className="ti ti-download" aria-hidden="true" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
