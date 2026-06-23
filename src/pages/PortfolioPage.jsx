import { useState, useEffect } from 'react';
import { useTokenValidation }  from '../hooks/useTokenValidation';
import { ProjectGrid }         from '../components/sections/project/ProjectGrid';
import { ProjectDetail }       from '../components/sections/project/ProjectDetail';
import { PROJECTS }            from '../constants/projects';
import { ROUTES }              from '../constants';
import styles from './PortfolioPage.module.css';

export function PortfolioPage() {
  const { checking, granted, email } = useTokenValidation();
  const [selectedSlug, setSelectedSlug] = useState(null);

  useEffect(() => {
    if (!checking && !granted) {
      window.location.href = ROUTES.home;
    }
  }, [checking, granted]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug   = params.get('project');
    if (slug) setSelectedSlug(slug);
  }, []);

  function selectProject(slug) {
    setSelectedSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const url = new URL(window.location.href);
    url.searchParams.set('project', slug);
    window.history.pushState({}, '', url);
  }

  function goBack() {
    setSelectedSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const url = new URL(window.location.href);
    url.searchParams.delete('project');
    window.history.pushState({}, '', url);
  }

  if (checking) {
    return (
      <div className={styles.center}>
        <div className={styles.spinner} aria-label="Cargando portafolio…" />
      </div>
    );
  }

  if (!granted) return null;

  const project = selectedSlug ? PROJECTS.find(p => p.slug === selectedSlug) : null;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.welcome}>
          <i className="ti ti-check" aria-hidden="true" />
          Acceso concedido · {email}
        </p>
        <a href={ROUTES.home} className={styles.exit}>Salir</a>
      </header>

      {project ? (
        <ProjectDetail project={project} onBack={goBack} />
      ) : (
        <>
          <ProjectGrid onSelect={selectProject} />
          <CvSection />
        </>
      )}
    </main>
  );
}

function CvSection() {
  return (
    <div className={styles.cvSection}>
      <div className={styles.cvRow}>
        <div>
          <p className={styles.cvTitle}>Currículum Vitae</p>
          <p className={styles.cvSub}>Descarga el CV completo en PDF</p>
        </div>
        <a
          href="/CV_Nadia_Zurita_DE.pdf"
          download
          className={styles.cvBtn}
          aria-label="Descargar CV en PDF"
        >
          <i className="ti ti-download" aria-hidden="true" /> Descargar CV
        </a>
      </div>
    </div>
  );
}
