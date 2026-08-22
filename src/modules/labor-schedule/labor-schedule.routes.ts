import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { labor_schedule_pages } from "./labor-schedule.pages.ts";
import { labor_schedule_tables } from "./labor-schedule.tables.ts";

export const labor_schedule_module = define_module({
  resource: "labor-schedule",
  labels: {
    singular: "Horarios laborales",
    plural: "Horarios laborales",
    read: "Ver Horarios laborales",
    write: "Editar Horarios laborales",
  },
  routes: define_crud({
    resource: "labor-schedule",
    table: "labor_schedule",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "labor-sc",
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
      days: { type: "json" },
      is_default: { type: "boolean" },
      weekday: { type: "number" },
      start_time: { type: "string", search: true },
      end_time: { type: "string", search: true },
      hours: { type: "number" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: labor_schedule_tables,
  pages: labor_schedule_pages,
  menu: [],
});
