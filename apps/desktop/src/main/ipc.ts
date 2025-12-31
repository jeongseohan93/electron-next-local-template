import { BrowserWindow, ipcMain } from "electron";
import { IPC } from "../shared/ipc";
import { registerDbIpc } from "../main/ipc/db"

export function registerIpcHandlers(getMainWindow: () => BrowserWindow | null) {
  ipcMain.handle(IPC.PING, async () => ({ ok: true, ts: Date.now() }));

  ipcMain.handle(IPC.WIN_CLOSE, async () => {
    getMainWindow()?.close();
  });

  ipcMain.handle(IPC.WIN_MINIMIZE, async () => {
    getMainWindow()?.minimize();
  });

  ipcMain.handle(IPC.WIN_MAXIMIZE, async () => {
    getMainWindow()?.maximize();
  });

  ipcMain.handle(IPC.WIN_TOGGLE_MAXIMIZE, async () => {
    const win = getMainWindow();
    if (!win) return;
    if (win.isMaximized()) win.unmaximize();
    else win.maximize();
  });

  registerDbIpc();
}
