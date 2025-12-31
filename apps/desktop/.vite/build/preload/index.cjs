"use strict";
const electron = require("electron");
const IPC = {
  PING: "app:ping",
  WIN_MINIMIZE: "win:minimize",
  WIN_MAXIMIZE: "win:maximize",
  WIN_TOGGLE_MAXIMIZE: "win:toggleMaximize",
  WIN_CLOSE: "win:close",
  DB_SETTINGS_GET: "db:settings:get",
  DB_SETTINGS_SET: "db:settings:set",
  DB_EVENTLOG_APPEND: "db:eventLog:append",
  DB_EVENTLOG_LIST: "db:eventLog:list"
};
console.log("[preload] DB_SETTINGS_SET =", IPC.DB_SETTINGS_SET);
electron.contextBridge.exposeInMainWorld("electron", {
  ping: () => electron.ipcRenderer.invoke(IPC.PING),
  window: {
    minimize: () => electron.ipcRenderer.invoke(IPC.WIN_MINIMIZE),
    maximize: () => electron.ipcRenderer.invoke(IPC.WIN_MAXIMIZE),
    toggleMaximize: () => electron.ipcRenderer.invoke(IPC.WIN_TOGGLE_MAXIMIZE),
    close: () => electron.ipcRenderer.invoke(IPC.WIN_CLOSE)
  },
  db: {
    settings: {
      get: (key) => electron.ipcRenderer.invoke(IPC.DB_SETTINGS_GET, key),
      set: (key, value) => electron.ipcRenderer.invoke(IPC.DB_SETTINGS_SET, key, value)
    },
    eventLog: {
      append: (type, payload) => electron.ipcRenderer.invoke(IPC.DB_EVENTLOG_APPEND, type, JSON.stringify(payload)),
      list: (limit) => electron.ipcRenderer.invoke(IPC.DB_EVENTLOG_LIST, limit ?? 100)
    }
  }
});
//# sourceMappingURL=index.cjs.map
