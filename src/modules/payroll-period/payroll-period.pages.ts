import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-rh";

export const payroll_period_pages: KirletPageDecl[] = [
  {
    id: "rh.payroll-period",
    path: "payroll-period",
    permission: "subject.rh.payroll-period.read",
    build: () =>
      build_feature_shell_page({
        id: "rh.payroll-period",
        owner: "subject-rh",
        title: "Periodos de nómina",
        props: {
          basePath: "payroll-period",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Periodos de nómina",
            subtitle: "Submenú de rh",
            pluralLabel: "periodos de nómina",
            singularLabel: "periodos de nómina",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/payroll-period`,
            record: `${API}/payroll-period/:id`,
            create: { method: "POST", action: `${API}/payroll-period` },
            update: { method: "PATCH", action: `${API}/payroll-period/:id` },
            delete: { method: "DELETE", action: `${API}/payroll-period/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "tipo_nomina", label: "tipo nomina", sortable: true, priority: 3 },
              { key: "fecha_pago", label: "fecha pago", sortable: true, priority: 3 },
              { key: "fecha_inicial", label: "fecha inicial", sortable: true, priority: 3 },
              { key: "fecha_final", label: "fecha final", sortable: true, priority: 3 },
              { key: "num_dias_pagados", label: "num dias pagados", sortable: true, priority: 3 },
              { key: "periodicidad_pago", label: "periodicidad pago", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "tipo_nomina", component: "input-text", label: "tipo nomina" },
              { name: "fecha_pago", component: "input-text", label: "fecha pago" },
              { name: "fecha_inicial", component: "input-text", label: "fecha inicial" },
              { name: "fecha_final", component: "input-text", label: "fecha final" },
              { name: "num_dias_pagados", component: "input-number", label: "num dias pagados" },
              { name: "periodicidad_pago", component: "input-text", label: "periodicidad pago" },
              { name: "estado", component: "input-text", label: "estado" },
              { name: "branch_office", component: "input-text", label: "branch office" },
              { name: "receipts_count", component: "input-number", label: "receipts count" },
              { name: "calculated_count", component: "input-number", label: "calculated count" },
              { name: "stamped_count", component: "input-number", label: "stamped count" },
            ],
          },
        },
      }),
  },
];
