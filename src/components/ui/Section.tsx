import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.28em]",
        light ? "text-gold" : "text-aurora-2",
      )}
    >
      {children}
    </p>
  );
}

export function Section({
  children,
  className,
  dark = false,
  sand = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  sand?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative py-20 sm:py-28",
        dark && "bg-ink text-sand grain",
        sand && "bg-sand",
        !dark && !sand && "bg-paper",
        className,
      )}
    >
      {children}
    </section>
  );
}
