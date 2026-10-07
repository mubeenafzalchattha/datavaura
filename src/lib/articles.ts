export const articles: Record<
  string,
  { title: string; kicker: string; body: string[] }
> = {
  "uae-e-invoicing-guide": {
    title: "UAE E-Invoicing Implementation Guide",
    kicker: "Guide",
    body: [
      "UAE e-invoicing is a national framework run by the Ministry of Finance, with the Federal Tax Authority on enforcement. Invoices become structured data, exchanged through Accredited Service Providers on a Peppol network, in the PINT-AE format.",
      "Treat the official MoF portal as the source of truth. Dates and the ASP list have moved before. Datavaura's job is to translate the current rules into an ERP and integration programme your finance team can execute.",
      "A practical sequence: confirm which entities are in which phase; appoint an ASP through the official channel; map every invoice field in your ERP to PINT-AE; repair master data; build the ERP-to-ASP connector; test exceptions; go live with monitoring.",
      "Datavaura is not an ASP. We are the implementation partner. Transmission always stays with the ASP you appoint.",
    ],
  },
  "what-is-uae-e-invoicing": {
    title: "What is UAE e-invoicing?",
    kicker: "Explainer",
    body: [
      "It is not 'sending a PDF by email.' It is structured electronic invoicing: the invoice is born in your ERP, validated against a national schema (PINT-AE), exchanged via Peppol through an Accredited Service Provider, and reportable to the FTA.",
      "That is why e-invoicing reaches far beyond the invoice. Legal entities, tax codes, customer and supplier masters, document types, credit notes, and the integration path all have to be correct — or validation fails.",
      "If your ERP cannot emit clean, complete data, no ASP will save the go-live. That is the work Datavaura does.",
    ],
  },
  "pint-ae-explained": {
    title: "PINT-AE explained",
    kicker: "Standard",
    body: [
      "PINT-AE is the UAE-specific Peppol International Invoice specification. It defines the structured XML (and the mandatory fields) that an e-invoice must carry.",
      "Most ERP programmes stumble here: partner identifiers, VAT treatment, unit codes, document references, and credit-note linkage are incomplete in the source system. Mapping is not a spreadsheet exercise. It is a data-quality programme.",
      "We map source fields to PINT-AE, show finance which gaps will fail validation, and only then wire the ASP.",
    ],
  },
  "peppol-explained": {
    title: "Peppol explained",
    kicker: "Network",
    body: [
      "Peppol is the e-delivery network. In the UAE model, your ASP is the access point. Your ERP talks to the ASP; the ASP talks to the network and the reporting path.",
      "Failures usually sit at the edges: retries, acknowledgements, rejected documents, and the finance process when a document does not clear. Architecture without exception handling is a demo.",
      "Datavaura designs the ERP-to-ASP conversation, including what your team does when a document is refused.",
    ],
  },
  "asp-vs-implementation-partner": {
    title: "ASP vs implementation partner",
    kicker: "Roles",
    body: [
      "An Accredited Service Provider is licensed to transmit. An implementation partner makes your ERP, data, and processes capable of producing documents the ASP can legally send.",
      "Appointing an ASP is a compliance decision. Being ready is an engineering and finance-operations programme. Confusing the two is how companies hit the appointment deadline and still miss go-live.",
      "Datavaura does not replace the ASP. We make the appointment mean something in your systems.",
    ],
  },
  "sap-e-invoicing-uae": {
    title: "SAP e-invoicing in the UAE",
    kicker: "ERP",
    body: [
      "SAP landscapes can remain the system of record. The question is whether partner data, tax, document types, and the integration path can support PINT-AE without a commercially insane middleware rebuild.",
      "We have taken a SAP general ledger through a full cloud migration when that was the rational path — and we will argue just as hard to keep SAP when it is the rational path. The criterion is audit-ready, API-ready invoicing at a cost the business can defend.",
      "Typical SAP work: master-data repair, invoice mapping, ASP connector, UAT on real document types, and a finance runbook.",
    ],
  },
};
