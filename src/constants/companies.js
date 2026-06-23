/**
 * companies.js — Empresas en el CV de Nadia Zurita
 */

export const COMPANIES = [
  {
    id:      'afp-capital',
    slug:    'afp-capital',
    name:    'AFP Capital',
    period:  'Oct 2024 – Mar 2026',
    description: 'Migración a arquitectura Data Lakehouse en GCP con gobierno de datos y pipelines automatizados.',
    role:    'Senior Data Engineer',
    location: 'Remote',
    achievements: [
      'Diseño e implementación de arquitectura Data Lakehouse de 3 capas en GCP',
      'Reducción del tiempo de acceso a datos de 4 horas a 15 minutos',
      'Implementación de Dataplex para gobierno y linaje de datos',
      '80+ modelos documentados y versionados en Dataform',
    ],
    technologies: ['BigQuery', 'Cloud Data Fusion', 'Dataform', 'Dataproc', 'Dataplex', 'PySpark'],
  },

  {
    id:      'elitsoft',
    slug:    'elitsoft',
    name:    'ElitSoft',
    period:  'Abr 2023 – Sep 2024',
    description: 'Orquestación de pipelines AWS con Apache Airflow y arquitectura de CI/CD para data.',
    role:    'Data Engineer',
    location: 'Remote',
    achievements: [
      'Automatización del 100% de ingestas batch desde legacy a Redshift',
      'Reducción del 60% en tiempo de procesamiento con Spark en EMR',
      'Implementación de CI/CD con AWS CodePipeline y Jenkins',
      'Cero intervenciones manuales en producción por 6 meses consecutivos',
    ],
    technologies: ['AWS Glue', 'Amazon EMR', 'Apache Airflow', 'Redshift', 'Lambda', 'CodePipeline'],
  },

  {
    id:      'cic-sa',
    slug:    'cic-sa',
    name:    'CIC S.A.',
    period:  'Mar 2020 – Abr 2023',
    description: 'Dashboards de logística en tiempo real y transformación de reportes manuales a automatizados.',
    role:    'BI Developer / Data Analyst',
    location: 'Presencial - Santiago',
    achievements: [
      'Desarrollo de dashboard logístico con actualización cada 15 minutos en Qlik Sense',
      'Reducción del tiempo de reporte de 2 días a tiempo real',
      'Adopción del 100% del área logística en el nuevo sistema',
      'Automatización de ETL con Control-M y Oracle',
    ],
    technologies: ['Qlik Sense', 'QlikView', 'NPrinting', 'Oracle', 'Control-M', 'SQL'],
  },
];

export const COMPANY_FILTERS = [
  { key: 'all', label: 'Todas' },
  { key: 'current', label: 'Actual' },
  { key: 'cloud', label: 'Cloud' },
  { key: 'bi', label: 'BI' },
];
