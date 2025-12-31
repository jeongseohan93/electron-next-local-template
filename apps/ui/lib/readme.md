로직/연동/브릿지 전용 폴더 (가장 중요)

Electron, IPC, API, 환경 의존 로직을 한곳에 격리

UI 컴포넌트에서 직접 window, fetch, ipc 접근 금지

규칙

외부 세계와 맞닿는 코드는 전부 여기로