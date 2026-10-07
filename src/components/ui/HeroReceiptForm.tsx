"use client";

import { useState } from "react";
import Image from "next/image";

export function HeroReceiptForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: `${String(data.get("firstName") || "")} ${String(data.get("lastName") || "")}`.trim(),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      phone: String(data.get("phone") || ""),
      city: String(data.get("city") || ""),
      needs: ["UAE E-Invoicing Consultation"],
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
    } catch {
      const subject = encodeURIComponent("Datavaura — Book a Demo");
      const body = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nPhone: ${payload.phone}\nCity: ${payload.city}`,
      );
      window.location.href = `mailto:info@datavaura.com?subject=${subject}&body=${body}`;
      setStatus("sent");
    }
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f5f8fa 0%, #e8f0f2 40%, #d0e8ed 100%)",
        paddingTop: "7rem",
        paddingBottom: "4rem",
      }}
    >
      {/* Subtle mesh grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,152,164,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(33,152,164,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* ── LEFT COLUMN ─────────────────────────────────── */}
        <div>
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#2198a4" }}
          >
            UAE E-INVOICING
          </p>

          <h1
            className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.2rem]"
            style={{ color: "#021547", fontFamily: "var(--font-montserrat), Montserrat, sans-serif", lineHeight: 1.1 }}
          >
            Smart e-invoicing solutions,
            <br />
            built for{" "}
            <span style={{ color: "#2198a4" }}>your enterprise.</span>
          </h1>

          <p
            className="mt-5 max-w-lg text-base leading-relaxed"
            style={{ color: "#4e6370" }}
          >
            Meet UAE e-invoicing requirements with enterprise-ready implementation
            built around your ERP, data, compliance and future business needs.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-start gap-5">
            {/* E-invoicing platform badge */}
            <div className="flex items-start gap-2">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                <circle cx="10" cy="10" r="10" fill="#2198a4" />
                <path d="M6 10.5l3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[11px] font-semibold leading-snug" style={{ color: "#021547", maxWidth: 210 }}>
                E-invoicing delivered through a Ministry of Finance-accredited platform partner
              </span>
            </div>

            {/* Peppol member badge */}
            <div className="flex items-center gap-2">
              <Image
                src="/peppol@10x.webp"
                alt="OpenPeppol member"
                width={120}
                height={48}
                style={{ width: "auto", height: 36 }}
              />
              <span
                className="text-[10px] font-semibold uppercase leading-tight tracking-wider"
                style={{ color: "#021547", maxWidth: 80 }}
              >
                {/* OPENPEPPOL<br />MEMBER */}
              </span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Receipt form ─────────────────── */}
        <div className="relative">
          {/* Receipt container */}
          <div
            className="relative mx-auto max-w-md"
            style={{
              filter: "drop-shadow(0 20px 60px rgba(2,21,71,0.18)) drop-shadow(0 4px 16px rgba(2,21,71,0.1))",
            }}
          >
            {/* Torn top edge SVG */}
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

            {/* Main receipt body */}
            <div style={{ background: "white", padding: "0 28px 0" }}>
              {/* Receipt header */}
              <div
                className="pb-4 text-center"
                style={{ borderBottom: "1px dashed rgba(2,21,71,0.15)" }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#2198a4" }}
                >
                  ★ DATAVAURA TECHNOLOGIES FZ-LLC ★
                </p>
                <h2
                  className="mt-2 text-[1.05rem] font-bold"
                  style={{ color: "#021547", fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  Speak with a Compliance Expert
                </h2>


                {/* Receipt meta row */}
                <div className="mt-3 flex justify-between text-[9px] font-mono" style={{ color: "#2198a4" }}>
                  <span>INV #DEMO-001</span>
                  <span>{new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase()}</span>
                  <span>UAE ZONE</span>
                </div>
              </div>

              {/* Form */}
              {status === "sent" ? (
                <div className="py-10 text-center">
                  <div
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: "rgba(33,152,164,0.12)" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="#2198a4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-lg font-bold" style={{ color: "#021547" }}>
                    We have the brief.
                  </p>
                  <p className="mt-2 text-sm" style={{ color: "#4e6370" }}>
                    A founder will reply within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="py-5">
                  {/* Row: First / Last */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label
                        className="mb-1 block text-[10px] font-semibold uppercase tracking-wider"
                        style={{ color: "#021547" }}
                      >
                        First Name *
                      </label>
                      <input
                        required
                        name="firstName"
                        placeholder="Jane"
                        className="w-full rounded-none border-0 border-b py-2 text-sm outline-none transition-colors"
                        style={{
                          borderColor: "rgba(2,21,71,0.15)",
                          background: "transparent",
                          color: "#021547",
                          fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = "#2198a4")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(2,21,71,0.15)")}
                      />
                    </div>
                    <div>
                      <label
                        className="mb-1 block text-[10px] font-semibold uppercase tracking-wider"
                        style={{ color: "#021547" }}
                      >
                        Last Name
                      </label>
                      <input
                        name="lastName"
                        placeholder="Smith"
                        className="w-full rounded-none border-0 border-b py-2 text-sm outline-none transition-colors"
                        style={{
                          borderColor: "rgba(2,21,71,0.15)",
                          background: "transparent",
                          color: "#021547",
                          fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = "#2198a4")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(2,21,71,0.15)")}
                      />
                    </div>
                  </div>

                  {/* Dashed separator */}
                  <div className="my-3" style={{ borderTop: "1px dashed rgba(2,21,71,0.08)" }} />

                  {/* Row: Email / Phone */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label
                        className="mb-1 block text-[10px] font-semibold uppercase tracking-wider"
                        style={{ color: "#021547" }}
                      >
                        Business Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="jane@corp.ae"
                        className="w-full rounded-none border-0 border-b py-2 text-sm outline-none"
                        style={{
                          borderColor: "rgba(2,21,71,0.15)",
                          background: "transparent",
                          color: "#021547",
                          fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = "#2198a4")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(2,21,71,0.15)")}
                      />
                    </div>
                    <div>
                      <label
                        className="mb-1 block text-[10px] font-semibold uppercase tracking-wider"
                        style={{ color: "#021547" }}
                      >
                        Phone *
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="+971 50 000 0000"
                        className="w-full rounded-none border-0 border-b py-2 text-sm outline-none"
                        style={{
                          borderColor: "rgba(2,21,71,0.15)",
                          background: "transparent",
                          color: "#021547",
                          fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = "#2198a4")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(2,21,71,0.15)")}
                      />
                    </div>
                  </div>

                  <div className="my-3" style={{ borderTop: "1px dashed rgba(2,21,71,0.08)" }} />

                  {/* Row: Company / City */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label
                        className="mb-1 block text-[10px] font-semibold uppercase tracking-wider"
                        style={{ color: "#021547" }}
                      >
                        Company Name *
                      </label>
                      <input
                        required
                        name="company"
                        placeholder="Acme Corp LLC"
                        className="w-full rounded-none border-0 border-b py-2 text-sm outline-none"
                        style={{
                          borderColor: "rgba(2,21,71,0.15)",
                          background: "transparent",
                          color: "#021547",
                          fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = "#2198a4")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(2,21,71,0.15)")}
                      />
                    </div>
                    <div>
                      <label
                        className="mb-1 block text-[10px] font-semibold uppercase tracking-wider"
                        style={{ color: "#021547" }}
                      >
                        City
                      </label>
                      <input
                        name="city"
                        placeholder="Dubai"
                        className="w-full rounded-none border-0 border-b py-2 text-sm outline-none"
                        style={{
                          borderColor: "rgba(2,21,71,0.15)",
                          background: "transparent",
                          color: "#021547",
                          fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = "#2198a4")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(2,21,71,0.15)")}
                      />
                    </div>
                  </div>

                  {/* Receipt total / subtotal row */}
                  <div
                    className="my-4 flex justify-between text-[9px] font-mono"
                    style={{
                      borderTop: "1px dashed rgba(2,21,71,0.15)",
                      borderBottom: "1px dashed rgba(2,21,71,0.15)",
                      padding: "6px 0",
                      color: "#4e6370",
                    }}
                  >
                    <span>SERVICE</span>
                    <span>UAE E-INVOICING READINESS CONSULTATION</span>
                    <span style={{ color: "#021547", fontWeight: 700 }}>FREE</span>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex w-full items-center justify-between rounded-none px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all"
                    style={{
                      background: "#021547",
                      color: "white",
                      fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                      letterSpacing: "0.1em",
                      opacity: status === "sending" ? 0.7 : 1,
                    }}
                  >
                    <span>{status === "sending" ? "PROCESSING…" : "BOOK A DEMO"}</span>
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded"
                      style={{ background: "#2198a4" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>

                  {/* Security note */}
                  <div className="mt-3 flex items-start gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginTop: 1, flexShrink: 0 }}>
                      <rect x="5" y="11" width="14" height="11" rx="2" stroke="#2198a4" strokeWidth="2" />
                      <path d="M8 11V7a4 4 0 018 0v4" stroke="#2198a4" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <p className="text-[10px] leading-relaxed" style={{ color: "#4e6370" }}>
                      Confidence begins with trust. Your information is handled securely and responsibly.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Torn bottom edge */}
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
        </div>
      </div>
    </section>
  );
}
