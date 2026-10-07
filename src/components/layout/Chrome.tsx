"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { nav } from "@/lib/site";

const menus = [
  { label: "Solutions", href: "/solutions", items: nav.solutions },
  { label: "Industries", href: "/industries", items: nav.industries },
  { label: "Technology", href: "/technology", items: [] },
  { label: "Resources", href: "/insights", items: nav.resources },
  { label: "About", href: "/about", items: nav.about },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-[#2198a4]/20 bg-[#021547] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-[11px] sm:px-8">
          <p className="shrink-0 font-mono tracking-[0.18em] text-[#2198a4]">
            UAE e-invoicing
          </p>
          <p className="hidden min-w-0 truncate text-white/70 md:block">
            ASP by 30 Oct 2026 · Go-live 1 Jan 2027 for AED 50M+ · Official source: mof.gov.ae
          </p>
          <Link href="/solutions/uae-e-invoicing" className="hidden shrink-0 text-[#35bfcd] sm:block">
            Readiness →
          </Link>
        </div>
      </div>
      <div className="border-b border-[#021547]/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" aria-label="Datavaura home">
            <Logo compact />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {menus.map((menu) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => setActive(menu.label)}
                onMouseLeave={() => setActive(null)}
              >
                <Link
                  href={menu.href}
                  className="rounded-full px-3 py-2 text-sm text-[#021547]/80 hover:text-[#021547] font-medium"
                >
                  {menu.label}
                </Link>
                {menu.items.length > 0 && active === menu.label ? (
                  <div className="absolute left-0 top-full w-80 rounded-2xl border border-[#d0e2e6] bg-white p-3 shadow-xl">
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-3 py-2 text-sm text-[#021547]/80 hover:bg-[#e8f0f2] hover:text-[#021547]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link href="/contact" className="rounded-full px-3 py-2 text-sm text-[#021547]/80 font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button href="/contact" className="hidden sm:inline-flex">
              Book a Consultation
            </Button>
            <button
              type="button"
              className="rounded-full border border-ink/10 px-3 py-2 text-sm lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {open ? (
          <div className="max-h-[80vh] overflow-y-auto border-t border-[#d0e2e6] bg-white px-5 py-6 lg:hidden">
            {menus.map((menu) => (
              <div key={menu.label} className="mb-5">
                <Link
                  href={menu.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-xl"
                >
                  {menu.label}
                </Link>
                <div className="mt-2 grid gap-1">
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-sm text-slate"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Button href="/contact" className="w-full">
              Book a Consultation
            </Button>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#021547] text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo inverted compact />
          <p className="mt-5 text-sm leading-relaxed text-white/65">
            The operating layer between your ERP and the digital economy.
            Founder-led implementation for Canada and the UAE/GCC.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#2198a4]">
            Solutions
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {nav.solutions.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#2198a4]">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {[...nav.about, { label: "Case Studies", href: "/case-studies" }, { label: "Insights", href: "/insights" }, { label: "FAQ", href: "/faq" }].map(
              (item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#2198a4]">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href="mailto:info@datavaura.com">info@datavaura.com</a>
            </li>
            <li>
              <a href="https://wa.me/12269195721">WhatsApp +1 226 919 5721</a>
            </li>
            <li>
              <a href="https://linkedin.com/company/datavaura">LinkedIn</a>
            </li>
            <li className="pt-3 text-xs text-white/50">
              Datavaura Technologies FZ-LLC is an OpenPeppol member. Regulated platform services are delivered through an accredited UAE partner. Datavaura is not an independently accredited Service Provider. Verify mandates at mof.gov.ae.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Datavaura Technologies FZ-LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Book a Consultation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
