import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const labor_schedule_tables: KirletTableDecl[] = [
  {
    name: "labor_schedule",
    columns: [
      { name: "id", type: "text", primaryKey: true },
      { name: "name", type: "text", notNull: true },
      { name: "description", type: "text" },
      { name: "is_active", type: "boolean", notNull: true, default: true },
      { name: "state", type: "text" },
      { name: "ref", type: "text", unique: true },
      { name: "search_field", type: "text" },
      { name: "created_by", type: "text" },
      { name: "custom_data", type: "json" },
      { name: "payload", type: "json" },
      { name: "created_at", type: "text", notNull: true },
      { name: "updated_at", type: "text", notNull: true },
      { name: "employee", type: "text" },
      { name: "days", type: "json" },
      { name: "is_default", type: "boolean" },
      { name: "weekday", type: "real" },
      { name: "start_time", type: "text" },
      { name: "end_time", type: "text" },
      { name: "hours", type: "real" },
    ],
    indexes: [
      { name: "idx_labor_schedule_name", columns: ["name"] },
      { name: "idx_labor_schedule_active", columns: ["is_active"] },
    ],
  },
];
