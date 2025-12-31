import { Circle, PlaceholderBox } from "./UiPrimitives";

export default function Sidebar() {
  return (
    <aside className="grid overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] shadow-[0_10px_30px_rgba(0,0,0,0.45)] [grid-template-rows:84px_1fr_120px]">
      {/* Top logo */}
      <div className="grid place-items-center">
        <PlaceholderBox className="h-11 w-11 rounded-lg" rounded="lg" />
      </div>

      {/* Nav icons */}
      <div className="grid content-start gap-2.5 p-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="grid h-11 place-items-center">
            <Circle size={28} />
          </div>
        ))}
      </div>

      {/* Bottom area */}
      <div className="grid content-end gap-2.5 p-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="grid h-10 place-items-center">
            <Circle size={26} />
          </div>
        ))}
      </div>
    </aside>
  );
}
