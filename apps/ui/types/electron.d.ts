export {};

declare global {
  interface Window {
    electron?: {
      ping: () => Promise<{ ok: boolean; ts: number }>;

      window: {
        minimize: () => Promise<unknown>;
        maximize: () => Promise<unknown>;
        toggleMaximize: () => Promise<unknown>;
        close: () => Promise<unknown>;
      };

      db: {
        settings: {
          get: (key: string) => Promise<string | null>;
          set: (key: string, value: string) => Promise<boolean>;
        };

        eventLog: {
          append: (type: string, payload: unknown) => Promise<boolean>;
          list: (limit?: number) => Promise<any[]>;
        };
      };
    };
  }
}
