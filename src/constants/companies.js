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
    projects: [
      {
        id: 'afp-migracion-end-to-end',
        name: 'Migración End-to-End On-Premise → GCP',
        description: 'Migración de datos desde bases de datos on-premise hacia infraestructura en GCP con validación de integridad y zero-downtime.',
        stack: [
          'Google Cloud Storage: Gestión de archivos en buckets para entornos ETL, con control de versiones y organización por ambientes (dev, qa, prod).',
          'BigQuery: Modelado de datos, creación de vistas y tablas particionadas, optimización de consultas y manejo de grandes volúmenes de datos.',
          'Cloud Data Fusion: Pipelines de ingesta y transformación desde orígenes on-premise y cloud hacia BigQuery con validación de esquemas.',
          'Cloud Dataflow: Procesamiento batch y streaming de datos con integración con Pub/Sub para ingestas de tiempo real.',
          'Cloud Functions: Funciones serverless para transformación y validación de datos en tiempo real durante la migración.',
          'Terraform: Infraestructura como código para provisionar recursos (BigQuery, Storage, cuentas de servicio, permisos IAM).',
          'Python: Scripts de migración y validación de integridad de datos.',
          'SQL: Queries de validación y reconciliación entre origen y destino.',
        ],
      },
      {
        id: 'afp-arquitectura-datos',
        name: 'Apoyo en Arquitectura de Datos',
        description: 'Diseño y evolución de la arquitectura Data Lakehouse con capas crudo, curado y producto para soportar múltiples casos de uso analíticos.',
        stack: [
          'BigQuery: Diseño de esquema dimensional, tablas de hechos y dimensiones, optimización para análisis OLAP.',
          'Dataform: Modelado modular en SQL, estructuración en capas (raw, staging, marts), control de dependencias y versionamiento con Git.',
          'Google Cloud Storage: Diseño de estructura de buckets por ambiente, retención y ciclo de vida de datos, optimización de costos.',
          'Identity and Access Management (IAM): Configuración de políticas de acceso granulares por rol y ambiente.',
          'Cloud Resource Manager: Gestión de proyectos, permisos y presupuestos de GCP.',
          'Monitoring y Logging: Implementación de alertas y dashboards de salud de la infraestructura de datos.',
        ],
      },
      {
        id: 'afp-dataform',
        name: 'Desarrollo de Dataform',
        description: '80+ modelos SQL documentados con dependencias explícitas, versionado en Git, y ejecución automática con testing integrado.',
        stack: [
          'Dataform: Desarrollo modular con SQL, definición de dependencias (ref/source), testing y documentación de columnas.',
          'Git & GitHub: Versionado de modelos, code reviews, branching strategy (main/dev), CI/CD integration.',
          'BigQuery: Compilación de SQL, ejecución de queries, optimización de performance con particionado y clustering.',
          'dbt concepts: Aunque usa Dataform, aplicación de buenas prácticas de dbt (modelado en capas, testing, documentación).',
          'YAML: Definición de configuraciones y metadatos de modelos en Dataform.',
        ],
      },
      {
        id: 'afp-consultas-programadas',
        name: 'Desarrollo de Consultas Programadas',
        description: 'Implementación de queries programadas (scheduled queries) para agregaciones diarias, actualizaciones de vistas y generación de reportes automatizados.',
        stack: [
          'BigQuery: Desarrollo y optimización de SQL complejas con window functions, subconsultas correlacionadas y CTEs.',
          'Scheduled Queries: Configuración de jobs que ejecutan automáticamente a intervalos específicos con notificaciones de error.',
          'SQL: Query optimization, índices, particionado y clustering para mejorar performance.',
          'Python: Scripts de Post-processing para transformar resultados y enviar a sistemas downstream.',
          'Cloud Pub/Sub: Integración de queries programadas con eventos de tiempo real.',
        ],
      },
      {
        id: 'afp-cloud-functions-run',
        name: 'Desarrollo de Cloud Functions & Cloud Run',
        description: 'Microservicios serverless para transformación, validación y orquestación de datos con escalado automático.',
        stack: [
          'Cloud Functions: Funciones serverless en Python/Node.js para ETL triggers, transformaciones de datos, validaciones.',
          'Cloud Run: Contenedores Docker con endpoints REST para microservicios de data processing, escalado automático según demanda.',
          'Python: Desarrollo de lógica de negocio, librerías (pandas, google-cloud-bigquery, requests).',
          'Docker: Containerización de aplicaciones para Cloud Run.',
          'Cloud Tasks: Encola y ejecuta tareas asincrónicas (reintentos, deadletter queues).',
          'Cloud Pub/Sub: Comunicación event-driven entre funciones y servicios.',
          'IAM & Service Accounts: Autenticación y autorización para acceso a BigQuery y Storage.',
        ],
      },
      {
        id: 'afp-gobierno-datos-dataplex',
        name: 'Gobierno de Datos con Dataplex',
        description: 'Implementación de catálogo de datos, linaje, calidad de datos y políticas de acceso con Dataplex.',
        stack: [
          'Dataplex: Catálogo de datos (Data Catalog), definición de zonas de datos, Asset tagging y linaje automático.',
          'Data Quality: Reglas para detectar nulos, duplicados, formatos erróneos y anomalías previo a la carga en capas productivas.',
          'Looker Studio: Dashboards de calidad de datos en tiempo real, monitoreo de SLAs de data.',
          'BigQuery Metadata: Extracción de metadatos y linaje automático desde queries ejecutadas.',
          'IAM Policies: Implementación de políticas de acceso granulares a nivel de datos sensibles.',
          'Terraform: IaC para provisionar políticas de Dataplex y configuraciones de gobierno.',
          'SQL: Queries de validación de calidad y generación de reportes de linaje.',
        ],
      },
    ],
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
