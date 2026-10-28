import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import {
  GENERAL_OPTION_LIST_SEED_PATH,
  GENERAL_OPTION_LIST_SEEDS,
  general_option_list_options_source,
  push_general_option_seeds,
} from "./general-option-seeds";

describe("general option seeds", () => {
  test("optionsSource apunta al control del núcleo", () => {
    expect(general_option_list_options_source("subject-rh/employee", "sexo")).toBe(
      "api://general-option-list-control/options?model_id=subject-rh%2Femployee&list_key=sexo&as=options",
    );
  });

  test("cada lista tiene clave y valores únicos", () => {
    for (const entry of GENERAL_OPTION_LIST_SEEDS) {
      expect(entry.model_id.startsWith("subject-rh/")).toBe(true);
      for (const list of entry.lists) {
        expect(list.list_key.length).toBeGreaterThan(0);
        const values = list.options.map((o) => o.value);
        expect(new Set(values).size).toBe(values.length);
      }
    }
  });

  test("cubre B + SAT C del inventario rh", () => {
    const keys = GENERAL_OPTION_LIST_SEEDS.flatMap((e) =>
      e.lists.map((l) => `${e.model_id}:${l.list_key}`),
    );
    for (const want of [
      "subject-rh/employee:sexo",
      "subject-rh/employee:tipo_contrato",
      "subject-rh/employee:tipo_regimen",
      "subject-rh/employee:tipo_jornada",
      "subject-rh/employee:riesgo_puesto",
      "subject-rh/employee:periodicidad_pago",
      "subject-rh/employee:clave_ent_fed",
      "subject-rh/labor-incident:tipo",
      "subject-rh/labor-incident:tipo_incapacidad",
      "subject-rh/payroll-concept:categoria",
      "subject-rh/payroll-period:tipo_nomina",
      "subject-rh/payroll-period:periodicidad_pago",
    ]) {
      expect(keys).toContain(want);
    }
  });

  test("forms B/C usan optionsSource sin options literales", () => {
    const employee = readFileSync(
      new URL("./modules/employee/employee.pages.ts", import.meta.url),
      "utf8",
    );
    expect(employee).toContain("general_option_list_options_source");
    expect(employee).not.toMatch(/name: "sexo"[\s\S]*?options:\s*\[/);
    expect(employee).not.toMatch(/name: "tipo_contrato"[\s\S]*?options:\s*\[/);
    expect(employee).not.toMatch(/name: "clave_ent_fed"[\s\S]*?options:\s*\[/);
    const incident = readFileSync(
      new URL("./modules/labor-incident/labor-incident.pages.ts", import.meta.url),
      "utf8",
    );
    expect(incident).toContain("general_option_list_options_source");
    expect(incident).not.toMatch(/name: "tipo"[\s\S]*?options:\s*\[/);
    expect(incident).not.toMatch(/name: "tipo_incapacidad"[\s\S]*?options:\s*\[/);
    const concept = readFileSync(
      new URL("./modules/payroll-concept/payroll-concept.pages.ts", import.meta.url),
      "utf8",
    );
    expect(concept).not.toMatch(/name: "categoria"[\s\S]*?options:\s*\[/);
    const period = readFileSync(
      new URL("./modules/payroll-period/payroll-period.pages.ts", import.meta.url),
      "utf8",
    );
    expect(period).not.toMatch(/name: "tipo_nomina"[\s\S]*?options:\s*\[/);
    expect(period).not.toMatch(/name: "periodicidad_pago"[\s\S]*?options:\s*\[/);
  });
});

describe("push_general_option_seeds", () => {
  const env = {
    CORE_DATA_URL: "http://core:3000/api/kirlets/data/x",
    SUBJECT_TECHNICAL_ID: "subject-rh",
    CORE_SUBJECT_GATEWAY_SECRET: "s",
  };
  test("sin env no llama", async () => {
    let called = false;
    const r = await push_general_option_seeds({
      env: {},
      fetchImpl: (async () => {
        called = true;
        return new Response();
      }) as unknown as typeof fetch,
    });
    expect(r).toEqual({ pushed: false, reason: "core_not_configured" });
    expect(called).toBe(false);
  });
  test("POST entries a seed-defaults del núcleo", async () => {
    let url = "";
    let init: RequestInit | undefined;
    const fetchImpl = (async (u: string, i: RequestInit) => {
      url = u;
      init = i;
      return Response.json({ data: [{ inserted: 1 }] });
    }) as unknown as typeof fetch;
    const r = await push_general_option_seeds({ env, fetchImpl });
    expect(url).toBe(`http://core:3000${GENERAL_OPTION_LIST_SEED_PATH}`);
    expect(init?.method).toBe("POST");
    const body = JSON.parse(String(init?.body));
    expect(body.entries.length).toBe(GENERAL_OPTION_LIST_SEEDS.length);
    expect(r.pushed).toBe(true);
  });
});
