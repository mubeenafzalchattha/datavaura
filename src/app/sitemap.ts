import type { MetadataRoute } from "next";
import { industries, insights, solutions } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://datavaura.com";
  const now = new Date();
  const staticRoutes = [
    "",
    "/solutions",
    "/industries",
    "/technology",
    "/case-studies",
    "/case-studies/sap-to-quickbooks-uae",
    "/about",
    "/about/approach",
    "/about/leadership",
    "/about/partners",
    "/about/careers",
    "/insights",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];
  const dynamic = [
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...insights.map((i) => `/insights/${i.slug}`),
  ];
  return [...staticRoutes, ...dynamic].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));
}
export const dynamic = 'force-static'

export function GET() {
  return new Response('User-agent: *\nAllow: /', {
    headers: { 'Content-Type': 'text/plain' },
  })
}