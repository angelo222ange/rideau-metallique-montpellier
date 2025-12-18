"use client";

import { siteConfig } from "@/config/site";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface WhyChooseUsProps {
  zoneName: string;
  postalCode: string;
  serviceName: string;
  serviceSlug: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons = {
  star: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  mapPin: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  clock: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  certificate: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  tools: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  check: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT BY SERVICE
// ─────────────────────────────────────────────────────────────────────────────
function getServiceContent(serviceName: string, zoneName: string, postalCode: string) {
  const baseContent = {
    depannage: {
      badge: "Pourquoi nous choisir",
      title: `Pourquoi choisir DRM pour votre dépannage à ${zoneName} ?`,
      subtitle: `Depuis plus de 25 ans, DRM est le spécialiste du dépannage rideau métallique à ${zoneName} (${postalCode}) et dans toute l'agglomération montpelliéraine.`,
      advantages: [
        {
          icon: "mapPin",
          title: `Proximité ${zoneName}`,
          description: `Notre équipe connaît parfaitement ${zoneName} et ses environs. Nous intervenons rapidement grâce à notre connaissance du terrain et de la circulation locale.`,
          stat: "-30 min",
          statLabel: "trajet moyen",
        },
        {
          icon: "clock",
          title: "Réactivité 24h/24",
          description: `Urgence à ${zoneName} ? Nos techniciens sont disponibles jour et nuit, week-ends et jours fériés compris. Intervention garantie en moins d'1 heure.`,
          stat: "<1h",
          statLabel: "d'intervention",
        },
        {
          icon: "tools",
          title: "Expertise complète",
          description: "Toutes marques, tous modèles de rideaux métalliques. Nos techniciens sont formés et équipés pour résoudre tout type de panne sur place.",
          stat: "100%",
          statLabel: "des pannes",
        },
        {
          icon: "shield",
          title: "Garantie & SAV",
          description: `Chaque intervention à ${zoneName} est garantie 1 an pièces et main d'œuvre. Un problème après notre passage ? Nous revenons gratuitement.`,
          stat: "1 an",
          statLabel: "de garantie",
        },
      ],
      features: [
        `Intervention rapide à ${zoneName} et environs`,
        "Devis gratuit et transparent sur place",
        "Paiement après intervention uniquement",
        "Pièces détachées d'origine en stock",
        `Technicien dédié pour ${zoneName}`,
        "Facture détaillée avec TVA",
      ],
    },
    fabrication: {
      badge: "Pourquoi nous choisir",
      title: `Pourquoi choisir DRM pour votre fabrication à ${zoneName} ?`,
      subtitle: `DRM fabrique vos rideaux métalliques sur-mesure pour ${zoneName} (${postalCode}). Qualité française, installation incluse.`,
      advantages: [
        {
          icon: "mapPin",
          title: `Installation à ${zoneName}`,
          description: `Nous prenons les mesures sur place à ${zoneName} et assurons l'installation complète de votre rideau métallique.`,
          stat: "100%",
          statLabel: "sur-mesure",
        },
        {
          icon: "certificate",
          title: "Normes CE",
          description: "Tous nos rideaux sont conformes aux normes européennes. Certification et documentation fournies à la livraison.",
          stat: "CE",
          statLabel: "certifié",
        },
        {
          icon: "tools",
          title: "Fabrication française",
          description: "Vos rideaux sont fabriqués dans nos ateliers en France avec des matériaux de première qualité.",
          stat: "2-3 sem",
          statLabel: "délai moyen",
        },
        {
          icon: "shield",
          title: "Garantie fabricant",
          description: `Garantie 2 ans sur tous nos rideaux métalliques installés à ${zoneName}. SAV inclus pendant toute la durée.`,
          stat: "2 ans",
          statLabel: "de garantie",
        },
      ],
      features: [
        `Prise de mesures gratuite à ${zoneName}`,
        "Fabrication sur-mesure en France",
        "Installation par nos équipes",
        "Respect des normes CE",
        "Garantie 2 ans pièces et main d'œuvre",
        "SAV réactif local",
      ],
    },
    entretien: {
      badge: "Pourquoi nous choisir",
      title: `Pourquoi choisir DRM pour l'entretien à ${zoneName} ?`,
      subtitle: `Un entretien régulier à ${zoneName} (${postalCode}) prolonge la durée de vie de votre rideau métallique et prévient les pannes coûteuses.`,
      advantages: [
        {
          icon: "mapPin",
          title: `Passage régulier à ${zoneName}`,
          description: `Nos techniciens passent régulièrement à ${zoneName} pour les contrats d'entretien. Planification flexible selon vos besoins.`,
          stat: "1-4x",
          statLabel: "par an",
        },
        {
          icon: "clock",
          title: "Intervention rapide",
          description: "En cas de panne, les clients sous contrat bénéficient d'une priorité d'intervention et de tarifs préférentiels.",
          stat: "-50%",
          statLabel: "temps attente",
        },
        {
          icon: "tools",
          title: "Entretien complet",
          description: "Lubrification, réglages, inspection des pièces d'usure, test de sécurité. Un rapport détaillé après chaque passage.",
          stat: "15 pts",
          statLabel: "de contrôle",
        },
        {
          icon: "shield",
          title: "Économies garanties",
          description: "L'entretien préventif réduit de 70% les risques de panne. Évitez les réparations coûteuses et les arrêts d'activité.",
          stat: "-70%",
          statLabel: "de pannes",
        },
      ],
      features: [
        `Contrat personnalisé pour ${zoneName}`,
        "Rapport d'intervention détaillé",
        "Priorité en cas de panne",
        "Tarifs préférentiels réparations",
        "Remplacement pièces d'usure inclus",
        "Rappel automatique des passages",
      ],
    },
    installation: {
      badge: "Pourquoi nous choisir",
      title: `Pourquoi choisir DRM pour l'installation à ${zoneName} ?`,
      subtitle: `DRM installe votre rideau métallique à ${zoneName} (${postalCode}) dans les règles de l'art. Conseils, pose et mise en service inclus.`,
      advantages: [
        {
          icon: "mapPin",
          title: `Étude sur site à ${zoneName}`,
          description: `Nous nous déplaçons gratuitement à ${zoneName} pour évaluer vos besoins et prendre les mesures exactes.`,
          stat: "Gratuit",
          statLabel: "le déplacement",
        },
        {
          icon: "clock",
          title: "Installation rapide",
          description: "La plupart des installations sont réalisées en une journée. Vous pouvez utiliser votre rideau dès le soir même.",
          stat: "1 jour",
          statLabel: "installation",
        },
        {
          icon: "tools",
          title: "Pose professionnelle",
          description: "Fixation renforcée, raccordement électrique, programmation télécommande. Tout est inclus dans nos installations.",
          stat: "Clé en",
          statLabel: "main",
        },
        {
          icon: "shield",
          title: "Formation incluse",
          description: `Nous formons vos équipes à ${zoneName} sur l'utilisation et l'entretien quotidien de votre nouveau rideau.`,
          stat: "2 ans",
          statLabel: "de garantie",
        },
      ],
      features: [
        `Visite technique gratuite à ${zoneName}`,
        "Devis détaillé sans engagement",
        "Installation en 1 journée",
        "Raccordement électrique inclus",
        "Formation utilisateur",
        "Garantie 2 ans complète",
      ],
    },
    motorisation: {
      badge: "Pourquoi nous choisir",
      title: `Pourquoi choisir DRM pour la motorisation à ${zoneName} ?`,
      subtitle: `Motorisez votre rideau métallique à ${zoneName} (${postalCode}). Confort, sécurité et gain de temps garantis.`,
      advantages: [
        {
          icon: "mapPin",
          title: `Service à ${zoneName}`,
          description: `Nous motorisons tous types de rideaux à ${zoneName}. Étude de faisabilité gratuite sur place.`,
          stat: "98%",
          statLabel: "motorisables",
        },
        {
          icon: "clock",
          title: "Pose en ½ journée",
          description: "La motorisation d'un rideau existant prend généralement une demi-journée. Pas besoin de fermer votre commerce.",
          stat: "4h",
          statLabel: "en moyenne",
        },
        {
          icon: "tools",
          title: "Toutes marques",
          description: "Somfy, Nice, Simu, BFT... Nous installons les meilleures marques de moteurs avec garantie constructeur.",
          stat: "5+",
          statLabel: "marques",
        },
        {
          icon: "shield",
          title: "SAV inclus",
          description: `En cas de problème avec votre motorisation à ${zoneName}, notre équipe intervient rapidement.`,
          stat: "2 ans",
          statLabel: "de garantie",
        },
      ],
      features: [
        `Étude gratuite à ${zoneName}`,
        "Moteurs de grandes marques",
        "Télécommande incluse",
        "Pose propre et soignée",
        "Formation à l'utilisation",
        "SAV réactif local",
      ],
    },
  };

  // Map service slug to content key
  const serviceKey = serviceName.toLowerCase().includes("dépannage") ? "depannage"
    : serviceName.toLowerCase().includes("fabrication") ? "fabrication"
    : serviceName.toLowerCase().includes("entretien") ? "entretien"
    : serviceName.toLowerCase().includes("installation") ? "installation"
    : serviceName.toLowerCase().includes("motorisation") ? "motorisation"
    : "depannage";

  return baseContent[serviceKey as keyof typeof baseContent];
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function WhyChooseUs({ zoneName, postalCode, serviceName, serviceSlug }: WhyChooseUsProps) {
  const content = getServiceContent(serviceName, zoneName, postalCode);
  const iconMap: Record<string, JSX.Element> = icons;

  return (
    <section className="section bg-sand-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-100 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold mb-4">
            {icons.star}
            {content.badge}
          </span>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            {content.subtitle}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {content.advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  index % 2 === 0 
                    ? 'bg-primary-50 group-hover:bg-primary-100 text-primary-600' 
                    : 'bg-secondary-50 group-hover:bg-secondary-100 text-secondary-600'
                }`}>
                  {iconMap[advantage.icon] || icons.check}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`text-lg font-bold transition-colors ${
                      index % 2 === 0 
                        ? 'text-metal-800 group-hover:text-primary-700' 
                        : 'text-metal-800 group-hover:text-secondary-600'
                    }`}>
                      {advantage.title}
                    </h3>
                    <div className="text-right flex-shrink-0">
                      <p className={`text-xl font-bold ${
                        index % 2 === 0 ? 'text-primary-600' : 'text-secondary-500'
                      }`}>
                        {advantage.stat}
                      </p>
                      <p className="text-xs text-gray-500">{advantage.statLabel}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Checklist */}
        <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto shadow-card animate-fade-in-up animation-delay-400">
          <h3 className="text-xl font-bold text-metal-800 text-center mb-6">
            Ce que vous obtenez avec DRM à {zoneName}
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {content.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                  {icons.check}
                </span>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={siteConfig.phoneLink} className="btn-phone">
              {icons.phone}
              {siteConfig.phone}
            </a>
            <a href="/contact-rideau-metallique" className="btn-secondary">
              Demander un devis gratuit
            </a>
          </div>
        </div>

        {/* Local SEO hidden content */}
        <div className="sr-only">
          <p>
            DRM est votre spécialiste {serviceName.toLowerCase()} rideau métallique à {zoneName} ({postalCode}). 
            Intervention rapide, devis gratuit, garantie incluse. Contactez-nous au {siteConfig.phone}.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

