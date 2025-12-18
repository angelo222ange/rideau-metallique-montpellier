import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { allZones, mainCity as mainCityData, quartiers, communes } from "@/config/zones";
import { CTA } from "@/components/sections/CTA";
import { Breadcrumb, generateBreadcrumbSchema, ImageWithFallback } from "@/components/ui";

// Combine toutes les zones pour la compatibilité
const zones = [mainCityData, ...quartiers, ...communes];

// Fil d'Ariane
const breadcrumbItems = [
  { label: "Zones d'intervention" }
];
const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA (Optimisé pour SEO + LLM)
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `Zones d'Intervention Rideau Métallique ${siteConfig.department} | ${siteConfig.name}`,
  description: `⭐ Rideau métallique à ${siteConfig.city} et ${siteConfig.department}. Zones d'intervention : ${zones.slice(0, 5).map(z => z.name).join(", ")}... ✓ Intervention <1h ✓ 24h/24 ☎️ ${siteConfig.phone}`,
  keywords: [
    `rideau métallique ${siteConfig.department}`,
    `rideau métallique ${siteConfig.city}`,
    ...zones.slice(0, 10).map(z => `rideau métallique ${z.name.toLowerCase()}`),
  ],
  alternates: {
    canonical: `https://${siteConfig.domain}/zones`,
  },
  openGraph: {
    title: `Zones d'Intervention - Rideau Métallique ${siteConfig.department}`,
    description: `Intervention rapide sur ${siteConfig.city} et tout le ${siteConfig.department}. 24h/24, 7j/7.`,
    url: `https://${siteConfig.domain}/zones`,
    siteName: siteConfig.fullName,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: `Zones d'Intervention Rideau Métallique ${siteConfig.department}`,
    description: `Intervention sur ${siteConfig.city} et environs. ☎️ ${siteConfig.phone}`,
  },
};

// Schema.org LocalBusiness avec zones de service
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `https://${siteConfig.domain}/#organization`,
  name: siteConfig.fullName,
  telephone: siteConfig.phone,
  url: `https://${siteConfig.domain}`,
  areaServed: zones.slice(0, 20).map((zone) => ({
    "@type": "City",
    name: zone.name,
    postalCode: zone.postalCode,
  })),
  address: {
    "@type": "PostalAddress",
    streetAddress: "15 Rue Marceau",
    addressLocality: siteConfig.city,
    postalCode: siteConfig.postalCode,
    addressCountry: "FR",
  },
};

export default function ZonesPage() {
  // Utilise les données importées de config/zones.ts
  const allDisplayZones = [...quartiers, ...communes];

  return (
    <>
      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Fil d'Ariane visible */}
      <Breadcrumb items={breadcrumbItems} />
      
      <main className="pt-4">
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-gray-50">
        <div className="container text-center">
          <span className="badge-primary mb-4">📍 Zones d&apos;intervention</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Rideau métallique {siteConfig.city} - Zones d&apos;intervention</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Intervention rapide sur {siteConfig.city} et toute l&apos;agglomération.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{mainCityData.name}</h2>
            <p className="text-primary-100 text-lg mb-6 max-w-2xl mx-auto">
              Basés à {mainCityData.name}, nous intervenons en 1 heure maximum pour tous vos besoins en rideau métallique.
            </p>
            <a href={siteConfig.phoneLink} className="btn-phone inline-flex">📞 {siteConfig.phone}</a>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center mb-12">Toutes nos zones</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allDisplayZones.map((zone) => (
              <Link 
                key={zone.slug} 
                href={`/depannage-rideau-metallique/${zone.slug}`} 
                className="group relative h-32 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={zone.image}
                    alt={`${zone.name} - Dépannage rideau métallique`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-primary-900/80 group-hover:via-primary-900/40 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-end p-3 text-center text-white">
                  <svg className="w-5 h-5 mb-1 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <h3 className="font-semibold text-sm leading-tight text-white">{zone.name}</h3>
                  <p className="text-xs text-white/70">{zone.postalCode}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
    </>
  );
}

