import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-rh";

export const labor_incident_pages: KirletPageDecl[] = [
  {
    id: "rh.labor-incident",
    path: "labor-incident",
    permission: "subject.rh.labor-incident.read",
    build: () =>
      build_feature_shell_page({
        id: "rh.labor-incident",
        owner: "subject-rh",
        title: "Incidencias laborales",
        props: {
          basePath: "labor-incident",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Incidencias laborales",
            subtitle: "Submenú de rh",
            pluralLabel: "incidencias laborales",
            singularLabel: "incidencias laborales",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/labor-incident`,
            record: `${API}/labor-incident/:id`,
            create: { method: "POST", action: `${API}/labor-incident` },
            update: { method: "PATCH", action: `${API}/labor-incident/:id` },
            delete: { method: "DELETE", action: `${API}/labor-incident/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "employee", label: "employee", sortable: true, priority: 3 },
              { key: "tipo", label: "tipo", sortable: true, priority: 3 },
              { key: "fecha_inicio", label: "fecha inicio", sortable: true, priority: 3 },
              { key: "fecha_fin", label: "fecha fin", sortable: true, priority: 3 },
              { key: "dias", label: "dias", sortable: true, priority: 3 },
              { key: "horas", label: "horas", sortable: true, priority: 3 },
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
              { name: "tipo", component: "input-text", label: "tipo" },
              { name: "fecha_inicio", component: "input-text", label: "fecha inicio" },
              { name: "fecha_fin", component: "input-text", label: "fecha fin" },
              { name: "dias", component: "input-number", label: "dias" },
              { name: "horas", component: "input-number", label: "horas" },
              { name: "importe", component: "input-number", label: "importe" },
              { name: "tipo_incapacidad", component: "input-text", label: "tipo incapacidad" },
              { name: "notas", component: "input-text", label: "notas" },
              { name: "payroll_period", component: "input-text", label: "payroll period" },
            ],
          },
        },
      }),
  },
];
