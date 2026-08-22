import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const labor_incident_tables: KirletTableDecl[] = [
  {
    name: "labor_incident",
    columns: [
      { name: "id", type: "text", primaryKey: true },
      { name: "name", type: "text", notNull: true },
      { name: "description", type: "text" },
      { name: "is_active", type: "boolean", notNull: true, default: true },
      { name: "state", type: "text" },
      { name: "ref", type: "text", unique: true },
      { name: "search_field", type: "text" },
      { name: "created_by", type: "text" },
      { name: "custom_data", type: "json" },
      { name: "payload", type: "json" },
      { name: "created_at", type: "text", notNull: true },
      { name: "updated_at", type: "text", notNull: true },
      { name: "employee", type: "text" },
      { name: "tipo", type: "text" },
      { name: "fecha_inicio", type: "text" },
      { name: "fecha_fin", type: "text" },
      { name: "dias", type: "real" },
      { name: "horas", type: "real" },
      { name: "importe", type: "real" },
      { name: "tipo_incapacidad", type: "text" },
      { name: "notas", type: "text" },
      { name: "payroll_period", type: "text" },
    ],
    indexes: [
      { name: "idx_labor_incident_name", columns: ["name"] },
      { name: "idx_labor_incident_active", columns: ["is_active"] },
    ],
  },
];
