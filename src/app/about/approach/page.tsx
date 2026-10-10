import type { Metadata } from "next";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { ProcessRail } from "@/components/diagrams/Diagrams";
import { approachSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Approach | Datavaura",
  description:
    "Diagnose, scope in writing, build the layer, prove it. Founder-led delivery with explicit acceptance criteria.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Controlled Delivery"
        title="Precise scope. Practical outcomes. Founder-led involvement."
        copy="Every engagement is led by the people who design the architecture. Every deliverable is scoped in writing before technical work begins."
      />

      <ReceiptLedgerStrip />

      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center mb-10">
            <div>
              <Eyebrow>Methodology</Eyebrow>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-bold text-[#021547]"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                From gap register to live cutover.
              </h2>
            </div>
            <span className="font-mono text-xs text-[#2198a4]">
              STAGE-GATE PROCESS
            </span>
          </div>

          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm">
            <ProcessRail steps={approachSteps} />
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
