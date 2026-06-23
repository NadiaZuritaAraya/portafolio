export const COLORS = {
  bg:           '#09090f',
  bg2:          '#0f0f1a',
  bg3:          '#14142a',
  violet:       '#7c3aed',
  violetLight:  '#a78bfa',
  violetDim:    '#3b1f6b',
  cyan:         '#06b6d4',
  cyanLight:    '#67e8f9',
  cyanDim:      '#0e4f5c',
  text:         '#f1f0ff',
  textMuted:    '#8b8ba0',
  border:       '#1e1e35',
  borderV:      '#3b1f6b',
};

export const ROUTES = {
  home:      '/',
  access:    '/access',
  portfolio: '/portfolio',
};

export const TOKEN_TTL_HOURS = 24;

export const SKILLS = [
  { label: 'GCP · BigQuery',        variant: 'violet' },
  { label: 'AWS · Redshift',        variant: 'cyan'   },
  { label: 'Dataflow · Dataform',   variant: 'violet' },
  { label: 'Apache Spark · PySpark',variant: 'cyan'   },
  { label: 'Power BI · Qlik',       variant: 'violet' },
  { label: 'Python · SQL',          variant: 'cyan'   },
  { label: 'Data Lakehouse',        variant: 'violet' },
  { label: 'Apache Airflow',        variant: 'cyan'   },
];

export const STACK = [
  { icon: 'ti-cloud',           name: 'GCP',             desc: 'BigQuery · Dataflow\nDataform · Dataplex',  variant: 'violet' },
  { icon: 'ti-brand-aws',       name: 'AWS',             desc: 'Glue · Redshift\nEMR · Lambda',             variant: 'cyan'   },
  { icon: 'ti-topology-star-3', name: 'Orquestación',    desc: 'Airflow · Composer\nMWAA · Control-M',      variant: 'violet' },
  { icon: 'ti-flame',           name: 'Big Data',        desc: 'Apache Spark\nPySpark · Dataproc',          variant: 'cyan'   },
  { icon: 'ti-chart-bar',       name: 'BI & Viz',        desc: 'Power BI · Qlik\nTableau · Looker',         variant: 'violet' },
  { icon: 'ti-code',            name: 'Lenguajes',       desc: 'SQL · Python\nPySpark · R',                 variant: 'cyan'   },
  { icon: 'ti-database',        name: 'Bases de datos',  desc: 'Oracle · SQL Server\nPostgreSQL · MySQL',   variant: 'violet' },
  { icon: 'ti-git-branch',      name: 'DevOps',          desc: 'GitLab · Jenkins\nDBT · CodePipeline',      variant: 'cyan'   },
  { icon: 'ti-layout-kanban',   name: 'Metodologías',    desc: 'Scrum · Kanban\nJira · documentación',      variant: 'violet' },
];

export const STATS = [
  { number: '6+', label: 'años de experiencia', variant: 'violet' },
  { number: '5',  label: 'empresas en producción', variant: 'cyan' },
  { number: '2',  label: 'nubes · GCP & AWS',   variant: 'violet' },
];
