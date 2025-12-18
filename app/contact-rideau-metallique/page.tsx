import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { ConfianceSection, EngagementSection } from "@/components/sections/contact";
import { ImageWithFallback, Breadcrumb, generateBreadcrumbSchema } from "@/components/ui";
import ContactForm from "@/components/forms/ContactForm";

// Fil d'Ariane
const breadcrumbItems = [
  { label: "Contact" }
];
const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA (Optimisé pour SEO + LLM)
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `Contact Rideau Métallique ${siteConfig.city} | Devis Gratuit 24h/24 | DRM`,
  description: `⭐ Contactez DRM ${siteConfig.city} pour vos rideaux métalliques. ☎️ ${siteConfig.phone} - Disponible 24h/24, 7j/7. ✓ Devis gratuit ✓ Réponse sous 24h ✓ 15 Rue Marceau, ${siteConfig.postalCode} ${siteConfig.city}`,
  keywords: [
    "contact rideau métallique Montpellier",
    "devis rideau métallique Montpellier",
    "téléphone dépannage rideau métallique 34",
    "DRM Montpellier contact",
    "rideau métallique Montpellier adresse",
    "demande devis rideau de fer Hérault",
  ],
  alternates: {
    canonical: `https://${siteConfig.domain}/contact-rideau-metallique`,
  },
  openGraph: {
    title: `Contactez DRM - Rideau Métallique Montpellier | ${siteConfig.phone}`,
    description: `Contactez DRM Montpellier pour vos rideaux métalliques. Disponible 24h/24, 7j/7. Devis gratuit et intervention rapide à Montpellier et agglomération.`,
    url: `https://${siteConfig.domain}/contact-rideau-metallique`,
    siteName: siteConfig.fullName,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: `https://${siteConfig.domain}/images/contact/facade-local.webp`,
        width: 1200,
        height: 630,
        alt: `Contact DRM - Rideau métallique ${siteConfig.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contactez DRM - Rideau Métallique Montpellier`,
    description: `Contactez DRM Montpellier pour vos rideaux métalliques. Disponible 24h/24, 7j/7. Devis gratuit.`,
    images: [`https://${siteConfig.domain}/images/contact/facade-local.webp`],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ICON COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
const icons = {
  phone: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  email: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  location: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  send: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  bolt: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// SCHEMA.ORG FAQ - SEO STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// FAQ DATA
// ─────────────────────────────────────────────────────────────────────────────
const faqContact = [
  {
    question: "Qui appeler pour un devis rideau métallique à Montpellier ?",
    answer: `Pour obtenir un devis gratuit pour votre rideau métallique à Montpellier, contactez DRM au <strong>${siteConfig.phone}</strong>. Notre équipe vous répond 7j/7 et vous propose un devis personnalisé sous 24h.`
  },
  {
    question: "Quel est le délai de réponse pour une demande de devis ?",
    answer: "Nous nous engageons à répondre à toute demande de devis sous 24h maximum. Pour les urgences, appelez-nous directement et bénéficiez d'une intervention en moins d'une heure à Montpellier."
  },
  {
    question: "Dans quelles zones intervenez-vous autour de Montpellier ?",
    answer: "DRM intervient dans tout Montpellier et son agglomération dans un rayon de 30km : Castelnau-le-Lez, Lattes, Pérols, Mauguio, Saint-Jean-de-Védas, Juvignac, Grabels, Palavas-les-Flots et toutes les communes environnantes."
  },
  {
    question: "Comment se déroule une demande de devis ?",
    answer: "C'est simple : contactez-nous par téléphone ou via le formulaire. Un technicien vous rappelle pour comprendre votre besoin, puis se déplace gratuitement pour établir un devis précis et sans engagement."
  },
];

// Schema FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqContact.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/<[^>]*>/g, ""),
    },
  })),
};

