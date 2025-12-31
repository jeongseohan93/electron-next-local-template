import { PlaceholderBox } from "./UiPrimitives";

export default function QuickLaunch() {
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
      <div className="grid grid-cols-4 gap-3 max-[820px]:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <PlaceholderBox key={i} className="h-[78px]" />
        ))}
      </div>
    </section>
  );
}
