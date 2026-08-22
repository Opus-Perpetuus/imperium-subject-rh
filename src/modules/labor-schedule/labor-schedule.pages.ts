import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-rh";

export const labor_schedule_pages: KirletPageDecl[] = [
  {
    id: "rh.labor-schedule",
    path: "labor-schedule",
    permission: "subject.rh.labor-schedule.read",
    build: () =>
      build_feature_shell_page({
        id: "rh.labor-schedule",
        owner: "subject-rh",
        title: "Horarios laborales",
        props: {
          basePath: "labor-schedule",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Horarios laborales",
            subtitle: "Submenú de rh",
            pluralLabel: "horarios laborales",
            singularLabel: "horarios laborales",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/labor-schedule`,
            record: `${API}/labor-schedule/:id`,
            create: { method: "POST", action: `${API}/labor-schedule` },
            update: { method: "PATCH", action: `${API}/labor-schedule/:id` },
            delete: { method: "DELETE", action: `${API}/labor-schedule/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "employee", label: "employee", sortable: true, priority: 3 },
              { key: "days", label: "days", sortable: true, priority: 3 },
              { key: "is_default", label: "is default", sortable: true, priority: 3 },
              { key: "weekday", label: "weekday", sortable: true, priority: 3 },
              { key: "start_time", label: "start time", sortable: true, priority: 3 },
              { key: "end_time", label: "end time", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "employee", component: "input-text", label: "employee" },
              { name: "days", component: "input-json", label: "days" },
              { name: "is_default", component: "input-checkbox", label: "is default" },
              { name: "weekday", component: "input-number", label: "weekday" },
              { name: "start_time", component: "input-text", label: "start time" },
              { name: "end_time", component: "input-text", label: "end time" },
              { name: "hours", component: "input-number", label: "hours" },
            ],
          },
        },
      }),
  },
];
