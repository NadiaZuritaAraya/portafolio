export const PROFILE = {
  name:  'Nadia Zurita',
  title: 'Senior Data Engineer & BI',
  photo: '/profile/nadia.jpg',
  bio: [
    'Senior Data Engineer & BI con 8 años de experiencia diseñando e implementando arquitecturas de datos cloud-native en los sectores financiero, aeronáutico y aerolíneas. Especializada en GCP (BigQuery, Dataflow, Cloud Run, Cloud Functions, Pub/Sub, Dataplex) y AWS (Glue, Redshift, Lambda, MWAA), con dominio avanzado de herramientas de orquestación como Apache Airflow, Terraform y dbt.',
    'Ha liderado proyectos de migración on-premise a la nube, gobierno de datos con Dataplex, construcción de pipelines ETL/ELT end-to-end y soluciones analíticas avanzadas con Power BI y Qlik Sense. Experiencia en liderazgo técnico de equipos multidisciplinarios, trabajo directo con stakeholders ejecutivos y gestión de proyectos de alto impacto bajo metodologías ágiles.',
  ],
  email:    'nadia.zuritaaraya@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nadia-soledad-zurita-araya/',
};

export const EDUCATION = [
  {
    id:          'duocuc',
    degree:      'Ingeniería en Informática',
    institution: 'Instituto Profesional DuocUC',
    location:    'Santiago, Chile — Sede Plaza Oeste',
    period:      '2015 – 2018',
    graduated:   '28 de diciembre de 2018',
    icon:        'ti-school',
  },
];

export const CERTIFICATES = [
  {
    id:          'modulos-duocuc',
    name:        'Certificado de Módulos',
    detail:      'Programación Avanzada · Arquitectura de Sistemas · Auditoría · Modelamiento · Seguridad Computacional · Administración de BD · Sistemas Operativos · Gestión de Proyectos',
    institution: 'Instituto Profesional DuocUC',
    date:        'Agosto 2026',
    file:        '/certificates/certificado-modulos-duocuc.pdf',
    type:        'certificate',
    status:      'completed',
  },
  {
    id:          'profesional-registro-civil',
    name:        'Certificado de Profesionales',
    detail:      'Título: Ingeniero en Informática — Folio 500692412259',
    institution: 'Servicio de Registro Civil e Identificación',
    date:        'Abril 2026',
    file:        '/certificates/certificado-profesional-registro-civil.pdf',
    type:        'certificate',
    status:      'completed',
  },
];

export const COURSES = [
  {
    id:          'gcp-professional-de',
    name:        'Professional Data Engineer',
    institution: 'Google Cloud',
    detail:      'Diseño de sistemas de procesamiento, almacenamiento y análisis de datos a escala en GCP',
    date:        '2025',
    file:        null,
    type:        'course',
    status:      'completed',
  },
  {
    id:          'airflow-fundamentals',
    name:        'Apache Airflow Fundamentals',
    institution: 'Astronomer',
    detail:      'Orquestación de pipelines, diseño de DAGs y mejores prácticas con Airflow',
    date:        '2024',
    file:        null,
    type:        'course',
    status:      'completed',
  },
];

export const STACK_CORE = [
  { name: 'BigQuery',       icon: 'ti-database'        },
  { name: 'Python',         icon: 'ti-brand-python'    },
  { name: 'SQL',            icon: 'ti-code'            },
  { name: 'Apache Airflow', icon: 'ti-topology-star-3' },
  { name: 'Power BI',       icon: 'ti-chart-bar'       },
  { name: 'Terraform',      icon: 'ti-cube-send'       },
];

export const STACK_CATEGORIES = [
  {
    id:      'gcp',
    name:    'GCP',
    icon:    'ti-cloud',
    variant: 'violet',
    tools: ['BigQuery', 'Dataflow', 'Cloud Run', 'Cloud Functions', 'Pub/Sub', 'Dataplex', 'Dataform', 'Cloud Composer', 'Cloud Storage', 'Cloud Scheduler', 'Cloud Data Fusion'],
  },
  {
    id:      'aws',
    name:    'AWS',
    icon:    'ti-brand-aws',
    variant: 'cyan',
    tools: ['Glue', 'Redshift', 'Lambda', 'MWAA', 'EMR', 'S3', 'CodePipeline', 'CloudWatch', 'Secrets Manager'],
  },
  {
    id:      'data-engineering',
    name:    'Data Engineering',
    icon:    'ti-flame',
    variant: 'violet',
    tools: ['Apache Spark', 'PySpark', 'Dataproc', 'Dataform', 'Cloud Data Fusion', 'Apache Kafka', 'Pub/Sub', 'dbt'],
  },
  {
    id:      'bi-viz',
    name:    'BI & Visualización',
    icon:    'ti-chart-dots',
    variant: 'cyan',
    tools: ['Power BI', 'Qlik Sense', 'QlikView', 'Looker Studio', 'Tableau', 'NPrinting', 'Looker'],
  },
  {
    id:      'orquestacion',
    name:    'Orquestación & Pipelines',
    icon:    'ti-topology-star-3',
    variant: 'violet',
    tools: ['Apache Airflow', 'Cloud Composer', 'MWAA', 'Control-M', 'Cloud Scheduler', 'Cloud Tasks'],
  },
  {
    id:      'devops',
    name:    'DevOps & Metodologías',
    icon:    'ti-git-branch',
    variant: 'cyan',
    tools: ['Terraform', 'GitLab', 'GitHub', 'Jenkins', 'Docker', 'dbt', 'Scrum', 'Kanban', 'Jira', 'CI/CD'],
  },
];
