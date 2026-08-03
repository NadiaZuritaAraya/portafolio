import { useState } from 'react';
import { PROFILE, EDUCATION, CERTIFICATES } from '../../../constants/portfolio';
import styles from './PerfilTab.module.css';

export function PerfilTab() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={styles.tab}>

      {/* ── Hero perfil ── */}
      <section className={styles.hero}>
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
          <h1 className={styles.name}>
            <span className={styles.violet}>Nadia Zurita</span>
          </h1>
          <p className={styles.title}>
            <span className={styles.cyan}>Data Engineer</span> &amp; BI
          </p>
          <p className={styles.bio}>{PROFILE.bio}</p>

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
      </section>

      {/* ── Fila inferior: Formación + Certificados ── */}
      <div className={styles.infoGrid}>

        {/* Formación */}
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
        </section>

        {/* Certificados */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>
            <i className="ti ti-certificate" aria-hidden="true" />
            Certificados
          </h2>
          <div className={styles.certList}>
            {CERTIFICATES.map((cert) => (
              <div key={cert.id} className={styles.certItem}>
                <div className={styles.certInfo}>
                  <p className={styles.certName}>{cert.name}</p>
                  <p className={styles.certInstitution}>{cert.institution}</p>
                  <p className={styles.certDetail}>{cert.detail}</p>
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
        </section>

        {/* CV */}
        <section className={`${styles.card} ${styles.cvCard}`}>
          <h2 className={styles.cardTitle}>
            <i className="ti ti-file-cv" aria-hidden="true" />
            Currículum Vitae
          </h2>
          <p className={styles.cvSub}>Descarga el CV completo en PDF</p>
          <a href="/CV_Nadia_Zurita_DE.pdf" download className={styles.cvBtn}>
            <i className="ti ti-download" aria-hidden="true" />
            Descargar CV
          </a>
        </section>

      </div>
    </div>
  );
}
