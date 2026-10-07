"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function FAQList({
  items,
  light = false,
}: {
  items: readonly { q: string; a: string }[] | { q: string; a: string }[];
  light?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#2198a4]/20 border-y border-[#2198a4]/20">
      {items.map((item, i) => {
        const active = open === i;
        return (
          <button
            key={item.q}
            type="button"
            onClick={() => setOpen(active ? null : i)}
            className="w-full py-5 text-left transition-colors"
          >
            <span className="flex items-start justify-between gap-6">
              <span
                className={cn(
                  "text-lg font-bold leading-snug",
                  light ? "text-white" : "text-[#021547]",
                )}
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                {item.q}
              </span>
              <span className="font-mono text-base font-bold text-[#2198a4]">
                {active ? "–" : "+"}
              </span>
            </span>
            {active ? (
              <span
                className={cn(
                  "mt-3 block max-w-3xl text-sm sm:text-base leading-relaxed",
                  light ? "text-[#e8f0f2]/80" : "text-[#4e6370]",
                )}
              >
                {item.a}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