// Schema ContactPage
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `https://${siteConfig.domain}/contact-rideau-metallique#page`,
  name: `Contact - ${siteConfig.fullName}`,
  description: `Contactez DRM Montpellier pour vos rideaux métalliques. Disponible 24h/24, 7j/7.`,
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": `https://${siteConfig.domain}/#organization`,
    name: siteConfig.fullName,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "15 Rue Marceau",
      addressLocality: siteConfig.city,
      postalCode: siteConfig.postalCode,
      addressCountry: "FR",
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function ContactPage() {
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
      {/* Schema.org ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      
      {/* Fil d'Ariane visible */}
      <Breadcrumb items={breadcrumbItems} />
      
      <main>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-hero">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/50" />
        </div>

        <div className="container relative z-10 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Disponible 24h/24
            </div>

            {/* Title H1 - SEO optimized */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100 text-white">
              Contact rideau métallique {siteConfig.city}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-accent-400 animate-fade-in-up animation-delay-150">
              DRM - Devis Gratuit
            </p>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Une question ? Un besoin urgent ? Notre équipe est à votre écoute 7j/7 pour tous vos projets de rideaux métalliques à Montpellier.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                {icons.bolt}
                <span className="font-medium text-white">Réponse rapide</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                {icons.shield}
                <span className="font-medium text-white">Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <span className="text-yellow-400">{icons.star}</span>
                <span className="font-medium text-white">4.9/5 Google</span>
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
          COORDONNÉES & FORMULAIRE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Colonne Gauche - Coordonnées */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
                {icons.location}
                Nos Coordonnées
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-metal-800 mb-6">
                Nous sommes là pour vous
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre équipe de techniciens qualifiés intervient rapidement dans tout Montpellier et son agglomération. N&apos;hésitez pas à nous contacter !
              </p>

              {/* Cards Coordonnées */}
              <div className="space-y-4">
                {/* Téléphone - Carte principale */}
                <a 
                  href={siteConfig.phoneLink}
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-green-50 to-green-100/50 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-green-700 font-medium mb-1">Téléphone - Urgences 24h/24</p>
                    <p className="text-2xl font-bold text-metal-800 group-hover:text-green-600 transition-colors">
                      {siteConfig.phone}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Appel gratuit • Intervention rapide</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white group-hover:bg-green-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    {icons.email}
                    <span className="sr-only">Email</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                    <p className="text-lg font-bold text-metal-800 group-hover:text-primary-600 transition-colors break-all">
                      {siteConfig.email}
                    </p>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </a>

                {/* Adresse */}
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-200">
                  <div className="w-14 h-14 rounded-xl bg-secondary-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium mb-1">Adresse</p>
                    <p className="text-lg font-bold text-metal-800">
                      {siteConfig.address}
                    </p>
                    <p className="text-sm text-gray-500">Intervention rayon 30km</p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-accent-50 to-primary-50 border border-accent-200">
                  <div className="w-14 h-14 rounded-xl bg-accent-500 flex items-center justify-center flex-shrink-0">
                    {icons.clock}
                    <span className="sr-only">Horaires</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-accent-700 font-medium mb-1">Disponibilité</p>
                    <p className="text-lg font-bold text-metal-800">
                      {siteConfig.openingHours}
                    </p>
                    <p className="text-sm text-gray-500">Y compris week-ends et jours fériés</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Ouvert
                    </span>
                  </div>
                </div>
              </div>

              {/* Image DRM */}
              <div className="mt-8 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="/images/hero/drm-depannage-rideau-metallique-france-montpellier.webp"
                  alt={`DRM - Dépannage rideau métallique ${siteConfig.city}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Colonne Droite - Formulaire */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION : POURQUOI NOUS FAIRE CONFIANCE
      ═══════════════════════════════════════════════════════════════════════ */}
      <ConfianceSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION : NOS ENGAGEMENTS QUALITÉ
      ═══════════════════════════════════════════════════════════════════════ */}
      <EngagementSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          GOOGLE MAPS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-sand-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-50" />
        
        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
              {icons.location}
              Notre Localisation
            </span>
            <h2 className="section-title">Retrouvez-nous à Montpellier</h2>
            <p className="section-subtitle mx-auto mt-4">
              Situés au cœur de Montpellier, nous intervenons rapidement dans toute l&apos;agglomération.
            </p>
          </div>

          {/* Map Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover bg-white p-3">
              {/* Map iframe */}
              <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.8638574739695!2d3.8741413!3d43.6108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af0725dd9db1%3A0x0!2s15%20Rue%20Marceau%2C%2034000%20Montpellier!5e0!3m2!1sfr!2sfr!4v1702000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Localisation DRM Montpellier - 15 Rue Marceau"
                />
              </div>

              {/* Address overlay card */}
              <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:bottom-6 md:w-80 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-metal-800 mb-1">{siteConfig.name}</h3>
                    <p className="text-gray-600 text-sm">{siteConfig.address}</p>
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
                    >
                      Itinéraire
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Zone intervention */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm text-gray-600">
                📍 Montpellier Centre
              </div>
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm text-gray-600">
                📍 Castelnau-le-Lez
              </div>
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm text-gray-600">
                📍 Lattes
              </div>
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm text-gray-600">
                📍 Pérols
              </div>
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm text-gray-600">
                📍 Saint-Jean-de-Védas
              </div>
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm text-gray-600">
                📍 +15 communes
              </div>
            </div>
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
                <span className="text-sm font-semibold text-white/80">Urgence 24h/24</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Rideau métallique bloqué ?</h2>
              <p className="text-white/80 mt-1">Intervention en moins d&apos;1h à Montpellier et agglomération</p>
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
          FAQ
      ═══════════════════════════════════════════════════════════════════════ */}
      <FAQ 
        items={faqContact} 
        title="Questions Fréquentes - Contact"
        subtitle={`Tout savoir sur la prise de contact avec DRM à ${siteConfig.city}.`}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════════════════════════════════ */}
      <CTA 
        title="Prêt à démarrer votre projet ?"
        subtitle={`Contactez-nous dès maintenant pour un devis gratuit et une intervention rapide à ${siteConfig.city}.`}
      />
    </main>
    </>
  );
}
