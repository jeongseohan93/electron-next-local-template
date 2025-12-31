import type { Config } from "drizzle-kit";

export default {
  schema: "./src/main/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  // drizzle-kit은 connection string 필요. better-sqlite3 직접 연결이 아니라 "파일 경로"로 지정.
  dbCredentials: {
    url: "file:./app.sqlite",
  },
} satisfies Config;
