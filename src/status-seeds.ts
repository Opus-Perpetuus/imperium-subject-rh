/**
 * Estatus de RH para el pipeline status-option-control del núcleo.
 * Payload de `POST /api/status-option-control/seed-defaults` con
 * `{ entries: STATUS_OPTION_SEEDS }` (acción `seed_defaults`): solo agrega
 * los faltantes, no reescribe lo que el usuario ya editó.
 * Contrato: kit `descriptors/option-lists.ts` (STATUS_OPTION_SEED_PATH).
 */
export const STATUS_OPTION_SEED_PATH = "/api/status-option-control/seed-defaults";

export type StatusOption = { value: string; label: string; color: string; icon?: string };

export type StatusOptionSeed = {
  model_id: string;
  module_name?: string;
  status_fields?: string[];
  options: Array<StatusOption & { field_name: string }>;
};

function seed(model_id: string, field_name: string, options: StatusOption[]): StatusOptionSeed {
  return {
    model_id,
    module_name: model_id,
    status_fields: [field_name],
    options: options.map((o) => ({ ...o, field_name })),
  };
}

/** Periodo de nómina: draft → open → generating → closed. */
export const PAYROLL_PERIOD_ESTADO_OPTIONS: StatusOption[] = [
  { value: "draft", label: "Borrador", color: "#6c757d", icon: "fas fa-file" },
  { value: "open", label: "Abierto", color: "#0d6efd", icon: "fas fa-folder-open" },
  { value: "closed", label: "Cerrado", color: "#198754", icon: "fas fa-lock" },
  { value: "generating", label: "Generando recibos", color: "#ffc107", icon: "fas fa-spinner" },
];

/** Recibo de nómina / timbrado. */
export const PAYROLL_RECEIPT_ESTADO_OPTIONS: StatusOption[] = [
  { value: "draft", label: "Borrador", color: "#6c757d", icon: "fas fa-file" },
  { value: "calculated", label: "Calculado", color: "#0dcaf0", icon: "fas fa-calculator" },
  { value: "ready_to_stamp", label: "Listo para timbrar", color: "#0d6efd", icon: "fas fa-stamp" },
  { value: "stamping", label: "Timbrando", color: "#ffc107", icon: "fas fa-spinner" },
  { value: "stamped", label: "Timbrado", color: "#198754", icon: "fas fa-check-circle" },
  { value: "error", label: "Error", color: "#dc3545", icon: "fas fa-exclamation-triangle" },
];

export const STATUS_OPTION_SEEDS: StatusOptionSeed[] = [
  seed("subject-rh/payroll-period", "estado", PAYROLL_PERIOD_ESTADO_OPTIONS),
  seed("subject-rh/payroll-receipt", "estado", PAYROLL_RECEIPT_ESTADO_OPTIONS),
];

export type PushStatusSeedsOptions = {
  env?: Record<string, string | undefined>;
  fetchImpl?: typeof fetch;
  timeout_ms?: number;
};

export type PushStatusSeedsResult =
  | { pushed: true; status: number; data: unknown }
  | { pushed: false; reason: string; status?: number };

/**
 * Manda `STATUS_OPTION_SEEDS` al núcleo (`seed_defaults`, idempotente).
 * Nunca lanza: el seed de RH no debe caerse si el núcleo aún no expone
 * o no autoriza la ruta.
 */
export async function push_status_seeds(opts: PushStatusSeedsOptions = {}): Promise<PushStatusSeedsResult> {
  const env = opts.env ?? process.env;
  const base = (env.CORE_DATA_URL?.trim() || env.NOX_DATA_URL?.trim() || "")
    .replace(/\/api\/kirlets\/data\/.*$/, "")
    .replace(/\/+$/, "");
  const caller = env.SUBJECT_TECHNICAL_ID?.trim() || env.KIRLET_TECHNICAL_ID?.trim() || "";
  const secret = env.CORE_SUBJECT_GATEWAY_SECRET?.trim() || env.NOX_KIRLET_GATEWAY_SECRET?.trim() || "";
  if (!base || !caller || !secret) return { pushed: false, reason: "core_not_configured" };
  try {
    const res = await (opts.fetchImpl ?? fetch)(`${base}${STATUS_OPTION_SEED_PATH}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-core-subject-gateway-secret": secret,
        "x-imperium-subject": caller,
      },
      body: JSON.stringify({ entries: STATUS_OPTION_SEEDS }),
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
