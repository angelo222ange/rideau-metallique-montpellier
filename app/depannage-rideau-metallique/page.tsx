import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Reviews, type Review } from "@/components/sections/Reviews";
import { Breadcrumb, generateBreadcrumbSchema } from "@/components/ui";
import { ZoneInterventionSection } from "@/components/sections/ZoneIntervention";
import faqData from "@/content/faq.json";
import pageData from "@/content/pages/depannage.json";
import depannageReviewsData from "@/content/reviews/depannage.json";

// Cast des reviews pour TypeScript
const depannageReviews = depannageReviewsData as Review[];

const content = getPageContent(pageData);

// Fil d'Ariane
const breadcrumbItems = [
  { label: "Dépannage rideau métallique" }
];
const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA (Optimisé pour SEO + LLM)
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `Dépannage Rideau Métallique ${siteConfig.city} 24h/24 | Urgence`,
  description: `⚡ Dépannage rideau métallique à ${siteConfig.city} (${siteConfig.postalCode}). Intervention en moins d'1h, 24h/24 et 7j/7. Déblocage, réparation, panne moteur. Devis gratuit. ☎️ ${siteConfig.phone}`,
  keywords: [
    `dépannage rideau métallique ${siteConfig.city}`,
    `dépannage rideau de fer ${siteConfig.city}`,
    `rideau métallique bloqué ${siteConfig.city}`,
    `réparation rideau métallique urgence`,
    `déblocage rideau métallique 24h/24`,
  ],
  alternates: {
    canonical: `https://${siteConfig.domain}/depannage-rideau-metallique`,
  },
  openGraph: {
    title: `Dépannage Rideau Métallique ${siteConfig.city} | Urgence 24h/24`,
    description: `Dépannage rideau métallique à ${siteConfig.city}. Intervention <1h, 24h/24. Déblocage, réparation, panne moteur. ☎️ ${siteConfig.phone}`,
    url: `https://${siteConfig.domain}/depannage-rideau-metallique`,
    siteName: siteConfig.fullName,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: `Dépannage Rideau Métallique ${siteConfig.city} 24h/24`,
    description: `Intervention en moins d'1h pour déblocage et réparation rideau métallique. ☎️ ${siteConfig.phone}`,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SCHEMA.ORG - DONNÉES STRUCTURÉES
// ─────────────────────────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://${siteConfig.domain}/depannage-rideau-metallique#service`,
  name: `Dépannage Rideau Métallique ${siteConfig.city}`,
  description: `Service de dépannage d'urgence 24h/24 pour rideaux métalliques bloqués ou endommagés à ${siteConfig.city} (${siteConfig.postalCode}). Intervention en moins d'1 heure.`,
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
  serviceType: "Dépannage rideau métallique urgence",
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "€€",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Types de dépannage",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Déblocage rideau métallique" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Réparation panne moteur" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remplacement pièces cassées" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Réparation lames endommagées" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: getPageContent(faqData).slice(0, 4).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/<[^>]*>/g, ""),
    },
  })),
};

export default function DepannagePage() {
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
      
      {/* Fil d'Ariane visible */}
      <Breadcrumb items={breadcrumbItems} />
      
    <main className="pt-4">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-red-900 via-gray-900 to-gray-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold mb-6">
                {content.hero.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.hero.title}</h1>
              <p className="text-lg text-gray-300 mb-8" dangerouslySetInnerHTML={{ __html: content.hero.subtitle }} />

              <div className="flex flex-wrap gap-4 mb-8">
                <a href={siteConfig.phoneLink} className="btn-phone text-lg">📞 {siteConfig.phone}</a>
                <a href="/contact-rideau-metallique" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">Devis gratuit</a>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {content.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/10 backdrop-blur rounded-xl">
                    <p className="text-3xl font-bold text-primary-400">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/hero/rideau-metallique-hero-depannage-rideau-metallique-montpellier-34.webp" alt={`Dépannage rideau métallique ${siteConfig.city}`} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interventions */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Nos interventions d&apos;urgence</h2>
            <p className="section-subtitle mx-auto">Nous intervenons rapidement pour tous types de pannes.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.interventions.map((item, index) => (
              <div key={index} className="card">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-2xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <Reviews 
        reviews={depannageReviews}
        title="Avis clients sur nos dépannages"
        subtitle="Découvrez les témoignages de nos clients satisfaits par nos interventions d'urgence"
      />

      <ZoneInterventionSection 
        serviceName="Dépannage Rideau Métallique"
        serviceSlug="depannage-rideau-metallique"
        mainCityImage="/images/drm-depannage-rideau-metallique-france-montpellier.webp"
      />
      <FAQ items={getPageContent(faqData).slice(0, 4)} title="Questions sur le dépannage" />
      <CTA title={content.cta.title} subtitle={content.cta.subtitle} />
    </main>
    </>
  );
}
