"use client";

import { siteConfig } from "@/config/site";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface TypesRideauxProps {
  zoneName: string;
  postalCode: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons = {
  shutter: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  eye: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  grid: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  fire: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
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
  wrench: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
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
function getTypesRideaux(zoneName: string) {
  return [
    {
      id: "lames-pleines",
      icon: "shutter",
      name: "Rideaux à lames pleines",
      description: `Sécurité maximale pour votre commerce à ${zoneName}. Les lames pleines en acier galvanisé offrent une protection optimale contre les effractions et les intempéries.`,
      features: [
        "Sécurité maximale anti-effraction",
        "Isolation thermique renforcée",
        "Occultation totale",
        "Idéal commerce, entrepôt",
      ],
      applications: "Commerces, entrepôts, garages",
      highlight: false,
      color: "primary",
    },
    {
      id: "microperfores",
      icon: "eye",
      name: "Rideaux microperforés",
      description: `Alliez sécurité et visibilité pour votre vitrine à ${zoneName}. Les micro-perforations permettent de voir l'intérieur tout en protégeant votre local.`,
      features: [
        "Visibilité de la vitrine",
        "Ventilation naturelle",
        "Protection solaire",
        "Parfait pour boutiques",
      ],
      applications: "Boutiques, vitrines, showrooms",
      highlight: true,
      color: "secondary",
    },
    {
      id: "grilles",
      icon: "grid",
      name: "Grilles articulées",
      description: `Solution élégante pour commerces de centre-ville à ${zoneName}. Les grilles articulées offrent sécurité et transparence totale.`,
      features: [
        "100% de transparence",
        "Design élégant",
        "Légèreté",
        "Idéal centres commerciaux",
      ],
      applications: "Galeries, centres commerciaux, bijouteries",
      highlight: false,
      color: "accent",
    },
    {
      id: "coupe-feu",
      icon: "fire",
      name: "Rideaux coupe-feu",
      description: `Protection incendie certifiée à ${zoneName}. Nos rideaux coupe-feu respectent les normes les plus strictes (1h à 4h de résistance).`,
      features: [
        "Certification coupe-feu",
        "1h à 4h de résistance",
        "Conformité ERP",
        "Sécurité incendie",
      ],
      applications: "ERP, industries, parkings",
      highlight: false,
      color: "primary",
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function TypesRideaux({ zoneName, postalCode }: TypesRideauxProps) {
  const types = getTypesRideaux(zoneName);

  return (
    <section className="section bg-sand-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-100 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl opacity-30" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            {icons.wrench}
            Tous types de rideaux
          </span>
          <h2 className="section-title">
            Types de rideaux installés à {zoneName}
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            À {zoneName} ({postalCode}), nous installons tous types de rideaux métalliques adaptés à votre activité et vos contraintes techniques.
          </p>
        </div>

        {/* Types Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {types.map((type, index) => (
            <div 
              key={type.id}
              className={`group relative bg-white rounded-3xl p-6 transition-all duration-300 animate-fade-in-up border-2 ${
                type.highlight 
                  ? 'border-secondary-300 shadow-xl' 
                  : 'border-gray-100 shadow-card hover:shadow-card-hover hover:border-primary-200'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {type.highlight && (
                <div className="absolute -top-3 right-6">
                  <span className="inline-flex items-center gap-1.5 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {icons.star}
                    Populaire
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  type.color === "primary" 
                    ? 'bg-primary-50 group-hover:bg-primary-100 text-primary-600' 
                    : type.color === "secondary"
                    ? 'bg-secondary-50 group-hover:bg-secondary-100 text-secondary-600'
                    : 'bg-accent-50 group-hover:bg-accent-100 text-accent-600'
                }`}>
                  {icons[type.icon as keyof typeof icons]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-metal-800 mb-1 group-hover:text-primary-700 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-sm text-gray-500">{type.applications}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {type.description}
              </p>

              <ul className="space-y-2">
                {type.features.map((feature, idx) => (
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

        {/* CTA Bar */}
        <div className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-card border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-metal-800 mb-2">
                Quel rideau pour votre local à {zoneName} ?
              </h3>
              <p className="text-gray-600">
                Nos experts vous conseillent gratuitement sur le type de rideau adapté à votre activité.
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
            Installation rideau métallique à {zoneName} ({postalCode}). 
            DRM installe tous types de rideaux : lames pleines, microperforés, grilles articulées, coupe-feu.
            Devis gratuit pour installation rideau métallique à {zoneName}.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TypesRideaux;

