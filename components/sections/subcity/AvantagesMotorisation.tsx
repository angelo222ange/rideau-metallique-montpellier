"use client";

import { siteConfig } from "@/config/site";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface AvantagesMotorisationProps {
  zoneName: string;
  postalCode: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons = {
  finger: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
    </svg>
  ),
  clock: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  check: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  bolt: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
function getAvantages(zoneName: string) {
  return [
    {
      id: "confort",
      icon: "finger",
      name: "Confort au quotidien",
      description: `Ouvrez et fermez votre rideau métallique en 1 clic à ${zoneName}. Plus besoin de manivelle ou d'efforts physiques, même par mauvais temps.`,
      features: [
        "Ouverture en 1 clic",
        "Télécommande incluse",
        "Commande possible par smartphone",
        "Plus de manivelle à tourner",
      ],
      stat: "10 sec",
      statLabel: "pour ouvrir",
      color: "primary",
      highlight: true,
    },
    {
      id: "temps",
      icon: "clock",
      name: "Gain de temps",
      description: `Gagnez du temps chaque jour à ${zoneName}. L'ouverture motorisée est 10x plus rapide qu'une ouverture manuelle.`,
      features: [
        "Ouverture rapide (10-15 secondes)",
        "Fermeture automatique programmable",
        "Pas d'attente sous la pluie",
        "Idéal ouvertures fréquentes",
      ],
      stat: "10x",
      statLabel: "plus rapide",
      color: "secondary",
      highlight: false,
    },
    {
      id: "securite",
      icon: "shield",
      name: "Sécurité renforcée",
      description: `Renforcez la sécurité de votre local à ${zoneName}. Le moteur verrouille automatiquement le rideau en position fermée.`,
      features: [
        "Verrouillage automatique",
        "Détection d'obstacles",
        "Anti-relevage intégré",
        "Batterie de secours optionnelle",
      ],
      stat: "100%",
      statLabel: "verrouillage auto",
      color: "accent",
      highlight: false,
    },
    {
      id: "sante",
      icon: "heart",
      name: "Préservation santé",
      description: `Préservez votre dos et vos articulations à ${zoneName}. Plus de mouvements répétitifs ni d'efforts pour manipuler votre rideau.`,
      features: [
        "Zéro effort physique",
        "Fini les problèmes de dos",
        "Accessible à tous",
        "Moins de fatigue quotidienne",
      ],
      stat: "0",
      statLabel: "effort physique",
      color: "primary",
      highlight: false,
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function AvantagesMotorisation({ zoneName, postalCode }: AvantagesMotorisationProps) {
  const avantages = getAvantages(zoneName);

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-100 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 text-secondary-700 text-sm font-semibold mb-4">
            {icons.bolt}
            Automatisation
          </span>
          <h2 className="section-title">
            Pourquoi motoriser votre rideau à {zoneName} ?
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            La motorisation de rideau métallique à {zoneName} ({postalCode}) offre confort, sécurité et gain de temps au quotidien.
          </p>
        </div>

        {/* Avantages Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {avantages.map((avantage, index) => (
            <div 
              key={avantage.id}
              className={`group relative bg-white rounded-3xl p-6 transition-all duration-300 animate-fade-in-up border-2 ${
                avantage.highlight 
                  ? 'border-secondary-300 shadow-xl' 
                  : 'border-gray-100 shadow-card hover:shadow-card-hover hover:border-primary-200'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {avantage.highlight && (
                <div className="absolute -top-3 right-6">
                  <span className="inline-flex items-center gap-1.5 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {icons.star}
                    Plébiscité
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  avantage.color === "primary" 
                    ? 'bg-primary-50 group-hover:bg-primary-100 text-primary-600' 
                    : avantage.color === "secondary"
                    ? 'bg-secondary-50 group-hover:bg-secondary-100 text-secondary-600'
                    : 'bg-accent-50 group-hover:bg-accent-100 text-accent-600'
                }`}>
                  {icons[avantage.icon as keyof typeof icons]}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-metal-800 mb-1 group-hover:text-primary-700 transition-colors">
                    {avantage.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-2xl font-bold ${
                      avantage.color === "primary" 
                        ? 'text-primary-600' 
                        : avantage.color === "secondary"
                        ? 'text-secondary-600'
                        : 'text-accent-600'
                    }`}>{avantage.stat}</span>
                    <span className="text-sm text-gray-500">{avantage.statLabel}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {avantage.description}
              </p>

              <ul className="space-y-2">
                {avantage.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                      {icons.check}
                    </span>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-xl mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">98%</div>
              <div className="text-sm text-primary-100">clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">2 ans</div>
              <div className="text-sm text-primary-100">garantie moteur</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">½ jour</div>
              <div className="text-sm text-primary-100">d&apos;installation</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">15+</div>
              <div className="text-sm text-primary-100">ans d&apos;expérience</div>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-sand-100 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-metal-800 mb-2">
                Prêt à motoriser votre rideau à {zoneName} ?
              </h3>
              <p className="text-gray-600">
                Devis gratuit et conseils personnalisés pour votre projet de motorisation.
              </p>
            </div>
            <a 
              href={siteConfig.phoneLink} 
              className="btn-phone flex-shrink-0"
            >
              {icons.phone}
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Local SEO hidden content */}
        <div className="sr-only">
          <p>
            Motorisation rideau métallique à {zoneName} ({postalCode}). 
            DRM installe des moteurs pour rideau métallique : confort, gain de temps, sécurité renforcée.
            Devis gratuit pour motorisation rideau métallique à {zoneName}.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AvantagesMotorisation;

