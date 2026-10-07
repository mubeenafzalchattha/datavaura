import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Button } from "@/components/ui/Button";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { IntegrationDiagram } from "@/components/diagrams/Diagrams";
import { caseStudy } from "@/lib/site";

export function CaseStudyBody() {
  const rows = [
    ["01 · Challenge", caseStudy.challenge],
    ["02 · What was broken?", caseStudy.broken],
    ["03 · Solution Architecture", caseStudy.solution],
    ["04 · Final Audit Result", caseStudy.result],
  ];

  return (
    <>
      <PageHero
        eyebrow={`${caseStudy.client} · ${caseStudy.industry}`}
        title={caseStudy.title}
        copy={caseStudy.result}
        actions={<Button href="/contact">Discuss a similar project</Button>}
      />

      <ReceiptLedgerStrip />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Audit Ledger Rows */}
          <div className="space-y-6">
            <Eyebrow>Audit Findings & Resolution</Eyebrow>
            <div className="space-y-4 pt-2">
              {rows.map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm"
                  style={{ borderLeft: "4px solid #2198a4" }}
                >
                  <dt className="font-mono text-xs font-bold uppercase tracking-wider text-[#2198a4]">
                    {k}
                  </dt>
                  <dd className="mt-2 text-sm sm:text-base leading-relaxed text-[#021547]/85">
                    {v}
                  </dd>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Topology */}
          <div className="space-y-6">
            <Eyebrow>Technology & Architecture</Eyebrow>
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2198a4]">
                DEPLOYED STACK
              </span>
              <ul className="mt-4 flex flex-wrap gap-2">
                {caseStudy.technology.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-[#f0f7f8] border border-[#2198a4]/30 px-3.5 py-1 text-xs font-mono font-medium text-[#021547]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-[#021547] p-6 text-white">
                <IntegrationDiagram />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand title="Discuss a similar enterprise migration." />
    </>
  );
}
