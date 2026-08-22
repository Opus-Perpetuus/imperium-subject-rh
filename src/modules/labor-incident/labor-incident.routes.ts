import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { labor_incident_pages } from "./labor-incident.pages.ts";
import { labor_incident_tables } from "./labor-incident.tables.ts";

export const labor_incident_module = define_module({
  resource: "labor-incident",
  labels: {
    singular: "Incidencias laborales",
    plural: "Incidencias laborales",
    read: "Ver Incidencias laborales",
    write: "Editar Incidencias laborales",
  },
  routes: define_crud({
    resource: "labor-incident",
    table: "labor_incident",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "labor-in",
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
      employee: { type: "string", search: true },
      tipo: { type: "string", search: true },
      fecha_inicio: { type: "string", search: true },
      fecha_fin: { type: "string", search: true },
      dias: { type: "number" },
      horas: { type: "number" },
      importe: { type: "number" },
      tipo_incapacidad: { type: "string", search: true },
      notas: { type: "string", search: true },
      payroll_period: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: labor_incident_tables,
  pages: labor_incident_pages,
  menu: [],
});
