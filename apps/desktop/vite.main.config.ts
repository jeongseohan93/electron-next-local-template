import { defineConfig } from "vite";
import { builtinModules } from "node:module";

export default defineConfig({
  build: {
    outDir: ".vite/build/main",
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: "src/main/index.ts",
      formats: ["cjs"],
      fileName: () => "index.cjs",
    },

    rollupOptions: {
      external: [
        "electron",

        // ✅ 네이티브 모듈은 번들에서 제외 (런타임 require)
        "better-sqlite3",

        ...builtinModules,
        ...builtinModules.map((m) => `node:${m}`),
      ],
    },

    // ✅ better-sqlite3가 내부적으로 bindings로 .node를 동적 require하는 케이스 대응
    commonjsOptions: {
      dynamicRequireTargets: [
        "node_modules/better-sqlite3/build/Release/better_sqlite3.node",
        // 환경에 따라 아래 경로가 필요한 경우도 있어서 같이 넣어둠(템플릿 안정성)
        "node_modules/better-sqlite3/build/better_sqlite3.node",
      ],
    },
  },
});
