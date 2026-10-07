export const company = {
  name: "Datavaura",
  legal: "Datavaura Technologies FZ-LLC",
  tagline: "Enterprise systems. Digital compliance. One operating layer.",
  email: "info@datavaura.com",
  whatsapp: "https://wa.me/971558932044",
  whatsappDisplay: "+971 55 893 2044",
  linkedin: "https://linkedin.com/company/datavaura",
  twitter: "https://x.com/datavaura",
  facebook: "https://facebook.com/datavaura",
  mof: "https://mof.gov.ae",
};

export const trustSignals = [
  { label: "Federal CBCA", detail: "Canadian corporation" },
  { label: "Canada · UAE/GCC", detail: "In-person & remote" },
  { label: "SAP & QBO", detail: "Migration specialists" },
  { label: "FTA Tax Agent", detail: "Founder credential" },
  { label: "Founder-led", detail: "You deal with the experts" },
  { label: "EN / AR", detail: "Bilingual delivery" },
];

export const metrics = [
  { value: "30+", label: "Years of UAE business advisory" },
  { value: "2", label: "Founders on every engagement" },
  { value: "4", label: "Currencies migrated in a single cutover" },
  { value: "20 min", label: "Digital readiness call — no obligation" },
];

export const solutions = [
  {
    slug: "uae-e-invoicing",
    nav: "UAE E-Invoicing & Digital Compliance",
    title: "UAE E-Invoicing",
    kicker: "Digital compliance",
    eyebrow: "Flagship offering",
    summary:
      "Readiness, ERP-to-ASP integration, PINT-AE mapping, and go-live — without replacing your ERP.",
    problem:
      "The mandate is not an invoice format change. It is an enterprise data, ERP, and operating-model problem.",
    href: "/solutions/uae-e-invoicing",
    featured: true,
  },
  {
    slug: "erp-data-migration",
    nav: "ERP & Data Migration",
    title: "ERP & Data Migration",
    kicker: "Controlled cutover",
    eyebrow: "Proven delivery",
    summary:
      "Assess, map, migrate, reconcile, and go live — with a signed reconciliation, not a hope.",
    problem:
      "Dirty ledgers, missing sub-ledgers, and multi-currency balances are why most migrations stall.",
    href: "/solutions/erp-data-migration",
    featured: true,
  },
  {
    slug: "enterprise-integration",
    nav: "Enterprise Integration",
    title: "Enterprise Integration",
    kicker: "The Datavaura layer",
    eyebrow: "Core differentiator",
    summary:
      "SAP, Oracle, Dynamics, and Odoo connected to CRM, banking, ASP, and analytics in one reliable flow.",
    problem:
      "Finance still exports CSVs because the systems that run the business do not speak to each other.",
    href: "/solutions/enterprise-integration",
    featured: true,
  },
  {
    slug: "business-process-automation",
    nav: "Business Process Automation",
    title: "Business Process Automation",
    kicker: "Remove the re-keying",
    eyebrow: "Operations",
    summary:
      "Invoice, reconciliation, and reporting workflows automated on the systems you already own.",
    problem:
      "Hours of finance time are still spent copying the same number between three platforms.",
    href: "/solutions/business-process-automation",
    featured: false,
  },
  {
    slug: "ai-intelligent-automation",
    nav: "AI & Intelligent Automation",
    title: "AI & Intelligent Automation",
    kicker: "Agents that earn their keep",
    eyebrow: "Intelligence",
    summary:
      "Task-specific AI agents and RAG systems tested against your data — not a demo on someone else's.",
    problem:
      "Most AI programmes stall because nobody defined the process, the data, or the failure mode.",
    href: "/solutions/ai-intelligent-automation",
    featured: true,
  },
  {
    slug: "cloud-infrastructure",
    nav: "Cloud & Infrastructure",
    title: "Cloud & Infrastructure",
    kicker: "Secure foundation",
    eyebrow: "Platform",
    summary:
      "Cloud migration, Microsoft 365, networking, and infrastructure scoped to how the business actually runs.",
    problem:
      "Growing teams inherit a patchwork of tools, tenants, and access that nobody fully owns.",
    href: "/solutions/cloud-infrastructure",
    featured: false,
  },
  {
    slug: "data-analytics",
    nav: "Data & Analytics",
    title: "Data & Analytics",
    kicker: "Numbers leadership will use",
    eyebrow: "Insight",
    summary:
      "Power BI and management reporting built on clean source data — the KPIs your ERP should already produce.",
    problem:
      "Dashboards fail when the underlying ledger, master data, and definitions are still broken.",
    href: "/solutions/data-analytics",
    featured: false,
  },
  {
    slug: "cybersecurity",
    nav: "Cybersecurity",
    title: "Cybersecurity",
    kicker: "Baseline, then depth",
    eyebrow: "Trust",
    summary:
      "Access, backups, endpoint, and a prioritized plan — with advanced testing when the risk requires it.",
    problem:
      "Most mid-market gaps are not exotic. They are MFA, backups, and identity that nobody reviewed.",
    href: "/solutions/cybersecurity",
    featured: false,
  },
] as const;

