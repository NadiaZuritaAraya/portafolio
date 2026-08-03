import { COMPANIES }      from '../../../constants/companies';
import { CompanyGrid }    from '../company/CompanyGrid';
import { CompanyDetail }  from '../company/CompanyDetail';
import styles from './TrayectoriaTab.module.css';

export function TrayectoriaTab({ selectedSlug, onSelect, onBack }) {
  const company = selectedSlug ? COMPANIES.find((c) => c.slug === selectedSlug) : null;

  return (
    <div className={styles.tab}>
      {/* Quick-nav de empresas */}
      {!company && (
        <div className={styles.quickNav} role="list" aria-label="Empresas">
          {COMPANIES.map((c) => (
            <button
              key={c.slug}
              className={styles.quickBtn}
              role="listitem"
              onClick={() => onSelect(c.slug)}
            >
              <span className={styles.quickName}>{c.name}</span>
              <span className={styles.quickPeriod}>{c.period}</span>
              <span className={styles.quickRole}>{c.role}</span>
            </button>
          ))}
        </div>
      )}

      {company ? (
        <CompanyDetail company={company} onBack={onBack} />
      ) : (
        <CompanyGrid onSelect={onSelect} />
      )}
    </div>
  );
}
