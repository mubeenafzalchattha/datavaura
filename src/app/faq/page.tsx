import type { Metadata } from "next";
import { CTABand } from "@/components/ui/CTABand";
import { FAQList } from "@/components/ui/FAQList";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "UAE E-Invoicing FAQ | Datavaura",
  description:
    "Official answers on the UAE e-invoicing mandate, ASP appointment, PINT-AE, Peppol, and ERP integration by Datavaura Technologies FZ-LLC.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Mandate & Compliance Q&A"
        title="The questions CFOs, IT leads, and tax teams ask before appointing anyone."
        copy="Clear, authoritative answers on the Ministry of Finance mandate, ASP selection, PINT-AE data validation, ERP integration, and the Datavaura operating model."
      />

      <ReceiptLedgerStrip />

      <Section>
        <Container className="max-w-4xl">
          <div className="mb-8 flex items-center justify-between border-b border-dashed border-[#2198a4]/25 pb-4">
            <Eyebrow>Compliance Registry</Eyebrow>
            <span className="font-mono text-xs text-[#2198a4]">
              OFFICIAL MOF / FTA GUIDELINES
            </span>
          </div>

          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm">
            <FAQList items={faqs} />
          </div>
        </Container>
      </Section>

      <CTABand title="Have a specific ERP or legal entity question?" />
    </>
  );
}
