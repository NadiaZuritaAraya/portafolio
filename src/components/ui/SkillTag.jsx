import styles from './SkillTag.module.css';

export function SkillTag({ label, variant = 'violet' }) {
  return (
    <span className={`${styles.tag} ${styles[variant]}`}>
      {label}
    </span>
  );
}
