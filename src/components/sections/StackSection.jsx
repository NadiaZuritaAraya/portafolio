import { STACK } from '../../constants';
import styles from './StackSection.module.css';

export function StackSection() {
  return (
    <section className={styles.section} aria-labelledby="stack-title">
      <p className={styles.label}>Stack técnico</p>
      <h2 id="stack-title" className={styles.title}>Herramientas principales</h2>

      <div className={styles.grid}>
        {STACK.map((item) => (
          <div key={item.name} className={styles.card}>
            <i
              className={`ti ${item.icon} ${styles.icon} ${styles[item.variant]}`}
              aria-hidden="true"
            />
            <p className={styles.name}>{item.name}</p>
            <p className={styles.desc}>
              {item.desc.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < item.desc.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
