import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { payroll_period_pages } from "./payroll-period.pages.ts";
import { payroll_period_tables } from "./payroll-period.tables.ts";

export const payroll_period_module = define_module({
  resource: "payroll-period",
  labels: {
    singular: "Periodos de nómina",
    plural: "Periodos de nómina",
    read: "Ver Periodos de nómina",
    write: "Editar Periodos de nómina",
  },
  routes: define_crud({
    resource: "payroll-period",
    table: "payroll_period",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "payroll-",
    fields: {
      name: { type: "string", required: true, search: true },
      description: { type: "string", search: true },
      is_active: { type: "boolean" },
      state: { type: "string" },
      ref: { type: "string", search: true },
      search_field: { type: "string", search: true },
      created_by: { type: "string" },
      custom_data: { type: "json" },
      payload: { type: "json" },
      tipo_nomina: { type: "string", search: true },
      fecha_pago: { type: "string", search: true },
      fecha_inicial: { type: "string", search: true },
      fecha_final: { type: "string", search: true },
      num_dias_pagados: { type: "number" },
      periodicidad_pago: { type: "string", search: true },
      estado: { type: "string", search: true },
      branch_office: { type: "string", search: true },
      receipts_count: { type: "number" },
      calculated_count: { type: "number" },
      stamped_count: { type: "number" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: payroll_period_tables,
  pages: payroll_period_pages,
  menu: [],
});
