import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Section } from "@/components/ui/Section";
import { articles } from "@/lib/articles";
import { insights } from "@/lib/site";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return { title: `${article.title} | Datavaura Insights`, description: article.body[0] };
}

export default async function InsightArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <PageHero
        eyebrow={article.kicker}
        title={article.title}
        copy={article.body[0]}
      />

      <ReceiptLedgerStrip />

      <Section>
        <Container className="max-w-3xl">
          <article className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm space-y-6 text-base sm:text-lg leading-relaxed text-[#021547]/85">
            {article.body.slice(1).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}

            {/* Official Regulatory Notice */}
            <div className="mt-8 rounded-2xl border border-[#2198a4]/30 bg-[#f5fbfb] p-5 text-xs sm:text-sm text-[#4e6370]">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2198a4] block mb-1">
                REGULATORY DISCLOSURE
              </span>
              Regulatory dates and technical schemas should be verified on the official Ministry of Finance portal (<a href="https://mof.gov.ae" target="_blank" rel="noopener noreferrer" className="text-[#2198a4] underline">mof.gov.ae</a>). This dossier provides systems implementation guidance and operational architecture.
            </div>
          </article>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
