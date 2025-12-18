import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { DeblocageSection, PannesSection, UrgenceSection } from "@/components/sections/home";
import { WhyUs } from "@/components/sections/WhyUs";
import { ZoneInterventionSection } from "@/components/sections/ZoneIntervention";
import { Reviews, type Review } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/config/site";
import faqAccueil from "@/content/faq/accueil.json";
import homeReviewsData from "@/content/reviews/home.json";

// Cast des reviews pour TypeScript
const homeReviews = homeReviewsData as Review[];

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA - PAGE ACCUEIL (Optimisé pour SEO + LLM)
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `Dépannage Rideau Métallique ${siteConfig.city} 24h/24 | ${siteConfig.name}`,
  description: `Dépannage rideau métallique à ${siteConfig.city} (${siteConfig.postalCode}). ⚡ Intervention en moins d'1h, 24h/24, 7j/7. Déblocage, réparation, motorisation. Devis gratuit. ☎️ ${siteConfig.phone}`,
  keywords: [
    `dépannage rideau métallique ${siteConfig.city}`,
    `réparation rideau métallique ${siteConfig.city}`,
    `rideau métallique bloqué ${siteConfig.city}`,
    `déblocage rideau métallique ${siteConfig.department}`,
    `rideau métallique urgence ${siteConfig.departmentCode}`,
    `rideau de fer ${siteConfig.city}`,
    `grille métallique ${siteConfig.city}`,
  ],
  alternates: {
    canonical: `https://${siteConfig.domain}/`,
  },
  openGraph: {
    title: `Dépannage Rideau Métallique ${siteConfig.city} | Intervention 24h/24`,
    description: `Expert dépannage rideau métallique à ${siteConfig.city}. Intervention rapide <1h, 24h/24 et 7j/7. Déblocage, réparation, motorisation. Devis gratuit. ☎️ ${siteConfig.phone}`,
    url: `https://${siteConfig.domain}/`,
    siteName: siteConfig.fullName,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `https://${siteConfig.domain}/images/hero/hero-depannage-montpellier.webp`,
        width: 1200,
        height: 630,
        alt: `Dépannage rideau métallique ${siteConfig.city} - DRM`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Dépannage Rideau Métallique ${siteConfig.city} 24h/24`,
    description: `Expert dépannage rideau métallique à ${siteConfig.city}. Intervention <1h. ☎️ ${siteConfig.phone}`,
    images: [`https://${siteConfig.domain}/images/hero/hero-depannage-montpellier.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SCHEMA.ORG FAQ - SEO STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqAccueil.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/<[^>]*>/g, ""), // Retire les balises HTML pour le schema
    },
  })),
};

// Schema Service pour la page d'accueil (service principal : dépannage)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://${siteConfig.domain}/#service-depannage`,
  name: `Dépannage Rideau Métallique ${siteConfig.city}`,
  description: `Service de dépannage d'urgence 24h/24 pour rideaux métalliques bloqués ou endommagés à ${siteConfig.city} (${siteConfig.postalCode}) et agglomération. Intervention en moins d'1 heure.`,
  provider: {
    "@type": "LocalBusiness",
    "@id": `https://${siteConfig.domain}/#organization`,
    name: siteConfig.fullName,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "15 Rue Marceau",
      addressLocality: siteConfig.city,
      postalCode: siteConfig.postalCode,
      addressCountry: "FR",
    },
  },
  areaServed: [
    {
      "@type": "City",
      name: siteConfig.city,
    },
    {
      "@type": "AdministrativeArea",
      name: siteConfig.department,
    },
  ],
  serviceType: "Dépannage rideau métallique",
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: siteConfig.phone,
    serviceUrl: `https://${siteConfig.domain}/contact-rideau-metallique`,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services rideau métallique",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Déblocage rideau métallique",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Réparation rideau métallique",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Motorisation rideau métallique",
        },
      },
    ],
  },
};

// Schema WebPage pour la page d'accueil
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://${siteConfig.domain}/#webpage`,
  url: `https://${siteConfig.domain}/`,
  name: `Dépannage Rideau Métallique ${siteConfig.city} 24h/24`,
  description: `Expert en dépannage rideau métallique à ${siteConfig.city}. Intervention rapide 24h/24.`,
  isPartOf: {
    "@type": "WebSite",
    "@id": `https://${siteConfig.domain}/#website`,
    url: `https://${siteConfig.domain}/`,
    name: siteConfig.fullName,
    publisher: {
      "@type": "LocalBusiness",
      "@id": `https://${siteConfig.domain}/#organization`,
    },
  },
  about: {
    "@type": "Service",
    "@id": `https://${siteConfig.domain}/#service-depannage`,
  },
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": `https://${siteConfig.domain}/#organization`,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Schema.org Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Schema.org WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      
      <Hero />
      <Services />
      <DeblocageSection />
      <PannesSection />
      <UrgenceSection />
      <WhyUs />
      <Reviews 
        reviews={homeReviews} 
        title="Avis de nos clients à Montpellier"
        subtitle="Découvrez les témoignages de nos clients satisfaits pour nos services de dépannage rideau métallique"
      />
      <ZoneInterventionSection 
        serviceName="Dépannage Rideau Métallique"
        serviceSlug="depannage-rideau-metallique"
        mainCityImage="/images/drm-depannage-rideau-metallique-france-montpellier.webp"
      />
      <FAQ items={faqAccueil} title="Questions Fréquentes" />
      <CTA />
    </>
  );
}
