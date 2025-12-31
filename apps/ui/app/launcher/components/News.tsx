import { PlaceholderBox } from "./UiPrimitives";

export default function News() {
  return (
    <section className="min-h-0 rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
      <div className="grid grid-cols-[1.2fr_1fr] gap-3.5 max-[820px]:grid-cols-1">
        <PlaceholderBox className="h-[210px]" />
        <PlaceholderBox className="h-[210px]" />
      </div>

      <div className="mt-3.5 grid gap-2.5">
        <PlaceholderBox className="h-[92px]" />
      </div>
    </section>
  );
}
