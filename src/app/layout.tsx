import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Montserrat } from "next/font/google";
import { Footer, Header } from "@/components/layout/Chrome";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://datavaura.com"),
  title: {
    default:
      "Datavaura | Enterprise Integration, ERP Migration & UAE E-Invoicing",
    template: "%s | Datavaura",
  },
  description:
    "Datavaura is the implementation partner that connects ERP, data, and UAE digital compliance. Founder-led delivery across Canada and the UAE/GCC.",
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Datavaura",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
