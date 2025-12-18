import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig, zones, services } from "@/config/site";
import Link from "next/link";
import { Services } from "@/components/sections/Services";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Breadcrumb, generateBreadcrumbSchema } from "@/components/ui";
import { getPageContent } from "@/lib/content";
import faqData from "@/content/faq.json";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return zones.filter(zone => !('isMain' in zone && zone.isMain)).map((zone) => ({ slug: zone.slug }));
}

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA (Optimisé pour SEO + LLM)
// ─────────────────────────────────────────────────────────────────────────────
export function generateMetadata({ params }: Props): Metadata {
  const zone = zones.find((z) => z.slug === params.slug);
  if (!zone) return { title: "Zone non trouvée" };

  const title = `Rideau Métallique ${zone.name} (${zone.postalCode}) | Dépannage 24h/24 | ${siteConfig.name}`;
  const description = `⭐ Rideau métallique à ${zone.name} (${zone.postalCode}). Dépannage, installation, motorisation, entretien. ✓ Intervention <1h ✓ 24h/24 ✓ Devis gratuit ☎️ ${siteConfig.phone}`;

  return {
    title,
    description,
    keywords: [
      `rideau métallique ${zone.name}`,
      `dépannage rideau métallique ${zone.name}`,
      `rideau de fer ${zone.name}`,
      `grille métallique ${zone.name}`,
      `rideau métallique ${zone.postalCode}`,
    ],
    alternates: {
      canonical: `https://${siteConfig.domain}/zones/${zone.slug}`,
    },
    openGraph: {
      title: `Rideau Métallique ${zone.name} | Intervention Rapide`,
      description,
      url: `https://${siteConfig.domain}/zones/${zone.slug}`,
      siteName: siteConfig.fullName,
      type: "website",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
    title: `Rideau Métallique ${zone.name}`,
      description: `Intervention rideau métallique à ${zone.name}. 24h/24. ☎️ ${siteConfig.phone}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
      },
    },
  };
}

export default function ZonePage({ params }: Props) {
  const zone = zones.find((z) => z.slug === params.slug);
  if (!zone) notFound();

  // FAQ adaptée à la zone
  const zoneFaq = getPageContent(faqData).map(item => ({
    ...item,
    answer: item.answer.replace(new RegExp(siteConfig.city, 'g'), zone.name),
  })).slice(0, 5);

  // Services avec pages
  const servicesWithPages = services.filter(s => s.hasPage);

  // Fil d'Ariane
  const breadcrumbItems = [
    { label: "Zones d'intervention", href: "/zones" },
    { label: zone.name }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  // Schema.org Service local
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://${siteConfig.domain}/zones/${zone.slug}#service`,
    name: `Rideau Métallique ${zone.name}`,
    description: `Services de dépannage, installation, motorisation et entretien de rideaux métalliques à ${zone.name} (${zone.postalCode}).`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `https://${siteConfig.domain}/#organization`,
      name: siteConfig.fullName,
      telephone: siteConfig.phone,
    },
    areaServed: {
      "@type": "City",
      name: zone.name,
      postalCode: zone.postalCode,
    },
    serviceType: "Rideau métallique",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Services rideau métallique ${zone.name}`,
      itemListElement: servicesWithPages.map(s => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${s.name} ${zone.name}`,
          url: `https://${siteConfig.domain}/${s.slug}/${zone.slug}`,
        },
      })),
    },
  };

  // Schema.org FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: zoneFaq.map((item) => ({
      "@type": "Question",
      name: item.question.replace(new RegExp(siteConfig.city, 'g'), zone.name),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/<[^>]*>/g, ""),
      },
    })),
  };

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
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-gray-50">
          <div className="container">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                📍 {zone.name} ({zone.postalCode})
              </span>
              
              {/* H1 SEO optimisé */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Rideau métallique {zone.name}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Intervention rapide en moins d&apos;1 heure à {zone.name} ({zone.postalCode}). 
                Dépannage, installation, motorisation et entretien de rideaux métalliques. 
                Disponible 24h/24, 7j/7.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href={siteConfig.phoneLink} className="btn-phone text-lg">
                  📞 {siteConfig.phone}
                </a>
                <Link href="/contact-rideau-metallique" className="btn-secondary">
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services à cette zone */}
      <Services title={`Nos services à ${zone.name}`} />
      
        {/* Liens vers services spécifiques */}
      <section className="section bg-gray-50">
          <div className="container">
            <h2 className="section-title text-center mb-8">
              Tous nos services rideau métallique à {zone.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicesWithPages.map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}/${zone.slug}`}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{service.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {service.name} {zone.name}
                      </h3>
                      <p className="text-sm text-gray-500">{service.shortDesc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contenu SEO */}
        <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Nos services rideau métallique à {zone.name}</h2>
            <p>
              Vous recherchez un spécialiste du <strong>rideau métallique à {zone.name}</strong> ? 
              {siteConfig.name} intervient rapidement sur {zone.name} ({zone.postalCode}) pour tous vos besoins : 
              dépannage, installation, motorisation et entretien.
            </p>
            <h3>Pourquoi choisir {siteConfig.name} à {zone.name} ?</h3>
            <ul>
                <li><strong>Intervention en moins d&apos;1 heure</strong> sur {zone.name}</li>
              <li><strong>Disponible 24h/24</strong>, y compris week-ends et jours fériés</li>
              <li><strong>Devis gratuit</strong> avant intervention</li>
                <li><strong>Techniciens certifiés</strong> toutes marques</li>
                <li><strong>Garantie pièces et main d&apos;œuvre</strong></li>
            </ul>
              <p>
                Que ce soit pour un <Link href={`/depannage-rideau-metallique/${zone.slug}`}>dépannage urgent</Link>, 
                une <Link href={`/installation-rideau-metallique/${zone.slug}`}>nouvelle installation</Link> ou 
                la <Link href={`/motorisation-rideau-metallique/${zone.slug}`}>motorisation</Link> de votre rideau existant, 
                notre équipe se déplace à {zone.name} et dans tout le {siteConfig.department}.
              </p>
          </div>
        </div>
      </section>

        <FAQ items={zoneFaq} title={`Questions fréquentes - Rideau métallique ${zone.name}`} />
      <CTA title={`Besoin d'un dépannage à ${zone.name} ?`} />
    </main>
    </>
  );
}
