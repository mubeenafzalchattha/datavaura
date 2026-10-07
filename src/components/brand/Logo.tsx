import { cn } from "@/lib/cn";

export function Logo({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  const height = compact ? 32 : 40;

  return (
    <span
      className={cn("inline-flex items-center", inverted && "brightness-0 invert")}
      style={{ height }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/datavaura.svg"
        alt="Datavaura"
        height={height}
        style={{ height, width: "auto", display: "block" }}
      />
    </span>
  );
}
