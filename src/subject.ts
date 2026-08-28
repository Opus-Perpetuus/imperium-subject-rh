import { define_subject } from "@opus-perpetuus/imperium-core-kit";
import pkg from "../package.json" with { type: "json" };
import { departments_module } from "./modules/departments/departments.routes.ts";
import { employee_module } from "./modules/employee/employee.routes.ts";
import { payroll_receipt_module } from "./modules/payroll-receipt/payroll-receipt.routes.ts";
import { labor_schedule_module } from "./modules/labor-schedule/labor-schedule.routes.ts";
import { labor_incident_module } from "./modules/labor-incident/labor-incident.routes.ts";
import { payroll_period_module } from "./modules/payroll-period/payroll-period.routes.ts";
import { payroll_concept_module } from "./modules/payroll-concept/payroll-concept.routes.ts";
import { seed_demo } from "./seed.ts";

export const SUBJECT = define_subject({
  id: "SUBJECT-rh",
  name: "Recursos Humanos",
  version: pkg.version,
  image: `ghcr.io/opus-perpetuus/subject-rh:${pkg.version}`,
  compat: { nox: ">=0.5.0", kit: "^0.5.0" },
  schema_version: 1,
  menu_root: {
    id: "rh.root",
    label: "RH",
    order: 0,
  },
  modules: [departments_module, employee_module, payroll_receipt_module, labor_schedule_module, labor_incident_module, payroll_period_module, payroll_concept_module],
  seed: seed_demo,
});

export const KIRLET = SUBJECT;
