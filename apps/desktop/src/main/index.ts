import { app, BrowserWindow } from "electron";
import { createMainWindow } from "./window";
import { registerIpcHandlers } from "./ipc/index";
import { runMigrations } from "./db/migrate";

let mainWindow: BrowserWindow | null = null;

async function bootstrap() {
  try {
    runMigrations();

    // ✅ 윈도우 getter 주입 (전역 setter 필요 없음)
    registerIpcHandlers(() => mainWindow);

    mainWindow = await createMainWindow();
  } catch (e) {
    console.error("[bootstrap] error:", e);
    app.quit();
  }
}

app.whenReady().then(bootstrap);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
