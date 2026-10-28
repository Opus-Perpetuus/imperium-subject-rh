/**
 * Listas no-estatus de RH para general-option-list-control del núcleo.
 * Payload de `POST /api/general-option-list-control/seed-defaults` con
 * `{ entries: GENERAL_OPTION_LIST_SEEDS }` (acción `seed_defaults`): solo
 * agrega faltantes. Contrato: kit `descriptors/option-lists.ts`.
 *
 * Incluye catálogos SAT (tipo_contrato, regimen, jornada, riesgo,
 * periodicidad, clave_ent_fed, tipo_incapacidad, categoria, tipo_nomina)
 * como seed: el núcleo marca `is_user_defined: false` en cada opción.
 * No hay aún flag list-level `userCreate:false` en el control; gap documentado.
 */
export const GENERAL_OPTION_LIST_SEED_PATH = "/api/general-option-list-control/seed-defaults";

export type OptionSeedItem = {
  value: string;
  label: string;
  description?: string;
  color?: string;
  icon?: string;
};

export type GeneralOptionListSeed = {
  model_id: string;
  module_name?: string;
  lists: Array<{
    list_key: string;
    label?: string;
    field_name?: string;
    options: OptionSeedItem[];
  }>;
};

/** `optionsSource` de un campo que no es estatus. `as=options` → `{ value, label }[]`. */
export function general_option_list_options_source(model_id: string, list_key: string): string {
  const query = new URLSearchParams({
    model_id,
    list_key,
    as: "options",
  });
  return `api://general-option-list-control/options?${query.toString()}`;
}

function list(
  model_id: string,
  list_key: string,
  label: string,
  options: OptionSeedItem[],
): GeneralOptionListSeed {
  return {
    model_id,
    module_name: model_id,
    lists: [{ list_key, label, field_name: list_key, options }],
  };
}

/** B — employee.sexo */
export const SEXO_OPTIONS: OptionSeedItem[] = [
  { value: "H", label: "Hombre (H)" },
  { value: "M", label: "Mujer (M)" },
];

/** B — labor-incident.tipo */
export const LABOR_INCIDENT_TIPO_OPTIONS: OptionSeedItem[] = [
  { value: "absence", label: "Falta" },
  { value: "late", label: "Retardo" },
  { value: "overtime", label: "Horas extra" },
  { value: "vacation", label: "Vacaciones" },
  { value: "disability", label: "Incapacidad" },
  { value: "permission_paid", label: "Permiso con goce" },
  { value: "permission_unpaid", label: "Permiso sin goce" },
  { value: "bonus", label: "Bono / prima" },
  { value: "loan_infonavit", label: "Crédito INFONAVIT" },
  { value: "other_deduction", label: "Otra deducción" },
  { value: "termination", label: "Baja / finiquito" },
];

/** C SAT — c_TipoContrato */
export const TIPO_CONTRATO_OPTIONS: OptionSeedItem[] = [
  { value: "01", label: "01 — Contrato de trabajo por tiempo indeterminado" },
  { value: "02", label: "02 — Por obra determinada" },
  { value: "03", label: "03 — Por tiempo determinado" },
  { value: "04", label: "04 — Por temporada" },
  { value: "05", label: "05 — Sujeto a prueba" },
  { value: "06", label: "06 — Con capacitación inicial" },
  { value: "07", label: "07 — Por pago de hora laborada" },
  { value: "08", label: "08 — Labor que no requiere labor continua" },
  { value: "09", label: "09 — Comisión laboral" },
  { value: "10", label: "10 — Modalidad de teletrabajo" },
  { value: "99", label: "99 — Otro contrato" },
];

/** C SAT — c_TipoRegimen */
export const TIPO_REGIMEN_OPTIONS: OptionSeedItem[] = [
  { value: "02", label: "02 — Sueldos (incluye ingresos asimilados a salarios)" },
  { value: "03", label: "03 — Jubilados" },
  { value: "04", label: "04 — Pensionados" },
  { value: "05", label: "05 — Asimilados miembros sociedades cooperativas producción" },
  { value: "06", label: "06 — Asimilados a salarios socios e integrantes" },
  { value: "07", label: "07 — Asimilados a salarios miembros consejos" },
  { value: "08", label: "08 — Asimilados a salarios comisionistas" },
  { value: "09", label: "09 — Asimilados a salarios honorarios" },
  { value: "10", label: "10 — Asimilados a salarios acciones" },
  { value: "11", label: "11 — Asimilados a salarios otros" },
  { value: "12", label: "12 — Jubilados o Pensionados" },
  { value: "13", label: "13 — Indemnización o Separación" },
  { value: "99", label: "99 — Otro Régimen" },
];

