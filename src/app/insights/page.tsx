import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { insights } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights & Technical Briefs | Datavaura",
  description:
    "Authoritative guides on UAE e-invoicing, PINT-AE data validation, Peppol network, and ERP integration by Datavaura Technologies FZ-LLC.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance & Tech Briefs"
        title="Authoritative guides for the questions finance and IT teams are actually asking."
        copy="In-depth analysis on the UAE Ministry of Finance e-invoicing mandate, PINT-AE data mapping, Peppol connectivity, and ERP cutover architecture."
      />

      <ReceiptLedgerStrip />

      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <Eyebrow>Published Briefs</Eyebrow>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-bold text-[#021547]"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                Executive regulatory & technical papers.
              </h2>
            </div>
            <span className="font-mono text-xs text-[#2198a4]">
              PEPPOL / PINT-AE
            </span>
          </div>

          <div className="mt-10 grid gap-6">
            {insights.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#2198a4] hover:shadow-lg"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-dashed border-[#2198a4]/20 pb-3">
                    <span className="font-mono text-xs font-bold text-[#2198a4]">
                      {post.kicker}
                    </span>
                    <span className="font-mono text-xs text-[#4e6370]">
                      PUBLISHED: {post.date}
                    </span>
                  </div>

                  <h3
                    className="mt-4 font-bold text-2xl text-[#021547] group-hover:text-[#2198a4] transition-colors"
                    style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                  >
                    {post.title}
                  </h3>

                  <p className="mt-3 max-w-4xl text-sm sm:text-base leading-relaxed text-[#4e6370]">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-mono text-[#2198a4]">
                  <span>Read Full Brief</span>
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
