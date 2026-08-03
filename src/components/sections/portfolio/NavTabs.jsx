import { useState, useRef, useEffect } from 'react';
import { COMPANIES } from '../../../constants/companies';
import { ROUTES }    from '../../../constants';
import styles from './NavTabs.module.css';

const TABS = [
  { id: 'perfil',      label: 'Perfil',      icon: 'ti-user'      },
  { id: 'stack',       label: 'Stack',        icon: 'ti-stack-2'   },
  { id: 'trayectoria', label: 'Trayectoria',  icon: 'ti-briefcase', hasDropdown: true },
];

export function NavTabs({ active, email, onTabChange, onSelectCompany }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function handleTabClick(tab) {
    if (tab.hasDropdown) {
      setDropdownOpen((v) => !v);
    } else {
      setDropdownOpen(false);
    }
    onTabChange(tab.id);
  }

  function handleCompanyClick(slug) {
    setDropdownOpen(false);
    onSelectCompany(slug);
  }

  return (
    <nav className={styles.nav} aria-label="Navegación del portafolio">
      <div className={styles.inner}>
        <span className={styles.brand}>
          <i className="ti ti-hexagon-letter-n" aria-hidden="true" />
          <span>NZ Portfolio</span>
        </span>

        <div className={styles.tabs} role="tablist">
          {TABS.map((tab) => (
            <div key={tab.id} className={styles.tabWrap} ref={tab.hasDropdown ? dropdownRef : null}>
              <button
                role="tab"
                aria-selected={active === tab.id}
                className={`${styles.tab} ${active === tab.id ? styles.active : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                <i className={`ti ${tab.icon}`} aria-hidden="true" />
                <span>{tab.label}</span>
                {tab.hasDropdown && (
                  <i
                    className={`ti ti-chevron-down ${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ''}`}
                    aria-hidden="true"
                  />
                )}
              </button>

              {tab.hasDropdown && dropdownOpen && (
                <div className={styles.dropdown} role="menu">
                  {COMPANIES.map((c) => (
                    <button
                      key={c.slug}
                      className={styles.dropdownItem}
                      role="menuitem"
                      onClick={() => handleCompanyClick(c.slug)}
                    >
                      <span className={styles.dropdownName}>{c.name}</span>
                      <span className={styles.dropdownPeriod}>{c.period}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.right}>
          {email && (
            <span className={styles.emailBadge}>
              <i className="ti ti-check" aria-hidden="true" />
              {email}
            </span>
          )}
          <a href={ROUTES.home} className={styles.exit}>
            <i className="ti ti-logout" aria-hidden="true" />
            Salir
          </a>
        </div>
      </div>
    </nav>
  );
}