/** C SAT — c_TipoJornada */
export const TIPO_JORNADA_OPTIONS: OptionSeedItem[] = [
  { value: "01", label: "01 — Diurna" },
  { value: "02", label: "02 — Nocturna" },
  { value: "03", label: "03 — Mixta" },
  { value: "04", label: "04 — Por hora" },
  { value: "05", label: "05 — Reducida" },
  { value: "06", label: "06 — Continuada" },
  { value: "07", label: "07 — Partida" },
  { value: "08", label: "08 — Por turnos" },
  { value: "99", label: "99 — Otra Jornada" },
];

/** C SAT — c_RiesgoPuesto */
export const RIESGO_PUESTO_OPTIONS: OptionSeedItem[] = [
  { value: "1", label: "1 — Clase I" },
  { value: "2", label: "2 — Clase II" },
  { value: "3", label: "3 — Clase III" },
  { value: "4", label: "4 — Clase IV" },
  { value: "5", label: "5 — Clase V" },
  { value: "99", label: "99 — No aplica" },
];

/** C SAT — c_PeriodicidadPago (employee + payroll-period) */
export const PERIODICIDAD_PAGO_OPTIONS: OptionSeedItem[] = [
  { value: "01", label: "01 — Diario" },
  { value: "02", label: "02 — Semanal" },
  { value: "03", label: "03 — Catorcenal" },
  { value: "04", label: "04 — Quincenal" },
  { value: "05", label: "05 — Mensual" },
  { value: "06", label: "06 — Bimestral" },
  { value: "07", label: "07 — Unidad obra" },
  { value: "08", label: "08 — Comisión" },
  { value: "09", label: "09 — Precio alzado" },
  { value: "10", label: "10 — Decenal" },
  { value: "99", label: "99 — Otra Periodicidad" },
];

/** C SAT — c_Estado (clave entidad federativa) */
export const CLAVE_ENT_FED_OPTIONS: OptionSeedItem[] = [
  { value: "AGU", label: "AGU — Aguascalientes" },
  { value: "BCN", label: "BCN — Baja California" },
  { value: "BCS", label: "BCS — Baja California Sur" },
  { value: "CAM", label: "CAM — Campeche" },
  { value: "CHP", label: "CHP — Chiapas" },
  { value: "CHH", label: "CHH — Chihuahua" },
  { value: "CMX", label: "CMX — Ciudad de México" },
  { value: "COA", label: "COA — Coahuila" },
  { value: "COL", label: "COL — Colima" },
  { value: "DUR", label: "DUR — Durango" },
  { value: "GUA", label: "GUA — Guanajuato" },
  { value: "GRO", label: "GRO — Guerrero" },
  { value: "HID", label: "HID — Hidalgo" },
  { value: "JAL", label: "JAL — Jalisco" },
  { value: "MEX", label: "MEX — Estado de México" },
  { value: "MIC", label: "MIC — Michoacán" },
  { value: "MOR", label: "MOR — Morelos" },
  { value: "NAY", label: "NAY — Nayarit" },
  { value: "NLE", label: "NLE — Nuevo León" },
  { value: "OAX", label: "OAX — Oaxaca" },
  { value: "PUE", label: "PUE — Puebla" },
  { value: "QUE", label: "QUE — Querétaro" },
  { value: "ROO", label: "ROO — Quintana Roo" },
  { value: "SLP", label: "SLP — San Luis Potosí" },
  { value: "SIN", label: "SIN — Sinaloa" },
  { value: "SON", label: "SON — Sonora" },
  { value: "TAB", label: "TAB — Tabasco" },
  { value: "TAM", label: "TAM — Tamaulipas" },
  { value: "TLA", label: "TLA — Tlaxcala" },
  { value: "VER", label: "VER — Veracruz" },
  { value: "YUC", label: "YUC — Yucatán" },
  { value: "ZAC", label: "ZAC — Zacatecas" },
];

/** C SAT — c_TipoIncapacidad */
export const TIPO_INCAPACIDAD_OPTIONS: OptionSeedItem[] = [
  { value: "01", label: "01 — Riesgo de trabajo" },
  { value: "02", label: "02 — Enfermedad en general" },
  { value: "03", label: "03 — Maternidad" },
  { value: "04", label: "04 — Licencia por cuidados médicos de hijos" },
];

