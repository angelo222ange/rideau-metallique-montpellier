import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Reviews, type Review } from "@/components/sections/Reviews";
import { Breadcrumb, generateBreadcrumbSchema } from "@/components/ui";
import { ZoneInterventionSection } from "@/components/sections/ZoneIntervention";
import faqData from "@/content/faq/installation.json";
import pageData from "@/content/pages/installation.json";
import installationReviewsData from "@/content/reviews/installation.json";

// Cast des reviews pour TypeScript
const installationReviews = installationReviewsData as Review[];

// ─────────────────────────────────────────────────────────────────────────────
// ICONS SVG - Mapping des icônes
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, React.ReactNode> = {
  // Certifications
  trophy: (
    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  check: (
    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  ruler: (
    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  lock: (
    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  // Prestations
  shutter: (
    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  eye: (
    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  grid: (
    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  fire: (
    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  ),
  snowflake: (
    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18M3 12l3-3M3 12l3 3m15-3l-3-3m3 3l-3 3m-6-6l-3-3m3 3l3-3m-3 9l-3 3m3-3l3 3" />
    </svg>
  ),
  building: (
    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  // Secteurs
  store: (
    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  shopping: (
    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  restaurant: (
    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  bank: (
    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
  warehouse: (
    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  car: (
    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  ),
  // Garanties
  shield: (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  document: (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  wrench: (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  "check-circle": (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  // Badge hero
  tools: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  clipboard: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  door: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
};

const content = getPageContent(pageData);

// Fil d'Ariane
const breadcrumbItems = [
  { label: "Installation rideau métallique" }
];
const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA (Optimisé pour SEO + LLM)
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `Installation Rideau Métallique ${siteConfig.city} | Pose Professionnelle`,
  description: `Installation rideau métallique à ${siteConfig.city} (${siteConfig.postalCode}). Pose professionnelle pour commerces, entrepôts, garages. Lames pleines, micro-perforées, grilles. Garantie 2 ans. Devis gratuit sous 24h. Appelez le ${siteConfig.phone}`,
  keywords: [
    `installation rideau métallique ${siteConfig.city}`,
    `pose rideau métallique ${siteConfig.city}`,
    `installateur rideau métallique ${siteConfig.departmentCode}`,
    `rideau de fer installation ${siteConfig.city}`,
    `pose grille métallique commerce ${siteConfig.city}`,
    `installation rideau commerce ${siteConfig.city}`,
    `rideau métallique neuf ${siteConfig.city}`,
    `installer rideau métallique prix`,
  ],
  alternates: {
    canonical: `https://${siteConfig.domain}/installation-rideau-metallique`,
  },
  openGraph: {
    title: `Installation Rideau Métallique ${siteConfig.city} | Installateur Professionnel`,
    description: `Installation rideau métallique à ${siteConfig.city}. Pose professionnelle pour commerces et locaux. Garantie 2 ans. Devis gratuit. Appelez le ${siteConfig.phone}`,
    url: `https://${siteConfig.domain}/installation-rideau-metallique`,
    siteName: siteConfig.fullName,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: `Installation Rideau Métallique ${siteConfig.city}`,
    description: `Pose professionnelle de rideaux métalliques à ${siteConfig.city}. Devis gratuit sous 24h. Appelez le ${siteConfig.phone}`,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SCHEMA.ORG - DONNÉES STRUCTURÉES
// ─────────────────────────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://${siteConfig.domain}/installation-rideau-metallique#service`,
  name: `Installation Rideau Métallique ${siteConfig.city}`,
  description: `Service d'installation et pose professionnelle de rideaux métalliques pour commerces, entrepôts et locaux professionnels à ${siteConfig.city} (${siteConfig.postalCode}). Garantie 2 ans sur la pose.`,
  provider: {
    "@type": "LocalBusiness",
    "@id": `https://${siteConfig.domain}/#organization`,
    name: siteConfig.fullName,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      postalCode: siteConfig.postalCode,
      addressRegion: siteConfig.department,
      addressCountry: "FR",
    },
  },
  areaServed: [
    { "@type": "City", name: siteConfig.city },
    { "@type": "AdministrativeArea", name: siteConfig.department },
  ],
  serviceType: "Installation rideau métallique",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "900",
    highPrice: "3500",
    priceCurrency: "EUR",
    offerCount: "6",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Types de rideaux métalliques installés",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rideau à lames pleines" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rideau micro-perforé" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Grille métallique articulée" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rideau coupe-feu" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rideau isolant thermique" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rideau grande dimension industriel" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: getPageContent(faqData).slice(0, 5).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/<[^>]*>/g, ""),
    },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `Comment se passe l'installation d'un rideau métallique à ${siteConfig.city}`,
  description: "Les étapes de notre processus d'installation professionnel pour votre rideau métallique.",
  step: content.processus.steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description,
  })),
  totalTime: "PT48H",
};

export default function InstallationPage() {
  return (
    <>
      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Schema.org Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Schema.org HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      {/* Fil d'Ariane visible */}
      <Breadcrumb items={breadcrumbItems} />
      
      <main className="pt-4">
        {/* ═══════════════════════════════════════════════════════════════════════
            HERO SECTION - Installation Rideau Métallique
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="relative py-16 md:py-24 text-white overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image 
              src="/images/services/installation-rideau-metallique-drm-montpellier.webp" 
              alt="Installation rideau métallique Montpellier"
              fill 
              className="object-cover" 
              priority 
            />
            {/* Overlay MOBILE : plus foncé */}
            <div className="absolute inset-0 bg-primary-950/90 md:hidden" />
            {/* Overlay DESKTOP */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-900/70" />
          </div>
          
          <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600/70 md:bg-primary-600/50 md:backdrop-blur text-white text-sm font-semibold mb-6">
                {icons.tools}
                {content.hero.badge}
              </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Installation Rideau Métallique {siteConfig.city}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.hero.subtitle }} />

                <div className="flex flex-wrap gap-4 mb-10">
                  <a href={siteConfig.phoneLink} className="btn-phone text-lg">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Devis gratuit
                  </a>
                  <Link href="/contact-rideau-metallique" className="btn-secondary bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-gray-900">
                    Nous contacter
                  </Link>
              </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  {content.stats.map((stat, index) => (
                    <div key={index} className="text-center p-3 md:p-4 bg-white/20 md:bg-white/10 md:backdrop-blur rounded-xl border border-white/20 md:border-white/10">
                      <p className="text-xl md:text-2xl lg:text-3xl font-bold text-accent-400">{stat.value}</p>
                      <p className="text-xs md:text-sm text-gray-200 md:text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuel axe motorisation sans fond */}
            <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <Image 
                    src="/images/axe-motoriser-rideau-metallique-montpellier.webp" 
                    alt={`Axe motorisation rideau métallique ${siteConfig.city} - Installation par DRM`}
                    width={600}
                    height={500}
                    className="object-contain drop-shadow-2xl" 
                    priority 
                  />
                </div>
                
                {/* Badge flottant */}
                <div className="absolute -bottom-6 left-0 bg-white rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Garantie 2 ans</p>
                      <p className="text-sm text-gray-500">Pose certifiée</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            CERTIFICATIONS - Badges de confiance
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="py-8 bg-gray-50 border-b border-gray-100">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {content.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                    {icons[cert.icon] || icons.check}
                  </div>
                  <span className="font-semibold text-gray-700">{cert.label}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            PROCESSUS D'INSTALLATION - Timeline
        ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
                {icons.clipboard}
                Méthodologie
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {content.processus.title}
              </h2>
              <p className="text-lg text-gray-600">
                {content.processus.subtitle}
              </p>
            </div>

            <div className="relative">
              {/* Ligne verticale de timeline */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 transform -translate-x-1/2" />
              
              <div className="space-y-8 lg:space-y-0">
                {content.processus.steps.map((step, index) => (
                  <div key={index} className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Contenu */}
                    <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                      <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${index % 2 === 0 ? 'lg:ml-auto' : ''} max-w-lg`}>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-4xl font-bold text-primary-200">{step.number}</span>
                          <div>
                            <h3 className="font-bold text-xl text-gray-900">{step.title}</h3>
                            <span className="text-sm text-primary-600 font-medium">{step.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Point sur la timeline */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary-500 rounded-full items-center justify-center shadow-lg ring-4 ring-white">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    
                    {/* Espaceur pour grille */}
                    {index % 2 === 0 && <div className="hidden lg:block" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            TYPES DE RIDEAUX - Prestations détaillées
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold mb-4">
                {icons.door}
                Nos installations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Types de rideaux métalliques installés
              </h2>
              <p className="text-lg text-gray-600">
                Une gamme complète de <strong>rideaux métalliques</strong> pour répondre à tous les besoins de sécurité et d&apos;isolation de votre commerce ou local professionnel.
              </p>
          </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.prestations.map((item, index) => (
                <div key={index} className="relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                  {/* Image de fond si disponible */}
                  {item.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-lg">
                          {icons[item.icon] || icons.shutter}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Icône sans image */}
                  {!item.image && (
                    <div className="p-6 pb-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                        {icons[item.icon] || icons.shutter}
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                    
                    {/* Avantages */}
                    <ul className="space-y-2 mb-5">
                      {item.avantages.map((avantage, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {avantage}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-primary-600 font-bold">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                <strong>Vous ne savez pas quel type de rideau choisir ?</strong> Nos experts vous conseillent gratuitement.
              </p>
              <a href={siteConfig.phoneLink} className="btn-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Conseil gratuit : {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTEURS D'ACTIVITÉ
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {content.secteurs.title}
              </h2>
              <p className="text-lg text-gray-600">{content.secteurs.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.secteurs.items.map((secteur, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden group h-56 shadow-lg hover:shadow-xl transition-shadow">
                  {/* Image de fond */}
                  {secteur.image && (
                    <Image 
                      src={secteur.image} 
                      alt={secteur.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  
                  {/* Contenu */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        {icons[secteur.icon] || icons.store}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg mb-1">{secteur.title}</h3>
                        <p className="text-sm text-gray-200">{secteur.examples}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            GARANTIES
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section bg-primary-900 text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {content.garanties.title}
              </h2>
              <p className="text-lg text-white/90">
                Sérénité et tranquillité d&apos;esprit pour votre <strong className="text-white font-bold">installation de rideau métallique</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.garanties.items.map((garantie, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center hover:bg-white/20 transition-colors border border-white/10">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      {icons[garantie.icon] || icons.shield}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-white">{garantie.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{garantie.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            MARQUES PARTENAIRES
        ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Marques de rideaux métalliques installées
              </h2>
              <p className="text-gray-600">
                Installateur agréé des meilleures marques de <strong>rideaux métalliques</strong> et <strong>motorisations</strong>.
              </p>
          </div>

            <div className="flex flex-wrap justify-center gap-4">
            {content.brands.map((brand) => (
                <div key={brand} className="bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            AVIS CLIENTS
        ═══════════════════════════════════════════════════════════════════════ */}
        <Reviews 
          reviews={installationReviews}
          title="Avis clients installation rideau métallique"
          subtitle="Découvrez les témoignages de nos clients satisfaits par nos installations de rideaux métalliques"
        />

        {/* ═══════════════════════════════════════════════════════════════════════
            ZONE D'INTERVENTION SEO
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Installation rideau métallique dans l&apos;Hérault (34)
              </h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p>
                  <strong>DRM Montpellier</strong> est votre spécialiste de l&apos;<strong>installation de rideaux métalliques</strong> à {siteConfig.city} et dans tout le département de l&apos;Hérault (34). 
                  Que vous soyez commerçant, artisan, professionnel ou industriel, nous vous accompagnons dans le choix et la <strong>pose de votre rideau métallique</strong>.
                </p>
                <p>
                  Notre équipe d&apos;installateurs qualifiés intervient pour la <strong>pose de rideaux à lames pleines</strong>, <strong>rideaux micro-perforés</strong>, 
                  <strong>grilles métalliques articulées</strong>, <strong>rideaux coupe-feu</strong> et <strong>rideaux isolants thermiques</strong>. 
                  Chaque installation est réalisée dans les règles de l&apos;art, conformément aux DTU en vigueur.
                </p>
                <p className="text-gray-700">
                  {content.zones.text}
                </p>
              </div>

              <div className="mt-10 text-center">
                <a href={siteConfig.phoneLink} className="btn-primary text-lg">
                  Demander un devis installation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            ZONE D'INTERVENTION
        ═══════════════════════════════════════════════════════════════════════ */}
        <ZoneInterventionSection 
          serviceName="Installation Rideau Métallique"
          serviceSlug="installation-rideau-metallique"
          mainCityImage="/images/drm-depannage-rideau-metallique-france-montpellier.webp"
        />

        {/* ═══════════════════════════════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════════════════════════════ */}
        <FAQ 
          items={getPageContent(faqData).slice(0, 6)} 
          title="Questions fréquentes sur l'installation" 
        />

        {/* ═══════════════════════════════════════════════════════════════════════
            CTA FINAL
        ═══════════════════════════════════════════════════════════════════════ */}
        <CTA 
          title={content.cta.title} 
          subtitle={content.cta.subtitle} 
        />
    </main>
    </>
  );
}
