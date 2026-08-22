import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { payroll_concept_pages } from "./payroll-concept.pages.ts";
import { payroll_concept_tables } from "./payroll-concept.tables.ts";

export const payroll_concept_module = define_module({
  resource: "payroll-concept",
  labels: {
    singular: "Conceptos de nómina",
    plural: "Conceptos de nómina",
    read: "Ver Conceptos de nómina",
    write: "Editar Conceptos de nómina",
  },
  routes: define_crud({
    resource: "payroll-concept",
    table: "payroll_concept",
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
      clave_interna: { type: "string", search: true },
      categoria: { type: "string", search: true },
      tipo_sat: { type: "string", search: true },
      concepto_default: { type: "string", search: true },
      is_system: { type: "boolean" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: payroll_concept_tables,
  pages: payroll_concept_pages,
  menu: [],
});
