import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { approachSteps, leaders, metrics, nav } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Datavaura | Enterprise Systems & Compliance",
  description:
    "Datavaura Technologies FZ-LLC connects enterprise systems, ERP architecture, and UAE/GCC digital compliance — founder-led on every engagement.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company Profile"
        title="Built to connect enterprise systems, data, and compliance."
        copy="Datavaura Technologies FZ-LLC is an OpenPeppol member and enterprise integration partner. We help organisations modernize systems without losing control of data accuracy, operational reliability, or statutory tax obligations."
      />

      <ReceiptLedgerStrip />

      {/* Metrics Row */}
      <Section>
        <Container className="grid gap-6 sm:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm"
              style={{ borderTop: "4px solid #2198a4" }}
            >
              <p
                className="font-mono text-3xl sm:text-4xl font-bold text-[#021547]"
              >
                {m.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-[#4e6370] uppercase tracking-wider">
                {m.label}
              </p>
            </div>
          ))}
        </Container>
      </Section>

      {/* Narrative Section */}
      <Section sand>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm">
            <Eyebrow>Who we are</Eyebrow>
            <h2
              className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-[#021547]"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Enterprise-grade consulting without enterprise-scale overhead.
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#4e6370]">
              Growing businesses deserve architecture that is technically correct and commercially literate. We serve the UAE and GCC, Canada, and international clients with localized in-person capability and dedicated senior leadership.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm">
            <Eyebrow>What we believe</Eyebrow>
            <h2
              className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-[#021547]"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Tax compliance and system architecture in the same room.
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#4e6370]">
              When we design an e-invoicing flow, a migration, or an automated integration, we review accounting implications, audit trails, VAT and Corporate Tax, and data structure simultaneously. We do not bring in a compliance advisor after the code is already written.
            </p>
          </div>
        </Container>
      </Section>

      {/* Engagement Approach Steps */}
      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <Eyebrow>Engagement Architecture</Eyebrow>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-bold text-[#021547]"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                How we work from scoping to cutover.
              </h2>
            </div>
            <span className="font-mono text-xs text-[#2198a4]">
              CONTROLLED MILESTONES
            </span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {approachSteps.map((s) => (
              <div
                key={s.n}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#2198a4] hover:shadow-md"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#2198a4] rounded bg-[#2198a4]/10 px-2.5 py-1">
                    PHASE {s.n}
                  </span>
                  <h3
                    className="mt-4 font-bold text-xl text-[#021547]"
                    style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4e6370]">
                    {s.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {nav.about.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white px-6 py-4 text-sm font-semibold text-[#021547] shadow-sm transition-all hover:border-[#2198a4] hover:text-[#2198a4]"
              >
                <span>{l.label}</span>
                <span className="font-mono text-xs">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Leadership Credential Section */}
      <Section dark>
        <Container>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Eyebrow light>Leadership</Eyebrow>
            <span className="font-mono text-xs text-[#2198a4]">
              FOUNDER-LED ENGAGEMENTS
            </span>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {leaders.map((p) => (
              <article
                key={p.name}
                className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-[#2198a4]/40"
              >
                <div className="flex items-center justify-between">
                  <h3
                    className="text-2xl font-bold text-white sm:text-3xl"
                    style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                  >
                    {p.name}
                  </h3>
                  <span className="rounded bg-[#2198a4]/20 px-2.5 py-1 font-mono text-[10px] text-[#35bfcd] border border-[#2198a4]/40">
                    PARTNER
                  </span>
                </div>
                <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#2198a4]">
                  {p.role}
                </p>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#e8f0f2]/75">
                  {p.copy}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
