import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButton } from "@/components/ui/FloatingButton";

// Plus Jakarta Sans pour les titres - poids réduits pour performance
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["600", "700", "800"],
  preload: true,
});

// DM Sans pour le corps de texte - poids réduits pour performance
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `Dépannage Rideau Métallique ${siteConfig.city} | Expert 24h/24 - ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Dépannage rideau métallique à ${siteConfig.city}. Intervention rapide 24h/24 et 7j/7 : déblocage, réparation, motorisation, fabrication sur-mesure. ☎️ ${siteConfig.phone}`,
  keywords: [
    `dépannage rideau métallique ${siteConfig.city}`,
    `réparation rideau métallique ${siteConfig.city}`,
    `rideau métallique bloqué ${siteConfig.city}`,
    `installation rideau métallique ${siteConfig.city}`,
    `motorisation rideau métallique ${siteConfig.city}`,
    `entretien rideau métallique ${siteConfig.city}`,
    `fabrication rideau métallique ${siteConfig.city}`,
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.fullName,
    title: `Dépannage Rideau Métallique ${siteConfig.city} | Expert 24h/24`,
    description: `Expert en dépannage rideau métallique à ${siteConfig.city}. Intervention rapide 24h/24. ☎️ ${siteConfig.phone}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Dépannage Rideau Métallique ${siteConfig.city}`,
    description: `Expert en dépannage rideau métallique à ${siteConfig.city}. Intervention rapide 24h/24.`,
  },
  alternates: {
    canonical: `https://${siteConfig.domain}`,
  },
  icons: {
    icon: "/images/favicon-drm-montpellier-depanage-rideau-metallique.webp",
    shortcut: "/images/favicon-drm-montpellier-depanage-rideau-metallique.webp",
    apple: "/images/favicon-drm-montpellier-depanage-rideau-metallique.webp",
  },
};

// Schema.org LocalBusiness pour SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `https://${siteConfig.domain}/#organization`,
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  description: `Expert en dépannage, réparation et installation de rideaux métalliques à ${siteConfig.city}. Intervention rapide 24h/24.`,
  url: `https://${siteConfig.domain}`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "15 Rue Marceau",
    addressLocality: siteConfig.city,
    postalCode: siteConfig.postalCode,
    addressRegion: siteConfig.region,
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.lat,
    longitude: siteConfig.geo.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.reviews.rating,
    reviewCount: siteConfig.reviews.count,
    bestRating: 5,
    worstRating: 1,
  },
  priceRange: "€€",
  areaServed: {
    "@type": "City",
    name: siteConfig.city,
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    geoRadius: "30000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de rideau métallique",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dépannage rideau métallique",
          description: "Service de dépannage d'urgence 24h/24 pour rideaux métalliques bloqués ou endommagés.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fabrication rideau métallique",
          description: "Fabrication sur-mesure de rideaux métalliques pour commerces et locaux professionnels.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entretien rideau métallique",
          description: "Contrats d'entretien et maintenance préventive pour rideaux métalliques.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Motorisation rideau métallique",
          description: "Installation de moteurs et automatisation de rideaux métalliques.",
        },
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <head>
        {/* Preconnect pour performances */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link
          rel="icon"
          type="image/webp"
          href="/images/favicon-drm-montpellier-depanage-rideau-metallique.webp"
        />
        
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
