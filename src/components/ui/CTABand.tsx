import Link from "next/link";
import { Container } from "@/components/ui/Section";

export function CTABand({
  title = "Tell us what you are trying to solve.",
  copy = "A 20-minute Digital Readiness Call. No deck. A clear view of where you stand — e-invoicing, ERP, integration, or automation.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#021547] py-20 text-[#e8f0f2]">
      {/* Top perforated dashed line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2198a4 1px, transparent 1.5px)",
          backgroundSize: "8px 4px",
        }}
      />

      {/* Background blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,152,164,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(33,152,164,0.15) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <Container className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#2198a4]">
              BOOK A CONSULTATION
            </span>
            <span className="h-1 w-1 rounded-full bg-[#2198a4]/50" />
            <span className="font-mono text-[10px] text-white/50">
              REF: DOC / UAE-EINV-2026
            </span>
          </div>

          <h2
            className="mt-4 font-serif text-3xl font-bold leading-[1.1] sm:text-5xl text-white"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            {title}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#e8f0f2]/75">
            {copy}
          </p>

          {/* Barcode & cryptographic audit mark */}
          <div className="mt-6 flex items-center gap-4 text-xs font-mono text-white/40">
            <div className="flex h-5 items-end gap-1">
              {[3, 6, 2, 5, 6, 2, 5, 4, 2, 6, 3, 5, 2].map((h, i) => (
                <div
                  key={i}
                  className="w-1 bg-[#2198a4]/60"
                  style={{ height: `${h * 3}px` }}
                />
              ))}
            </div>
            <span>DATAVAURA TECHNOLOGIES FZ-LLC</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-[#021547] shadow-lg transition-all hover:brightness-110 active:scale-95"
            style={{
              background: "#2198a4",
              fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
            }}
          >
            <span>Book a Consultation</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <a
            href="mailto:info@datavaura.com"
            className="font-mono text-sm text-[#35bfcd] hover:underline"
          >
            info@datavaura.com →
          </a>
        </div>
      </Container>

      {/* Bottom perforated dashed line */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2198a4 1px, transparent 1.5px)",
          backgroundSize: "8px 4px",
        }}
      />
    </section>
  );
}
