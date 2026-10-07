import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Privacy Notice | Datavaura" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance & Privacy"
        title="Privacy Notice"
        copy="Datavaura Technologies FZ-LLC collects only the data required to evaluate and respond to consultation requests and operate this website securely."
      />

      <ReceiptLedgerStrip />

      <Section>
        <Container className="max-w-3xl">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm space-y-4 text-sm sm:text-base leading-relaxed text-[#4e6370]">
            <p>
              Contact-form submissions (name, business email, company, country,
              and the systems context you describe) are used solely to reply to you and assess mandate scope. We do not sell or monetize personal information.
            </p>
            <p>
              Data transmission on this site uses TLS encryption. For confidentiality inquiries or data requests, write directly to:{" "}
              <a className="font-semibold text-[#2198a4] underline" href="mailto:info@datavaura.com">
                info@datavaura.com
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
