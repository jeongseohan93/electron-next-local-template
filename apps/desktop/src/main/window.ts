import { BrowserWindow, app } from "electron";
import path from "path";

export async function createMainWindow() {
  const isDev = !app.isPackaged;

  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    backgroundColor: "#0b0c0e",

    
    frame: false,

    webPreferences: {
      preload: path.join(__dirname, "../preload/index.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const url = isDev ? "http://localhost:3000" : "http://127.0.0.1:3000";
  await win.loadURL(url);

  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }

  return win;
}
