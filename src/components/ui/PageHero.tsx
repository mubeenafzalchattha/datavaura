import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  copy,
  dark = false,
  actions,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  dark?: boolean;
  actions?: React.ReactNode | null;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28",
        dark ? "bg-[#021547] text-[#e8f0f2]" : "text-[#021547]",
      )}
      style={
        dark
          ? {
              background:
                "linear-gradient(180deg, #021547 0%, #061a38 60%, #021547 100%)",
            }
          : {
              background:
                "linear-gradient(135deg, #f5f8fa 0%, #e8f0f2 40%, #d0e8ed 100%)",
            }
      }
    >
      {/* Subtle blueprint mesh grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: dark
            ? "linear-gradient(rgba(33,152,164,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(33,152,164,0.12) 1px, transparent 1px)"
            : "linear-gradient(rgba(33,152,164,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(33,152,164,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <Container className="relative max-w-4xl">
        {/* Eyebrow badge with official document code */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#2198a4]">
            {eyebrow}
          </span>
          <span className="h-1 w-1 rounded-full bg-[#2198a4]/50" />
          <span className="font-mono text-[11px] text-[#4e6370]">
            DOC / UAE-EINV-2026
          </span>
        </div>

        <h1
          className={cn(
            "mt-4 font-serif text-4xl leading-[1.08] sm:text-6xl font-bold",
            dark ? "text-white" : "text-[#021547]",
          )}
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          {title}
        </h1>

        <p
          className={cn(
            "mt-6 max-w-2xl text-base sm:text-lg leading-relaxed",
            dark ? "text-[#e8f0f2]/75" : "text-[#4e6370]",
          )}
        >
          {copy}
        </p>

        {actions !== null ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {actions ?? (
              <>
                <Button href="/contact">Book a Consultation</Button>
                <Button href="/faq" variant="outline">
                  Read the FAQs
                </Button>
              </>
            )}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
