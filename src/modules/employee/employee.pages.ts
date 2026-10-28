import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";
import { general_option_list_options_source } from "../../general-option-seeds.ts";

const API = "api://m/subject-rh";

export const employee_pages: KirletPageDecl[] = [
  {
    id: "rh.employee",
    path: "employee",
    permission: "subject.rh.employee.read",
    build: () =>
      build_feature_shell_page({
        id: "rh.employee",
        owner: "subject-rh",
        title: "Empleados",
        props: {
          basePath: "employee",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Empleados",
            subtitle: "Submenú de rh",
            pluralLabel: "empleados",
            singularLabel: "empleados",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/employee`,
            record: `${API}/employee/:id`,
            create: { method: "POST", action: `${API}/employee` },
            update: { method: "PATCH", action: `${API}/employee/:id` },
            delete: { method: "DELETE", action: `${API}/employee/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "image", label: "image", sortable: true, priority: 3 },
              { key: "department", label: "department", sortable: true, priority: 3 },
              { key: "branch_office", label: "branch office", sortable: true, priority: 3 },
              { key: "state_id", label: "state id", sortable: true, priority: 3 },
              { key: "municipality", label: "municipality", sortable: true, priority: 3 },
              { key: "boroughs", label: "boroughs", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-textarea", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "image", component: "input-image", label: "image" },
              { name: "department", component: "input-datalist", label: "department", optionsSource: "api://m/subject-rh/departments?as=options&limite=1000" },
              { name: "branch_office", component: "input-datalist", label: "branch office", optionsSource: "api://m/subject-configuracion/branchoffice?as=options&limite=1000" },
              { name: "state_id", component: "input-datalist", label: "state id", optionsSource: "api://m/subject-control-municipal/states?as=options&limite=1000" },
              { name: "municipality", component: "input-datalist", label: "municipality", optionsSource: "api://m/subject-control-municipal/municipality?as=options&limite=1000" },
              { name: "boroughs", component: "input-datalist", label: "boroughs", optionsSource: "api://m/subject-control-municipal/boroughs?as=options&limite=1000" },
              { name: "street", component: "input-text", label: "street" },
              { name: "exterior_number", component: "input-text", label: "exterior number" },
              { name: "interior_number", component: "input-text", label: "interior number" },
              { name: "postal_code", component: "input-mask", label: "postal code", mask: "00000" },
              { name: "country", component: "input-text", label: "country" },
              { name: "puesto", component: "input-text", label: "puesto" },
              { name: "rfc", component: "input-text", label: "rfc" },
              { name: "curp", component: "input-mask", label: "curp", mask: "SSSS000000SSSSSSA0" },
              { name: "nss", component: "input-mask", label: "nss", mask: "00000000000" },
              { name: "num_empleado", component: "input-text", label: "num empleado" },
              { name: "fecha_nacimiento", component: "input-date", label: "fecha nacimiento" },
              {
                name: "sexo",
                component: "input-menu",
                label: "sexo",
                // Opciones: general-option-list-control (seed en general-option-seeds.ts).
                optionsSource: general_option_list_options_source(
                  "subject-rh/employee",
                  "sexo",
                ),
              },
              { name: "fecha_ingreso", component: "input-date", label: "fecha ingreso" },
              { name: "fecha_baja", component: "input-date", label: "fecha baja" },
              {
                name: "tipo_contrato",
                component: "input-menu",
                label: "tipo contrato",
                // Opciones: general-option-list-control (seed en general-option-seeds.ts).
                optionsSource: general_option_list_options_source(
                  "subject-rh/employee",
                  "tipo_contrato",
                ),
              },
              {
                name: "tipo_regimen",
                component: "input-datalist",
                label: "tipo regimen",
                // Opciones: general-option-list-control (seed en general-option-seeds.ts).
                optionsSource: general_option_list_options_source(
                  "subject-rh/employee",
                  "tipo_regimen",
                ),
              },
              {
                name: "tipo_jornada",
                component: "input-menu",
                label: "tipo jornada",
                // Opciones: general-option-list-control (seed en general-option-seeds.ts).
                optionsSource: general_option_list_options_source(
                  "subject-rh/employee",
                  "tipo_jornada",
                ),
              },
              {
                name: "riesgo_puesto",
                component: "input-menu",
                label: "riesgo puesto",
                // Opciones: general-option-list-control (seed en general-option-seeds.ts).
                optionsSource: general_option_list_options_source(
                  "subject-rh/employee",
                  "riesgo_puesto",
                ),
              },
              {
                name: "periodicidad_pago",
                component: "input-menu",
                label: "periodicidad pago",
                // Opciones: general-option-list-control (seed en general-option-seeds.ts).
                optionsSource: general_option_list_options_source(
                  "subject-rh/employee",
                  "periodicidad_pago",
                ),
              },
              {
                name: "clave_ent_fed",
                component: "input-datalist",
                label: "clave ent fed",
                // Opciones: general-option-list-control (seed en general-option-seeds.ts).
                optionsSource: general_option_list_options_source(
                  "subject-rh/employee",
                  "clave_ent_fed",
                ),
              },
              { name: "salario_diario", component: "input-money", label: "salario diario" },
              { name: "sdi", component: "input-money", label: "sdi" },
              { name: "banco", component: "input-text", label: "banco" },
              { name: "cuenta", component: "input-text", label: "cuenta" },
              { name: "clabe", component: "input-mask", label: "clabe", mask: "000000000000000000" },
            ],
          },
        },
      }),
  },
];
