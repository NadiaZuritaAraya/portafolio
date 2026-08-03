import { useState } from 'react';
import { STACK_CATEGORIES } from '../../../constants/portfolio';
import styles from './StackTab.module.css';

const TOOL_ICONS = {
  // GCP
  'BigQuery':          'ti-chart-circles',
  'Dataflow':          'ti-waves',
  'Cloud Run':         'ti-server',
  'Cloud Functions':   'ti-bolt',
  'Pub/Sub':           'ti-antenna',
  'Dataplex':          'ti-layers-intersect',
  'Dataform':          'ti-transform',
  'Cloud Composer':    'ti-topology-star-3',
  'Cloud Storage':     'ti-box',
  'Cloud Scheduler':   'ti-clock',
  'Cloud Data Fusion': 'ti-arrows-join',
  // AWS
  'Glue':              'ti-sparkles',
  'Redshift':          'ti-database',
  'Lambda':            'ti-bolt',
  'MWAA':              'ti-topology-star-3',
  'EMR':               'ti-chart-dots',
  'S3':                'ti-box',
  'CodePipeline':      'ti-git-branch',
  'CloudWatch':        'ti-activity',
  'Secrets Manager':   'ti-lock',
  // Data Engineering
  'Apache Spark':      'ti-flame',
  'PySpark':           'ti-brand-python',
  'Dataproc':          'ti-cpu',
  'Apache Kafka':      'ti-antenna',
  'dbt':               'ti-hexagon-letter-d',
  // BI
  'Power BI':          'ti-chart-bar',
  'Qlik Sense':        'ti-chart-dots',
  'QlikView':          'ti-chart-pie',
  'Looker Studio':     'ti-chart-line',
  'Tableau':           'ti-chart-area',
  'NPrinting':         'ti-file-analytics',
  'Looker':            'ti-eye',
  // Orquestación
  'Apache Airflow':    'ti-topology-star-3',
  'Control-M':         'ti-settings',
  'Cloud Tasks':       'ti-list-check',
  // DevOps
  'Terraform':         'ti-cube-send',
  'GitLab':            'ti-brand-gitlab',
  'GitHub':            'ti-brand-github',
  'Jenkins':           'ti-settings-2',
  'Docker':            'ti-brand-docker',
  'Scrum':             'ti-run',
  'Kanban':            'ti-layout-kanban',
  'Jira':              'ti-brand-jira',
  'CI/CD':             'ti-git-merge',
};

const FILTERS = [
  { key: 'all',   label: 'Todas',             ids: null },
  { key: 'cloud', label: 'Cloud',              ids: ['gcp', 'aws'] },
  { key: 'data',  label: 'Datos',              ids: ['data-engineering'] },
  { key: 'bi',    label: 'BI & Visualización', ids: ['bi-viz'] },
  { key: 'orch',  label: 'Orquestación',       ids: ['orquestacion'] },
  { key: 'devops',label: 'DevOps',             ids: ['devops'] },
];

const PREVIEW = 6;

export function StackTab() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expanded, setExpanded]         = useState({});

  const visibleCats = activeFilter === 'all'
    ? STACK_CATEGORIES
    : STACK_CATEGORIES.filter(c =>
        FILTERS.find(f => f.key === activeFilter)?.ids?.includes(c.id)
      );

  const toggle = (id) =>
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className={styles.tab}>

      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.headerLabel}>
            <i className="ti ti-plus" aria-hidden="true" /> MI STACK TECNOLÓGICO
          </p>
          <h2 className={styles.headerTitle}>
            Tecnologías y herramientas{' '}
            <span className={styles.headerAccent}>que impulsan mis proyectos</span>
          </h2>
          <p className={styles.headerSub}>
            Especializada en ingeniería de datos y Business Intelligence sobre GCP y AWS.
          </p>
        </div>
        <div className={styles.statCard}>
          <i className="ti ti-briefcase" aria-hidden="true" />
          <span className={styles.statNum}>8+</span>
          <span className={styles.statLabel}>Años de experiencia</span>
        </div>
      </div>

      {/* ── Filters ── */}
      <div className={styles.filters}>
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`${styles.filterBtn} ${activeFilter === f.key ? styles.filterActive : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ── Category cards ── */}
      <div className={styles.catGrid}>
        {visibleCats.map(cat => {
          const isExpanded = expanded[cat.id];
          const tools      = isExpanded ? cat.tools : cat.tools.slice(0, PREVIEW);
          const hasMore    = cat.tools.length > PREVIEW;

          return (
            <div key={cat.id} className={`${styles.catCard} ${styles[cat.variant]}`}>

              <div className={styles.catHeader}>
                <div className={styles.catIconWrap}>
                  <i className={`ti ${cat.icon}`} aria-hidden="true" />
                </div>
                <h3 className={styles.catName}>{cat.name}</h3>
                <span className={styles.catCount}>{cat.tools.length} herramientas</span>
              </div>

              <div className={styles.toolList}>
                {tools.map(tool => (
                  <div key={tool} className={styles.toolItem}>
                    <i
                      className={`ti ${TOOL_ICONS[tool] || 'ti-circle'} ${styles.toolIcon}`}
                      aria-hidden="true"
                    />
                    <span className={styles.toolName}>{tool}</span>
                  </div>
                ))}
              </div>

              {hasMore && (
                <button className={styles.viewAll} onClick={() => toggle(cat.id)}>
                  {isExpanded ? 'Ver menos' : 'Ver todas'}
                  <i className={`ti ${isExpanded ? 'ti-chevron-up' : 'ti-arrow-right'}`} aria-hidden="true" />
                </button>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
