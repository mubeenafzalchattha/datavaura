import { HeroReceiptForm } from "@/components/ui/HeroReceiptForm";
import { ReceiptLedgerStrip } from "@/components/ui/ReceiptLedgerStrip";
import { EInvoiceMandateLedger } from "@/components/ui/EInvoiceMandateLedger";
import { ReceiptAuditGaps } from "@/components/ui/ReceiptAuditGaps";
import { CalendarMandate } from "@/components/ui/CalendarMandate";
import { FourLinesOfWork } from "@/components/ui/FourLinesOfWork";
import { InvoiceLifecycleStepper } from "@/components/ui/InvoiceLifecycleStepper";
import { OperatingModelLedger } from "@/components/ui/OperatingModelLedger";
import { LedgerHoldersAndSignatory } from "@/components/ui/LedgerHoldersAndSignatory";
import { ReadinessDiscussionTablet } from "@/components/ui/ReadinessDiscussionTablet";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section with Interactive Receipt Form & Accredited Badges */}
      <HeroReceiptForm />

      {/* 2. Official PDF Mandate Ribbon & Metadata Ledger Strip */}
      <ReceiptLedgerStrip />

      {/* 3. "An eInvoice is not a PDF" — Structured Data Schema Table (Page 2) */}
      <EInvoiceMandateLedger />

      {/* 4. "A receipt can look finished and still fail as data" — 6 Audit Exception Slips (Page 3) */}
      <ReceiptAuditGaps />

      {/* 5. Calendar File Folder Roadmap — 6 Mandate Milestones */}
      <CalendarMandate />

      {/* 6. "Four lines of work. One controlled file." — Controlled Engagements (Page 4) */}
      <FourLinesOfWork />

      {/* 7. "Treat go-live like an invoice status — not an event." — Lifecycle Stepper (Page 5) */}
      <InvoiceLifecycleStepper />

      {/* 8. "One relationship. The regulated layer sits with the partner." — Operating Model (Page 6) */}
      <OperatingModelLedger />

      {/* 9. "Built for books that do not live in one system." & FTA Tax Agent Signatory (Page 7) */}
      <LedgerHoldersAndSignatory />

      {/* 10. "Start with a readiness discussion." & Digital E-Invoice Display (Page 8) */}
      <ReadinessDiscussionTablet />
    </>
  );
}
