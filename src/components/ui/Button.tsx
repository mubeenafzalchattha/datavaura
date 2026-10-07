import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-gold text-ink hover:bg-gold-2 shadow-[0_0_0_1px_rgba(201,164,74,0.4)]",
  dark: "bg-ink text-sand hover:bg-navy",
  ghost:
    "bg-transparent text-sand border border-white/15 hover:border-gold/60 hover:text-gold",
  outline:
    "bg-transparent text-ink border border-ink/15 hover:border-gold hover:text-navy",
  aurora: "bg-aurora text-ink hover:brightness-110",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight transition-all duration-200",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
