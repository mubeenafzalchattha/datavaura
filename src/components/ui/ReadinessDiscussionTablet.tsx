"use client";

import Link from "next/link";
import { pdfBrochure } from "@/lib/site";
import { Container } from "@/components/ui/Section";

export function ReadinessDiscussionTablet() {
  const { nextAction } = pdfBrochure;

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f5f8fa 100%)",
      }}
    >
      <Container className="relative">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#2198a4]">
            {nextAction.line}
          </p>
          <span className="font-mono text-xs text-[#4e6370]">
            COMMENCING ENGAGEMENT
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
            {nextAction.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4e6370] sm:text-lg">
            {nextAction.subhead}
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {nextAction.steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="font-mono text-xs font-bold text-[#2198a4]">
                {s.n}
              </span>
              <h3 className="mt-2 text-xl font-bold text-[#021547]">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-[#4e6370]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Digital E-Invoice Display (Realistic accounting tablet as in PDF page 8) */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: Engagement CTA */}
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#2198a4]">
              EXECUTIVE CONSULTATION
            </span>
            <h3
              className="mt-3 text-3xl font-bold text-[#021547] sm:text-4xl"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Book your 20-minute digital readiness review.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#4e6370]">
              Direct review with our founder and tax agent leadership. We assess
              your current ERP setup, determine Phase 1 or Phase 2 mandate scope,
              and chart an exact path to a live structured invoice.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
                style={{
                  background: "#021547",
                  fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                }}
              >
                <span>Book a Consultation</span>
                <span className="rounded bg-[#2198a4] p-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <a
                href="mailto:info@datavaura.com"
                className="font-mono text-sm font-medium text-[#2198a4] hover:underline"
              >
                info@datavaura.com →
              </a>
            </div>
          </div>

          {/* Right: Digital Tablet E-Invoice Graphic */}
          <div
            className="rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #021547 0%, #061a38 60%, #092850 100%)",
              border: "1px solid rgba(33, 152, 164, 0.3)",
            }}
          >
            {/* Tablet Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#2198a4] animate-pulse" />
                <span className="font-mono text-sm font-bold tracking-widest text-[#2198a4]">
                  E-INVOICE
                </span>
              </div>
              <span className="rounded-full bg-[#2198a4]/20 border border-[#2198a4]/40 px-3 py-1 font-mono text-xs font-semibold text-[#35bfcd]">
                ● ISSUED
              </span>
            </div>

            {/* Tablet Ledger Fields */}
            <div className="mt-6 space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/50">Invoice Number</span>
                <span className="font-bold text-white">INV-2024-05872</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/50">Issue Date</span>
                <span className="text-white">24 MAY 2024</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/50">Due Date</span>
                <span className="text-white">07 JUN 2024</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/50">Bill To</span>
                <span className="text-white">CUSTOMER ACCOUNT LLC</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/50">Currency</span>
                <span className="text-white">AED</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/50">Subtotal</span>
                <span className="text-white">AED 1,250.00</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/50">Tax (5% UAE VAT)</span>
                <span className="text-white">AED 62.50</span>
              </div>
              <div className="flex justify-between pt-2 text-sm font-bold text-[#35bfcd]">
                <span>Total Due</span>
                <span>AED 1,312.50</span>
              </div>
            </div>

            {/* Barcode & QR Code simulation */}
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
              {/* Barcode */}
              <div className="flex h-8 items-end gap-1">
                {[4, 8, 2, 6, 8, 3, 7, 5, 2, 8, 4, 6, 3, 8, 5, 7, 2, 6].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-white/70"
                    style={{ height: `${h * 4}px` }}
                  />
                ))}
              </div>

              {/* QR Code Icon / Stamp */}
              <div className="rounded-lg bg-white p-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="8" height="8" rx="1" stroke="#021547" strokeWidth="2" />
                  <rect x="4" y="4" width="4" height="4" fill="#021547" />
                  <rect x="14" y="2" width="8" height="8" rx="1" stroke="#021547" strokeWidth="2" />
                  <rect x="16" y="4" width="4" height="4" fill="#021547" />
                  <rect x="2" y="14" width="8" height="8" rx="1" stroke="#021547" strokeWidth="2" />
                  <rect x="4" y="16" width="4" height="4" fill="#021547" />
                  <path d="M14 14h2v2h-2zM18 14h4v2h-4zM14 18h4v4h-4zM20 18h2v4h-2z" fill="#021547" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Authority Notice */}
        <div className="mt-14 border-t border-slate-200 pt-6 text-center text-xs text-[#4e6370]">
          {nextAction.footerNotice}
        </div>
      </Container>
    </section>
  );
}
