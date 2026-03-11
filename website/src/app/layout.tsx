import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AK Automation | AI-Prozessautomatisierung für KMUs",
  description:
    "Ich automatisiere Ihren zeitfressendsten Geschäftsprozess in 2 Wochen. Festpreis. Messbares Ergebnis.",
  metadataBase: new URL("https://kahirov.de"),
  openGraph: {
    title: "AK Automation | AI-Prozessautomatisierung für KMUs",
    description:
      "Ich automatisiere Ihren zeitfressendsten Geschäftsprozess in 2 Wochen. Festpreis. Messbares Ergebnis.",
    url: "https://kahirov.de",
    siteName: "AK Automation",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Automation | AI-Prozessautomatisierung für KMUs",
    description:
      "Ich automatisiere Ihren zeitfressendsten Geschäftsprozess in 2 Wochen. Festpreis. Messbares Ergebnis.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://kahirov.de",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AK Automation",
  url: "https://kahirov.de",
  logo: "https://kahirov.de/logo-512.png",
  description:
    "AI-Prozessautomatisierung für deutsche KMUs. Ein Geschäftsprozess automatisiert in 10 Arbeitstagen zum Festpreis.",
  founder: {
    "@type": "Person",
    name: "Adam Kahirov",
    url: "https://linkedin.com/in/adam-kahirov",
    jobTitle: "AI-Automatisierungsberater",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gymnasiumstr. 52",
    postalCode: "70174",
    addressLocality: "Stuttgart",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "Country",
    name: "Germany",
  },
  email: "adam@kahirov.de",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "adam@kahirov.de",
    availableLanguage: ["German", "English"],
  },
  sameAs: [
    "https://linkedin.com/in/adam-kahirov",
    "https://github.com/ataladams",
  ],
  knowsAbout: [
    "AI-Automatisierung",
    "Prozessoptimierung",
    "n8n",
    "KI für KMUs",
    "Workflow-Automatisierung",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI-Automatisierungsservices",
    itemListElement: [
      {
        "@type": "Offer",
        name: "AI-Prozess-Sprint",
        description:
          "1 Geschäftsprozess automatisiert in 10 Arbeitstagen zum Festpreis",
        price: "5000",
        priceCurrency: "EUR",
        url: "https://kahirov.de/#preis",
      },
    ],
  },
  priceRange: "€€",
  inLanguage: "de",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
