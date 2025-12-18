import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getZoneBySlug, allZones, services } from "@/config/zones";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Reviews, type Review } from "@/components/sections/Reviews";
import { ImageWithFallback, Breadcrumb, generateBreadcrumbSchema } from "@/components/ui";
import { TypesRideaux, ProcessusInstallationLocal, ZoneInterventionSubCity } from "@/components/sections/subcity";

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

  const title = `Installation Rideau Métallique ${zone.name} (${zone.postalCode}) | Pose Pro | DRM`;
  const description = `🔧 Installation rideau métallique à ${zone.name} (${zone.postalCode}). Pose professionnelle, toutes configurations. Devis gratuit. ☎️ ${siteConfig.phone}`;

  return {
    title,
    description,
    keywords: [
      `installation rideau métallique ${zone.name}`,
      `pose rideau métallique ${zone.name}`,
      `installateur rideau ${zone.postalCode}`,
      `montage rideau métallique ${zone.name}`,
    ],
    alternates: {
      canonical: `https://${siteConfig.domain}/installation-rideau-metallique/${zone.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://${siteConfig.domain}/installation-rideau-metallique/${zone.slug}`,
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
      question: `Comment se passe une installation à ${zoneName} ?`,
      answer: `À ${zoneName}, nous procédons en 4 étapes : <strong>prise de mesures, fabrication sur-mesure, livraison et pose</strong>. Un seul interlocuteur pour tout votre projet.`,
    },
    {
      question: `Quel est le délai d'installation à ${zoneName} ?`,
      answer: `Le délai total à ${zoneName} est de <strong>2 à 4 semaines</strong> : fabrication (2-3 semaines) puis pose (1 journée). Nous nous adaptons à vos contraintes.`,
    },
    {
      question: `Installez-vous tous types de rideaux à ${zoneName} ?`,
      answer: `Oui, à ${zoneName}, nous installons : <strong>rideaux à lames, microperforés, grilles, rideaux coupe-feu</strong>. Toutes dimensions, du petit commerce à l'entrepôt.`,
    },
    {
      question: `L'installation est-elle garantie à ${zoneName} ?`,
      answer: `Oui, toute installation à ${zoneName} est <strong>garantie 2 ans</strong> main d'œuvre et pièces. Nous assurons aussi le SAV et l'entretien.`,
    },
    {
      question: `Proposez-vous des rideaux motorisés à ${zoneName} ?`,
      answer: `Oui, nous installons des rideaux <strong>manuels ou motorisés</strong> à ${zoneName}. La motorisation peut être ajoutée lors de l'installation ou ultérieurement.`,
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// AVIS LOCAUX - Optimisés SEO avec Service + Ville explicites
// ─────────────────────────────────────────────────────────────────────────────
function getLocalReviews(zoneName: string): Review[] {
  return [
    {
      name: "Christophe M.",
      rating: 5,
      date: "Il y a 1 mois",
      text: `Installation rideau métallique impeccable pour ma nouvelle boutique de vêtements à ${zoneName}. L'équipe DRM a géré les contraintes du local ancien sans problème. Installation rideau métallique professionnelle à ${zoneName}, très satisfait !`,
      service: "Installation complète",
      location: zoneName,
    },
    {
      name: "Véronique S.",
      rating: 5,
      date: "Il y a 2 mois",
      text: `Double installation rideau métallique pour mon restaurant à ${zoneName}. Un rideau pour l'entrée principale et un pour la terrasse. Travail soigné, délais respectés. Je recommande DRM pour l'installation rideau métallique à ${zoneName}.`,
      service: "Double installation",
      location: zoneName,
    },
    {
      name: "Ahmed B.",
      rating: 5,
      date: "Il y a 3 semaines",
      text: `Installation rideau métallique grand format pour mon garage à ${zoneName}. Dimension 5m de large, aucun souci. L'équipe était ponctuelle et le travail de qualité. Excellente installation rideau métallique à ${zoneName}, merci DRM !`,
      service: "Pose rideau garage",
      location: zoneName,
    },
    {
      name: "Caroline L.",
      rating: 5,
      date: "Il y a 1 mois",
      text: `J'ai fait appel à DRM pour l'installation d'un rideau métallique motorisé dans ma bijouterie à ${zoneName}. De la prise de mesures à l'installation finale, tout était parfait. Installation rideau métallique sécurisée et esthétique à ${zoneName}.`,
      service: "Installation motorisée",
      location: zoneName,
    },
    {
      name: "Robert G.",
      rating: 5,
      date: "Il y a 6 semaines",
      text: `Remplacement et installation d'un nouveau rideau métallique pour mon local commercial à ${zoneName}. L'ancien était trop vétuste. DRM a géré dépose et installation rideau métallique en une journée. Excellent travail à ${zoneName}.`,
      service: "Remplacement complet",
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
  tools: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
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
export default async function InstallationSubCityPage({ 
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
    { label: "Installation", href: "/installation-rideau-metallique" },
    { label: zone.name }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Installation Rideau Métallique ${zone.name}`,
    description: `Service d'installation de rideaux métalliques à ${zone.name} (${zone.postalCode}).`,
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
    serviceType: "Installation rideau métallique",
  };

  const otherServices = services.filter(s => s.slug !== "installation-rideau-metallique");

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
              alt={`Installation rideau métallique ${zone.name}`}
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
                Pose professionnelle
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100 text-white">
                Installation Rideau Métallique à {zone.name} ({zone.postalCode})
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200">
                Faites installer votre rideau métallique à {zone.name} par nos experts. <strong className="text-white">Pose soignée</strong>, respect des normes, garantie 2 ans.
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
                  {icons.tools}
                  <span className="font-medium text-white">Pose experte</span>
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
            <svg className="w-full h-16 md:h-24 text-sand-100 fill-current" viewBox="0 0 1440 74" preserveAspectRatio="none">
              <path d="M0,37 C240,74 480,0 720,37 C960,74 1200,0 1440,37 L1440,74 L0,74 Z" />
            </svg>
          </div>
        </section>

        {/* TYPES DE RIDEAUX - Section SEO après Hero */}
        <TypesRideaux zoneName={zone.name} postalCode={zone.postalCode} />

        {/* PROCESSUS SIMPLIFIÉ */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title">
                Notre processus d&apos;installation à {zone.name}
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                Une installation en 4 étapes pour un résultat parfait.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Visite & Devis", desc: "Prise de mesures et étude de faisabilité à votre local." },
                { step: "2", title: "Fabrication", desc: "Votre rideau est fabriqué sur-mesure dans nos ateliers." },
                { step: "3", title: "Livraison", desc: "Livraison à la date convenue, directement sur site." },
                { step: "4", title: "Pose & Réglages", desc: "Installation par nos techniciens, tests et formation." },
              ].map((etape, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                    {etape.step}
                  </div>
                  <h3 className="font-bold text-metal-800 mb-2">{etape.title}</h3>
                  <p className="text-sm text-gray-600">{etape.desc}</p>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-200 to-transparent" />
                  )}
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
          serviceName="Installation Rideau Métallique"
          serviceSlug="installation-rideau-metallique"
          zoneImage={zone.image}
          zoneSlug={zone.slug}
        />

        {/* PROCESSUS INSTALLATION DÉTAILLÉ - Section SEO avant FAQ */}
        <ProcessusInstallationLocal zoneName={zone.name} postalCode={zone.postalCode} />

        <FAQ
          items={localFaq}
          title={`Questions fréquentes - ${zone.name}`}
          subtitle={`Tout savoir sur l'installation de rideau métallique à ${zone.name}.`}
        />

        <CTA
          title={`Installation à ${zone.name} ?`}
          subtitle={`Contactez-nous pour un devis gratuit à ${zone.name} (${zone.postalCode}).`}
        />
      </main>
    </>
  );
}

