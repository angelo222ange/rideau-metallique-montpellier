import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Reviews, type Review } from "@/components/sections/Reviews";
import { ImageWithFallback, Breadcrumb, generateBreadcrumbSchema } from "@/components/ui";
import { ComparatifSection, ROISection, TemoignagesSection } from "@/components/sections/motorisation";
import { ZoneInterventionSection } from "@/components/sections/ZoneIntervention";
import motorisationContent from "@/content/pages/motorisation.json";
import faqMotorisation from "@/content/faq/motorisation.json";
import motorisationReviewsData from "@/content/reviews/motorisation.json";

// Fil d'Ariane
const breadcrumbItems = [
  { label: "Motorisation rideau métallique" }
];
const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

// Cast des reviews pour TypeScript
const motorisationReviews = motorisationReviewsData as Review[];

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: motorisationContent.meta.title,
  description: motorisationContent.meta.description,
  keywords: motorisationContent.meta.keywords,
  alternates: {
    canonical: `https://${siteConfig.domain}/motorisation-rideau-metallique`,
  },
  openGraph: {
    title: motorisationContent.meta.title,
    description: motorisationContent.meta.description,
    url: `https://${siteConfig.domain}/motorisation-rideau-metallique`,
    siteName: siteConfig.fullName,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: `https://${siteConfig.domain}/images/motorisation/hero-motorisation.webp`,
        width: 1200,
        height: 630,
        alt: `Motorisation rideau métallique ${siteConfig.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: motorisationContent.meta.title,
    description: motorisationContent.meta.description,
    images: [`https://${siteConfig.domain}/images/motorisation/hero-motorisation.webp`],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SCHEMA.ORG FAQ & SERVICE
// ─────────────────────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqMotorisation.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/<[^>]*>/g, ""),
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://${siteConfig.domain}/motorisation-rideau-metallique#service`,
  name: `Motorisation Rideau Métallique ${siteConfig.city}`,
  description: `Installation de moteurs et automatisation de rideaux métalliques à ${siteConfig.city} (${siteConfig.postalCode}). Moteur tubulaire, central, latéral. Télécommande, clavier à code.`,
  provider: {
    "@type": "LocalBusiness",
    "@id": `https://${siteConfig.domain}/#organization`,
    name: siteConfig.fullName,
    telephone: siteConfig.phone,
  },
  areaServed: [
    { "@type": "City", name: siteConfig.city },
    { "@type": "AdministrativeArea", name: siteConfig.department },
  ],
  serviceType: "Motorisation rideau métallique",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "350",
    highPrice: "800",
    priceCurrency: "EUR",
    offerCount: "3",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Types de moteurs",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Moteur tubulaire", price: "450" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Moteur central", price: "650" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Moteur latéral", price: "350" } },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ICON COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  hand: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  star: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  tubulaire: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
    </svg>
  ),
  central: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  lateral: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
    </svg>
  ),
  remote: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  keypad: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
  ),
  sensor: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  ),
  battery: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
    </svg>
  ),
  smartphone: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  timer: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  document: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  wrench: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function MotorisationPage() {
  return (
    <>
      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
      
      {/* Fil d'Ariane visible */}
      <Breadcrumb items={breadcrumbItems} />
      
      <main>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/motorisation/motorisation-rideau-metallique-montpellier-34.webp"
            alt={`Motorisation rideau métallique ${siteConfig.city}`}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay MOBILE : plus foncé pour lisibilité */}
          <div className="absolute inset-0 bg-primary-950/90 md:hidden" />
          {/* Overlay DESKTOP : dégradé subtil */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/75 to-primary-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 md:from-primary-900/80 via-primary-900/40 md:via-transparent to-primary-900/60 md:to-primary-900/40" />
          <div className="hidden md:block absolute inset-0 opacity-10 bg-grid-pattern" />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/25 md:bg-white/10 md:backdrop-blur-sm border border-white/30 md:border-white/20 text-white text-sm font-medium mb-6 animate-fade-in-up">
                <span className="w-2 h-2 bg-accent-400 rounded-full md:animate-pulse" />
                Motorisation Experte
              </div>

              {/* Title H1 - SEO optimized */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100 text-white">
                Motorisation rideau métallique {siteConfig.city}
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-accent-400 animate-fade-in-up animation-delay-150">
                Automatisez Votre Commerce
              </p>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200" dangerouslySetInnerHTML={{ __html: motorisationContent.hero.subtitle }} />

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animation-delay-300">
                <a 
                  href={siteConfig.phoneLink} 
                  className="group relative inline-flex items-center gap-3 rounded-2xl bg-secondary-500 px-8 py-4 text-lg font-bold text-white shadow-secondary hover:bg-secondary-600 hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="absolute inset-0 rounded-2xl bg-secondary-500 animate-pulse-ring opacity-75" />
                  {icons.phone}
                  <span className="relative">{siteConfig.phone}</span>
                </a>
                
                <a 
                  href="#moteurs" 
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-primary-800 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  Voir nos moteurs
                </a>
              </div>

              {/* Trust badges - Optimisé mobile */}
              <div className="flex flex-wrap gap-2 md:gap-3 animate-fade-in-up animation-delay-400">
                {motorisationContent.hero.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white/25 md:bg-white/10 md:backdrop-blur-sm rounded-xl border border-white/30 md:border-white/10">
                    <svg className="w-4 md:w-5 h-4 md:h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium text-white text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image - Moteur ACM */}
            <div className="hidden lg:block relative animate-fade-in-up animation-delay-300">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/images/moteur-acm.webp"
                  alt={`Moteur ACM pour rideau métallique ${siteConfig.city}`}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl p-4 md:p-5 shadow-card-hover animate-float">
                <p className="text-3xl md:text-4xl font-bold text-primary-600">1 clic</p>
                <p className="text-sm text-gray-600 font-medium">pour ouvrir</p>
              </div>

              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white rounded-2xl p-4 shadow-card-hover">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-bold text-metal-800">2 ans</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">garantie</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24 text-white fill-current" viewBox="0 0 1440 74" preserveAspectRatio="none">
            <path d="M0,37 C240,74 480,0 720,37 C960,74 1200,0 1440,37 L1440,74 L0,74 Z" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          AVANTAGES MOTORISATION - SECTIONS ALTERNÉES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              Avantages
            </span>
            <h2 className="section-title">{motorisationContent.avantages.title}</h2>
            <p className="section-subtitle mx-auto mt-4" dangerouslySetInnerHTML={{ __html: motorisationContent.avantages.subtitle }} />
          </div>

          {/* Alternating Sections */}
          <div className="space-y-24">
            {motorisationContent.avantages.items.map((item, index) => (
              <div 
                key={item.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
              >
                {/* Image or Video */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card-hover bg-gray-100">
                    {item.image.endsWith('.mp4') ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={item.image} type="video/mp4" />
                      </video>
                    ) : (
                      <ImageWithFallback
                        src={item.image}
                        alt={`${item.title} - Motorisation rideau métallique ${siteConfig.city}`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Floating stat badge */}
                  <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4 md:-right-6' : '-left-4 md:-left-6'} md:-bottom-6 bg-white rounded-2xl p-4 shadow-card-hover`}>
                    <p className={`text-2xl md:text-3xl font-bold ${index % 2 === 0 ? 'text-primary-600' : 'text-secondary-500'}`}>
                      {item.stat}
                    </p>
                    <p className="text-sm text-gray-600">{item.statLabel}</p>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center ${
                    index % 2 === 0 ? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-600'
                  }`}>
                    {icons[item.icon] || icons.shield}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-metal-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }} />
                  
                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          index % 2 === 0 ? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-600'
                        }`}>
                          {icons.check}
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TYPES DE MOTEURS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="moteurs" className="section bg-sand-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-50" />
        
        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Types de Moteurs
            </span>
            <h2 className="section-title">{motorisationContent.moteurs.title}</h2>
            <p className="section-subtitle mx-auto mt-4" dangerouslySetInnerHTML={{ __html: motorisationContent.moteurs.subtitle }} />
          </div>

          {/* Moteurs Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {motorisationContent.moteurs.items.map((moteur, index) => (
              <div 
                key={moteur.id}
                className="relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-white flex items-center justify-center p-4">
                  <ImageWithFallback
                    src={moteur.image}
                    alt={`${moteur.title} - Motorisation ${siteConfig.city}`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Price badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg z-10">
                    <p className={`font-bold ${
                      index === 0 ? 'text-primary-600' :
                      index === 1 ? 'text-accent-600' :
                      'text-secondary-600'
                    }`}>{moteur.price}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-metal-800 mb-3">{moteur.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: moteur.description }} />
                  
                  {/* Specs */}
                  <ul className="space-y-2">
                    {moteur.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          index === 0 ? 'bg-primary-100 text-primary-600' :
                          index === 1 ? 'bg-accent-100 text-accent-600' :
                          'bg-secondary-100 text-secondary-600'
                        }`}>
                          {icons.check}
                        </span>
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          ACCESSOIRES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 text-secondary-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Accessoires
            </span>
            <h2 className="section-title">{motorisationContent.accessoires.title}</h2>
            <p className="section-subtitle mx-auto mt-4" dangerouslySetInnerHTML={{ __html: motorisationContent.accessoires.subtitle }} />
          </div>

          {/* Accessoires Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {motorisationContent.accessoires.items.map((accessoire, index) => (
              <div 
                key={accessoire.id}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    index % 3 === 0 ? 'bg-primary-100 text-primary-600' :
                    index % 3 === 1 ? 'bg-accent-100 text-accent-600' :
                    'bg-secondary-100 text-secondary-600'
                  } group-hover:scale-110 transition-transform`}>
                    {icons[accessoire.icon] || icons.remote}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    accessoire.price === 'Incluse' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {accessoire.price}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-metal-800 mb-2">{accessoire.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: accessoire.description }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION SEO : COMPARATIF MANUEL VS MOTORISÉ
      ═══════════════════════════════════════════════════════════════════════ */}
      <ComparatifSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION SEO : RETOUR SUR INVESTISSEMENT (ROI)
      ═══════════════════════════════════════════════════════════════════════ */}
      <ROISection />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION SEO : TÉMOIGNAGES COMMERÇANTS
      ═══════════════════════════════════════════════════════════════════════ */}
      <TemoignagesSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          PROCESSUS D'INSTALLATION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Processus
            </span>
            <h2 className="section-title">{motorisationContent.processus.title}</h2>
            <p className="section-subtitle mx-auto mt-4">{motorisationContent.processus.subtitle}</p>
          </div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-accent-300 to-primary-200" />
              
              {motorisationContent.processus.steps.map((step, index) => (
                <div key={step.id} className="relative text-center">
                  {/* Step number */}
                  <div className={`relative z-10 w-20 h-20 mx-auto mb-4 rounded-2xl flex flex-col items-center justify-center shadow-lg ${
                    index === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600' :
                    index === 1 ? 'bg-gradient-to-br from-accent-400 to-accent-500' :
                    index === 2 ? 'bg-gradient-to-br from-secondary-400 to-secondary-500' :
                    'bg-gradient-to-br from-green-400 to-green-500'
                  } text-white`}>
                    <span className="text-2xl font-bold">{step.id}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-metal-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA after processus */}
          <div className="text-center mt-12">
            <a 
              href={siteConfig.phoneLink}
              className="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              {icons.phone}
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          URGENCE BANNER
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-gradient-cta relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-white/80">Dépannage 24h/24</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{motorisationContent.urgence.title}</h2>
              <p className="text-white/80 mt-1" dangerouslySetInnerHTML={{ __html: motorisationContent.urgence.description }} />
            </div>
            <a 
              href={siteConfig.phoneLink}
              className="flex items-center gap-3 bg-white text-secondary-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
            >
              {icons.phone}
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          AVIS CLIENTS
      ═══════════════════════════════════════════════════════════════════════ */}
      <Reviews 
        reviews={motorisationReviews}
        title="Avis clients sur notre motorisation"
        subtitle="Découvrez les témoignages de nos clients satisfaits par nos installations de moteurs"
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          ZONE D'INTERVENTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <ZoneInterventionSection 
        serviceName="Motorisation Rideau Métallique"
        serviceSlug="motorisation-rideau-metallique"
        mainCityImage="/images/drm-depannage-rideau-metallique-france-montpellier.webp"
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════════════════ */}
      <FAQ 
        items={faqMotorisation} 
        title="Questions sur la Motorisation"
        subtitle={`Tout savoir sur la motorisation de rideaux métalliques à ${siteConfig.city}.`}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════════════════════════════════ */}
      <CTA 
        title={motorisationContent.cta.title}
        subtitle={motorisationContent.cta.subtitle}
      />
    </main>
    </>
  );
}
