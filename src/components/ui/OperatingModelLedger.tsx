"use client";

import { pdfBrochure } from "@/lib/site";
import { Container } from "@/components/ui/Section";

export function OperatingModelLedger() {
  const { operatingModel } = pdfBrochure;

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background: "#ffffff",
      }}
    >
      <Container className="relative">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#2198a4]">
            {operatingModel.line}
          </p>
          <span className="font-mono text-xs text-[#4e6370]">
            GOVERNANCE & COMPLIANCE
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
            {operatingModel.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4e6370] sm:text-lg">
            {operatingModel.subhead}
          </p>
        </div>

        {/* Dual Ledger Columns */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Datavaura Column */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div
              className="px-6 py-4 text-white"
              style={{ background: "#021547" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2198a4]">
                {operatingModel.datavaura.label}
              </p>
              <h3 className="mt-1 text-2xl font-bold">
                {operatingModel.datavaura.name}
              </h3>
            </div>
            <ul className="divide-y divide-slate-100 p-6 space-y-4">
              {operatingModel.datavaura.items.map((item) => (
                <li key={item} className="flex items-start gap-3 pt-4 first:pt-0">
                  <span className="text-[#2198a4] font-bold text-sm">▸</span>
                  <span className="text-sm sm:text-base text-[#4e6370] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Accredited Partner Column */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div
              className="px-6 py-4 text-white"
              style={{ background: "#2198a4" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#021547]">
                {operatingModel.partner.label}
              </p>
              <h3 className="mt-1 text-2xl font-bold">
                {operatingModel.partner.name}
              </h3>
            </div>
            <ul className="divide-y divide-slate-100 p-6 space-y-4">
              {operatingModel.partner.items.map((item) => (
                <li key={item} className="flex items-start gap-3 pt-4 first:pt-0">
                  <span className="text-[#021547] font-bold text-sm">▸</span>
                  <span className="text-sm sm:text-base text-[#4e6370] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Clarification Callout */}
        <div
          className="mt-8 rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden"
          style={{ background: "#021547" }}
        >
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#2198a4]">
              CLARIFICATION
            </span>
            <p className="text-sm sm:text-base leading-relaxed text-[#e8f0f2]/90">
              {operatingModel.clarification}
            </p>
          </div>
        </div>

        {/* OpenPeppol Membership Callout */}
        <div className="mt-6 rounded-2xl border border-[#2198a4]/30 bg-[#f5fbfb] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#2198a4]">
            OPENPEPPOL MEMBERSHIP
          </span>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#4e6370]">
            {operatingModel.openPeppol}
          </p>
        </div>
      </Container>
    </section>
  );
}
