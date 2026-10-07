import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries & Ledger Holders | Datavaura",
  description:
    "Built for books that do not live in one system: Real estate, trading, logistics, professional services, and multi-entity groups.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sector Ledger Architectures"
        title="Built for books that do not live in one system."
        copy="Different industries have unique chart-of-accounts setups, invoicing rules, VAT categories, and multi-branch data structures. Datavaura brings accounting and tax literacy to every deployment."
      />

      <ReceiptLedgerStrip />

      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <Eyebrow>Sector Specialisations</Eyebrow>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-bold text-[#021547]"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                Tailored accounting & integration flows.
              </h2>
            </div>
            <span className="font-mono text-xs text-[#2198a4]">
              LEDGER HOLDER PROFILES
            </span>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {industries.map((i, idx) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#2198a4] hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-dashed border-[#2198a4]/20 pb-3">
                    <span className="font-mono text-xs font-bold text-[#2198a4]">
                      SECTOR 0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] text-[#4e6370] uppercase">
                      PINT-AE READY
                    </span>
                  </div>

                  <h3
                    className="mt-4 font-bold text-2xl text-[#021547] group-hover:text-[#2198a4] transition-colors"
                    style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                  >
                    {i.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4e6370]">
                    {i.line}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-mono text-[#2198a4]">
                  <span>Review Industry Blueprint</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
