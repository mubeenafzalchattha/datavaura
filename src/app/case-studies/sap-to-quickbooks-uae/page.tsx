import type { Metadata } from "next";
import { CaseStudyBody } from "@/components/stories/CaseStudyBody";

export const metadata: Metadata = {
  title: "SAP to QuickBooks Online — UAE trading company",
  description:
    "Full ERP migration: chart of accounts, master data, multi-currency opening balances, Python API, signed reconciliation.",
};

export default function CaseStudyPage() {
  return <CaseStudyBody />;
}
