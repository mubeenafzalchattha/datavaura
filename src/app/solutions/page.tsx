import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { solutionPillars, solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions | Datavaura",
  description:
    "Digital compliance, enterprise integration, digital transformation, and AI — one connected operating layer for UAE and global enterprises.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions Architecture"
        title="A connected operating layer — not a menu of isolated tools."
        copy="Datavaura implements the layer that makes ERP, UAE e-invoicing compliance, data reconciliation, and operational automation work as one unified system."
      />

      <ReceiptLedgerStrip />

      {/* 4 Core Pillars */}
      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <Eyebrow>Core Capabilities</Eyebrow>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-bold text-[#021547]"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                Four connected pillars of delivery.
              </h2>
            </div>
            <span className="font-mono text-xs text-[#4e6370]">
              CONTROLLED SPECIFICATIONS
            </span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {solutionPillars.map((p, i) => (
              <Link
                key={p.title}
                href={p.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#2198a4] hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-dashed border-[#2198a4]/20 pb-4">
                    <span className="font-mono text-sm font-bold text-[#2198a4]">
                      PILLAR 0{i + 1}
                    </span>
                    <span className="font-mono text-[10px] text-[#4e6370] uppercase">
                      VERIFIED ENGAGEMENT
                    </span>
                  </div>

                  <h3
                    className="mt-4 text-2xl font-bold text-[#021547] group-hover:text-[#2198a4] transition-colors"
                    style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4e6370]">
                    {p.copy}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-mono text-[#2198a4]">
                  <span>Explore Deliverables</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capabilities inside the layer */}
      <Section sand>
        <Container>
          <Eyebrow>Detailed Capabilities</Eyebrow>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold text-[#021547]"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Capabilities inside the operating layer.
          </h2>
          <div className="mt-8 grid gap-4">
            {solutions.map((s, idx) => (
              <Link
                key={s.slug}
                href={s.href}
                className="group flex flex-col justify-between gap-4 rounded-2xl border border-slate-200/90 bg-white px-6 py-5 shadow-sm transition-all hover:border-[#2198a4] hover:shadow-md sm:flex-row sm:items-center"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <span className="font-mono text-xs font-bold text-[#2198a4] rounded bg-[#2198a4]/10 px-2 py-1 flex-shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-[#021547] group-hover:text-[#2198a4] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#4e6370]">{s.summary}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#2198a4] font-semibold whitespace-nowrap self-end sm:self-center">
                  Review Scope →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
