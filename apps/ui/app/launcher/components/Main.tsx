import QuickLaunch from "./QuickLaunch";
import News from "./News";

export default function Main() {
  return (
    <main className="grid min-w-0 grid-rows-[auto_1fr] gap-3.5">

      <div className="grid min-h-0 gap-3.5">
        <QuickLaunch />
        <News />
      </div>
    </main>
  );
}
