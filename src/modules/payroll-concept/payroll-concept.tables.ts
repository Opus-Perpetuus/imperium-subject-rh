import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const payroll_concept_tables: KirletTableDecl[] = [
  {
    name: "payroll_concept",
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
      { name: "clave_interna", type: "text" },
      { name: "categoria", type: "text" },
      { name: "tipo_sat", type: "text" },
      { name: "concepto_default", type: "text" },
      { name: "is_system", type: "boolean" },
    ],
    indexes: [
      { name: "idx_payroll_concept_name", columns: ["name"] },
      { name: "idx_payroll_concept_active", columns: ["is_active"] },
    ],
  },
];
