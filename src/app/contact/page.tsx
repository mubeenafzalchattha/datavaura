import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Book a Consultation | Datavaura",
  description:
    "A 20-minute Digital Readiness Call with founder-led UAE FTA Registered Tax Agent leadership. Direct review of ERP, PINT-AE, and ASP appointment.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Direct Advisory"
        title="Start with a readiness discussion."
        copy="A 20-minute Digital Readiness Call with founder and tax agent leadership. No sales deck. A clear assessment of where your books stand against UAE e-invoicing and enterprise systems integration."
        actions={null}
      />

      <ReceiptLedgerStrip />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ContactForm />

          {/* Signatory & Executive Credential Voucher */}
          <aside
            className="rounded-3xl p-8 sm:p-9 text-white shadow-xl relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #021547 0%, #061a38 70%, #0a2670 100%)",
              border: "1px solid rgba(33, 152, 164, 0.25)",
            }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#2198a4]">
                DIRECT ADVISORY
              </span>
              <span className="rounded bg-[#2198a4]/20 border border-[#2198a4]/40 px-2.5 py-1 text-[10px] font-mono text-[#35bfcd]">
                FTA REGISTERED
              </span>
            </div>

            <div className="mt-6">
              <h3
                className="text-2xl font-bold sm:text-3xl"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                Speak to the leadership.
              </h3>
              <p className="mt-3 text-sm text-[#e8f0f2]/75 leading-relaxed">
                Direct engagement with Younes Abu Ghalyoun MBA (UAE FTA Registered Tax Agent, 33+ years advisory) and engineering leadership. You deal with the people who do the work.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="mt-8 space-y-3 font-mono text-xs border-y border-dashed border-white/15 py-5">
              <div className="flex items-center justify-between">
                <span className="text-white/50">Official Email</span>
                <a
                  href="mailto:info@datavaura.com"
                  className="text-[#35bfcd] hover:underline"
                >
                  info@datavaura.com
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">WhatsApp Direct</span>
                <a
                  href="https://wa.me/971558932044"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#35bfcd] hover:underline"
                >
                  +971 55 893 2044
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">Operating Zone</span>
                <span className="text-white">UAE / GCC · Canada</span>
              </div>
            </div>

            {/* Preparation Tip */}
            <div className="mt-6">
              <p className="text-xs text-white/60 leading-relaxed">
                <strong>What to prepare:</strong> For UAE e-invoicing reviews, having your ERP name, legal entity structure, and annual revenue range will allow us to immediately determine your mandate phase.
              </p>
            </div>

            {/* Barcode & Verification */}
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-white/10 text-[10px] font-mono text-white/40">
              <span>DOC / UAE-EINV-2026</span>
              <span className="text-[#2198a4]">● VERIFIED ENTITY</span>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
