"use client";

import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Section";

interface Milestone {
  date: string;
  quarter: string;
  title: string;
  copy: string;
  scope: string;
}

const MANDATE_EVENTS: Milestone[] = [
  {
    date: "1 Jul 2026",
    quarter: "Q3 2026",
    title: "Pilot & voluntary",
    copy: "Nominated and voluntary participants begin exchanging e-invoices.",
    scope: "Nominated & voluntary participants",
  },
  {
    date: "30 Oct 2026",
    quarter: "Q4 2026",
    title: "Phase 1 ASP appointment",
    copy: "Businesses with revenue ≥ AED 50 million appoint an Accredited Service Provider.",
    scope: "Revenue ≥ AED 50 million",
  },
  {
    date: "1 Jan 2027",
    quarter: "Q1 2027",
    title: "Phase 1 go-live",
    copy: "Large businesses must issue and receive structured e-invoices via Peppol / PINT-AE.",
    scope: "Large businesses (≥ AED 50M)",
  },
  {
    date: "31 Mar 2027",
    quarter: "Q1 2027",
    title: "Phase 2 & government ASP",
    copy: "Smaller businesses and government entities appoint their ASP.",
    scope: "Revenue < AED 50M & Gov",
  },
  {
    date: "1 Jul 2027",
    quarter: "Q3 2027",
    title: "Phase 2 go-live",
    copy: "Businesses below AED 50 million go live.",
    scope: "Businesses below AED 50M",
  },
  {
    date: "1 Oct 2027",
    quarter: "Q4 2027",
    title: "Government go-live",
    copy: "Government entities complete implementation.",
    scope: "Federal & government entities",
  },
];

export function CalendarMandate() {
  return (
    <section className="relative overflow-hidden bg-[#021547] py-20 text-[#e8f0f2] sm:py-28">
      {/* Subtle background mesh */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow light>Compliance Roadmap</Eyebrow>
            <h2
              className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-instrument), Georgia, serif" }}
            >
              UAE compliance roadmap. Key dates for your organisation.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#e8f0f2]/75 sm:text-lg">
              Mark your calendar for mandatory checkpoints. Every milestone requires
              ERP data mapping, ASP connectivity, and finance controls well ahead
              of the legal deadline.
            </p>
          </div>
          <Link
            href="/solutions/uae-e-invoicing"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-[#021547] shadow-lg transition-all hover:brightness-110 active:scale-95"
            style={{
              background: "#2198a4",
              fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
            }}
          >
            <span>Open the e-invoicing page</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* 6 Folder-Style Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MANDATE_EVENTS.map((m) => (
            <div
              key={m.date}
              className="group relative flex flex-col transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Top Folder Tab Layer (Date on top tab) */}
              <div className="flex items-end">
                {/* The Tab itself */}
                <div
                  className="relative z-10 flex items-center gap-2 rounded-t-xl bg-white px-5 py-2.5 shadow-sm"
                  style={{
                    borderTop: "1px solid rgba(226, 232, 240, 0.95)",
                    borderLeft: "1px solid rgba(226, 232, 240, 0.95)",
                    fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2198a4"
                    strokeWidth="2.5"
                    className="flex-shrink-0"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#021547]">
                    {m.date}
                  </span>
                </div>

                {/* Angled slope connector linking tab to main folder line */}
                <div className="relative z-10 -ml-[1px] h-[36px] w-6 overflow-hidden">
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 24 36"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,0 L8,0 Q16,0 20,8 L24,36 L0,36 Z" fill="white" />
                    <path
                      d="M0,0.5 L8,0.5 Q16,0.5 20,8.5 L24,36"
                      stroke="rgba(226, 232, 240, 0.95)"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Horizontal top line completing the folder shoulder */}
                <div
                  className="flex-1 -mb-[1px]"
                  style={{
                    height: "1px",
                    background: "rgba(226, 232, 240, 0.95)",
                  }}
                />
              </div>

              {/* Main Folder Body (Text on the body) */}
              <div
                className="relative z-20 -mt-[1px] flex flex-1 flex-col justify-between rounded-b-2xl rounded-tr-2xl bg-white p-7 shadow-sm transition-shadow duration-200 group-hover:shadow-xl"
                style={{
                  border: "1px solid rgba(226, 232, 240, 0.95)",
                }}
              >
                <div>
                  {/* Scope / Quarter badge */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#2198a4]">
                      {m.quarter}
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                      {m.scope}
                    </span>
                  </div>

                  {/* Milestone Title */}
                  <h3
                    className="font-serif text-2xl font-bold leading-snug text-[#021547]"
                    style={{ fontFamily: "var(--font-instrument), Georgia, serif" }}
                  >
                    {m.title}
                  </h3>

                  {/* Milestone Copy */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {m.copy}
                  </p>
                </div>

                {/* Subtle bottom detail */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-mono text-slate-400">
                  <span>Datavaura UAE Roadmap</span>
                  <span className="text-[#2198a4]">● MOF Phase</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-10 text-xs text-[#e8f0f2]/50">
          Dates as currently published. Always verify on the official Ministry of
          Finance portal —{" "}
          <a
            href="https://mof.gov.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2198a4] underline underline-offset-2 hover:text-white"
          >
            mof.gov.ae
          </a>{" "}
          — before acting.
        </p>
      </Container>
    </section>
  );
}
