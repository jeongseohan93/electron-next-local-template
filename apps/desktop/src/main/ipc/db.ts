import { ipcMain } from "electron";
import { eq } from "drizzle-orm";
import { IPC } from "../../shared/ipc";
import { getDb } from "../db/client";
import { settings, eventLog } from "../db/schema";

export function registerDbIpc() {

  ipcMain.handle(IPC.DB_SETTINGS_GET, async (_evt, key: string) => {
    const db = getDb();
    const rows = await db.select().from(settings).where(eq(settings.key, key)).limit(1);
    return rows[0]?.value ?? null;
  });

  ipcMain.handle(IPC.DB_SETTINGS_SET, async (_evt, key: string, value: string) => {
    const db = getDb();
    const now = new Date(); // timestamp_ms면 Date로 넣어야 함

    await db
      .insert(settings)
      .values({ key, value, updatedAt: now })
      .onConflictDoUpdate({
        target: settings.key,
        set: { value, updatedAt: now },
      });

    return true;
  });

  ipcMain.handle(IPC.DB_EVENTLOG_APPEND, async (_evt, type: string, payloadJson: string) => {
    const db = getDb();
    await db.insert(eventLog).values({
      type,
      payload: payloadJson,
      createdAt: new Date(),
    });
    return true;
  });

  ipcMain.handle(IPC.DB_EVENTLOG_LIST, async (_evt, limit = 100) => {
    const db = getDb();
    return db.select().from(eventLog).limit(limit);
  });
}
