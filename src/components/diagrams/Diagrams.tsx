export function IntegrationDiagram() {
  const nodes = [
    ["SAP", "Oracle", "Dynamics", "Odoo"],
    ["Datavaura Integration Layer"],
    ["CRM", "Banking", "ASP / Peppol", "Analytics"],
  ];

  return (
    <div className="rounded-3xl border border-gold/25 bg-navy/60 p-6 sm:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-gold">
        Architecture
      </p>
      <p className="mt-2 font-serif text-2xl text-sand">
        ERP → Datavaura → the rest of the operating stack
      </p>
      <div className="mt-8 grid gap-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {nodes[0].map((n) => (
            <div
              key={n}
              className="rounded-2xl border border-white/10 bg-ink/50 px-3 py-4 text-center text-sm text-sand"
            >
              {n}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <svg width="12" height="36" viewBox="0 0 12 36" aria-hidden>
            <path d="M6 0v36" className="flow-line" stroke="#C9A44A" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="rounded-2xl border border-aurora/40 bg-aurora/10 px-4 py-6 text-center">
          <p className="font-serif text-xl text-aurora">{nodes[1][0]}</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-sand/60">
            API · mapping · validation · monitoring
          </p>
        </div>
        <div className="flex justify-center">
          <svg width="12" height="36" viewBox="0 0 12 36" aria-hidden>
            <path d="M6 0v36" className="flow-line" stroke="#3EE6C8" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {nodes[2].map((n) => (
            <div
              key={n}
              className="rounded-2xl border border-gold/20 bg-ink/40 px-3 py-4 text-center text-sm text-sand"
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EInvoiceFlow() {
  const steps = [
    { t: "ERP", d: "Invoice born in SAP / Oracle / Dynamics / Odoo" },
    { t: "Datavaura", d: "Map, validate, enrich to PINT-AE" },
    { t: "ASP", d: "Your MoF-accredited access point" },
    { t: "Peppol", d: "Network exchange + FTA path" },
    { t: "Counterparty", d: "Buyer receives a valid e-invoice" },
  ];

  return (
    <ol className="grid gap-3 md:grid-cols-5">
      {steps.map((s, i) => (
        <li
          key={s.t}
          className="relative rounded-2xl border border-gold/20 bg-paper p-5"
        >
          <span className="font-mono text-[11px] text-gold">0{i + 1}</span>
          <p className="mt-2 font-serif text-xl">{s.t}</p>
          <p className="mt-2 text-sm text-slate">{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

export function ProcessRail({
  steps,
}: {
  steps: readonly { n: string; title: string; copy: string }[];
}) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s) => (
        <li
          key={s.n}
          className="rounded-3xl border border-mist bg-paper p-6 shadow-[0_1px_0_rgba(201,164,74,0.2)]"
        >
          <p className="font-mono text-gold">{s.n}</p>
          <h3 className="mt-3 font-serif text-2xl">{s.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate">{s.copy}</p>
        </li>
      ))}
    </ol>
  );
}
