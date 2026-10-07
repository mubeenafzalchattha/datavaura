"use client";

import { pdfBrochure } from "@/lib/site";

export function ReceiptLedgerStrip() {
  const brochure = pdfBrochure || {};
  const docId = brochure.docId || "UAE-EINV-2026";
  const entity = brochure.entity || "DATAVAURA · TECHNOLOGIES FZ-LLC";
  const hero = brochure.hero || { ribbon: [], pillars: [] };
  const ribbon = hero.ribbon || [];

  return (
    <div
      className="relative overflow-hidden border-y"
      style={{
        background: "linear-gradient(90deg, #f8fbfb 0%, #eef5f7 50%, #f8fbfb 100%)",
        borderColor: "rgba(33, 152, 164, 0.2)",
      }}
    >
      {/* Top perforated dashed line */}
      <div
        className="h-1 w-full opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2198a4 1px, transparent 1.5px)",
          backgroundSize: "8px 4px",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 text-[11px] font-mono border-b border-dashed border-[#2198a4]/25">
          <div className="flex items-center gap-2 text-[#021547] font-bold tracking-wider">
            <span className="h-2 w-2 rounded-full bg-[#2198a4] animate-pulse" />
            <span>{entity}</span>
          </div>
          <div className="flex items-center gap-4 text-[#4e6370]">
            <span className="hidden sm:inline">STRUCTURED ELECTRONIC INVOICE</span>
            <span className="rounded bg-[#2198a4]/10 px-2 py-0.5 text-[#2198a4] font-semibold">
              DOC / {docId}
            </span>
          </div>
        </div>

        {/* Milestone Ledger Row */}
        <div className="grid grid-cols-2 gap-4 py-3 sm:grid-cols-4">
          {ribbon.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col ${
                i > 0 ? "sm:border-l sm:border-dashed sm:border-[#2198a4]/25 sm:pl-6" : ""
              }`}
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#4e6370]">
                {item.label}
              </span>
              <span
                className="mt-1 text-base font-bold sm:text-lg"
                style={{
                  color: "#021547",
                  fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom tags & values */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-[11px] font-mono border-t border-dashed border-[#2198a4]/25 text-[#4e6370]">
          <div className="flex flex-wrap items-center gap-3">
            {hero.pillars.map((p, idx) => (
              <span key={p} className="flex items-center gap-2">
                <span>{p}</span>
                {idx < hero.pillars.length - 1 && <span className="text-[#2198a4]">·</span>}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 text-[#2198a4] font-bold tracking-widest text-[10px]">
            <span>CLARITY</span>
            <span>·</span>
            <span>INNOVATION</span>
            <span>·</span>
            <span>VALUE</span>
          </div>
        </div>
      </div>

      {/* Bottom perforated dashed line */}
      <div
        className="h-1 w-full opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2198a4 1px, transparent 1.5px)",
          backgroundSize: "8px 4px",
        }}
      />
    </div>
  );
}
