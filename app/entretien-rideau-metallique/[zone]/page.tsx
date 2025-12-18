import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getZoneBySlug, allZones, services } from "@/config/zones";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Reviews, type Review } from "@/components/sections/Reviews";
import { ImageWithFallback, Breadcrumb, generateBreadcrumbSchema } from "@/components/ui";
import { ContratEntretien, SignesUsureLocal, ZoneInterventionSubCity } from "@/components/sections/subcity";

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

  const title = `Entretien Rideau Métallique ${zone.name} (${zone.postalCode}) | Contrat Maintenance | DRM`;
  const description = `🔧 Entretien et maintenance de rideau métallique à ${zone.name} (${zone.postalCode}). Contrat annuel, graissage, réglages. Devis gratuit. ☎️ ${siteConfig.phone}`;

  return {
    title,
    description,
    keywords: [
      `entretien rideau métallique ${zone.name}`,
      `maintenance rideau métallique ${zone.name}`,
      `contrat entretien ${zone.postalCode}`,
      `révision rideau métallique ${zone.name}`,
    ],
    alternates: {
      canonical: `https://${siteConfig.domain}/entretien-rideau-metallique/${zone.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://${siteConfig.domain}/entretien-rideau-metallique/${zone.slug}`,
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
      question: `À quelle fréquence entretenir mon rideau à ${zoneName} ?`,
      answer: `Pour un rideau métallique à ${zoneName}, nous recommandons un entretien <strong>1 à 2 fois par an</strong> selon l'intensité d'utilisation. C'est la clé pour éviter les pannes.`,
    },
    {
      question: `Que comprend un contrat d'entretien à ${zoneName} ?`,
      answer: `Notre contrat à ${zoneName} (${postalCode}) inclut : <strong>visite annuelle, graissage complet, réglages, vérification sécurité</strong> et intervention prioritaire en cas de panne.`,
    },
    {
      question: `Quel est le tarif d'un entretien à ${zoneName} ?`,
      answer: `Le coût d'un entretien dépend de plusieurs facteurs : type de rideau, dimensions, motorisation, fréquence des visites souhaitée. Nous proposons plusieurs formules adaptées à tous les besoins. Contactez-nous au ${siteConfig.phone} pour un devis personnalisé gratuit après évaluation de votre installation à ${zoneName}.`,
    },
    {
      question: `L'entretien est-il obligatoire à ${zoneName} ?`,
      answer: `Pour les ERP (commerces, restaurants...) à ${zoneName}, un <strong>entretien annuel est obligatoire</strong> pour la sécurité. Pour les particuliers, c'est fortement recommandé.`,
    },
    {
      question: `Intervenez-vous rapidement à ${zoneName} ?`,
      answer: `Oui, les clients sous contrat à ${zoneName} bénéficient d'une <strong>intervention prioritaire sous 4h</strong> en cas de panne. Appelez le ${siteConfig.phone}.`,
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// AVIS LOCAUX - Optimisés SEO avec Service + Ville explicites
// ─────────────────────────────────────────────────────────────────────────────
function getLocalReviews(zoneName: string): Review[] {
  return [
    {
      name: "Catherine M.",
      rating: 5,
      date: "Il y a 1 mois",
      text: `Contrat d'entretien rideau métallique pour ma boulangerie à ${zoneName}. Le technicien DRM passe 2 fois par an, mon rideau n'a jamais été aussi fluide. Entretien rideau métallique de qualité à ${zoneName}, tranquillité d'esprit assurée.`,
      service: "Contrat maintenance",
      location: zoneName,
    },
    {
      name: "Jean-Marc V.",
      rating: 5,
      date: "Il y a 2 mois",
      text: `Entretien rideau métallique annuel effectué sur mon commerce à ${zoneName}. Technicien ponctuel et minutieux. Il a détecté un début d'usure sur les guides et réparé avant la panne. Excellent service d'entretien rideau métallique à ${zoneName}.`,
      service: "Entretien préventif",
      location: zoneName,
    },
    {
      name: "Isabelle C.",
      rating: 5,
      date: "Il y a 3 semaines",
      text: `Depuis que j'ai souscrit au contrat d'entretien rideau métallique à ${zoneName}, plus aucune panne ! Mon salon de coiffure ouvre et ferme sans souci tous les jours. Entretien rideau métallique professionnel, rapport qualité-prix excellent à ${zoneName}.`,
      service: "Contrat annuel",
      location: zoneName,
    },
    {
      name: "Patrick D.",
      rating: 5,
      date: "Il y a 1 mois",
      text: `J'ai 3 rideaux métalliques dans mon garage automobile à ${zoneName}. DRM assure l'entretien rideau métallique de l'ensemble. Graissage, réglages, tout est fait méticuleusement. Service d'entretien rideau métallique au top à ${zoneName}.`,
      service: "Entretien multi-rideaux",
      location: zoneName,
    },
    {
      name: "Sylvie T.",
      rating: 5,
      date: "Il y a 2 mois",
      text: `Mon rideau commençait à grincer et ralentir. L'entretien rideau métallique réalisé par DRM à ${zoneName} a tout remis en état. Le technicien m'a aussi conseillé sur l'utilisation quotidienne. Très bon entretien rideau métallique à ${zoneName}.`,
      service: "Entretien curatif",
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
  calendar: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
export default async function EntretienSubCityPage({ 
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
    { label: "Entretien", href: "/entretien-rideau-metallique" },
    { label: zone.name }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Entretien Rideau Métallique ${zone.name}`,
    description: `Service d'entretien et maintenance de rideaux métalliques à ${zone.name} (${zone.postalCode}).`,
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
    serviceType: "Entretien rideau métallique",
  };

  const otherServices = services.filter(s => s.slug !== "entretien-rideau-metallique");

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
              alt={`Entretien rideau métallique ${zone.name}`}
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
                Maintenance préventive
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100 text-white">
                Entretien Rideau Métallique à {zone.name} ({zone.postalCode})
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200">
                Prolongez la durée de vie de votre rideau métallique à {zone.name}. <strong className="text-white">Contrat d&apos;entretien</strong> avec visites régulières et intervention prioritaire.
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
                  {icons.calendar}
                  <span className="font-medium text-white">2 visites/an</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  {icons.check}
                  <span className="font-medium text-white">Priorité dépannage</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  {icons.shield}
                  <span className="font-medium text-white">Évite les pannes</span>
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

        {/* CONTRAT D'ENTRETIEN - Section après Hero */}
        <ContratEntretien zoneName={zone.name} postalCode={zone.postalCode} />

        {/* PRESTATIONS */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title">
                Nos prestations d&apos;entretien à {zone.name}
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                Un entretien régulier évite 90% des pannes et prolonge la durée de vie de votre rideau.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Graissage complet", desc: "Lubrification de tous les points de friction pour un fonctionnement fluide." },
                { title: "Réglage tension", desc: "Ajustement des ressorts et de la tension pour un équilibre parfait." },
                { title: "Vérification sécurité", desc: "Contrôle des dispositifs de sécurité et fins de course." },
                { title: "Nettoyage guides", desc: "Élimination des poussières et débris qui bloquent le mécanisme." },
                { title: "Contrôle moteur", desc: "Vérification électrique et mécanique de la motorisation." },
                { title: "Rapport d'intervention", desc: "Compte-rendu détaillé avec recommandations si nécessaire." },
              ].map((prestation, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                      {icons.check}
                    </div>
                    <div>
                      <h3 className="font-bold text-metal-800 mb-1">{prestation.title}</h3>
                      <p className="text-sm text-gray-600">{prestation.desc}</p>
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
          serviceName="Entretien Rideau Métallique"
          serviceSlug="entretien-rideau-metallique"
          zoneImage={zone.image}
          zoneSlug={zone.slug}
        />

        {/* SIGNES D'USURE - Section avant FAQ */}
        <SignesUsureLocal zoneName={zone.name} postalCode={zone.postalCode} />

        <FAQ
          items={localFaq}
          title={`Questions fréquentes - ${zone.name}`}
          subtitle={`Tout savoir sur l'entretien de rideau métallique à ${zone.name}.`}
        />

        <CTA
          title={`Entretien de rideau à ${zone.name} ?`}
          subtitle={`Contactez-nous pour un contrat d'entretien à ${zone.name} (${zone.postalCode}).`}
        />
      </main>
    </>
  );
}

