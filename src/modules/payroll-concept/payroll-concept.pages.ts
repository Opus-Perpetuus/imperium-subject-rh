import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-rh";

export const payroll_concept_pages: KirletPageDecl[] = [
  {
    id: "rh.payroll-concept",
    path: "payroll-concept",
    permission: "subject.rh.payroll-concept.read",
    build: () =>
      build_feature_shell_page({
        id: "rh.payroll-concept",
        owner: "subject-rh",
        title: "Conceptos de nómina",
        props: {
          basePath: "payroll-concept",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Conceptos de nómina",
            subtitle: "Submenú de rh",
            pluralLabel: "conceptos de nómina",
            singularLabel: "conceptos de nómina",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/payroll-concept`,
            record: `${API}/payroll-concept/:id`,
            create: { method: "POST", action: `${API}/payroll-concept` },
            update: { method: "PATCH", action: `${API}/payroll-concept/:id` },
            delete: { method: "DELETE", action: `${API}/payroll-concept/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "clave_interna", label: "clave interna", sortable: true, priority: 3 },
              { key: "categoria", label: "categoria", sortable: true, priority: 3 },
              { key: "tipo_sat", label: "tipo sat", sortable: true, priority: 3 },
              { key: "concepto_default", label: "concepto default", sortable: true, priority: 3 },
              { key: "is_system", label: "is system", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "clave_interna", component: "input-text", label: "clave interna" },
              { name: "categoria", component: "input-text", label: "categoria" },
              { name: "tipo_sat", component: "input-text", label: "tipo sat" },
              { name: "concepto_default", component: "input-text", label: "concepto default" },
              { name: "is_system", component: "input-checkbox", label: "is system" },
            ],
          },
        },
      }),
  },
];
