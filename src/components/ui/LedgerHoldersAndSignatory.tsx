"use client";

import { pdfBrochure } from "@/lib/site";
import { Container } from "@/components/ui/Section";

export function LedgerHoldersAndSignatory() {
  const { ledgerHolders } = pdfBrochure;
  const { signatory } = ledgerHolders;

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
            {ledgerHolders.line}
          </p>
          <span className="font-mono text-xs text-[#4e6370]">
            ENTERPRISE ACCOUNTING ARCHITECTURE
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
            {ledgerHolders.title}
          </h2>
        </div>

        {/* 5 Ledger Holder Bullets */}
        <div className="mt-10 space-y-3">
          {ledgerHolders.items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#2198a4] hover:shadow-md"
            >
              <span className="h-4 w-4 rounded-full bg-[#2198a4] flex-shrink-0" />
              <span className="text-base sm:text-lg font-semibold text-[#021547]">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Signatory Card & Starting Position */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Signatory Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-md relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-dashed border-[#2198a4]/25 pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#2198a4]">
                SIGNATORY & LEADERSHIP
              </span>
              <span className="rounded bg-[#2198a4]/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-[#2198a4]">
                FTA REGISTERED TAX AGENT
              </span>
            </div>

            <div className="mt-6">
              <h3
                className="text-2xl font-bold text-[#021547] sm:text-3xl"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                {signatory.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#2198a4]">
                {signatory.title}
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#4e6370]">
                {signatory.bio}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-dashed border-slate-200 pt-4 text-xs font-mono text-slate-400">
              <span>UAE FTA Credentials</span>
              <span className="text-[#021547] font-semibold">33+ Years Advisory</span>
            </div>
          </div>

          {/* Starting Position Box */}
          <div
            className="flex flex-col justify-between rounded-2xl p-7 sm:p-9 text-white shadow-md"
            style={{ background: "#021547" }}
          >
            <div>
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#2198a4]">
                STARTING POSITION
              </span>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#e8f0f2]/90">
                {ledgerHolders.startingPosition}
              </p>
            </div>
            <div className="mt-6 border-t border-white/10 pt-4 font-mono text-xs text-[#2198a4]">
              ● ZERO DISRUPTION CUTOVER
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
