import { COMPANIES }      from '../../../constants/companies';
import { CompanyGrid }    from '../company/CompanyGrid';
import { CompanyDetail }  from '../company/CompanyDetail';
import styles from './TrayectoriaTab.module.css';

export function TrayectoriaTab({ selectedSlug, onSelect, onBack }) {
  const company = selectedSlug ? COMPANIES.find((c) => c.slug === selectedSlug) : null;

  return (
    <div className={styles.tab}>
      {company ? (
        <CompanyDetail company={company} onBack={onBack} />
      ) : (
        <CompanyGrid onSelect={onSelect} />
      )}
    </div>
  );
}
