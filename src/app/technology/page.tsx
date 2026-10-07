import type { Metadata } from "next";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { IntegrationDiagram } from "@/components/diagrams/Diagrams";
import { platforms, technologies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technology Architecture | Datavaura",
  description:
    "ERP, APIs, cloud, AI, data, automation, and cybersecurity — shown as architecture, not a logo wall.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical Architecture"
        title="Infrastructure a finance and business buyer can actually read."
        copy="Logos are not a capability. Datavaura visualises how ERP, APIs, cloud, data pipelines, automation, and UAE compliance connect — and what that means for close, compliance, and operational control."
      />

      <ReceiptLedgerStrip />

      {/* Integration Topology Section */}
      <Section dark>
        <Container>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Eyebrow light>Operating Topology</Eyebrow>
            <span className="font-mono text-xs text-[#2198a4]">
              MULTI-PLATFORM INTEROPERABILITY
            </span>
          </div>

          <div className="mt-8">
            <IntegrationDiagram />
          </div>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-[#e8f0f2]/60">
            Supported ERPs & Platforms: {platforms.join(" · ")}
          </p>
        </Container>
      </Section>

      {/* Technical Stack Modules */}
      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <Eyebrow>Stack Modules</Eyebrow>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-bold text-[#021547]"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                Engineered for stability, auditability, and speed.
              </h2>
            </div>
            <span className="font-mono text-xs text-[#4e6370]">
              CONTROLLED STACK SPECIFICATIONS
            </span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {technologies.map((t, idx) => (
              <article
                key={t.slug}
                id={t.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#2198a4] hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-dashed border-[#2198a4]/20 pb-3">
                    <span className="font-mono text-xs font-bold text-[#2198a4]">
                      MODULE 0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 uppercase">
                      VERIFIED SPEC
                    </span>
                  </div>

                  <h3
                    className="mt-4 font-bold text-xl text-[#021547] group-hover:text-[#2198a4] transition-colors"
                    style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                  >
                    {t.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4e6370]">
                    {t.copy}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] font-mono text-slate-400">
                  <span>Architecture Component</span>
                  <span className="text-[#2198a4]">● Enterprise Layer</span>
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
