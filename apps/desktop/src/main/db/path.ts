import path from "node:path";
import { app } from "electron";

export function getDbFilePath() {
    // 앱 데이터 폴더에 DB 고정 저장
    const dir = app.getPath("userData");
    console.log("[DB FILE]", app.getPath("userData"));
    return path.join(dir, "app.sqlite");
}