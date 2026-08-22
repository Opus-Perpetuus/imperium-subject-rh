import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const payroll_period_tables: KirletTableDecl[] = [
  {
    name: "payroll_period",
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
      { name: "tipo_nomina", type: "text" },
      { name: "fecha_pago", type: "text" },
      { name: "fecha_inicial", type: "text" },
      { name: "fecha_final", type: "text" },
      { name: "num_dias_pagados", type: "real" },
      { name: "periodicidad_pago", type: "text" },
      { name: "estado", type: "text" },
      { name: "branch_office", type: "text" },
      { name: "receipts_count", type: "real" },
      { name: "calculated_count", type: "real" },
      { name: "stamped_count", type: "real" },
    ],
    indexes: [
      { name: "idx_payroll_period_name", columns: ["name"] },
      { name: "idx_payroll_period_active", columns: ["is_active"] },
    ],
  },
];
