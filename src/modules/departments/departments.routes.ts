import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { departments_pages } from "./departments.pages.ts";
import { departments_tables } from "./departments.tables.ts";

export const departments_module = define_module({
  resource: "departments",
  labels: {
    singular: "Departamentos",
    plural: "Departamentos",
    read: "Ver Departamentos",
    write: "Editar Departamentos",
  },
  routes: define_crud({
    resource: "departments",
    table: "departments",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "departme",
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
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: departments_tables,
  pages: departments_pages,
  menu: [
    {
      id: "rh.departments",
      label: "Departamentos",
      order: 0,
      pageId: "rh.departments",
      path: "departments",
      permission: "subject.rh.departments.read",
      icon: "document",
    },
    {
      id: "rh.employee",
      label: "Empleados",
      order: 0,
      pageId: "rh.employee",
      path: "employee",
      permission: "subject.rh.employee.read",
      icon: "document",
    },
    {
      id: "rh.folder.nomina-menu-management-0",
      label: "Nómina",
      order: 20,
      children: [
        {
          id: "rh.payroll-concept",
          label: "Conceptos de nómina",
          order: 10,
          pageId: "rh.payroll-concept",
          path: "payroll-concept",
          permission: "subject.rh.payroll-concept.read",
          icon: "document",
        },
        {
          id: "rh.labor-schedule",
          label: "Horarios laborales",
          order: 20,
          pageId: "rh.labor-schedule",
          path: "labor-schedule",
          permission: "subject.rh.labor-schedule.read",
          icon: "document",
        },
        {
          id: "rh.labor-incident",
          label: "Incidencias laborales",
          order: 30,
          pageId: "rh.labor-incident",
          path: "labor-incident",
          permission: "subject.rh.labor-incident.read",
          icon: "document",
        },
        {
          id: "rh.payroll-period",
          label: "Periodos de nómina",
          order: 40,
          pageId: "rh.payroll-period",
          path: "payroll-period",
          permission: "subject.rh.payroll-period.read",
          icon: "document",
        },
        {
          id: "rh.payroll-receipt",
          label: "Recibos de nómina",
          order: 50,
          pageId: "rh.payroll-receipt",
          path: "payroll-receipt",
          permission: "subject.rh.payroll-receipt.read",
          icon: "document",
        }
      ],
    }
    ],
});
