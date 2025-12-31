import { contextBridge, ipcRenderer } from "electron";
import { IPC } from "../shared/ipc";
console.log("[preload] DB_SETTINGS_SET =", IPC.DB_SETTINGS_SET);


contextBridge.exposeInMainWorld("electron", {
  ping: () => ipcRenderer.invoke(IPC.PING) as Promise<{ ok: boolean; ts: number }>,

  window: {
    minimize: () => ipcRenderer.invoke(IPC.WIN_MINIMIZE),
    maximize: () => ipcRenderer.invoke(IPC.WIN_MAXIMIZE),
    toggleMaximize: () => ipcRenderer.invoke(IPC.WIN_TOGGLE_MAXIMIZE),
    close: () => ipcRenderer.invoke(IPC.WIN_CLOSE),
  },

  db: {
    settings: {
      get: (key: string) =>
        ipcRenderer.invoke(IPC.DB_SETTINGS_GET, key) as Promise<string | null>,
      set: (key: string, value: string) =>
        ipcRenderer.invoke(IPC.DB_SETTINGS_SET, key, value) as Promise<boolean>,
    },
    eventLog: {
      append: (type: string, payload: unknown) =>
        ipcRenderer.invoke(IPC.DB_EVENTLOG_APPEND, type, JSON.stringify(payload)) as Promise<boolean>,
      list: (limit?: number) =>
        ipcRenderer.invoke(IPC.DB_EVENTLOG_LIST, limit ?? 100) as Promise<any[]>,
    },
  },
});
