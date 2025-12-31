import React from "react";

type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
};

const roundedMap = {
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
} as const;

export function PlaceholderBox({
  className = "",
  rounded = "xl",
  ...props
}: BoxProps) {
  return (
    <div
      {...props}
      className={[
        roundedMap[rounded],
        "border border-white/10",
        "bg-gradient-to-b from-white/10 to-white/5",
        className,
      ].join(" ")}
    />
  );
}

export function Circle({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={[
        "rounded-full border border-white/10 bg-white/10",
        className,
      ].join(" ")}
      style={{ width: size, height: size }}
    />
  );
}

export function Divider({ vertical = false }: { vertical?: boolean }) {
  return vertical ? (
    <div className="h-full w-px bg-white/10" />
  ) : (
    <div className="h-px w-full bg-white/10" />
  );
}
