import AppShell from "./launcher/components/AppShell";
import TitleBar from "@/components/layout/TitleBar";

export default function Page() {
  return (
    <div className="h-screen bg-[#0b0c0e]">
      <TitleBar />
      <div className="h-[calc(100vh-48px)]">
        <AppShell />
      </div>
    </div>
  );
}
