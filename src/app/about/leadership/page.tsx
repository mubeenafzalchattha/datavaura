import type { Metadata } from "next";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { leaders } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leadership | Datavaura",
  description:
    "Younes Abu Ghalyoun MBA, President & UAE FTA Registered Tax Agent. Hamdan, CTO. You speak directly with both founders.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership & Signatories"
        title="You deal with the people who do the work."
        copy="No junior account managers. Strategy, compliance alignment, and technical architecture are delivered directly by the founders."
      />

      <ReceiptLedgerStrip />

      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <Eyebrow>Executive Partners</Eyebrow>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-bold text-[#021547]"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                Founder-led delivery across tax, accounting, and systems.
              </h2>
            </div>
            <span className="font-mono text-xs text-[#2198a4]">
              OFFICIAL SIGNATORIES
            </span>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {leaders.map((p, idx) => (
              <article
                key={p.name}
                className="relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#2198a4] hover:shadow-lg"
              >
                <div>
                  {/* Top Credentials Ribbon */}
                  <div className="flex items-center justify-between border-b border-dashed border-[#2198a4]/25 pb-4">
                    <span className="font-mono text-xs font-bold text-[#2198a4]">
                      FOUNDER 0{idx + 1}
                    </span>
                    <span className="rounded bg-[#2198a4]/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-[#021547]">
                      {idx === 0 ? "FTA REGISTERED TAX AGENT" : "TECHNOLOGY LEADERSHIP"}
                    </span>
                  </div>

                  <h3
                    className="mt-6 text-2xl sm:text-3xl font-bold text-[#021547]"
                    style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                  >
                    {p.name}
                  </h3>

                  <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#2198a4]">
                    {p.role}
                  </p>

                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#4e6370]">
                    {p.copy}
                  </p>
                </div>

                {/* Bottom Verification */}
                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-mono text-slate-400">
                  <span>Datavaura Technologies FZ-LLC</span>
                  <span className="text-[#021547] font-semibold">● ACTIVE SIGNATORY</span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
