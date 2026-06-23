/**
 * projects.js — Fuente única de datos de proyectos.
 *
 * Para agregar un nuevo proyecto:
 * 1. Copia uno de los objetos de abajo y modifica los valores.
 * 2. Sube las imágenes a /public/projects/TU-SLUG/
 * 3. Referencia las imágenes como "/projects/TU-SLUG/nombre.png"
 * 4. Listo — aparece automáticamente en el grid y tiene su propia página.
 */

export const PROJECTS = [
  {
    id:      'migracion-lakehouse',
    slug:    'migracion-lakehouse',
    type:    'arch',
    typeLabel: 'Arquitectura',
    company: 'AFP Capital',
    period:  'Oct 2024 – Mar 2026',
    name:    'Migración Data Lakehouse',
    summary: 'Migración end-to-end on-premise → GCP con arquitectura de tres capas y gobierno de datos con Dataplex.',
    problem:  'Datos dispersos en Oracle y SQL Server on-premise sin gobierno, trazabilidad ni capacidad de escalar el procesamiento.',
    solution: 'Diseño e implementación de arquitectura Data Lakehouse de tres capas (crudo/curado/productivo) en GCP. Cloud Data Fusion para ingestas, Dataform para transformaciones versionadas, Dataplex para gobierno y linaje de datos.',
    result:   'Reducción del tiempo de acceso a datos de 4 horas a 15 minutos. Trazabilidad completa de linaje. Base para migración de todos los procesos críticos de la AFP.',
    stack:    ['BigQuery', 'Cloud Data Fusion', 'Dataform', 'Dataproc', 'Dataplex', 'Cloud Run', 'PySpark', 'Oracle', 'SQL Server'],
    impacts:  ['–70% tiempo de acceso', '+80 modelos documentados', '3 capas de datos', 'Gobierno con Dataplex'],
    images:   [
      // Agrega imágenes en /public/projects/migracion-lakehouse/
      // { src: '/projects/migracion-lakehouse/arquitectura.png', caption: 'Diagrama de arquitectura' },
      // { src: '/projects/migracion-lakehouse/dataplex.png', caption: 'Gobierno en Dataplex' },
    ],
    codeSnippet: {
      language: 'python',
      label:    'Job PySpark en Dataproc',
      code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import col, to_timestamp

spark = SparkSession.builder \\
    .appName("ingesta_afp_capital") \\
    .getOrCreate()

df_raw = spark.read.format("jdbc") \\
    .option("url", ORACLE_URL) \\
    .option("dbtable", "SCHEMA.TABLA_ORIGEN") \\
    .load()

df_curated = df_raw \\
    .filter(col("estado").isNotNull()) \\
    .withColumn("fecha_proceso", to_timestamp(col("fecha_str"))) \\
    .dropDuplicates(["id_registro"])

df_curated.write.format("bigquery") \\
    .option("table", "proyecto.curado.tabla") \\
    .mode("overwrite") \\
    .save()`,
    },
    github: '',
  },

  {
    id:      'pipeline-aws',
    slug:    'pipeline-aws',
    type:    'etl',
    typeLabel: 'ETL / Pipeline',
    company: 'ElitSoft',
    period:  'Abr 2023 – Sep 2024',
    name:    'Pipeline de ingesta AWS',
    summary: 'Orquestación de ingestas batch desde sistemas legacy a Redshift con Airflow y Spark en EMR.',
    problem:  'Ingestas manuales desde Oracle y SQL Server sin automatización, sin monitoreo y con alta tasa de fallos que requerían intervención manual diaria.',
    solution: 'Diseño de DAGs en Apache Airflow (MWAA) con jobs Spark en Amazon EMR para procesamiento distribuido. CI/CD con AWS CodePipeline para despliegue automático de pipelines.',
    result:   'Automatización del 100% de ingestas batch. Tiempo de procesamiento reducido en 60%. Cero intervenciones manuales en producción durante los últimos 6 meses.',
    stack:    ['AWS Glue', 'Amazon EMR', 'Apache Spark', 'Airflow MWAA', 'Redshift', 'S3', 'Lambda', 'CodePipeline'],
    impacts:  ['100% automatizado', '–60% tiempo proceso', '0 fallos manuales', 'CI/CD integrado'],
    images:   [],
    codeSnippet: {
      language: 'python',
      label:    'DAG Airflow — ingesta diaria',
      code: `from airflow import DAG
from airflow.providers.amazon.aws.operators.emr import EmrAddStepsOperator
from datetime import datetime

with DAG("ingesta_diaria_redshift",
         schedule_interval="0 2 * * *",
         start_date=datetime(2024, 1, 1),
         catchup=False) as dag:

    procesar = EmrAddStepsOperator(
        task_id="spark_transform",
        job_flow_id="{{ var.value.EMR_CLUSTER_ID }}",
        steps=[{
            "Name": "Transformacion diaria",
            "ActionOnFailure": "CONTINUE",
            "HadoopJarStep": {
                "Jar": "command-runner.jar",
                "Args": ["spark-submit", "s3://bucket/jobs/transform.py"]
            }
        }]
    )`,
    },
    github: '',
  },

  {
    id:      'dashboard-logistica',
    slug:    'dashboard-logistica',
    type:    'dash',
    typeLabel: 'Dashboard',
    company: 'CIC S.A.',
    period:  'Mar 2020 – Abr 2023',
    name:    'Dashboard logística en tiempo real',
    summary: 'Panel de control para logística y transporte con KPIs en tiempo real y alertas automáticas en Qlik Sense.',
    problem:  'Reportes manuales en Excel con datos desactualizados (T+2) para áreas de logística, transporte y planificación. Sin visibilidad de KPIs críticos en tiempo real.',
    solution: 'Diseño de modelo de datos relacional en Oracle con procesos ETL automatizados. Dashboard en Qlik Sense con actualización cada 15 minutos, alertas por umbral y distribución automática con NPrinting.',
    result:   'Reducción del tiempo de reporte de 2 días a tiempo real. Adopción del 100% del área logística. Detección de anomalías en el mismo día.',
    stack:    ['Qlik Sense', 'QlikView', 'NPrinting', 'Oracle', 'ETL', 'BigQuery', 'Control-M'],
    impacts:  ['Tiempo real vs T+2', '100% adopción', 'Alertas automáticas', '3 áreas cubiertas'],
    images:   [],
    codeSnippet: {
      language: 'sql',
      label:    'Modelo ETL — carga incremental Oracle',
      code: `-- Carga incremental tabla de despachos
MERGE INTO DWH.FACT_DESPACHOS tgt
USING (
    SELECT
        d.id_despacho,
        d.fecha_despacho,
        d.estado,
        d.id_vehiculo,
        SUM(dd.cantidad) AS total_unidades
    FROM OPS.DESPACHOS d
    JOIN OPS.DETALLE_DESPACHO dd ON d.id_despacho = dd.id_despacho
    WHERE d.fecha_modificacion >= SYSDATE - 1
    GROUP BY d.id_despacho, d.fecha_despacho, d.estado, d.id_vehiculo
) src ON (tgt.id_despacho = src.id_despacho)
WHEN MATCHED THEN UPDATE SET
    tgt.estado = src.estado,
    tgt.total_unidades = src.total_unidades
WHEN NOT MATCHED THEN INSERT VALUES (
    src.id_despacho, src.fecha_despacho,
    src.estado, src.id_vehiculo, src.total_unidades
);`,
    },
    github: '',
  },

  {
    id:      'dataform-3capas',
    slug:    'dataform-3capas',
    type:    'etl',
    typeLabel: 'ETL / Pipeline',
    company: 'AFP Capital',
    period:  'Oct 2024 – Mar 2026',
    name:    'Modelado Dataform 3 capas',
    summary: 'Estandarización de +80 modelos de datos con Dataform bajo patrón bronze/silver/gold en BigQuery.',
    problem:  'Transformaciones SQL dispersas sin versionado, documentación ni pruebas de calidad. Duplicidad de lógica entre equipos y sin trazabilidad de cambios.',
    solution: 'Implementación de proyectos Dataform con arquitectura crudo/curado/productivo. Definición de estándares de nomenclatura, pruebas automáticas de calidad y consultas programadas en BigQuery.',
    result:   'Estandarización de +80 modelos de datos. Reducción de errores en producción en un 70%. Documentación automática del linaje de datos.',
    stack:    ['Dataform', 'BigQuery', 'SQL', 'GCP', 'Cloud Scheduler', 'GitLab CI'],
    impacts:  ['+80 modelos estándar', '–70% errores prod', 'Linaje automático', 'Tests de calidad'],
    images:   [],
    codeSnippet: {
      language: 'sql',
      label:    'Modelo Dataform — capa curada',
      code: `-- models/curado/afiliados_activos.sqlx
config {
  type: "table",
  schema: "curado",
  description: "Afiliados activos con saldo vigente",
  tags: ["afiliados", "diario"],
  assertions: {
    nonNull: ["id_afiliado", "rut"],
    uniqueKey: ["id_afiliado"]
  }
}

SELECT
  a.id_afiliado,
  a.rut,
  a.nombre_completo,
  a.fecha_ingreso,
  s.saldo_total,
  s.fecha_actualizacion
FROM \${ref("crudo", "afiliados")} a
JOIN \${ref("crudo", "saldos")} s
  ON a.id_afiliado = s.id_afiliado
WHERE a.estado = 'ACTIVO'
  AND s.fecha_actualizacion = CURRENT_DATE()`,
    },
    github: '',
  },

  {
    id:      'power-bi-financiero',
    slug:    'power-bi-financiero',
    type:    'dash',
    typeLabel: 'Dashboard',
    company: 'Proyecto personal',
    period:  '2025',
    name:    'Reporting financiero Power BI',
    summary: 'Modelo DAX avanzado en Power BI con Data Fabric conectado directamente a BigQuery vía Dataform.',
    problem:  'Reportes financieros en hojas de cálculo sin drill-down, sin actualización automática y sin capacidad de análisis ad-hoc para la gerencia.',
    solution: 'Modelo semántico en Power BI con DAX avanzado (time intelligence, comparativos YoY/MoM). Conexión directa a BigQuery via DirectQuery con Data Fabric para actualización en tiempo real.',
    result:   'Dashboards con actualización diaria automática. Tiempo de análisis reducido de 3 horas a 10 minutos. Self-service BI para la gerencia sin dependencia del equipo técnico.',
    stack:    ['Power BI', 'DAX', 'Power Query', 'BigQuery', 'Dataform', 'Data Fabric'],
    impacts:  ['–95% tiempo análisis', 'Self-service BI', 'DirectQuery live', 'Time intelligence'],
    images:   [],
    codeSnippet: {
      language: 'dax',
      label:    'Medida DAX — variación YoY',
      code: `// Variación año contra año
Variacion YoY % =
VAR VentasActual =
    CALCULATE(
        [Total Ventas],
        DATESYTD('Calendario'[Fecha])
    )
VAR VentasAnterior =
    CALCULATE(
        [Total Ventas],
        DATESYTD(SAMEPERIODLASTYEAR('Calendario'[Fecha]))
    )
RETURN
    DIVIDE(
        VentasActual - VentasAnterior,
        VentasAnterior,
        BLANK()
    )`,
    },
    github: '',
  },

  {
    id:      'cicd-pipelines',
    slug:    'cicd-pipelines',
    type:    'arch',
    typeLabel: 'Arquitectura',
    company: 'ElitSoft',
    period:  'Abr 2023 – Sep 2024',
    name:    'CI/CD para data pipelines',
    summary: 'Automatización de despliegues con CodePipeline y Jenkins para equipos de datos en AWS.',
    problem:  'Despliegues manuales de DAGs y jobs Spark con alta tasa de errores en producción, sin ambientes separados y sin capacidad de rollback rápido.',
    solution: 'Implementación de pipeline CI/CD con AWS CodePipeline y Jenkins. Ambientes separados (dev/staging/prod) con validación automática de DAGs y despliegue gradual con rollback automático.',
    result:   'Reducción de errores en deploy del 80%. Tiempo de release de 2 días a 20 minutos. Rollback automático en menos de 5 minutos ante fallas.',
    stack:    ['AWS CodePipeline', 'Jenkins', 'GitLab CI', 'Airflow MWAA', 'Docker', 'S3', 'Bitbucket'],
    impacts:  ['–80% errores deploy', 'Release en 20 min', 'Rollback en 5 min', '3 ambientes'],
    images:   [],
    codeSnippet: {
      language: 'yaml',
      label:    'Pipeline GitLab CI — validación DAGs',
      code: `stages:
  - validate
  - deploy-staging
  - deploy-prod

validate-dags:
  stage: validate
  image: apache/airflow:2.8.0
  script:
    - pip install apache-airflow
    - python -m pytest tests/test_dags.py -v
    - airflow dags list

deploy-staging:
  stage: deploy-staging
  script:
    - aws s3 sync dags/ s3://bucket-staging/dags/ --delete
    - aws mwaa create-cli-token --name airflow-staging
  only:
    - develop

deploy-prod:
  stage: deploy-prod
  script:
    - aws s3 sync dags/ s3://bucket-prod/dags/ --delete
  only:
    - main
  when: manual`,
    },
    github: '',
  },
];

export const PROJECT_TYPES = [
  { key: 'all',  label: 'Todos' },
  { key: 'etl',  label: 'ETL / Pipeline' },
  { key: 'dash', label: 'Dashboard' },
  { key: 'arch', label: 'Arquitectura' },
];
