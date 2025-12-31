import Sidebar from "./Sidebar";
import Main from "./Main";
import FriendsPanel from "./FriendsPanel";

export default function AppShell() {
  return (
    <div className="h-screen p-[18px]">
      <div className="grid h-full gap-[18px] [grid-template-columns:92px_1fr_320px] max-[1100px]:[grid-template-columns:92px_1fr] max-[820px]:[grid-template-columns:72px_1fr] max-[820px]:gap-3 max-[820px]:p-0">
        <Sidebar />
        <Main />
        <FriendsPanel className="max-[1100px]:hidden" />
      </div>
    </div>
  );
}
