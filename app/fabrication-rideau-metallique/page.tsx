import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Reviews, type Review } from "@/components/sections/Reviews";
import { SurMesureSection, RealisationsSection, NormesSection } from "@/components/sections/fabrication";
import { ImageWithFallback, Breadcrumb, generateBreadcrumbSchema } from "@/components/ui";
import { ZoneInterventionSection } from "@/components/sections/ZoneIntervention";
import fabricationContent from "@/content/pages/fabrication.json";
import faqFabrication from "@/content/faq/fabrication.json";
import fabricationReviewsData from "@/content/reviews/fabrication.json";
import { HeroSlideshow } from "@/components/sections/fabrication/HeroSlideshow";

// Fil d'Ariane
const breadcrumbItems = [
  { label: "Fabrication rideau métallique" }
];
const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

// Cast des reviews pour TypeScript
const fabricationReviews = fabricationReviewsData as Review[];

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: fabricationContent.meta.title,
  description: fabricationContent.meta.description,
  keywords: fabricationContent.meta.keywords,
  alternates: {
    canonical: `https://${siteConfig.domain}/fabrication-rideau-metallique`,
  },
  openGraph: {
    title: fabricationContent.meta.title,
    description: fabricationContent.meta.description,
    url: `https://${siteConfig.domain}/fabrication-rideau-metallique`,
    siteName: siteConfig.fullName,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: `https://${siteConfig.domain}/images/fabrication/hero-fabrication.webp`,
        width: 1200,
        height: 630,
        alt: `Fabrication rideau métallique ${siteConfig.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fabricationContent.meta.title,
    description: fabricationContent.meta.description,
    images: [`https://${siteConfig.domain}/images/fabrication/hero-fabrication.webp`],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SCHEMA.ORG FAQ & SERVICE
// ─────────────────────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqFabrication.map((item) => ({
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
  "@id": `https://${siteConfig.domain}/fabrication-rideau-metallique#service`,
  name: `Fabrication Rideau Métallique ${siteConfig.city}`,
  description: `Fabrication sur-mesure de rideaux métalliques pour commerces et locaux professionnels à ${siteConfig.city} (${siteConfig.postalCode}). Lames pleines, micro-perforées, grilles articulées, coupe-feu.`,
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
  serviceType: "Fabrication rideau métallique sur-mesure",
  offers: {
    "@type": "Offer",
    priceRange: "€€€",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Types de rideaux métalliques",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rideau à lames pleines" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rideau micro-perforé" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Grille articulée" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rideau coupe-feu" } },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ICON COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
const icons = {
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  eye: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  grid: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  fire: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
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

const polycarbonateIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const typeIcons: Record<string, JSX.Element> = {
  "lames-pleines": icons.shield,
  "micro-perfore": icons.eye,
  "grilles": icons.grid,
  "polycarbonate": polycarbonateIcon,
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function FabricationPage() {
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/fabrication/fabrication-rideau-metallique-montpellier-drm-34-herault.webp"
            alt={`Fabrication rideau métallique ${siteConfig.city}`}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-primary-900/40" />
          <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6 animate-fade-in-up">
                <span className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" />
                Sur-Mesure Professionnel
              </div>

              {/* Title H1 - SEO optimized */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100 text-white">
                Fabrication rideau métallique {siteConfig.city}
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200" dangerouslySetInnerHTML={{ __html: fabricationContent.hero.subtitle }} />

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
                  href="/contact-rideau-metallique" 
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-primary-800 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Devis gratuit
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-400">
                {fabricationContent.hero.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                    <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Slideshow */}
            <div className="hidden lg:block animate-fade-in-up animation-delay-300">
              <HeroSlideshow />
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
          SECTION : POURQUOI CHOISIR UN RIDEAU SUR-MESURE
      ═══════════════════════════════════════════════════════════════════════ */}
      <SurMesureSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          TYPES DE RIDEAUX - SECTIONS ALTERNÉES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Nos Solutions
            </span>
            <h2 className="section-title">{fabricationContent.types.title}</h2>
            <p className="section-subtitle mx-auto mt-4" dangerouslySetInnerHTML={{ __html: fabricationContent.types.subtitle }} />
          </div>

          {/* Alternating Sections */}
          <div className="space-y-24">
            {fabricationContent.types.items.map((type, index) => (
              <div 
                key={type.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image sans fond */}
                <div className={`relative flex items-center justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative w-full max-w-md lg:max-w-lg">
                    <Image
                      src={type.image}
                      alt={`${type.name} - Fabrication ${siteConfig.city}`}
                      width={600}
                      height={450}
                      className="object-contain drop-shadow-2xl"
                    />
                    
                    {/* Badge Nouveau sur l'image */}
                    {type.isNew && (
                      <div className="absolute top-0 right-0">
                        <span className="px-4 py-2 bg-secondary-500 rounded-xl text-sm font-bold text-white uppercase tracking-wide shadow-lg">
                          Nouveau
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Floating icon badge */}
                  <div className={`absolute bottom-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} bg-white rounded-2xl p-4 shadow-card-hover`}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      index % 2 === 0 ? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-600'
                    }`}>
                      {typeIcons[type.id] || icons.shield}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-metal-800">
                      {type.name}
                    </h3>
                    {type.isNew && (
                      <span className="px-3 py-1 bg-secondary-500 rounded-lg text-xs font-bold text-white uppercase tracking-wide">
                        Nouveau
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: type.description }} />
                  
                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, idx) => (
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

                  {/* CTA */}
                  <a 
                    href={siteConfig.phoneLink}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      index % 2 === 0 
                        ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                        : 'bg-secondary-500 hover:bg-secondary-600 text-white'
                    }`}
                  >
                    {icons.phone}
                    Demander un devis
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION : NOS RÉALISATIONS À MONTPELLIER
      ═══════════════════════════════════════════════════════════════════════ */}
      <RealisationsSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          PROCESSUS DE FABRICATION - TIMELINE
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
              Étapes
            </span>
            <h2 className="section-title">{fabricationContent.processus.title}</h2>
            <p className="section-subtitle mx-auto mt-4" dangerouslySetInnerHTML={{ __html: fabricationContent.processus.subtitle }} />
          </div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-1 bg-gradient-to-r from-primary-200 via-accent-300 to-secondary-200 rounded-full" />
              
              {fabricationContent.processus.etapes.map((etape, index) => (
                <div key={index} className="relative">
                  {/* Step card */}
                  <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center relative z-10">
                    {/* Number badge */}
                    <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white ${
                      index === 0 ? 'bg-primary-500' :
                      index === 1 ? 'bg-primary-400' :
                      index === 2 ? 'bg-accent-500' :
                      'bg-secondary-500'
                    }`}>
                      {etape.numero}
                    </div>
                    
                    <h3 className="text-lg font-bold text-metal-800 mb-2">{etape.titre}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: etape.description }} />
                    
                    {/* Duration badge */}
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {etape.duree}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total time */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-card">
                <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Délai total moyen</p>
                  <p className="text-2xl font-bold text-metal-800">7 à 14 jours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          MATÉRIAUX
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 text-secondary-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Qualité Premium
            </span>
            <h2 className="section-title">{fabricationContent.materiaux.title}</h2>
            <p className="section-subtitle mx-auto mt-4" dangerouslySetInnerHTML={{ __html: fabricationContent.materiaux.subtitle }} />
          </div>

          {/* Materials grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {fabricationContent.materiaux.items.map((materiau, index) => (
              <div 
                key={materiau.id}
                className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
                  index === 0 ? 'bg-primary-100 text-primary-600' :
                  index === 1 ? 'bg-accent-100 text-accent-600' :
                  'bg-secondary-100 text-secondary-600'
                }`}>
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-metal-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {materiau.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: materiau.description }} />

                {/* Advantages */}
                <ul className="space-y-2">
                  {materiau.avantages.map((avantage, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className={`w-4 h-4 flex-shrink-0 ${
                        index === 0 ? 'text-primary-500' :
                        index === 1 ? 'text-accent-500' :
                        'text-secondary-500'
                      }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {avantage}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION : NORMES ET CERTIFICATIONS
      ═══════════════════════════════════════════════════════════════════════ */}
      <NormesSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          GARANTIES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-gradient-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fabricationContent.garanties.items.map((garantie, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-bold text-lg">{garantie.titre}</p>
                <p className="text-white/70 text-sm">{garantie.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          AVIS CLIENTS
      ═══════════════════════════════════════════════════════════════════════ */}
      <Reviews 
        reviews={fabricationReviews}
        title="Avis clients sur notre fabrication"
        subtitle="Découvrez les témoignages de nos clients satisfaits par nos rideaux métalliques sur-mesure"
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          ZONE D'INTERVENTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <ZoneInterventionSection 
        serviceName="Fabrication Rideau Métallique"
        serviceSlug="fabrication-rideau-metallique"
        mainCityImage="/images/drm-depannage-rideau-metallique-france-montpellier.webp"
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════════════════ */}
      <FAQ 
        items={faqFabrication} 
        title="Questions sur la Fabrication"
        subtitle={`Tout savoir sur la fabrication de rideaux métalliques à ${siteConfig.city}.`}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════════════════════════════════ */}
      <CTA 
        title={`Besoin d'un rideau métallique sur-mesure à ${siteConfig.city} ?`}
        subtitle="Nos experts se déplacent gratuitement pour prendre vos mesures et établir un devis personnalisé. Fabrication locale, qualité garantie."
      />
    </main>
    </>
  );
}

