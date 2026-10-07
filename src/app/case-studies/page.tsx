import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Section } from "@/components/ui/Section";
import { caseStudy } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies | Datavaura",
  description:
    "Documented customer delivery: ERP migration, reconciliation packs, and UAE e-invoicing architecture.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Audit Evidence"
        title="We let the reconciled ledger speak."
        copy="Documented delivery: scoped precisely, built properly, reconciled across multi-currency ledgers, and accepted by client leadership."
      />

      <ReceiptLedgerStrip />

      <Section>
        <Container>
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="group block rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#2198a4] hover:shadow-xl relative overflow-hidden"
          >
            {/* Top Audit Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-[#2198a4]/25 pb-4">
              <span className="font-mono text-xs font-bold text-[#2198a4]">
                ENGAGEMENT FILE: {caseStudy.client} · {caseStudy.industry}
              </span>
              <span className="rounded bg-[#2198a4]/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-[#021547]">
                ● SIGNED RECONCILIATION
              </span>
            </div>

            <h2
              className="mt-6 font-serif text-3xl sm:text-5xl font-bold text-[#021547] group-hover:text-[#2198a4] transition-colors"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              {caseStudy.title}
            </h2>

            <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-[#4e6370]">
              {caseStudy.result}
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 text-sm font-mono text-[#2198a4]">
              <span className="font-semibold">Open Reconciled Case File →</span>
              <span className="text-xs text-slate-400">ZONE: {caseStudy.location}</span>
            </div>
          </Link>
        </Container>
      </Section>

      <CTABand title="Discuss a similar enterprise migration." />
    </>
  );
}
