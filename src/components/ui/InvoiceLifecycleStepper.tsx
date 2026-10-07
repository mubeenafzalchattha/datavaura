"use client";

import { useState } from "react";
import { pdfBrochure } from "@/lib/site";
import { Container } from "@/components/ui/Section";

export function InvoiceLifecycleStepper() {
  const { lifecycle } = pdfBrochure;
  const [activeStatus, setActiveStatus] = useState<number>(4); // default ISSUED

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background: "linear-gradient(180deg, #f5f8fa 0%, #eef5f7 100%)",
      }}
    >
      <Container className="relative">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#2198a4]">
            {lifecycle.line}
          </p>
          <span className="font-mono text-xs text-[#4e6370]">
            ACCOUNTING LIFECYCLE
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
            {lifecycle.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4e6370] sm:text-lg">
            {lifecycle.subhead}
          </p>
        </div>

        {/* Status Stepper Progression */}
        <div className="mt-12 space-y-3">
          {lifecycle.statuses.map((item, idx) => {
            const isActive = activeStatus === idx;
            const isIssued = item.status === "ISSUED";

            return (
              <div
                key={item.status}
                onClick={() => setActiveStatus(idx)}
                className={`cursor-pointer rounded-2xl border p-5 transition-all duration-200 sm:p-6 ${
                  isActive
                    ? "border-[#2198a4] bg-white shadow-md ring-2 ring-[#2198a4]/20"
                    : "border-slate-200/80 bg-white/70 hover:bg-white"
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  {/* Status Badge & Title */}
                  <div className="flex items-center gap-4">
                    <span
                      className={`inline-flex w-24 items-center justify-center rounded-lg px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors ${
                        isIssued
                          ? "bg-[#021547] text-white"
                          : isActive
                          ? "bg-[#2198a4] text-white"
                          : "bg-slate-100 text-[#021547]"
                      }`}
                    >
                      {item.status}
                    </span>
                    <h3
                      className="text-lg font-bold text-[#021547] sm:text-xl"
                      style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#4e6370] sm:text-right sm:max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testing Before Release Callout Box */}
        <div
          className="mt-8 rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden"
          style={{ background: "#021547" }}
        >
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#2198a4]">
              {lifecycle.testingBox.title}
            </span>
            <p className="text-sm sm:text-base leading-relaxed text-[#e8f0f2]/90">
              {lifecycle.testingBox.text}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
