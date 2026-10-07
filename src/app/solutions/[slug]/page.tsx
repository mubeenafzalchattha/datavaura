import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { EInvoiceMandateLedger } from "@/components/ui/EInvoiceMandateLedger";
import { CalendarMandate } from "@/components/ui/CalendarMandate";
import { FourLinesOfWork } from "@/components/ui/FourLinesOfWork";
import { InvoiceLifecycleStepper } from "@/components/ui/InvoiceLifecycleStepper";
import { OperatingModelLedger } from "@/components/ui/OperatingModelLedger";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import {
  EInvoiceFlow,
  IntegrationDiagram,
  ProcessRail,
} from "@/components/diagrams/Diagrams";
import { Button } from "@/components/ui/Button";
import {
  einvoiceJourney,
  migrationSteps,
  platforms,
  solutions,
} from "@/lib/site";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} | Datavaura`,
    description: s.summary,
  };
}

const extras: Record<
  string,
  { deliverables: string[]; who: string; out: string }
> = {
  "uae-e-invoicing": {
    deliverables: [
      "E-invoicing readiness / gap analysis against PINT-AE",
      "ASP selection advisory against ERP, volume, and budget",
      "ERP-to-ASP technical integration and validation",
      "Invoice field mapping to PINT-AE data dictionary",
      "UAT, go-live support, and post-go-live diagnostics",
      "VAT / Corporate Tax system alignment with FTA Tax Agent oversight",
    ],
    who: "UAE entities approaching ASP appointment or go-live, and groups that cannot risk a PDF-era invoicing process on 1 January 2027.",
    out: "Datavaura does not transmit e-invoices directly. Transmission is handled through your appointed accredited partner.",
  },
  "erp-data-migration": {
    deliverables: [
      "Source-system scoping: GL, A/R, A/P, inventory, assets",
      "Chart of accounts restructuring and entity setup",
      "Master data cleanup and sub-ledger repair",
      "Multi-currency opening balances and FX reconciliation",
      "Automated migration scripts and UAT validation",
      "Post-migration reconciliation report signed by finance",
    ],
    who: "CFOs leaving legacy on-premise ERP, UAE businesses that need an API-ready invoicing platform, and Canadian SMEs outgrowing desktop accounting.",
    out: "Payroll modules, unmapped advanced inventory, and 24/7 sysadmin unless explicitly scoped.",
  },
  "enterprise-integration": {
    deliverables: [
      "Requirements: systems, payloads, frequency, failover",
      "API design and OpenAPI technical documentation",
      "Middleware / connector development and mapping",
      "ERP-CRM, banking, commerce, and ASP data flows",
      "Webhooks and event-driven architecture",
      "Automated testing, error monitoring, and handover",
    ],
    who: "Businesses with three or more disconnected operational systems, and companies that appointed an ASP with no integration path.",
    out: "24/7 monitoring unless retained. We build the layer; we do not become your SOC by default.",
  },
  "business-process-automation": {
    deliverables: [
      "Process mapping with finance and operations",
      "Integration with existing ERP / accounting ledgers",
      "Human-in-the-loop approval workflows",
      "Audit trail and compliance logging",
      "Team training and operational runbooks",
    ],
    who: "Finance teams spending hours copying data between three platforms at month-end.",
    out: "Automating broken processes before fixing the underlying ledger rules.",
  },
  "ai-intelligent-automation": {
    deliverables: [
      "Process audit: which tasks actually benefit from AI",
      "RAG / knowledge retrieval on internal SOPs and documents",
      "Document extraction (receipts, contracts, invoices)",
      "Testing on real anonymized enterprise data",
    ],
    who: "Teams that have been sold AI and still cannot name the process it should touch.",
    out: "Training foundation models or unbounded data-science research.",
  },
  "cloud-infrastructure": {
    deliverables: [
      "Tenant and identity design under zero-trust",
      "Microsoft 365 and cloud migration",
      "Network and access security review",
      "Cutover plan that does not freeze ongoing operations",
    ],
    who: "Growing teams inheriting a patchwork of tools and access.",
    out: "Unbounded 24/7 NOC unless moved to managed services.",
  },
  "data-analytics": {
    deliverables: [
      "KPI definition with finance and executive leadership",
      "Source-system quality and reconciliation check",
      "Power BI / automated management reporting packs",
      "Refresh schedule and data ownership model",
    ],
    who: "Leadership teams tired of dashboards that do not survive a reconciliation.",
    out: "Vanity dashboards on dirty data.",
  },
  cybersecurity: {
    deliverables: [
      "Baseline: identity, backup, endpoint, email auth",
      "Prioritized remediation plan with cost estimates",
      "Path to penetration testing / SOC / ISO 27001 when needed",
    ],
    who: "Mid-market operators who need evidence, not theatre.",
    out: "A certificate for its own sake.",
  },
};

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) notFound();
  const extra = extras[s.slug];
  if (!extra) notFound();

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} copy={s.summary} />

      {/* Official PDF Mandate Ribbon for UAE E-Invoicing */}
      {slug === "uae-e-invoicing" && <ReceiptLedgerStrip />}

      {/* Deliverables Section styled as an audited accounting checklist */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Eyebrow>The business problem</Eyebrow>
            <h2
              className="mt-4 font-serif text-3xl sm:text-4xl text-[#021547]"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              {s.problem}
            </h2>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f8fbfb] p-6 text-sm text-[#4e6370]">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2198a4]">
                Target Organisation
              </span>
              <p className="mt-2 leading-relaxed">{extra.who}</p>
            </div>
          </div>

          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#2198a4]">
              CONTROLLED DELIVERABLES
            </span>
            <ul className="mt-4 space-y-3">
              {extra.deliverables.map((d, i) => (
                <li
                  key={d}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition-all hover:border-[#2198a4]"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2198a4]/10 font-mono text-xs font-bold text-[#2198a4]">
                    0{i + 1}
                  </span>
                  <span className="text-sm font-medium text-[#021547] leading-relaxed">
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* UAE E-Invoicing Comprehensive PDF Flow */}
      {slug === "uae-e-invoicing" ? (
        <>
          {/* Page 2: Structured Data Ledger */}
          <EInvoiceMandateLedger />

          {/* Page 4: Four Lines of Work */}
          <FourLinesOfWork />

          {/* Compliance Roadmap File Folder Grid */}
          <CalendarMandate />

          {/* Page 5: Invoice Lifecycle Stepper */}
          <InvoiceLifecycleStepper />

          {/* Page 6: Operating Model Comparison */}
          <OperatingModelLedger />

          {/* Technical Architecture Flow */}
          <Section sand>
            <Container>
              <Eyebrow>Architecture</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#021547]">
                ERP → Datavaura → ASP Peppol transmission.
              </h2>
              <div className="mt-10">
                <EInvoiceFlow />
              </div>
              <div className="mt-10">
                <ProcessRail
                  steps={einvoiceJourney.map((j, i) => ({
                    n: `0${i + 1}`,
                    title: j.title,
                    copy: j.copy,
                  }))}
                />
              </div>
            </Container>
          </Section>
        </>
      ) : null}

      {slug === "enterprise-integration" ? (
        <Section dark>
          <Container>
            <Eyebrow light>Integration topology</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-white">
              Connect your core stack in one reliable flow.
            </h2>
            <div className="mt-10">
              <IntegrationDiagram />
            </div>
            <p className="mt-8 text-sm text-[#e8f0f2]/70 font-mono">
              Supported platforms: {platforms.join(" · ")}
            </p>
          </Container>
        </Section>
      ) : null}

      {slug === "erp-data-migration" ? (
        <Section sand>
          <Container>
            <Eyebrow>Method</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#021547]">
              Assess → Map → Migrate → Reconcile → Validate → Go live
            </h2>
            <div className="mt-10">
              <ProcessRail steps={migrationSteps} />
            </div>
            <div className="mt-10">
              <Button href="/case-studies/sap-to-quickbooks-uae">
                See the SAP → QuickBooks case study
              </Button>
            </div>
          </Container>
        </Section>
      ) : null}

      <CTABand />
    </>
  );
}
