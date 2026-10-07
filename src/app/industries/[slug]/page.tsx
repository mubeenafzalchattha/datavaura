import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Button } from "@/components/ui/Button";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { industries } from "@/lib/site";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) return {};
  return { title: `${i.title} Architecture | Datavaura`, description: i.line };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) notFound();

  return (
    <>
      <PageHero eyebrow="Sector Blueprint" title={i.title} copy={i.line} />

      <ReceiptLedgerStrip />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Problems */}
          <div>
            <Eyebrow>Operational & Tax Gaps</Eyebrow>
            <h2
              className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-[#021547]"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Common failure points we see in {i.title.toLowerCase()}.
            </h2>
            <ul className="mt-8 space-y-3">
              {i.problems.map((p, idx) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm"
                >
                  <span className="font-mono text-xs font-bold text-red-500 rounded bg-red-50 px-2 py-0.5 flex-shrink-0 mt-0.5">
                    GAP 0{idx + 1}
                  </span>
                  <span className="text-sm font-medium text-[#021547]/85 leading-relaxed">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Datavaura Implementation */}
          <div>
            <Eyebrow>Controlled Solution</Eyebrow>
            <h2
              className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-[#021547]"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              What Datavaura delivers for this sector.
            </h2>
            <ul className="mt-8 space-y-3">
              {i.solutions.map((p, idx) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-2xl border border-[#2198a4]/30 bg-[#f8fbfb] p-4 shadow-sm"
                  style={{ borderLeft: "4px solid #2198a4" }}
                >
                  <span className="font-mono text-xs font-bold text-[#2198a4] rounded bg-[#2198a4]/10 px-2 py-0.5 flex-shrink-0 mt-0.5">
                    SPEC 0{idx + 1}
                  </span>
                  <span className="text-sm font-medium text-[#021547] leading-relaxed">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Book a Sector Readiness Call</Button>
              <Button href="/case-studies/sap-to-quickbooks-uae" variant="outline">
                Related case study
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