/** C — payroll-concept.categoria */
export const PAYROLL_CONCEPT_CATEGORIA_OPTIONS: OptionSeedItem[] = [
  { value: "perception", label: "Percepción" },
  { value: "deduction", label: "Deducción" },
  { value: "other_payment", label: "Otro pago" },
];

/** C SAT — TipoNómina O/E */
export const TIPO_NOMINA_OPTIONS: OptionSeedItem[] = [
  { value: "O", label: "O — Ordinaria" },
  { value: "E", label: "E — Extraordinaria" },
];

export const GENERAL_OPTION_LIST_SEEDS: GeneralOptionListSeed[] = [
  list("subject-rh/employee", "sexo", "Sexo", SEXO_OPTIONS),
  list("subject-rh/employee", "tipo_contrato", "Tipo de contrato (SAT)", TIPO_CONTRATO_OPTIONS),
  list("subject-rh/employee", "tipo_regimen", "Tipo de régimen (SAT)", TIPO_REGIMEN_OPTIONS),
  list("subject-rh/employee", "tipo_jornada", "Tipo de jornada (SAT)", TIPO_JORNADA_OPTIONS),
  list("subject-rh/employee", "riesgo_puesto", "Riesgo de puesto (SAT)", RIESGO_PUESTO_OPTIONS),
  list("subject-rh/employee", "periodicidad_pago", "Periodicidad de pago (SAT)", PERIODICIDAD_PAGO_OPTIONS),
  list("subject-rh/employee", "clave_ent_fed", "Clave entidad federativa (SAT)", CLAVE_ENT_FED_OPTIONS),
  list("subject-rh/labor-incident", "tipo", "Tipo de incidencia", LABOR_INCIDENT_TIPO_OPTIONS),
  list("subject-rh/labor-incident", "tipo_incapacidad", "Tipo de incapacidad (SAT)", TIPO_INCAPACIDAD_OPTIONS),
  list("subject-rh/payroll-concept", "categoria", "Categoría de concepto", PAYROLL_CONCEPT_CATEGORIA_OPTIONS),
  list("subject-rh/payroll-period", "tipo_nomina", "Tipo de nómina (SAT)", TIPO_NOMINA_OPTIONS),
  list("subject-rh/payroll-period", "periodicidad_pago", "Periodicidad de pago (SAT)", PERIODICIDAD_PAGO_OPTIONS),
];

export type PushGeneralOptionSeedsOptions = {
  env?: Record<string, string | undefined>;
  fetchImpl?: typeof fetch;
  timeout_ms?: number;
};

export type PushGeneralOptionSeedsResult =
  | { pushed: true; status: number; data: unknown }
  | { pushed: false; reason: string; status?: number };

/**
 * Manda `GENERAL_OPTION_LIST_SEEDS` al núcleo (`seed_defaults`, idempotente).
 * Nunca lanza: el seed de RH no debe caerse si el núcleo aún no expone
 * o no autoriza la ruta.
 */
export async function push_general_option_seeds(
  opts: PushGeneralOptionSeedsOptions = {},
): Promise<PushGeneralOptionSeedsResult> {
  const env = opts.env ?? process.env;
  const base = (env.CORE_DATA_URL?.trim() || env.NOX_DATA_URL?.trim() || "")
    .replace(/\/api\/kirlets\/data\/.*$/, "")
    .replace(/\/+$/, "");
  const caller = env.SUBJECT_TECHNICAL_ID?.trim() || env.KIRLET_TECHNICAL_ID?.trim() || "";
  const secret = env.CORE_SUBJECT_GATEWAY_SECRET?.trim() || env.NOX_KIRLET_GATEWAY_SECRET?.trim() || "";
  if (!base || !caller || !secret) return { pushed: false, reason: "core_not_configured" };
  try {
    const res = await (opts.fetchImpl ?? fetch)(`${base}${GENERAL_OPTION_LIST_SEED_PATH}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-core-subject-gateway-secret": secret,
        "x-imperium-subject": caller,
      },
      body: JSON.stringify({ entries: GENERAL_OPTION_LIST_SEEDS }),
      signal: AbortSignal.timeout(opts.timeout_ms ?? 12_000),
    });
    let data: unknown = null;
    try {
      data = await res.json();
    } catch {
      /* sin JSON */
    }
    if (!res.ok) return { pushed: false, reason: "core_refused", status: res.status };
    return { pushed: true, status: res.status, data };
  } catch (err) {
    return { pushed: false, reason: err instanceof Error ? err.message : String(err) };
  }
}
