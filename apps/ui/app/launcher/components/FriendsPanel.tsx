import { Circle, Divider, PlaceholderBox } from "./UiPrimitives";

export default function FriendsPanel({ className = "" }: { className?: string }) {
  return (
    <aside
      className={[
        "grid overflow-hidden rounded-xl border border-white/10",
        "bg-gradient-to-b from-white/5 to-white/[0.02]",
        "shadow-[0_10px_30px_rgba(0,0,0,0.45)]",
        "[grid-template-rows:84px_auto_1fr_56px]",
        className,
      ].join(" ")}
    >
      {/* Header icons */}
      <div className="flex items-center justify-end gap-2.5 p-3.5">
        <Circle size={26} />
        <Circle size={26} />
        <Circle size={26} />
      </div>

      {/* Tabs + search */}
      <div className="grid gap-3 p-3.5">
        <div className="grid grid-cols-2 gap-2.5">
          <PlaceholderBox className="h-[34px]" rounded="full" />
          <PlaceholderBox className="h-[34px] opacity-75" rounded="full" />
        </div>
        <PlaceholderBox className="h-9 rounded-lg" rounded="lg" />
      </div>

      {/* Friends list */}
      <div className="overflow-auto p-3.5">
        <div className="grid gap-2.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-[36px_1fr] items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-2.5"
            >
              <Circle size={32} />
              <div className="grid gap-1.5">
                <div className="h-2.5 w-[60%] rounded-full bg-white/15" />
                <div className="h-2 w-[40%] rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-3.5">
        <Divider />
        <div className="h-3" />
        <PlaceholderBox className="h-7 rounded-lg" rounded="lg" />
      </div>
    </aside>
  );
}
