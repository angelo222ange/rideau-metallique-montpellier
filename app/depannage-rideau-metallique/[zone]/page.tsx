import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getZoneBySlug, allZones, services } from "@/config/zones";
import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Reviews, type Review } from "@/components/sections/Reviews";
import { WhyChooseUs, ZoneInterventionSubCity } from "@/components/sections/subcity";
import { ImageWithFallback, Breadcrumb, generateBreadcrumbSchema } from "@/components/ui";

// ─────────────────────────────────────────────────────────────────────────────
// STATIC PARAMS - Génère toutes les pages SubCity
// ─────────────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return allZones.map((zone) => ({
    zone: zone.slug,
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// METADATA DYNAMIQUE
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ zone: string }> 
}): Promise<Metadata> {
  const { zone: zoneSlug } = await params;
  const zone = getZoneBySlug(zoneSlug);
  
  if (!zone) {
    return {
      title: "Page non trouvée",
    };
  }

  const title = `Dépannage Rideau Métallique ${zone.name} (${zone.postalCode}) | Urgence 24h/24 | DRM`;
  const description = `⚡ Dépannage rideau métallique à ${zone.name} (${zone.postalCode}). Intervention en moins d'1h, 24h/24. Déblocage, réparation urgente. Devis gratuit. ☎️ ${siteConfig.phone}`;

  return {
    title,
    description,
    keywords: [
      `dépannage rideau métallique ${zone.name}`,
      `réparation rideau métallique ${zone.name}`,
      `rideau métallique bloqué ${zone.name}`,
      `urgence rideau métallique ${zone.postalCode}`,
      `déblocage rideau ${zone.name}`,
    ],
    alternates: {
      canonical: `https://${siteConfig.domain}/depannage-rideau-metallique/${zone.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://${siteConfig.domain}/depannage-rideau-metallique/${zone.slug}`,
      siteName: siteConfig.fullName,
      locale: "fr_FR",
      type: "website",
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ LOCALE
// ─────────────────────────────────────────────────────────────────────────────
function getLocalFaq(zoneName: string, postalCode: string) {
  return [
    {
      question: `Qui appeler pour un dépannage rideau métallique à ${zoneName} ?`,
      answer: `Pour un dépannage rideau métallique urgent à ${zoneName} (${postalCode}), contactez DRM au <strong>${siteConfig.phone}</strong>. Notre équipe intervient en moins d'1 heure, 24h/24 et 7j/7.`,
    },
    {
      question: `Quel est le délai d'intervention à ${zoneName} ?`,
      answer: `Notre technicien arrive en <strong>moins d'1 heure</strong> à ${zoneName} et dans tout le secteur ${postalCode}. Nous sommes disponibles 24h/24, même le week-end et les jours fériés.`,
    },
    {
      question: `Combien coûte un dépannage de rideau métallique à ${zoneName} ?`,
      answer: `Le tarif d'un dépannage dépend de nombreux facteurs : type de panne, dimensions du rideau, motorisation, pièces à remplacer, accessibilité. Chaque situation étant unique, nous établissons un devis gratuit et sans engagement après diagnostic sur place à ${zoneName}. Appelez le ${siteConfig.phone} pour une intervention.`,
    },
    {
      question: `Intervenez-vous en urgence la nuit à ${zoneName} ?`,
      answer: `Oui, DRM assure les <strong>dépannages de nuit</strong> à ${zoneName} (${postalCode}). Appelez le ${siteConfig.phone}, un technicien d'astreinte vous répond immédiatement.`,
    },
    {
      question: `Quels types de pannes réparez-vous à ${zoneName} ?`,
      answer: `À ${zoneName}, nous intervenons sur : rideau bloqué, lame cassée, moteur en panne, serrure défaillante, axe tordu, tablier décroché. Toutes marques et tous modèles.`,
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// AVIS LOCAUX - Optimisés SEO avec Service + Ville explicites
// ─────────────────────────────────────────────────────────────────────────────
function getLocalReviews(zoneName: string): Review[] {
  return [
    {
      name: "Laurent M.",
      rating: 5,
      date: "Il y a 2 semaines",
      text: `Excellent service de dépannage rideau métallique à ${zoneName}. Mon rideau de boutique était complètement bloqué un samedi soir, le technicien DRM est intervenu en 45 minutes. Travail soigné, prix correct. Je recommande pour tout dépannage urgent à ${zoneName} !`,
      service: "Dépannage urgence",
      location: zoneName,
    },
    {
      name: "Sophie D.",
      rating: 5,
      date: "Il y a 1 mois",
      text: `Très satisfaite du dépannage rideau métallique pour mon commerce à ${zoneName}. Le rideau ne remontait plus du tout, l'équipe DRM a diagnostiqué un problème de ressort et réparé en moins d'une heure. Service professionnel et réactif à ${zoneName}.`,
      service: "Déblocage rideau",
      location: zoneName,
    },
    {
      name: "Michel P.",
      rating: 5,
      date: "Il y a 3 semaines",
      text: `Dépannage rideau métallique rapide et efficace à ${zoneName}. Mon garage était bloqué en position fermée, impossible d'accéder à mon véhicule. DRM est intervenu en urgence le dimanche matin. Technicien compétent, tarif annoncé respecté. Merci !`,
      service: "Réparation urgente",
      location: zoneName,
    },
    {
      name: "Christelle B.",
      rating: 5,
      date: "Il y a 1 mois",
      text: `Super réactivité pour le dépannage de mon rideau métallique à ${zoneName}. Le moteur était en panne, ils ont tout réparé le jour même. Je recommande DRM pour toute intervention de dépannage rideau métallique dans le secteur de ${zoneName}.`,
      service: "Panne moteur",
      location: zoneName,
    },
    {
      name: "Jean-Pierre R.",
      rating: 5,
      date: "Il y a 2 mois",
      text: `Après plusieurs devis, j'ai choisi DRM pour le dépannage de mon rideau métallique à ${zoneName}. Lames cassées suite à une tentative d'effraction. Intervention rapide, remplacement des lames et renforcement de la serrure. Excellent rapport qualité-prix pour ce dépannage à ${zoneName}.`,
      service: "Remplacement lames",
      location: zoneName,
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons = {
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  clock: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  wrench: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default async function DepannageSubCityPage({ 
  params 
}: { 
  params: Promise<{ zone: string }> 
}) {
  const { zone: zoneSlug } = await params;
  const zone = getZoneBySlug(zoneSlug);

  if (!zone) {
    notFound();
  }

  const localFaq = getLocalFaq(zone.name, zone.postalCode);
  const localReviews = getLocalReviews(zone.name);
  
  // Fil d'Ariane
  const breadcrumbItems = [
    { label: "Dépannage", href: "/depannage-rideau-metallique" },
    { label: zone.name }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  // Schema.org Service Local
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Dépannage Rideau Métallique ${zone.name}`,
    description: `Service de dépannage et réparation de rideaux métalliques à ${zone.name} (${zone.postalCode}). Intervention rapide 24h/24.`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.fullName,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montpellier",
        postalCode: "34000",
        addressCountry: "FR",
      },
    },
    areaServed: {
      "@type": "City",
      name: zone.name,
      postalCode: zone.postalCode,
    },
    serviceType: "Dépannage rideau métallique",
  };

  // Autres services dans cette zone
  const otherServices = services.filter(s => s.slug !== "depannage-rideau-metallique");

  return (
    <>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Fil d'Ariane */}
      <Breadcrumb items={breadcrumbItems} />

      <main>
        {/* ═══════════════════════════════════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src={zone.image}
              alt={`Dépannage rideau métallique ${zone.name}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-900/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-primary-900/40" />
          </div>

          <div className="container relative z-10 pt-32 pb-20">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-500/20 border border-secondary-500/30 text-secondary-400 text-sm font-medium mb-6 animate-fade-in-up">
                <span className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse" />
                Intervention urgente 24h/24
              </div>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100 text-white">
                Dépannage Rideau Métallique à {zone.name} ({zone.postalCode})
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200">
                Votre rideau métallique est bloqué à {zone.name} ? Notre équipe intervient en <strong className="text-white">moins d&apos;1 heure</strong>, 24h/24 et 7j/7. Déblocage, réparation, remplacement de pièces.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animation-delay-300">
                <a 
                  href={siteConfig.phoneLink}
                  className="group relative inline-flex items-center gap-3 rounded-2xl bg-secondary-500 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-secondary-600 hover:scale-[1.02] transition-all"
                >
                  <span className="absolute inset-0 rounded-2xl bg-secondary-500 animate-pulse-ring opacity-75" />
                  {icons.phone}
                  <span className="relative">{siteConfig.phone}</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-400">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  {icons.clock}
                  <span className="font-medium text-white">Intervention &lt;1h</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  {icons.check}
                  <span className="font-medium text-white">Devis gratuit</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  {icons.shield}
                  <span className="font-medium text-white">Garantie 1 an</span>
                </div>
              </div>
            </div>
          </div>

          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-16 md:h-24 text-white fill-current" viewBox="0 0 1440 74" preserveAspectRatio="none">
              <path d="M0,37 C240,74 480,0 720,37 C960,74 1200,0 1440,37 L1440,74 L0,74 Z" />
            </svg>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            POURQUOI CHOISIR DRM À {VILLE}
        ═══════════════════════════════════════════════════════════════════════ */}
        <WhyChooseUs
          zoneName={zone.name}
          postalCode={zone.postalCode}
          serviceName="Dépannage"
          serviceSlug="depannage-rideau-metallique"
        />

        {/* ═══════════════════════════════════════════════════════════════════════
            SERVICES SECTION - Liens vers autres services de la même zone
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
                {icons.wrench}
                Nos services
              </span>
              <h2 className="section-title">
                Tous nos services à {zone.name}
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                En plus du dépannage, DRM propose l&apos;ensemble de ses services à {zone.name} et ses environs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {otherServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}/${zone.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    {icons.wrench}
                  </div>
                  <h3 className="font-bold text-metal-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.shortName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.shortName} de rideau métallique à {zone.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            PANNES SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section bg-sand-100">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title">
                Types de pannes à {zone.name}
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                Notre équipe intervient sur tous types de dysfonctionnements de rideaux métalliques à {zone.name}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Rideau bloqué", desc: `Déblocage rapide de votre rideau à ${zone.name}, quelle que soit la cause.` },
                { title: "Lame cassée", desc: "Remplacement de lames endommagées, toutes dimensions disponibles." },
                { title: "Moteur en panne", desc: "Diagnostic et réparation de motorisation, toutes marques." },
                { title: "Serrure défaillante", desc: "Remplacement de serrure et système de verrouillage." },
                { title: "Axe tordu", desc: "Réparation ou remplacement de l'axe d'enroulement." },
                { title: "Tablier décroché", desc: "Remise en place et sécurisation du tablier." },
              ].map((panne, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center flex-shrink-0">
                      {icons.check}
                    </div>
                    <div>
                      <h3 className="font-bold text-metal-800 mb-1">{panne.title}</h3>
                      <p className="text-sm text-gray-600">{panne.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            AVIS CLIENTS
        ═══════════════════════════════════════════════════════════════════════ */}
        <Reviews
          reviews={localReviews}
          title={`Avis clients à ${zone.name}`}
          subtitle={`Découvrez les témoignages de nos clients satisfaits à ${zone.name} et environs.`}
        />

        {/* ═══════════════════════════════════════════════════════════════════════
            ZONE D'INTERVENTION
        ═══════════════════════════════════════════════════════════════════════ */}
        <ZoneInterventionSubCity
          zoneName={zone.name}
          postalCode={zone.postalCode}
          serviceName="Dépannage Rideau Métallique"
          serviceSlug="depannage-rideau-metallique"
          zoneImage={zone.image}
          zoneSlug={zone.slug}
        />

        {/* ═══════════════════════════════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════════════════════════════ */}
        <FAQ
          items={localFaq}
          title={`Questions fréquentes - ${zone.name}`}
          subtitle={`Tout savoir sur le dépannage de rideau métallique à ${zone.name}.`}
        />

        {/* ═══════════════════════════════════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════════════════════════════════ */}
        <CTA
          title={`Besoin d'un dépannage à ${zone.name} ?`}
          subtitle={`Appelez-nous maintenant pour une intervention rapide à ${zone.name} (${zone.postalCode}).`}
        />
      </main>
    </>
  );
}

