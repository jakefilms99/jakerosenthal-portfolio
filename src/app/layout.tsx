import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import { Interactions } from "@/components/Interactions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { asset } from "@/lib/assets";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Jake Rosenthal",
    "Cassidy",
    "product marketing",
    "early-stage",
    "AI",
    "Interviews by AI",
    "startup operator",
  ],
  icons: {
    icon: asset.favicon,
    apple: asset.webclip,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: asset.og,
        width: 1200,
        height: 630,
        alt: "Jake Rosenthal — Early-stage startup operator",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [asset.og],
  },
  alternates: {
    canonical: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#d5dbe4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Interactions />
      </body>
    </html>
  );
}
