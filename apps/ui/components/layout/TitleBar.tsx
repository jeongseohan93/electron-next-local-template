"use client";

import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeRestore,
  VscChromeClose,
} from "react-icons/vsc";
import { RiApps2Fill } from "react-icons/ri";

export default function TitleBar() {
  const api = typeof window !== "undefined" ? window.electron : undefined;
  const isMaximized = false; // 추후 상태 연동 가능

  return (
    <div className="titlebar-drag flex h-12 items-center justify-between border-b border-white/10 bg-white/[0.03] px-3">
      {/* Left: 앱 아이콘 + 타이틀 */}
      <div className="flex items-center gap-2">
        <RiApps2Fill className="h-5 w-5 text-white/80" />
        <span className="select-none text-sm font-medium text-white/80">
          Stream Tool
        </span>
      </div>

      {/* Right: window controls */}
      <div className="titlebar-nodrag flex items-center gap-1">
        <button
          onClick={() => api?.window.minimize()}
          className="flex h-8 w-10 items-center justify-center rounded-md border border-white/10 text-white/70 hover:bg-white/10"
          aria-label="Minimize"
        >
          <VscChromeMinimize size={16} />
        </button>

        <button
          onClick={() => api?.window.toggleMaximize()}
          className="flex h-8 w-10 items-center justify-center rounded-md border border-white/10 text-white/70 hover:bg-white/10"
          aria-label="Toggle maximize"
        >
          {isMaximized ? (
            <VscChromeRestore size={14} />
          ) : (
            <VscChromeMaximize size={14} />
          )}
        </button>

        <button
          onClick={() => api?.window.close()}
          className="flex h-8 w-10 items-center justify-center rounded-md border border-white/10 text-red-400 hover:bg-red-500/20"
          aria-label="Close"
        >
          <VscChromeClose size={16} />
        </button>
      </div>
    </div>
  );
}
