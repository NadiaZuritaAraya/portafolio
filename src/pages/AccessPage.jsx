import { useEffect } from 'react';
import { useTokenValidation } from '../hooks/useTokenValidation';
import { ROUTES } from '../constants';
import styles from './AccessPage.module.css';

export function AccessPage() {
  const { checking, granted, error } = useTokenValidation();

  useEffect(() => {
    if (granted) {
      window.location.href = ROUTES.portfolio;
    }
  }, [granted]);

  if (checking) {
    return (
      <div className={styles.center}>
        <div className={styles.spinner} aria-label="Verificando acceso…" />
        <p className={styles.msg}>Verificando tu acceso…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.center}>
        <i className="ti ti-lock" style={{ fontSize: 32, color: 'var(--violet-light)' }} aria-hidden="true" />
        <p className={styles.errorTitle}>Acceso no disponible</p>
        <p className={styles.errorDesc}>{error}</p>
        <a href={ROUTES.home} className={styles.backBtn}>
          Volver al inicio
        </a>
      </div>
    );
  }

  return null;
}
