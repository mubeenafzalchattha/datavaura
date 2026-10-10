"use client";

import { useState } from "react";
import { company } from "@/lib/site";

export function WhatsAppFloat({
  message = "Hi, I saw your website and need help with e-invoicing.",
}: {
  message?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const whatsappUrl = `https://wa.me/971558932044?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="whatsapp-float-root"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip positioned to the LEFT of the corner button */}
      <div
        className={`whatsapp-tooltip${hovered ? " whatsapp-tooltip--visible" : ""}`}
        role="tooltip"
        aria-hidden={!hovered}
      >
        <span className="whatsapp-tooltip__title">Chat on WhatsApp</span>
        <span className="whatsapp-tooltip__meta">Direct with advisory team</span>
      </div>

      {/* Main floating action button pinned in the corner */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Datavaura on WhatsApp (+971 55 893 2044)"
        className="whatsapp-btn"
      >
        {/* Ambient pulse ring */}
        <span className="whatsapp-pulse" aria-hidden="true" />

        {/* Official WhatsApp Brand Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ffffff"
          className="whatsapp-icon"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      <style>{`
        /* Anchored strictly to the bottom-right viewport corner */
        .whatsapp-float-root {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Button ── */
        .whatsapp-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25D366;
          box-shadow: 0 4px 18px rgba(37, 211, 102, 0.42), 0 2px 6px rgba(0, 0, 0, 0.12);
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
          text-decoration: none;
          color: #ffffff;
        }

        .whatsapp-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 26px rgba(37, 211, 102, 0.58), 0 3px 8px rgba(0, 0, 0, 0.16);
        }

        .whatsapp-btn:active {
          transform: scale(0.96);
        }

        /* ── SVG Icon ── */
        .whatsapp-icon {
          width: 32px;
          height: 32px;
          position: relative;
          z-index: 2;
          display: block;
        }

        /* ── Ambient pulse ring ── */
        .whatsapp-pulse {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.45);
          animation: wa-ambient-pulse 2.6s cubic-bezier(0.24, 0, 0.38, 1) infinite;
          z-index: 1;
          pointer-events: none;
        }

        @keyframes wa-ambient-pulse {
          0% {
            transform: scale(1);
            opacity: 0.75;
          }
          70% {
            transform: scale(1.6);
            opacity: 0;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        /* ── Tooltip (positioned to the LEFT, does not affect corner layout) ── */
        .whatsapp-tooltip {
          position: absolute;
          right: calc(100% + 14px);
          top: 50%;
          transform: translateY(-50%) translateX(6px);
          display: flex;
          flex-direction: column;
          gap: 2px;
          background: #021547;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          padding: 8px 14px;
          box-shadow: 0 8px 24px rgba(2, 21, 71, 0.28);
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
          z-index: 9998;
        }

        /* Subtle triangular pointer pointing right towards the button */
        .whatsapp-tooltip::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -6px;
          transform: translateY(-50%);
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 6px solid #021547;
        }

        .whatsapp-tooltip--visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(-50%) translateX(0);
        }

        .whatsapp-tooltip__title {
          font-size: 13px;
          font-weight: 600;
          line-height: 1.2;
          font-family: var(--font-montserrat, Montserrat, sans-serif);
        }

        .whatsapp-tooltip__meta {
          font-size: 11px;
          line-height: 1.2;
          color: rgba(255, 255, 255, 0.65);
          font-family: monospace;
        }

        /* ── Mobile responsiveness ── */
        @media (max-width: 640px) {
          .whatsapp-float-root {
            bottom: 16px;
            right: 16px;
          }

          .whatsapp-btn {
            width: 52px;
            height: 52px;
          }

          .whatsapp-icon {
            width: 28px;
            height: 28px;
          }

          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
