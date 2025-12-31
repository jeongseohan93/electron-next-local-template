export const IPC = {
  PING: "app:ping",
  WIN_MINIMIZE: "win:minimize",
  WIN_MAXIMIZE: "win:maximize",
  WIN_TOGGLE_MAXIMIZE: "win:toggleMaximize",
  WIN_CLOSE: "win:close",

  DB_SETTINGS_GET: "db:settings:get",
  DB_SETTINGS_SET: "db:settings:set",
  DB_EVENTLOG_APPEND: "db:eventLog:append",
  DB_EVENTLOG_LIST: "db:eventLog:list",
} as const;

export type IpcChannel = (typeof IPC)[keyof typeof IPC];