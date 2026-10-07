import type { Metadata } from "next";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { OperatingModelLedger } from "@/components/ui/OperatingModelLedger";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { platforms } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partners & Regulated Model | Datavaura",
  description:
    "Technology partnerships and accredited ASP coordination: Datavaura manages the client relationship; regulated platform services sit with accredited partners.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Operating Model & Partners"
        title="One relationship. The regulated layer sits with the partner."
        copy="Datavaura manages the client relationship, readiness, commercial coordination, onboarding, implementation coordination and first-level support. The underlying regulated UAE e-invoicing platform and accredited service-provider functions are delivered through an accredited UAE platform partner."
      />

      <ReceiptLedgerStrip />

      {/* Page 6 of PDF: Operating Model Dual Ledger */}
      <OperatingModelLedger />

      {/* Platforms Grid */}
      <Section sand>
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <Eyebrow>Interoperable Platforms</Eyebrow>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-bold text-[#021547]"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                Supported ERPs & enterprise systems.
              </h2>
            </div>
            <span className="font-mono text-xs text-[#2198a4]">
              VENDOR INDEPENDENT
            </span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {platforms.map((p) => (
              <div
                key={p}
                className="rounded-2xl border border-slate-200/90 bg-white px-4 py-6 text-center font-mono text-sm font-bold text-[#021547] shadow-sm hover:border-[#2198a4] transition-colors"
              >
                {p}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-xs sm:text-sm text-[#4e6370] leading-relaxed">
            Accredited Service Provider status is regulated by the UAE Ministry of Finance. Datavaura coordinates technical mapping and ERP connectivity with your appointed ASP; we do not claim independent ASP accreditation.
          </p>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
