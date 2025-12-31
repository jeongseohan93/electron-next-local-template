import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";
import { app } from "electron";
import { getDbFilePath } from "./path";

export function runMigrations() {
  const dbFile = getDbFilePath();
  const sqlite = new Database(dbFile);

  // 권장 (동시성/성능)
  sqlite.pragma("journal_mode = WAL");

  // ✅ 적용 기록 테이블 (한 번 적용된 SQL은 다시 실행하지 않음)
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS _migrations (
      name TEXT PRIMARY KEY,
      applied_at INTEGER NOT NULL
    );
  `);

  // ✅ drizzle 폴더 위치: dev / packaged 구분
  const migrationsDir = app.isPackaged
    ? path.join(process.resourcesPath, "drizzle")
    : path.join(process.cwd(), "drizzle");

  if (!fs.existsSync(migrationsDir)) {
    sqlite.close();
    return;
  }

  const files = fs
    .readdirSync(migrationsDir)
    .filter((f) => f.endsWith(".sql"))
    .sort();

  const isAppliedStmt = sqlite.prepare(
    "SELECT 1 FROM _migrations WHERE name = ? LIMIT 1"
  );
  const markAppliedStmt = sqlite.prepare(
    "INSERT INTO _migrations (name, applied_at) VALUES (?, ?)"
  );

  sqlite.transaction(() => {
    for (const f of files) {
      const already = isAppliedStmt.get(f);
      if (already) continue;

      const sql = fs.readFileSync(path.join(migrationsDir, f), "utf-8");
      sqlite.exec(sql);

      markAppliedStmt.run(f, Date.now());
    }
  })();

  sqlite.close();
}
