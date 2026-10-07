"use client";

import { pdfBrochure } from "@/lib/site";
import { Container } from "@/components/ui/Section";

export function EInvoiceMandateLedger() {
  const { mandate } = pdfBrochure;

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background: "linear-gradient(180deg, #f5f8fa 0%, #ffffff 100%)",
      }}
    >
      {/* Subtle blueprint mesh background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,152,164,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(33,152,164,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <Container className="relative">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#2198a4]">
            {mandate.line}
          </p>
          <span className="font-mono text-xs text-[#4e6370]">
            PINT-AE / PEPPOL STANDARDS
          </span>
        </div>

        <div className="mt-4 max-w-3xl">
          <h2
            className="text-4xl font-bold leading-tight sm:text-5xl"
            style={{
              color: "#021547",
              fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
            }}
          >
            {mandate.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4e6370] sm:text-lg">
            {mandate.description}
          </p>
        </div>

        {/* Structured Data Table / Ledger */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#2198a4]/20 bg-white shadow-sm">
          {/* Table Header */}
          <div
            className="grid grid-cols-1 sm:grid-cols-[240px_1fr] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white"
            style={{ background: "#021547" }}
          >
            <div>Field</div>
            <div className="hidden sm:block">What it means in practice</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100">
            {mandate.fields.map((f, i) => (
              <div
                key={f.field}
                className={`grid grid-cols-1 gap-2 px-6 py-4 sm:grid-cols-[240px_1fr] sm:items-center ${
                  i % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2198a4]" />
                  <span className="font-semibold text-sm text-[#021547]">
                    {f.field}
                  </span>
                </div>
                <div className="text-sm text-[#4e6370] leading-relaxed">
                  {f.meaning}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 1 Scope Callout Box (from PDF) */}
        <div
          className="mt-8 rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden"
          style={{ background: "#021547" }}
        >
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#2198a4]">
              {mandate.scopeCallout.kicker}
            </span>
            <p className="text-sm sm:text-base leading-relaxed text-[#e8f0f2]/90">
              {mandate.scopeCallout.text}
            </p>
          </div>
        </div>

        {/* 4 Step Workflow Grid (01 Readiness assessment, 02 Gap register, etc.) */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mandate.workflowSteps.map((step) => (
            <div
              key={step.n}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="font-mono text-xs font-bold text-[#2198a4]">
                {step.n}
              </span>
              <h3 className="mt-2 text-base font-bold text-[#021547]">
                {step.title}
              </h3>
              <p className="mt-1 text-xs text-[#4e6370] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
