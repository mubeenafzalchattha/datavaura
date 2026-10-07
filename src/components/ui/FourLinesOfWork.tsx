"use client";

import { pdfBrochure } from "@/lib/site";
import { Container } from "@/components/ui/Section";

export function FourLinesOfWork() {
  const { services } = pdfBrochure;

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
            {services.line}
          </p>
          <span className="font-mono text-xs text-[#4e6370]">
            DELIVERABLE SCOPE
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
            {services.title}
          </h2>
        </div>

        {/* 4 Lines of Work Ledger Cards */}
        <div className="mt-12 space-y-5">
          {services.lines.map((line) => (
            <div
              key={line.n}
              className="group relative flex flex-col gap-4 rounded-2xl border border-slate-200/90 bg-[#fbfdfd] p-6 shadow-sm transition-all duration-200 hover:border-[#2198a4] hover:shadow-md sm:flex-row sm:items-start sm:gap-8"
              style={{
                borderLeft: "6px solid #2198a4",
              }}
            >
              {/* Number Badge */}
              <div className="flex-shrink-0">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl font-mono text-lg font-bold"
                  style={{
                    background: "rgba(33, 152, 164, 0.12)",
                    color: "#2198a4",
                  }}
                >
                  {line.n}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3
                  className="text-xl font-bold text-[#021547] sm:text-2xl"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  {line.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4e6370] sm:text-base">
                  {line.desc}
                </p>
              </div>

              {/* Status Indicator */}
              <div className="flex-shrink-0 self-start sm:self-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-mono text-xs text-[#021547]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2198a4]" />
                  <span>CONTROLLED</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
