"use client";

import { useState } from "react";
import { contactNeeds } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [needs, setNeeds] = useState<string[]>(["UAE E-Invoicing"]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      country: String(data.get("country") || ""),
      message: String(data.get("message") || ""),
      needs,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
      setNeeds([]);
    } catch {
      const subject = encodeURIComponent("Datavaura Consultation Request");
      const body = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nCountry: ${payload.country}\nNeeds: ${needs.join(", ")}\n\nMessage: ${payload.message}`,
      );
      window.location.href = `mailto:info@datavaura.com?subject=${subject}&body=${body}`;
      setStatus("sent");
    }
  }

  function toggleNeed(need: string) {
    setNeeds((prev) =>
      prev.includes(need) ? prev.filter((x) => x !== need) : [...prev, need],
    );
  }

  return (
    <div
      className="relative mx-auto w-full max-w-xl"
      style={{
        filter:
          "drop-shadow(0 20px 50px rgba(2,21,71,0.12)) drop-shadow(0 4px 16px rgba(2,21,71,0.06))",
      }}
    >
      {/* Torn Top Edge */}
      <svg
        viewBox="0 0 400 20"
        preserveAspectRatio="none"
        className="w-full"
        style={{ display: "block", marginBottom: -1 }}
      >
        <path
          d="M0,20 L0,8 Q10,0 20,8 Q30,16 40,8 Q50,0 60,8 Q70,16 80,8 Q90,0 100,8 Q110,16 120,8 Q130,0 140,8 Q150,16 160,8 Q170,0 180,8 Q190,16 200,8 Q210,0 220,8 Q230,16 240,8 Q250,0 260,8 Q270,16 280,8 Q290,0 300,8 Q310,16 320,8 Q330,0 340,8 Q350,16 360,8 Q370,0 380,8 Q390,16 400,8 L400,20 Z"
          fill="white"
        />
      </svg>

      {/* Main Receipt Body */}
      <div style={{ background: "white", padding: "0 32px 0" }}>
        {/* Receipt Header */}
        <div
          className="pb-4 text-center"
          style={{ borderBottom: "1px dashed rgba(2,21,71,0.15)" }}
        >
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.24em]"
            style={{ color: "#2198a4" }}
          >
            ★ DATAVAURA TECHNOLOGIES FZ-LLC ★
          </p>
          <h2
            className="mt-2 text-xl font-bold"
            style={{
              color: "#021547",
              fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
            }}
          >
            Book a Digital Readiness Call
          </h2>
          <p className="mt-1 text-xs text-[#4e6370]">
            Founder-led review for UAE e-invoicing & ERP integration
          </p>

          {/* Receipt Meta Line */}
          <div
            className="mt-3 flex justify-between text-[10px] font-mono"
            style={{ color: "#2198a4" }}
          >
            <span>INV #CONSULT-2026</span>
            <span>
              {new Date()
                .toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                .toUpperCase()}
            </span>
            <span>ZONE: UAE / GCC</span>
          </div>
        </div>

        {/* Content */}
        {status === "sent" ? (
          <div className="py-12 text-center">
            <div
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
              style={{ background: "rgba(33,152,164,0.12)" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="#2198a4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-xl font-bold text-[#021547]">
              We have the brief.
            </p>
            <p className="mt-2 text-sm text-[#4e6370]">
              A founder will reply within one business day. If urgent, WhatsApp +1 226 919 5721.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="py-6 space-y-4">
            {/* Row: Name */}
            <div>
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[#021547]">
                Full Name *
              </label>
              <input
                required
                name="name"
                placeholder="Jane Doe"
                className="w-full rounded-none border-0 border-b py-2 text-sm outline-none transition-colors"
                style={{
                  borderColor: "rgba(2,21,71,0.15)",
                  background: "transparent",
                  color: "#021547",
                  fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#2198a4")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(2,21,71,0.15)")
                }
              />
            </div>

            {/* Row: Email & Company */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[#021547]">
                  Business Email *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="jane@company.ae"
                  className="w-full rounded-none border-0 border-b py-2 text-sm outline-none transition-colors"
                  style={{
                    borderColor: "rgba(2,21,71,0.15)",
                    background: "transparent",
                    color: "#021547",
                    fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#2198a4")}
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(2,21,71,0.15)")
                  }
                />
              </div>

              <div>
                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[#021547]">
                  Company Name *
                </label>
                <input
                  required
                  name="company"
                  placeholder="Acme Trading LLC"
                  className="w-full rounded-none border-0 border-b py-2 text-sm outline-none transition-colors"
                  style={{
                    borderColor: "rgba(2,21,71,0.15)",
                    background: "transparent",
                    color: "#021547",
                    fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#2198a4")}
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(2,21,71,0.15)")
                  }
                />
              </div>
            </div>

            {/* Row: Country / ERP */}
            <div>
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[#021547]">
                Country & Current ERP (Optional)
              </label>
              <input
                name="country"
                placeholder="UAE (SAP / Oracle / QuickBooks)"
                className="w-full rounded-none border-0 border-b py-2 text-sm outline-none transition-colors"
                style={{
                  borderColor: "rgba(2,21,71,0.15)",
                  background: "transparent",
                  color: "#021547",
                  fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#2198a4")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(2,21,71,0.15)")
                }
              />
            </div>

            {/* Needs Checkboxes */}
            <div className="pt-2">
              <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-[#021547]">
                Line Items / Areas of Scope
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {contactNeeds.map((need) => {
                  const on = needs.includes(need);
                  return (
                    <button
                      key={need}
                      type="button"
                      onClick={() => toggleNeed(need)}
                      className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs text-left transition-colors ${
                        on
                          ? "border-[#2198a4] bg-[#2198a4]/10 text-[#021547] font-semibold"
                          : "border-slate-200 text-[#4e6370] hover:border-slate-300"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          on ? "bg-[#2198a4]" : "bg-slate-300"
                        }`}
                      />
                      <span className="truncate">{need}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <div className="pt-2">
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[#021547]">
                Specific Context or Target Timeline
              </label>
              <textarea
                name="message"
                rows={2}
                placeholder="Tell us about your legal entities, invoicing volume, or target go-live date..."
                className="w-full rounded-lg border border-slate-200 p-2.5 text-sm outline-none transition-colors"
                style={{
                  color: "#021547",
                  fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#2198a4")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#e2e8f0")}
              />
            </div>

            {/* Receipt calculation row */}
            <div
              className="my-4 flex justify-between text-[10px] font-mono"
              style={{
                borderTop: "1px dashed rgba(2,21,71,0.15)",
                borderBottom: "1px dashed rgba(2,21,71,0.15)",
                padding: "8px 0",
                color: "#4e6370",
              }}
            >
              <span>ENGAGEMENT REVIEW</span>
              <span>20-MIN READINESS CALL</span>
              <span style={{ color: "#021547", fontWeight: 700 }}>FREE</span>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-between px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all shadow-md active:scale-95"
              style={{
                background: "#021547",
                fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              <span>
                {status === "sending" ? "TRANSMITTING…" : "BOOK A CONSULTATION"}
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded bg-[#2198a4]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            {/* Security note */}
            <div className="mt-3 flex items-start gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                style={{ marginTop: 2, flexShrink: 0 }}
              >
                <rect
                  x="5"
                  y="11"
                  width="14"
                  height="11"
                  rx="2"
                  stroke="#2198a4"
                  strokeWidth="2"
                />
                <path
                  d="M8 11V7a4 4 0 018 0v4"
                  stroke="#2198a4"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-[10px] leading-relaxed text-[#4e6370]">
                Strict confidentiality. Your data is handled securely under Canadian CBCA and UAE regulatory governance.
              </p>
            </div>
          </form>
        )}
      </div>

      {/* Torn Bottom Edge */}
      <svg
        viewBox="0 0 400 20"
        preserveAspectRatio="none"
        className="w-full"
        style={{ display: "block", marginTop: -1 }}
      >
        <path
          d="M0,0 L0,12 Q10,20 20,12 Q30,4 40,12 Q50,20 60,12 Q70,4 80,12 Q90,20 100,12 Q110,4 120,12 Q130,20 140,12 Q150,4 160,12 Q170,20 180,12 Q190,4 200,12 Q210,20 220,12 Q230,4 240,12 Q250,20 260,12 Q270,4 280,12 Q290,20 300,12 Q310,4 320,12 Q330,20 340,12 Q350,4 360,12 Q370,20 380,12 Q390,4 400,12 L400,0 Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
