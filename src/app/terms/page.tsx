import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Terms of Use | Datavaura" };

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance & Terms"
        title="Terms of Use"
        copy="This website is informational. Advisory and systems implementation engagements commence solely through a formal written scope of work."
      />

      <ReceiptLedgerStrip />

      <Section>
        <Container className="max-w-3xl">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm space-y-4 text-sm sm:text-base leading-relaxed text-[#4e6370]">
            <p>
              Content on this website, including technical commentary on UAE e-invoicing, is provided for general informational purposes and operational guidance. Confirm specific statutory deadlines and rules on the official UAE Ministry of Finance portal (<a href="https://mof.gov.ae" target="_blank" rel="noopener noreferrer" className="text-[#2198a4] underline">mof.gov.ae</a>).
            </p>
            <p>
              Datavaura Technologies FZ-LLC – OpenPeppol Member. OpenPeppol membership is separate from UAE Service Provider accreditation. UAE e-invoicing services are delivered through an MoF-accredited platform partner.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
