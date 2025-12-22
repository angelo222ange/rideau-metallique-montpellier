import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Reviews, type Review } from "@/components/sections/Reviews";
import { SignesUsureSection, PlanningSection, EconomiesSection } from "@/components/sections/entretien";
import { ImageWithFallback, Breadcrumb, generateBreadcrumbSchema } from "@/components/ui";
import { ZoneInterventionSection } from "@/components/sections/ZoneIntervention";
import entretienContent from "@/content/pages/entretien.json";
import faqEntretien from "@/content/faq/entretien.json";
import entretienReviewsData from "@/content/reviews/entretien.json";

// Fil d'Ariane
const breadcrumbItems = [
  { label: "Entretien rideau métallique" }
];
const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

// Cast des reviews pour TypeScript
const entretienReviews = entretienReviewsData as Review[];

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: entretienContent.meta.title,
  description: entretienContent.meta.description,
  keywords: entretienContent.meta.keywords,
  alternates: {
    canonical: `https://${siteConfig.domain}/entretien-rideau-metallique`,
  },
  openGraph: {
    title: entretienContent.meta.title,
    description: entretienContent.meta.description,
    url: `https://${siteConfig.domain}/entretien-rideau-metallique`,
    siteName: siteConfig.fullName,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: `https://${siteConfig.domain}/images/entretien/hero-entretien.webp`,
        width: 1200,
        height: 630,
        alt: `Entretien rideau métallique ${siteConfig.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: entretienContent.meta.title,
    description: entretienContent.meta.description,
    images: [`https://${siteConfig.domain}/images/entretien/hero-entretien.webp`],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SCHEMA.ORG FAQ & SERVICE
// ─────────────────────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntretien.map((item) => ({
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
  "@id": `https://${siteConfig.domain}/entretien-rideau-metallique#service`,
  name: `Entretien Rideau Métallique ${siteConfig.city}`,
  description: `Contrats d'entretien et maintenance préventive pour rideaux métalliques à ${siteConfig.city} (${siteConfig.postalCode}). Prolongez la durée de vie de votre rideau, réduisez les pannes de 70%.`,
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
  serviceType: "Entretien et maintenance rideau métallique",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "150",
    highPrice: "500",
    priceCurrency: "EUR",
    offerCount: "3",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ICON COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  euro: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.037.427-.037.644 0 .217.014.432.037.644a3 3 0 005.104 1.8M7.5 9.75h3m-3 3h3m-6-6h.008v.008H4.5V6.75zm0 3h.008v.008H4.5V9.75zm0 3h.008v.008H4.5v-.008zm0 3h.008v.008H4.5v-.008z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  document: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  oil: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  wrench: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  motor: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  x: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
export default function EntretienPage() {
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
            src="/images/entretien/entretien-rideau-metallique-34-drm-montpellier.webp"
            alt={`Entretien rideau métallique ${siteConfig.city}`}
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/25 md:bg-white/10 md:backdrop-blur-sm border border-white/30 md:border-white/20 text-white text-sm font-medium mb-6 animate-fade-in-up">
                <span className="w-2 h-2 bg-accent-400 rounded-full md:animate-pulse" />
                Maintenance Préventive
              </div>

              {/* Title H1 - SEO optimized */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100 text-white">
                Entretien rideau métallique {siteConfig.city}
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-accent-400 animate-fade-in-up animation-delay-150">
                Maintenance Préventive
              </p>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200" dangerouslySetInnerHTML={{ __html: entretienContent.hero.subtitle }} />

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
                  href="#contrats" 
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-primary-800 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Voir nos contrats
                </a>
              </div>

              {/* Trust badges - Optimisé mobile */}
              <div className="flex flex-wrap gap-2 md:gap-3 animate-fade-in-up animation-delay-400">
                {entretienContent.hero.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white/25 md:bg-white/10 md:backdrop-blur-sm rounded-xl border border-white/30 md:border-white/10">
                    <svg className="w-4 md:w-5 h-4 md:h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium text-white text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image carnet entretien */}
            <div className="hidden lg:block relative animate-fade-in-up animation-delay-300">
              <div className="relative flex items-center justify-center">
                <Image
                  src="/images/carnet-entretien-rideau-metallique.webp"
                  alt={`Carnet d'entretien rideau métallique ${siteConfig.city} - DRM`}
                  width={500}
                  height={600}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
                
                {/* Badge flottant +10 ans */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 md:p-5 shadow-card-hover animate-float">
                  <p className="text-3xl md:text-4xl font-bold text-primary-600">+10 ans</p>
                  <p className="text-sm text-gray-600 font-medium">Durée de vie</p>
                </div>
                
                {/* Badge flottant -70% */}
                <div className="absolute top-8 -right-4 bg-white rounded-2xl p-4 shadow-card-hover">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-bold text-metal-800">-70%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">de pannes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24 text-sand-100 fill-current" viewBox="0 0 1440 74" preserveAspectRatio="none">
            <path d="M0,37 C240,74 480,0 720,37 C960,74 1200,0 1440,37 L1440,74 L0,74 Z" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION : SIGNES D'USURE À SURVEILLER
      ═══════════════════════════════════════════════════════════════════════ */}
      <SignesUsureSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          POURQUOI ENTRETENIR - SECTIONS ALTERNÉES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Avantages
            </span>
            <h2 className="section-title">{entretienContent.pourquoi.title}</h2>
            <p className="section-subtitle mx-auto mt-4" dangerouslySetInnerHTML={{ __html: entretienContent.pourquoi.subtitle }} />
          </div>

          {/* Alternating Sections */}
          <div className="space-y-24">
            {entretienContent.pourquoi.items.map((item, index) => (
              <div 
                key={item.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {/* Style sans fond pour le dernier item (Conformité Réglementaire) */}
                  {item.id === 'conformite' ? (
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={`${item.title} - Entretien rideau métallique ${siteConfig.city}`}
                        width={500}
                        height={600}
                        className="object-contain drop-shadow-2xl"
                      />
                      {/* Floating stat badge */}
                      <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4 md:-right-6' : '-left-4 md:-left-6'} md:-bottom-6 bg-white rounded-2xl p-4 shadow-card-hover`}>
                        <p className={`text-2xl md:text-3xl font-bold ${index % 2 === 0 ? 'text-primary-600' : 'text-secondary-500'}`}>
                          {item.stat}
                        </p>
                        <p className="text-sm text-gray-600">{item.statLabel}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card-hover">
                        <div className={`absolute inset-0 ${
                          index % 2 === 0 
                            ? 'bg-gradient-to-br from-primary-100 to-accent-100' 
                            : 'bg-gradient-to-br from-secondary-100 to-gold-100'
                        } flex flex-col items-center justify-center text-primary-400`}>
                          <svg className="w-20 h-20 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-sm font-medium">Image: {item.title}</p>
                          <p className="text-xs opacity-70">800x600</p>
                        </div>
                        <ImageWithFallback
                          src={item.image}
                          alt={`${item.title} - Entretien rideau métallique ${siteConfig.city}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Floating stat badge */}
                      <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4 md:-right-6' : '-left-4 md:-left-6'} md:-bottom-6 bg-white rounded-2xl p-4 shadow-card-hover`}>
                        <p className={`text-2xl md:text-3xl font-bold ${index % 2 === 0 ? 'text-primary-600' : 'text-secondary-500'}`}>
                          {item.stat}
                        </p>
                        <p className="text-sm text-gray-600">{item.statLabel}</p>
                      </div>
                    </>
                  )}
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
          PRESTATIONS INCLUSES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-sand-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-50" />
        
        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              Checklist
            </span>
            <h2 className="section-title">{entretienContent.prestations.title}</h2>
            <p className="section-subtitle mx-auto mt-4" dangerouslySetInnerHTML={{ __html: entretienContent.prestations.subtitle }} />
          </div>

          {/* Prestations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {entretienContent.prestations.items.map((prestation, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                  index % 3 === 0 ? 'bg-primary-100 text-primary-600' :
                  index % 3 === 1 ? 'bg-accent-100 text-accent-600' :
                  'bg-secondary-100 text-secondary-600'
                }`}>
                  {icons[prestation.icon] || icons.wrench}
                </div>
                <h3 className="text-lg font-bold text-metal-800 mb-2">{prestation.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: prestation.description }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION : PLANNING D'ENTRETIEN RECOMMANDÉ
      ═══════════════════════════════════════════════════════════════════════ */}
      <PlanningSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION : ÉCONOMIES RÉALISÉES AVEC L'ENTRETIEN
      ═══════════════════════════════════════════════════════════════════════ */}
      <EconomiesSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          CONTRATS DE MAINTENANCE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="contrats" className="section bg-white">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 text-secondary-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Formules
            </span>
            <h2 className="section-title">{entretienContent.contrats.title}</h2>
            <p className="section-subtitle mx-auto mt-4">{entretienContent.contrats.subtitle}</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {entretienContent.contrats.items.map((contrat, index) => (
              <div 
                key={contrat.id}
                className={`relative bg-white rounded-3xl p-8 transition-all duration-300 ${
                  contrat.isPopular 
                    ? 'border-2 border-primary-500 shadow-xl scale-105 z-10' 
                    : 'border border-gray-200 shadow-card hover:shadow-card-hover'
                }`}
              >
                {/* Popular badge */}
                {contrat.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-primary text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                      Le plus populaire
                  </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-metal-800 mb-2">{contrat.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{contrat.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold ${contrat.isPopular ? 'text-primary-600' : 'text-metal-800'}`}>
                      {contrat.price}
                    </span>
                    {contrat.period && (
                      <span className="text-gray-500 text-sm">{contrat.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {contrat.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        contrat.isPopular ? 'bg-primary-100 text-primary-600' : 'bg-green-100 text-green-600'
                      }`}>
                        {icons.check}
                      </span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                  {contrat.notIncluded.map((feature, idx) => (
                    <li key={`not-${idx}`} className="flex items-start gap-3 opacity-50">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gray-100 text-gray-400">
                        {icons.x}
                      </span>
                      <span className="text-gray-500 text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a 
                  href={siteConfig.phoneLink}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all duration-300 ${
                    contrat.isPopular 
                      ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 hover:bg-gray-200 text-metal-800'
                  }`}
                >
                  {icons.phone}
                  Souscrire
                </a>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-gray-500 text-sm mt-8">
            * Devis personnalisé gratuit après évaluation de votre installation. Contactez-nous au {siteConfig.phone}.
          </p>
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
                <span className="text-sm font-semibold text-white/80">Urgence 24h/24</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{entretienContent.urgence.title}</h2>
              <p className="text-white/80 mt-1" dangerouslySetInnerHTML={{ __html: entretienContent.urgence.description }} />
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
        reviews={entretienReviews}
        title="Avis clients sur notre entretien"
        subtitle="Découvrez les témoignages de nos clients satisfaits par nos contrats de maintenance"
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          ZONE D'INTERVENTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <ZoneInterventionSection 
        serviceName="Entretien Rideau Métallique"
        serviceSlug="entretien-rideau-metallique"
        mainCityImage="/images/drm-depannage-rideau-metallique-france-montpellier.webp"
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════════════════ */}
      <FAQ 
        items={faqEntretien} 
        title="Questions sur l'Entretien"
        subtitle={`Tout savoir sur l'entretien et la maintenance de rideaux métalliques à ${siteConfig.city}.`}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════════════════════════════════ */}
      <CTA 
        title={entretienContent.cta.title}
        subtitle={entretienContent.cta.subtitle}
      />
    </main>
    </>
  );
}
