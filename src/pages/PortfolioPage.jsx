import { useState, useEffect } from 'react';
import { useTokenValidation }  from '../hooks/useTokenValidation';
import { ROUTES }              from '../constants';
import { NavTabs }             from '../components/sections/portfolio/NavTabs';
import { PerfilTab }           from '../components/sections/portfolio/PerfilTab';
import { StackTab }            from '../components/sections/portfolio/StackTab';
import { TrayectoriaTab }      from '../components/sections/portfolio/TrayectoriaTab';
import styles from './PortfolioPage.module.css';

export function PortfolioPage() {
  const { checking, granted, email } = useTokenValidation();
  const [activeTab,    setActiveTab]    = useState('perfil');
  const [selectedSlug, setSelectedSlug] = useState(null);

  /* redirect si no tiene acceso */
  useEffect(() => {
    if (!checking && !granted) {
      window.location.href = ROUTES.home;
    }
  }, [checking, granted]);

  /* sincronizar ?project= en la URL */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug   = params.get('project');
    if (slug) { setSelectedSlug(slug); setActiveTab('trayectoria'); }
  }, []);

  function handleTabChange(tab) {
    setActiveTab(tab);
    if (tab !== 'trayectoria') {
      setSelectedSlug(null);
      clearProjectParam();
    }
  }

  function handleSelectCompany(slug) {
    setActiveTab('trayectoria');
    setSelectedSlug(slug);
    const url = new URL(window.location.href);
    url.searchParams.set('project', slug);
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleBack() {
    setSelectedSlug(null);
    clearProjectParam();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function clearProjectParam() {
    const url = new URL(window.location.href);
    url.searchParams.delete('project');
    window.history.pushState({}, '', url);
  }

  /* estados de carga */
  if (checking) {
    return (
      <div className={styles.center}>
        <div className={styles.spinner} aria-label="Cargando…" />
      </div>
    );
  }

  if (!granted) return null;

  return (
    <div className={styles.page}>
      <NavTabs
        active={activeTab}
        email={email}
        onTabChange={handleTabChange}
        onSelectCompany={handleSelectCompany}
      />

      <main className={styles.content}>
        {activeTab === 'perfil' && <PerfilTab />}
        {activeTab === 'stack'  && <StackTab />}
        {activeTab === 'trayectoria' && (
          <TrayectoriaTab
            selectedSlug={selectedSlug}
            onSelect={handleSelectCompany}
            onBack={handleBack}
          />
        )}
      </main>
    </div>
  );
}