export const solutionPillars = [
  {
    title: "Digital Compliance",
    copy: "UAE e-invoicing, VAT/CT system alignment, ASP coordination, and audit-ready data.",
    href: "/solutions/uae-e-invoicing",
    items: ["PINT-AE mapping", "ERP-to-ASP integration", "Readiness assessment"],
  },
  {
    title: "Enterprise Integration",
    copy: "The layer that makes ERP, CRM, banking, and government platforms operate as one.",
    href: "/solutions/enterprise-integration",
    items: ["API & middleware", "Event-driven flows", "Error handling"],
  },
  {
    title: "Digital Transformation",
    copy: "ERP migration, cloud, and multi-system programmes with a single point of accountability.",
    href: "/solutions/erp-data-migration",
    items: ["Assess → go-live", "Data reconciliation", "Cutover control"],
  },
  {
    title: "AI & Automation",
    copy: "Workflow automation and AI agents scoped to one high-friction process at a time.",
    href: "/solutions/ai-intelligent-automation",
    items: ["AI strategy", "Agents & RAG", "ERP-connected workflows"],
  },
] as const;

export const industries = [
  {
    slug: "financial-services",
    title: "Financial Services",
    line: "Complex systems. Higher compliance. Connected operations.",
    problems: [
      "Regulatory reporting across fragmented ledgers",
      "Audit trail gaps between core and satellite systems",
      "Manual reconciliations that delay close",
    ],
    solutions: [
      "Data migration with full audit trail",
      "Regulatory reporting feeds",
      "Compliance-aware integration",
    ],
  },
  {
    slug: "retail",
    title: "Retail & E-commerce",
    line: "Orders, inventory, tax, and settlement in one flow.",
    problems: [
      "E-commerce disconnected from ERP and fulfilment",
      "VAT treatment inconsistent across channels",
      "Inventory numbers that never match finance",
    ],
    solutions: [
      "Commerce-to-ERP integration",
      "UAE e-invoicing readiness",
      "Operational dashboards",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    line: "Cost, inventory, and compliance on a single source of truth.",
    problems: [
      "Production cost accounting that finance cannot trust",
      "BOM and inventory valuation mismatches",
      "Plant systems isolated from the ledger",
    ],
    solutions: [
      "ERP migration and chart redesign",
      "Automation of costing flows",
      "Management KPIs",
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    line: "Shipments, customs, and billing without the spreadsheet layer.",
    problems: [
      "Tracking systems that never post to finance",
      "Customs and invoice data re-keyed by hand",
      "No live view of margin by lane or client",
    ],
    solutions: [
      "API integration across ops and ERP",
      "Invoice automation",
      "Operational reporting",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    line: "Billing, documents, and client work that actually connect.",
    problems: [
      "Time and billing living outside the ledger",
      "Client portals that do not update finance",
      "Documents scattered across tools",
    ],
    solutions: [
      "Custom portals and approval flows",
      "API integration",
      "Partner dashboards",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    line: "Operational systems that protect data and still close the books.",
    problems: [
      "Patient, billing, and finance systems in silos",
      "Access control that cannot be evidenced",
      "Reporting that is late and manual",
    ],
    solutions: [
      "Secure integration patterns",
      "Cybersecurity baseline",
      "Analytics on trusted data",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    line: "Project accounting, progress billing, and contracts under control.",
    problems: [
      "Progress billing disconnected from the GL",
      "Project cost that cannot be reconciled",
      "Contract variations tracked in email",
    ],
    solutions: [
      "ERP migration for project accounting",
      "Custom billing workflows",
      "Executive dashboards",
    ],
  },
  {
    slug: "other",
    title: "Other Industries",
    line: "Trading, distribution, and specialist operators with the same core problem.",
    problems: [
      "Multi-currency ledgers with no clean sub-ledger",
      "Supplier and customer masters that do not reconcile",
      "Digital compliance deadlines on legacy ERP",
    ],
    solutions: [
      "SAP-class migrations to cloud platforms",
      "Master data repair",
      "E-invoicing readiness",
    ],
  },
] as const;

export const technologies = [
  {
    slug: "erp-integration",
    title: "ERP Integration",
    copy: "SAP, Oracle, Dynamics, Odoo, QuickBooks, NetSuite — connected, not replaced.",
  },
  {
    slug: "api-middleware",
    title: "API & Middleware",
    copy: "Python, REST, webhooks, and event-driven connectors with documented failure handling.",
  },
  {
    slug: "cloud",
    title: "Cloud",
    copy: "Microsoft 365, cloud tenancy, and infrastructure designed for mid-market control.",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    copy: "Power BI and management packs built on reconciled source systems.",
  },
  {
    slug: "ai",
    title: "AI",
    copy: "OpenAI, Anthropic, Copilot Studio, and RAG against your own records.",
  },
  {
    slug: "automation",
    title: "Automation",
    copy: "Power Automate, Make, Zapier, and custom Python agents.",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    copy: "Identity, backup, endpoint, and a path to ISO 27001 / SOC 2 when needed.",
  },
] as const;

export const platforms = [
  "SAP",
  "Oracle",
  "Microsoft Dynamics",
  "Odoo",
  "QuickBooks Online",
  "NetSuite",
  "Xero",
  "Zoho Books",
  "Peppol",
  "PINT-AE",
];

export const mandate = [
  {
    date: "1 Jul 2026",
    title: "Pilot & voluntary",
    copy: "Nominated and voluntary participants begin exchanging e-invoices.",
  },
  {
    date: "30 Oct 2026",
    title: "Phase 1 ASP appointment",
    copy: "Businesses with revenue ≥ AED 50 million appoint an Accredited Service Provider.",
  },
  {
    date: "1 Jan 2027",
    title: "Phase 1 go-live",
    copy: "Large businesses must issue and receive structured e-invoices via Peppol / PINT-AE.",
  },
  {
    date: "31 Mar 2027",
    title: "Phase 2 & government ASP",
    copy: "Smaller businesses and government entities appoint their ASP.",
  },
  {
    date: "1 Jul 2027",
    title: "Phase 2 go-live",
    copy: "Businesses below AED 50 million go live.",
  },
  {
    date: "1 Oct 2027",
    title: "Government go-live",
    copy: "Government entities complete implementation.",
  },
];

export const faqs = [
  {
    q: "What is UAE e-invoicing?",
    a: "UAE e-invoicing is the Ministry of Finance digital invoicing framework. In-scope businesses exchange structured electronic invoices (PINT-AE) through a Peppol-based network via an Accredited Service Provider, instead of PDFs and paper.",
  },
  {
    q: "Does my business need e-invoicing?",
    a: "If you are a taxable person in the UAE, you will fall into a mandatory phase based on revenue and entity type. Confirm current scope and dates on the official Ministry of Finance portal — Datavaura will map what that means for your ERP.",
  },
  {
    q: "When do I need to comply?",
    a: "As currently published: large businesses (AED 50M+) appoint an ASP by 30 October 2026 and go live 1 January 2027. Smaller businesses go live 1 July 2027. Government entities go live 1 October 2027. Deadlines have changed before — always verify at mof.gov.ae.",
  },
  {
    q: "Do I need an ASP?",
    a: "Yes. Transmission of e-invoices must go through a Ministry of Finance Accredited Service Provider. Datavaura is not an ASP. We are the implementation partner that gets your ERP, data, and processes ready and connected to the ASP you appoint.",
  },
  {
    q: "What does Datavaura do?",
    a: "We assess readiness, map PINT-AE fields, clean and structure ERP data, build the ERP-to-ASP integration, run UAT, and stand beside your finance team at go-live. We also migrate and integrate ERP estates so compliance is not bolted on afterwards.",
  },
  {
    q: "Can Datavaura integrate SAP?",
    a: "Yes. We have delivered SAP-class ledger work — including a full SAP to QuickBooks Online migration for a UAE trading company — and we design SAP-to-ASP and SAP-to-adjacent-system integrations.",
  },
  {
    q: "Can Datavaura integrate Oracle?",
    a: "Yes. Oracle and NetSuite landscapes are in scope for integration, data mapping, and e-invoicing readiness.",
  },
  {
    q: "Can Datavaura integrate Odoo?",
    a: "Yes. Odoo is a frequent mid-market ERP in the UAE. We map invoice, partner, and tax data from Odoo into ASP and Peppol flows.",
  },
  {
    q: "Do I need to replace my ERP?",
    a: "Usually no. The point of a well-designed integration layer is that SAP, Oracle, Dynamics, or Odoo can remain the system of record. We recommend replacement only when the current platform cannot support API-ready, audit-ready invoicing at a sensible cost.",
  },
  {
    q: "What is PINT-AE?",
    a: "PINT-AE is the UAE-specific Peppol International Invoice specification. It is the structured XML format invoices must conform to under the national framework.",
  },
  {
    q: "What is Peppol?",
    a: "Peppol is the international e-delivery network the UAE is using to exchange e-invoices between access points. Your ASP acts as the Peppol access point. Your ERP talks to the ASP; the ASP talks to the network and the FTA.",
  },
  {
    q: "How long does implementation take?",
    a: "A focused mid-market readiness and integration programme typically runs in weeks to a few months, depending on ERP complexity, master-data quality, and ASP choice. Enterprise multi-entity landscapes take longer — which is why waiting until the appointment deadline is a risk.",
  },
  {
    q: "Is Datavaura an Accredited Service Provider?",
    a: "No. Datavaura Technologies Inc. is not a UAE Ministry of Finance Accredited Service Provider. We act as the IT consulting and integration partner. All e-invoice transmission must go through the client's MoF-approved ASP.",
  },
];

export const insights = [
  {
    slug: "uae-e-invoicing-guide",
    title: "UAE E-Invoicing Implementation Guide",
    kicker: "Guide",
    excerpt:
      "Mandate, deadlines, PINT-AE, Peppol, ASP choice, and what your ERP must be ready to do.",
    date: "September 2026",
  },
  {
    slug: "what-is-uae-e-invoicing",
    title: "What is UAE e-invoicing?",
    kicker: "Explainer",
    excerpt:
      "A plain-language briefing for CFOs and IT leaders who need the operating model, not the marketing.",
    date: "September 2026",
  },
  {
    slug: "pint-ae-explained",
    title: "PINT-AE explained",
    kicker: "Standard",
    excerpt:
      "What the UAE invoice schema actually requires from your ERP fields, tax codes, and master data.",
    date: "September 2026",
  },
  {
    slug: "peppol-explained",
    title: "Peppol explained",
    kicker: "Network",
    excerpt:
      "How invoices move from your ERP through an ASP onto the Peppol network — and where things break.",
    date: "September 2026",
  },
  {
    slug: "asp-vs-implementation-partner",
    title: "ASP vs implementation partner",
    kicker: "Roles",
    excerpt:
      "Why appointing an ASP is not the same as being ready — and who should own which part of the work.",
    date: "September 2026",
  },
  {
    slug: "sap-e-invoicing-uae",
    title: "SAP e-invoicing in the UAE",
    kicker: "ERP",
    excerpt:
      "What SAP landscapes typically miss before PINT-AE: partners, tax, document types, and the integration path.",
    date: "September 2026",
  },
];

export const caseStudy = {
  slug: "sap-to-quickbooks-uae",
  client: "UAE trading company",
  industry: "International trade & distribution",
  location: "Dubai, UAE",
  title: "SAP general ledger to QuickBooks Online — in time for digital compliance",
  challenge:
    "A SAP-based general ledger with a complex account structure, multiple currencies, and no clean sub-ledger — against an approaching digital compliance deadline.",
  broken:
    "Missing customer and supplier sub-ledger codes. Multi-currency FX revaluation across four currencies. A chart of accounts that would not fit a cloud invoicing platform. Building compliance middleware on the existing SAP stack was commercially prohibitive.",
  solution:
    "Full chart of accounts restructuring, master data mapping, opening balance migration, Python API scripting, and a reconciliation the finance team signed.",
  technology: ["SAP extract", "Python API", "QuickBooks Online", "Multi-currency FX", "PINT-ready structure"],
  result:
    "Scope 1 accepted after parallel testing. The business now runs on QuickBooks Online — cloud-native, audit-ready, and structured for ASP integration.",
};

export const leaders = [
  {
    name: "Younes Abu Ghalyoun",
    role: "President & CEO",
    copy: "30+ years of UAE and international business advisory, financial management, and ERP oversight. UAE FTA Registered Tax Agent. Every compliance-aware design is reviewed against actual VAT and Corporate Tax obligations — not only the technical spec.",
  },
  {
    name: "Hamdan",
    role: "Chief Technology Officer",
    copy: "Leads technical architecture, integration, and delivery with PhD-level expertise. You speak with the person who designs the system — not a layered account structure.",
  },
];

export const approachSteps = [
  { n: "01", title: "Diagnose", copy: "Systems, data quality, tax obligations, and the real operating constraints." },
  { n: "02", title: "Scope in writing", copy: "Deliverables, exclusions, assumptions, and acceptance criteria before work starts." },
  { n: "03", title: "Build the layer", copy: "Migration, integration, or automation — designed for audit trail and VAT from line one." },
  { n: "04", title: "Prove it", copy: "UAT, reconciliation, and a handover your finance team can actually run." },
];

export const migrationSteps = [
  { n: "01", title: "Assess", copy: "Source GL, A/R, A/P, inventory, assets, and the gaps nobody has catalogued." },
  { n: "02", title: "Map", copy: "Chart of accounts, master data, and field-level source-to-target design." },
  { n: "03", title: "Migrate", copy: "API or file-based movement. Dirty data is cleaned before it is moved." },
  { n: "04", title: "Reconcile", copy: "Opening balances, FX, and sub-ledgers tied out — in writing." },
  { n: "05", title: "Validate", copy: "UAT with the finance team against live-like scenarios." },
  { n: "06", title: "Go live", copy: "Cutover support and a reconciliation pack that closes every open item." },
];

export const einvoiceJourney = [
  { title: "Mandate", copy: "What applies to your entities, volumes, and dates." },
  { title: "Deadline", copy: "ASP appointment vs go-live — they are not the same clock." },
  { title: "Integration", copy: "ERP fields, tax codes, and the connector to your ASP." },
  { title: "Compliance", copy: "PINT-AE validity, Peppol exchange, FTA reporting path." },
  { title: "Implementation", copy: "UAT, exception handling, and finance-team cutover." },
];

export const contactNeeds = [
  "UAE E-Invoicing",
  "ERP Integration",
  "Data Migration",
  "Automation",
  "AI",
  "Cloud",
  "Other",
] as const;

export const nav = {
  solutions: solutions.map((s) => ({ label: s.nav, href: s.href })),
  industries: industries.map((i) => ({
    label: i.title,
    href: `/industries/${i.slug}`,
  })),
  resources: [
    { label: "Insights", href: "/insights" },
    { label: "UAE E-Invoicing Guide", href: "/insights/uae-e-invoicing-guide" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "FAQs", href: "/faq" },
  ],
  about: [
    { label: "About Datavaura", href: "/about" },
    { label: "Our Approach", href: "/about/approach" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Partners", href: "/about/partners" },
    { label: "Careers", href: "/about/careers" },
  ],
};

export const pdfBrochure = {
  docId: "UAE-EINV-2026",
  entity: "DATAVAURA · TECHNOLOGIES FZ-LLC",
  tagline: "STRUCTURED ELECTRONIC INVOICE",
  hero: {
    title: "From readiness to a live invoice.",
    subhead:
      "A practical route for UAE organisations: assess the books as they run today, close the gaps, then coordinate onboarding, testing and first-level support.",
    ribbon: [
      { label: "ISSUE", value: "SEP 2026" },
      { label: "PHASE 1 ASP", value: "30 OCT 2026" },
      { label: "GO-LIVE", value: "01 JAN 2027" },
      { label: "THRESHOLD", value: "AED 50M+" },
    ],
    pillars: [
      "Readiness assessment",
      "Integration coordination",
      "Onboarding",
      "Client support",
    ],
    clarification:
      "Regulated platform services are delivered through an accredited UAE partner. Datavaura is not an independently accredited Service Provider.",
    values: ["Clarity", "Innovation", "Value"],
  },
  mandate: {
    line: "LINE · THE MANDATE 02 / 08",
    title: "An eInvoice is not a PDF.",
    description:
      "The UAE Ministry of Finance describes an eInvoice as structured invoice data issued and exchanged electronically between supplier and buyer, and reported electronically to the Federal Tax Authority. Word files, scans, images and email attachments are not eInvoices.",
    fields: [
      {
        field: "Issuer / buyer",
        meaning: "Legal entities, branches, registrations and decision-makers.",
      },
      {
        field: "Document type",
        meaning: "Invoices, credit notes, debit notes and adjustments.",
      },
      {
        field: "Line data",
        meaning:
          "Quantities, prices, discounts, tax codes — complete and consistent.",
      },
      {
        field: "References",
        meaning:
          "Document numbers, dates, original invoice links on credit notes.",
      },
      {
        field: "Channel",
        meaning:
          "Structured exchange to the buyer and electronic reporting to the FTA.",
      },
    ],
    scopeCallout: {
      kicker: "PHASE 1 · CONFIRM YOUR OWN SCOPE",
      text: "Businesses with annual revenue of AED 50 million or more must appoint an Accredited Service Provider by 30 October 2026 and begin e-invoicing from 1 January 2027. Each organisation must confirm dates and legal scope against current Ministry of Finance requirements.",
    },
    workflowSteps: [
      { n: "01", title: "Readiness assessment", desc: "Finance, processes, invoice data, systems." },
      { n: "02", title: "Gap register", desc: "Evidence, owner, priority, next action." },
      { n: "03", title: "Coordination", desc: "Finance, IT, ERP and platform in one plan." },
      { n: "04", title: "Live route", desc: "Onboarding, testing, UAT, go-live support." },
    ],
  },
  readinessGaps: {
    line: "LINE · WHY READINESS 03 / 08",
    title: "A receipt can look finished and still fail as data.",
    subhead:
      "E-invoicing is not a new template or a platform login. It depends on source data, consistent processes and systems that can exchange structured information.",
    items: [
      {
        n: "01",
        title: "Incomplete fields",
        desc: "Customer, supplier, tax or line data that survives a PDF often breaks once it must travel as structured data.",
      },
      {
        n: "02",
        title: "Split processes",
        desc: "Different treatment across entities, branches, systems or databases.",
      },
      {
        n: "03",
        title: "Credit notes",
        desc: "Cancellations, adjustments and corrections left undefined until testing.",
      },
      {
        n: "04",
        title: "Workarounds",
        desc: "Manual approvals and spreadsheet patches do not survive a controlled flow.",
      },
      {
        n: "05",
        title: "Missing plumbing",
        desc: "No export path, connectivity option, ERP support or technical owner.",
      },
      {
        n: "06",
        title: "Split ownership",
        desc: "Finance, IT, ERP and the platform must move on one action plan.",
      },
    ],
  },
  services: {
    line: "LINE · SERVICES 04 / 08",
    title: "Four lines of work. One controlled file.",
    lines: [
      {
        n: "01",
        title: "Readiness assessment",
        desc: "A working review, not a questionnaire. Legal entities, document types, finance processes, master data, systems, volumes and technical contacts. Deliverable: gap register and action plan.",
      },
      {
        n: "02",
        title: "Finance and process readiness",
        desc: "How documents are created, reviewed, issued, adjusted, recorded and reconciled. Confirm the information and controls exist before technical work starts.",
      },
      {
        n: "03",
        title: "ERP and integration coordination",
        desc: "Source system, extraction, agreed API / SFTP / file-upload, mapping, issue management. Responsibilities split across client, ERP provider, specialists and platform. Custom work needs a separate approved scope.",
      },
      {
        n: "04",
        title: "Data mapping and document prep",
        desc: "Supplier and buyer identity, invoice lines, taxes, credit-note references, numbering, branch rules, error handling and re-submission.",
      },
    ],
  },
  lifecycle: {
    line: "LINE · LIFECYCLE 05 / 08",
    title: "Treat go-live like an invoice status — not an event.",
    subhead:
      "After the agreed actions are complete, Datavaura coordinates onboarding, implementation, testing and client communications. Testing confirms agreed scenarios in the client environment and records outstanding items before release.",
    statuses: [
      { status: "DRAFT", title: "Assess & plan", desc: "Entities, systems, data, owners. Gap register issued." },
      { status: "COLLECT", title: "Onboard", desc: "Document collection and commercial coordination." },
      { status: "MAP", title: "Integrate", desc: "Connect source systems and prepare structured data." },
      { status: "VALIDATE", title: "Test", desc: "Invoice and credit-note scenarios, errors, UAT evidence." },
      { status: "ISSUED", title: "Go-live", desc: "Release readiness, first-level support, routine comms." },
    ],
    testingBox: {
      title: "TESTING BEFORE RELEASE",
      text: "Test invoices and relevant credit-note scenarios. Data validation, error handling and status checks. User acceptance evidence. Implementation plan with owners and dependencies. Then go-live coordination.",
    },
  },
  operatingModel: {
    line: "LINE · OPERATING MODEL 06 / 08",
    title: "One relationship. The regulated layer sits with the partner.",
    subhead:
      "Datavaura manages the client relationship, readiness, commercial coordination, onboarding, implementation coordination and first-level support. The underlying regulated UAE e-invoicing platform and accredited service-provider functions are delivered through an accredited UAE platform partner, within the agreed scope.",
    datavaura: {
      label: "ISSUED BY",
      name: "Datavaura",
      items: [
        "Client relationship and first-level support",
        "Readiness assessment and action management",
        "Onboarding coordination",
        "Coordination with ERP and specialists",
      ],
    },
    partner: {
      label: "CLEARED THROUGH",
      name: "Accredited partner",
      items: [
        "Regulated platform, hosting and operations",
        "Platform enablement and standard materials",
        "Agreed specialist platform support",
        "Platform-side incident investigation",
      ],
    },
    clarification:
      "Datavaura does not represent itself as an independently accredited UAE e-invoicing Service Provider. The client has one Datavaura contact; regulated platform services sit with the accredited provider.",
    openPeppol:
      "Datavaura Technologies FZ-LLC is an OpenPeppol member. That membership supports structured electronic-document exchange more broadly. It is distinct from UAE Service Provider accreditation. UAE e-invoicing on this website is delivered through the accredited platform-partner model.",
  },
  ledgerHolders: {
    line: "LINE · LEDGER HOLDERS 07 / 08",
    title: "Built for books that do not live in one system.",
    items: [
      "Real-estate and property-management organisations",
      "Trading, distribution and logistics businesses",
      "Professional-services and project-based firms",
      "Groups with multiple entities, branches or databases",
      "Finance, IT and ERP teams that need one action plan",
    ],
    signatory: {
      name: "Younes Abu Ghalyoun MBA",
      title: "Founder and Managing Director · UAE FTA Registered Tax Agent",
      bio: "More than 33 years in accounting, finance and taxation. Work focused on financial reporting, tax compliance, operational control and regulatory change. Datavaura was established to put that finance and compliance view into e-invoicing readiness, implementation coordination and technology-enabled client service.",
    },
    startingPosition:
      "We begin with the business as it operates today — entities, invoices, credit notes, customer and supplier records, systems, data and owners. Then the gaps, the actions, and the work to move forward.",
  },
  nextAction: {
    line: "LINE · NEXT ACTION 08 / 08",
    title: "Start with a readiness discussion.",
    subhead:
      "Confirm the landscape. Review the questionnaire and supporting records. Agree scope, commercial terms and responsibilities. Then begin the review and issue a clear action plan.",
    steps: [
      { n: "01", title: "Landscape", desc: "Business, entities, systems." },
      { n: "02", title: "Records", desc: "Questionnaire and evidence." },
      { n: "03", title: "Scope", desc: "Terms and owners." },
      { n: "04", title: "Plan", desc: "Gap register issued." },
    ],
    footerNotice:
      "DATAVAURA TECHNOLOGIES FZ-LLC · UAE e-invoicing readiness, implementation coordination, systems integration and client support. OpenPeppol member · FTA Registered Tax Agent leadership · Accredited platform-partner model",
  },
};

