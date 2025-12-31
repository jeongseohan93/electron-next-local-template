// src/main/db/schema.ts
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const settings = sqliteTable("settings", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
});

export const eventLog = sqliteTable("event_log", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  type: text("type").notNull(),             
  payload: text("payload").notNull(),       
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});
