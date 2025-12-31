// src/main/db/client.ts
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { getDbFilePath } from "./path";

let _db: ReturnType<typeof drizzle> | null = null;
let _sqlite: Database.Database | null = null;

export function getDb() {
  if (_db) return _db;

  const filePath = getDbFilePath();

  _sqlite = new Database(filePath);
  // 권장: WAL 모드(쓰기/읽기 동시성 체감 개선)
  _sqlite.pragma("journal_mode = WAL");

  _db = drizzle(_sqlite);
  return _db;
}

export function closeDb() {
  if (_sqlite) _sqlite.close();
  _sqlite = null;
  _db = null;
}
