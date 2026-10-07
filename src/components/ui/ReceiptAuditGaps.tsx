"use client";

import { pdfBrochure } from "@/lib/site";
import { Container } from "@/components/ui/Section";

export function ReceiptAuditGaps() {
  const { readinessGaps } = pdfBrochure;

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background: "linear-gradient(135deg, #f5f8fa 0%, #eef5f7 100%)",
      }}
    >
      <Container className="relative">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#2198a4]">
            {readinessGaps.line}
          </p>
          <span className="font-mono text-xs text-[#4e6370]">
            AUDIT EXCEPTION ANALYSIS
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
            {readinessGaps.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4e6370] sm:text-lg">
            {readinessGaps.subhead}
          </p>
        </div>

        {/* 6 Receipt Exception Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {readinessGaps.items.map((item) => (
            <div
              key={item.n}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-200/90 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Receipt Top Edge Decoration */}
              <div className="flex items-center justify-between border-b border-dashed border-[#2198a4]/25 pb-3">
                <span className="font-mono text-xs font-bold text-[#2198a4]">
                  EXCEPTION {item.n}
                </span>
                <span className="font-mono text-[10px] text-[#4e6370] uppercase">
                  STATUS: FAILED DATA
                </span>
              </div>

              {/* Body */}
              <div className="py-4">
                <h3
                  className="text-xl font-bold text-[#021547]"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4e6370]">
                  {item.desc}
                </p>
              </div>

              {/* Receipt Bottom barcode & audit stamp */}
              <div className="flex items-center justify-between border-t border-dashed border-slate-200 pt-3 text-[10px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-[#2198a4]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>REQUIRES REMEDIATION</span>
                </div>
                <span>REF: PINT-AE</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
