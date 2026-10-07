import type { Metadata } from "next";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Careers | Datavaura",
  description: "Datavaura is founder-led. When we hire, we hire for delivery, not layers.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers & Talent"
        title="We hire for the work, not the org chart."
        copy="There are no generic corporate openings published today. If you implement ERP, integration architecture, or UAE digital compliance at a standard you would sign your name to, write to us."
      />

      <ReceiptLedgerStrip />

      <Section>
        <Container className="max-w-2xl">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm">
            <h2
              className="text-2xl font-bold text-[#021547]"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Direct Transmission to Engineering & Practice Leadership
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4e6370]">
              Send a short note and your technical background to{" "}
              <a className="font-semibold text-[#2198a4] underline" href="mailto:info@datavaura.com">
                info@datavaura.com
              </a>
              . Tell us about the most complex ERP, data migration, or compliance cutover you have delivered.
            </p>
          </div>
        </Container>
      </Section>

      <CTABand title="Building the operating layer with enterprise clients." />
    </>
  );
}
