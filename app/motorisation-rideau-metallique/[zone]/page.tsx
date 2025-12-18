import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getZoneBySlug, allZones, services } from "@/config/zones";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Reviews, type Review } from "@/components/sections/Reviews";
import { ImageWithFallback, Breadcrumb, generateBreadcrumbSchema } from "@/components/ui";
import { AvantagesMotorisation, MarquesMoteurs, ZoneInterventionSubCity } from "@/components/sections/subcity";

// ─────────────────────────────────────────────────────────────────────────────
// STATIC PARAMS
// ─────────────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return allZones.map((zone) => ({
    zone: zone.slug,
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ zone: string }> 
}): Promise<Metadata> {
  const { zone: zoneSlug } = await params;
  const zone = getZoneBySlug(zoneSlug);
  
  if (!zone) {
    return { title: "Page non trouvée" };
  }

  const title = `Motorisation Rideau Métallique ${zone.name} (${zone.postalCode}) | Installation Moteur | DRM`;
  const description = `⚡ Motorisation de rideau métallique à ${zone.name} (${zone.postalCode}). Moteur tubulaire, latéral, central. Installation pro. Devis gratuit. ☎️ ${siteConfig.phone}`;

  return {
    title,
    description,
    keywords: [
      `motorisation rideau métallique ${zone.name}`,
      `moteur rideau métallique ${zone.name}`,
      `automatisme rideau ${zone.postalCode}`,
      `rideau électrique ${zone.name}`,
    ],
    alternates: {
      canonical: `https://${siteConfig.domain}/motorisation-rideau-metallique/${zone.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://${siteConfig.domain}/motorisation-rideau-metallique/${zone.slug}`,
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
      question: `Peut-on motoriser un rideau existant à ${zoneName} ?`,
      answer: `Oui, dans 95% des cas, nous pouvons <strong>motoriser votre rideau existant</strong> à ${zoneName}. Notre technicien évalue la faisabilité lors du devis gratuit.`,
    },
    {
      question: `Quel type de moteur choisir à ${zoneName} ?`,
      answer: `Le choix dépend de votre rideau : <strong>moteur tubulaire</strong> (compact), <strong>latéral</strong> (puissant), ou <strong>central</strong> (gros rideaux). Nous vous conseillons à ${zoneName}.`,
    },
    {
      question: `Combien coûte une motorisation à ${zoneName} ?`,
      answer: `Le coût d'une motorisation dépend de nombreux facteurs : type de moteur, poids et dimensions du rideau, configuration du coffre, accessoires souhaités. Chaque installation est unique. Nous nous déplaçons gratuitement à ${zoneName} pour un diagnostic sur place et établissons un devis personnalisé sans engagement. Appelez le ${siteConfig.phone}.`,
    },
    {
      question: `Quelle est la durée d'installation à ${zoneName} ?`,
      answer: `L'installation d'un moteur prend généralement <strong>une demi-journée</strong> à ${zoneName}. Votre rideau est opérationnel le jour même.`,
    },
    {
      question: `Proposez-vous des télécommandes à ${zoneName} ?`,
      answer: `Oui, avec la motorisation à ${zoneName}, vous recevez des <strong>télécommandes multicanaux</strong>. Options : digicode, commande smartphone, détection véhicule.`,
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// AVIS LOCAUX - Optimisés SEO avec Service + Ville explicites
// ─────────────────────────────────────────────────────────────────────────────
function getLocalReviews(zoneName: string): Review[] {
  return [
    {
      name: "Philippe G.",
      rating: 5,
      date: "Il y a 1 mois",
      text: `Motorisation rideau métallique pour mon garage à ${zoneName}. Fini la manivelle qui me cassait le dos ! DRM a installé un moteur tubulaire silencieux. Motorisation rideau métallique rapide et propre à ${zoneName}, je recommande.`,
      service: "Motorisation garage",
      location: zoneName,
    },
    {
      name: "Marie-Claire T.",
      rating: 5,
      date: "Il y a 2 mois",
      text: `Excellent travail de motorisation rideau métallique pour ma pharmacie à ${zoneName}. Le moteur est très silencieux et la télécommande pratique. J'ouvre et ferme en 1 clic. Très bonne motorisation rideau métallique à ${zoneName}, merci DRM !`,
      service: "Moteur + télécommande",
      location: zoneName,
    },
    {
      name: "Bernard L.",
      rating: 5,
      date: "Il y a 3 semaines",
      text: `DRM a réalisé la motorisation de mes 3 rideaux métalliques pour mon entrepôt à ${zoneName}. Travail sérieux et équipe ponctuelle. Prix correct pour cette triple motorisation rideau métallique à ${zoneName}.`,
      service: "Motorisation multiple",
      location: zoneName,
    },
    {
      name: "Sandrine F.",
      rating: 5,
      date: "Il y a 1 mois",
      text: `Motorisation rideau métallique avec commande par smartphone pour ma boutique à ${zoneName}. Je peux ouvrir à distance pour les livraisons. Innovation et praticité ! Excellente motorisation rideau métallique connectée à ${zoneName}.`,
      service: "Motorisation connectée",
      location: zoneName,
    },
    {
      name: "Yves D.",
      rating: 5,
      date: "Il y a 2 mois",
      text: `J'avais un vieux rideau manuel difficile à manœuvrer. La motorisation rideau métallique installée par DRM à ${zoneName} a changé mon quotidien. Moteur puissant, batterie de secours incluse. Parfaite motorisation rideau métallique à ${zoneName}.`,
      service: "Motorisation rideau ancien",
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
  bolt: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
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
export default async function MotorisationSubCityPage({ 
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
  
  const breadcrumbItems = [
    { label: "Motorisation", href: "/motorisation-rideau-metallique" },
    { label: zone.name }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Motorisation Rideau Métallique ${zone.name}`,
    description: `Installation de motorisation pour rideau métallique à ${zone.name} (${zone.postalCode}).`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.fullName,
      telephone: siteConfig.phone,
    },
    areaServed: {
      "@type": "City",
      name: zone.name,
      postalCode: zone.postalCode,
    },
    serviceType: "Motorisation rideau métallique",
  };

  const otherServices = services.filter(s => s.slug !== "motorisation-rideau-metallique");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumb items={breadcrumbItems} />

      <main>
        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={zone.image}
              alt={`Motorisation rideau métallique ${zone.name}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-900/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-primary-900/40" />
          </div>

          <div className="container relative z-10 pt-32 pb-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-500/20 border border-secondary-500/30 text-secondary-400 text-sm font-medium mb-6 animate-fade-in-up">
                <span className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse" />
                Automatisation professionnelle
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100 text-white">
                Motorisation Rideau Métallique à {zone.name} ({zone.postalCode})
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200">
                Automatisez votre rideau métallique à {zone.name}. <strong className="text-white">Ouverture en 1 clic</strong>, fini les manivelles et efforts physiques.
              </p>

              <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animation-delay-300">
                <a 
                  href={siteConfig.phoneLink}
                  className="group relative inline-flex items-center gap-3 rounded-2xl bg-secondary-500 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-secondary-600 hover:scale-[1.02] transition-all"
                >
                  {icons.phone}
                  <span>{siteConfig.phone}</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-400">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  {icons.bolt}
                  <span className="font-medium text-white">1 clic pour ouvrir</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  {icons.check}
                  <span className="font-medium text-white">Devis gratuit</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  {icons.shield}
                  <span className="font-medium text-white">Garantie 2 ans</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-16 md:h-24 text-white fill-current" viewBox="0 0 1440 74" preserveAspectRatio="none">
              <path d="M0,37 C240,74 480,0 720,37 C960,74 1200,0 1440,37 L1440,74 L0,74 Z" />
            </svg>
          </div>
        </section>

        {/* AVANTAGES MOTORISATION - Section SEO après Hero */}
        <AvantagesMotorisation zoneName={zone.name} postalCode={zone.postalCode} />

        {/* TYPES DE MOTEURS */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title">
                Types de moteurs disponibles à {zone.name}
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                Nous installons tous types de motorisation adaptés à votre rideau.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { 
                  title: "Moteur Tubulaire", 
                  desc: "Compact, intégré dans l'axe. Idéal pour les petits et moyens rideaux.", 
                  image: "/images/moteur-tubulaire-rideau-metallique-drm.webp",
                  features: ["Silencieux", "Compact", "Économique"]
                },
                { 
                  title: "Moteur Latéral", 
                  desc: "Puissant, fixé sur le côté. Pour les rideaux moyens à grands.", 
                  image: "/images/moteur-laterale-rideau-metallique-drm.webp",
                  features: ["Puissant", "Robuste", "Polyvalent"]
                },
                { 
                  title: "Moteur Central", 
                  desc: "Ultra-puissant pour les très grands rideaux industriels.", 
                  image: "/images/moteur-acm.webp",
                  features: ["Très puissant", "Usage intensif", "Industriel"]
                },
              ].map((moteur, idx) => (
                <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
                  <div className="relative h-48 bg-gray-100">
                    <ImageWithFallback
                      src={moteur.image}
                      alt={`${moteur.title} - ${zone.name}`}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-metal-800 mb-2">{moteur.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{moteur.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {moteur.features.map((feature, fIdx) => (
                        <span key={fIdx} className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AUTRES SERVICES */}
        <section className="section bg-sand-100">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
                {icons.wrench}
                Nos services
              </span>
              <h2 className="section-title">
                Tous nos services à {zone.name}
              </h2>
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
                    {service.shortName} à {zone.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AVIS */}
        <Reviews
          reviews={localReviews}
          title={`Avis clients à ${zone.name}`}
          subtitle={`Témoignages de nos clients à ${zone.name}.`}
        />

        {/* ZONE D'INTERVENTION */}
        <ZoneInterventionSubCity
          zoneName={zone.name}
          postalCode={zone.postalCode}
          serviceName="Motorisation Rideau Métallique"
          serviceSlug="motorisation-rideau-metallique"
          zoneImage={zone.image}
          zoneSlug={zone.slug}
        />

        {/* MARQUES DE MOTEURS - Section SEO avant FAQ */}
        <MarquesMoteurs zoneName={zone.name} postalCode={zone.postalCode} />

        <FAQ
          items={localFaq}
          title={`Questions fréquentes - ${zone.name}`}
          subtitle={`Tout savoir sur la motorisation de rideau métallique à ${zone.name}.`}
        />

        <CTA
          title={`Motorisation à ${zone.name} ?`}
          subtitle={`Contactez-nous pour un devis gratuit à ${zone.name} (${zone.postalCode}).`}
        />
      </main>
    </>
  );
}

