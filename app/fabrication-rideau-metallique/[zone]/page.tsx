import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getZoneBySlug, allZones, services } from "@/config/zones";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Reviews, type Review } from "@/components/sections/Reviews";
import { ImageWithFallback, Breadcrumb, generateBreadcrumbSchema } from "@/components/ui";
import { SurMesureLocal, NormesCertificationsLocal, ZoneInterventionSubCity } from "@/components/sections/subcity";

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

  const title = `Fabrication Rideau Métallique ${zone.name} (${zone.postalCode}) | Sur-Mesure | DRM`;
  const description = `🏭 Fabrication rideau métallique sur-mesure à ${zone.name} (${zone.postalCode}). Rideaux à lames pleines, microperforées, grilles. Devis gratuit. ☎️ ${siteConfig.phone}`;

  return {
    title,
    description,
    keywords: [
      `fabrication rideau métallique ${zone.name}`,
      `rideau métallique sur-mesure ${zone.name}`,
      `fabricant rideau métallique ${zone.postalCode}`,
      `grille métallique ${zone.name}`,
    ],
    alternates: {
      canonical: `https://${siteConfig.domain}/fabrication-rideau-metallique/${zone.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://${siteConfig.domain}/fabrication-rideau-metallique/${zone.slug}`,
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
      question: `Où faire fabriquer un rideau métallique à ${zoneName} ?`,
      answer: `DRM fabrique vos rideaux métalliques sur-mesure à ${zoneName} (${postalCode}). Contactez-nous au <strong>${siteConfig.phone}</strong> pour un devis gratuit personnalisé.`,
    },
    {
      question: `Quel est le délai de fabrication à ${zoneName} ?`,
      answer: `Le délai de fabrication est généralement de <strong>2 à 3 semaines</strong> pour ${zoneName}. Ce délai peut varier selon les dimensions et options choisies.`,
    },
    {
      question: `Quels types de rideaux fabriquez-vous pour ${zoneName} ?`,
      answer: `À ${zoneName}, nous fabriquons tous types de rideaux : <strong>lames pleines, microperforées, tubes ondulés, grilles articulées</strong>. Chaque rideau est adapté à vos besoins spécifiques.`,
    },
    {
      question: `Proposez-vous la pose après fabrication à ${zoneName} ?`,
      answer: `Oui, DRM assure la <strong>fabrication ET la pose</strong> à ${zoneName}. Un interlocuteur unique pour votre projet, de la conception à l'installation.`,
    },
    {
      question: `Comment obtenir un devis à ${zoneName} ?`,
      answer: `Appelez le ${siteConfig.phone} ou demandez un devis en ligne. Nous nous déplaçons gratuitement à ${zoneName} pour prendre les mesures exactes.`,
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// AVIS LOCAUX - Optimisés SEO avec Service + Ville explicites
// ─────────────────────────────────────────────────────────────────────────────
function getLocalReviews(zoneName: string): Review[] {
  return [
    {
      name: "Thierry B.",
      rating: 5,
      date: "Il y a 1 mois",
      text: `Fabrication rideau métallique sur-mesure pour mon garage à ${zoneName}. Dimensions non standard (porte cintrée), DRM a trouvé la solution parfaite. Très satisfait de la fabrication rideau métallique réalisée à ${zoneName} !`,
      service: "Fabrication sur-mesure",
      location: zoneName,
    },
    {
      name: "Nathalie L.",
      rating: 5,
      date: "Il y a 2 mois",
      text: `Excellente fabrication de rideau métallique microperforé pour ma boutique de prêt-à-porter à ${zoneName}. Mes vitrines restent visibles même fermées. Je recommande DRM pour toute fabrication rideau métallique à ${zoneName} et environs.`,
      service: "Rideau microperforé",
      location: zoneName,
    },
    {
      name: "François R.",
      rating: 5,
      date: "Il y a 3 semaines",
      text: `DRM a assuré la fabrication d'un nouveau rideau métallique pour mon commerce à ${zoneName}. Remplacement de notre vieux rideau rouillé par un modèle moderne en acier galvanisé. Fabrication rideau métallique de qualité à ${zoneName}.`,
      service: "Fabrication + pose",
      location: zoneName,
    },
    {
      name: "Éric M.",
      rating: 5,
      date: "Il y a 1 mois",
      text: `Fabrication rideau métallique pour mon entrepôt à ${zoneName}. Grande dimension (6m de large), délai respecté et qualité impeccable. L'équipe de fabrication rideau métallique de DRM à ${zoneName} est vraiment professionnelle.`,
      service: "Grand rideau industriel",
      location: zoneName,
    },
    {
      name: "Martine C.",
      rating: 5,
      date: "Il y a 6 semaines",
      text: `Suite à un cambriolage, j'ai fait appel à DRM pour la fabrication d'un rideau métallique renforcé pour ma pharmacie à ${zoneName}. Fabrication rideau métallique certifiée, avec barres anti-effraction. Travail sérieux et garantie 2 ans.`,
      service: "Rideau anti-effraction",
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
  ruler: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18M3 7h12m-9 4h6m-6 4h12m-9 4h6" />
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
export default async function FabricationSubCityPage({ 
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
    { label: "Fabrication", href: "/fabrication-rideau-metallique" },
    { label: zone.name }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Fabrication Rideau Métallique ${zone.name}`,
    description: `Fabrication sur-mesure de rideaux métalliques à ${zone.name} (${zone.postalCode}).`,
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
    serviceType: "Fabrication rideau métallique",
  };

  const otherServices = services.filter(s => s.slug !== "fabrication-rideau-metallique");

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
              alt={`Fabrication rideau métallique ${zone.name}`}
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
                Fabrication sur-mesure
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100 text-white">
                Fabrication Rideau Métallique à {zone.name} ({zone.postalCode})
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200">
                Besoin d&apos;un rideau métallique sur-mesure à {zone.name} ? DRM fabrique votre équipement aux <strong className="text-white">dimensions exactes</strong> de votre local.
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
                  {icons.ruler}
                  <span className="font-medium text-white">Sur-mesure</span>
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

        {/* FABRICATION SUR MESURE LOCAL */}
        <SurMesureLocal 
          zoneName={zone.name} 
          postalCode={zone.postalCode} 
        />

        {/* TYPES DE RIDEAUX */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title">
                Types de rideaux fabriqués à {zone.name}
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                Solutions adaptées à chaque besoin : sécurité, visibilité, ventilation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Lames pleines", desc: "Sécurité maximale, isolation thermique et phonique.", image: "/images/rideau-metallique-lames-pleines-marseille.webp" },
                { title: "Microperforé", desc: "Visibilité produits même fermé, idéal commerces.", image: "/images/rideau-metallique-microperforé.webp" },
                { title: "Tubes ondulés", desc: "Ventilation et visibilité, pour parkings et entrepôts.", image: "/images/Rideau-metallique-dentiste-ste-drm.webp" },
                { title: "Grille articulée", desc: "Design élégant, protection et mise en valeur.", image: "/images/rideau-metallique-grille-articulee-drm-montpellier.webp" },
              ].map((type, idx) => (
                <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
                  <div className="relative h-40">
                    <ImageWithFallback
                      src={type.image}
                      alt={`${type.title} - ${zone.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-metal-800 mb-2">{type.title}</h3>
                    <p className="text-sm text-gray-600">{type.desc}</p>
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
          serviceName="Fabrication Rideau Métallique"
          serviceSlug="fabrication-rideau-metallique"
          zoneImage={zone.image}
          zoneSlug={zone.slug}
        />

        {/* NORMES ET CERTIFICATIONS */}
        <NormesCertificationsLocal 
          zoneName={zone.name} 
          postalCode={zone.postalCode} 
        />

        <FAQ
          items={localFaq}
          title={`Questions fréquentes - ${zone.name}`}
          subtitle={`Tout savoir sur la fabrication de rideau métallique à ${zone.name}.`}
        />

        <CTA
          title={`Un projet de rideau à ${zone.name} ?`}
          subtitle={`Contactez-nous pour un devis gratuit à ${zone.name} (${zone.postalCode}).`}
        />
      </main>
    </>
  );
}

