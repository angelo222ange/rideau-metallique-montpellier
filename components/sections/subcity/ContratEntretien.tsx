"use client";

import { siteConfig } from "@/config/site";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface ContratEntretienProps {
  zoneName: string;
  postalCode: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons = {
  calendar: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  check: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  bolt: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// CONTRAT DATA
// ─────────────────────────────────────────────────────────────────────────────
const contrats = [
  {
    id: "essentiel",
    name: "Essentiel",
    price: "150",
    period: "/an",
    description: "Pour les particuliers et petits commerces",
    features: [
      "1 visite d'entretien/an",
      "Graissage complet",
      "Réglages mécaniques",
      "Rapport d'intervention",
      "Priorité dépannage",
    ],
    highlight: false,
    color: "primary",
  },
  {
    id: "pro",
    name: "Professionnel",
    price: "280",
    period: "/an",
    description: "Recommandé pour les commerces",
    features: [
      "2 visites d'entretien/an",
      "Graissage + nettoyage complet",
      "Réglages mécaniques",
      "Vérification sécurité",
      "Remplacement pièces usure",
      "Priorité dépannage 4h",
      "-15% sur les réparations",
    ],
    highlight: true,
    color: "secondary",
  },
  {
    id: "premium",
    name: "Premium",
    price: "Sur devis",
    period: "",
    description: "Multi-sites et gros volumes",
    features: [
      "Visites illimitées",
      "Entretien complet",
      "Pièces d'usure incluses",
      "Astreinte 24h/24",
      "Technicien dédié",
      "Rapport mensuel",
      "-25% sur les réparations",
    ],
    highlight: false,
    color: "accent",
  },
];

const avantages = [
  {
    icon: "shield",
    title: "-70% de pannes",
    description: "L'entretien préventif évite les blocages et les réparations coûteuses",
  },
  {
    icon: "bolt",
    title: "Priorité intervention",
    description: "En cas de panne, les clients sous contrat passent en priorité",
  },
  {
    icon: "clock",
    title: "+10 ans de durée de vie",
    description: "Un rideau bien entretenu dure significativement plus longtemps",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function ContratEntretien({ zoneName, postalCode }: ContratEntretienProps) {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-4">
            {icons.calendar}
            Contrat de maintenance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            Contrat d&apos;entretien à {zoneName}
            <span className="block text-primary-600 mt-2">
              ({postalCode})
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Protégez votre rideau métallique avec un contrat d&apos;entretien à {zoneName}. 
            Nos techniciens interviennent régulièrement pour prévenir les pannes et prolonger la durée de vie de votre équipement.
          </p>
        </div>

        {/* Avantages */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {avantages.map((avantage, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-sand-100 rounded-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                {icons[avantage.icon as keyof typeof icons]}
              </div>
              <h3 className="font-bold text-metal-800 mb-2">{avantage.title}</h3>
              <p className="text-sm text-gray-600">{avantage.description}</p>
            </div>
          ))}
        </div>

        {/* Contrats Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {contrats.map((contrat, index) => (
            <div 
              key={contrat.id}
              className={`relative rounded-3xl p-6 transition-all duration-300 animate-fade-in-up ${
                contrat.highlight 
                  ? 'bg-gradient-to-b from-secondary-500 to-secondary-600 text-white shadow-xl scale-105 md:scale-110 z-10' 
                  : 'bg-white border-2 border-gray-100 hover:border-primary-200 shadow-card hover:shadow-card-hover'
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {contrat.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-gold-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {icons.star}
                    Recommandé
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${contrat.highlight ? 'text-white' : 'text-metal-800'}`}>
                  {contrat.name}
                </h3>
                <p className={`text-sm mb-4 ${contrat.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                  {contrat.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${contrat.highlight ? 'text-white' : 'text-primary-600'}`}>
                    {contrat.price}
                  </span>
                  {contrat.period && (
                    <span className={`text-lg ${contrat.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                      €{contrat.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {contrat.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      contrat.highlight 
                        ? 'bg-white/20 text-white' 
                        : 'bg-green-100 text-green-600'
                    }`}>
                      {icons.check}
                    </span>
                    <span className={`text-sm ${contrat.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href={siteConfig.phoneLink}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  contrat.highlight 
                    ? 'bg-white text-secondary-600 hover:bg-gray-100' 
                    : 'bg-primary-500 text-white hover:bg-primary-600'
                }`}
              >
                {icons.phone}
                Souscrire
              </a>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-500 text-sm">
            Tous nos contrats incluent une intervention prioritaire en cas de panne à {zoneName}. 
            Appelez le <a href={siteConfig.phoneLink} className="text-primary-600 font-semibold hover:underline">{siteConfig.phone}</a> pour plus d&apos;informations.
          </p>
        </div>

        {/* Local SEO hidden content */}
        <div className="sr-only">
          <p>
            Contrat d&apos;entretien rideau métallique à {zoneName} ({postalCode}). 
            Maintenance préventive, visites régulières et priorité d&apos;intervention. 
            DRM propose des formules adaptées à tous les besoins à {zoneName}.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContratEntretien;

