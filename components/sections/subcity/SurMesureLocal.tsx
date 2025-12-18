"use client";

import { siteConfig } from "@/config/site";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface SurMesureLocalProps {
  zoneName: string;
  postalCode: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons = {
  ruler: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5M3.75 19.5V15m0-3.75v-.75m0 .75h.75m3 3.75v-3.75m0 3.75h.75m3-3.75v-3m0 3h.75m3-3v-2.25m0 2.25h.75m3-2.25V6m0 2.25h.75" />
    </svg>
  ),
  palette: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  factory: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
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
  star: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
function getContent(zoneName: string, postalCode: string) {
  return {
    badge: "Sur-mesure local",
    title: `Fabrication sur mesure à ${zoneName}`,
    subtitle: `Chaque rideau métallique fabriqué par DRM pour ${zoneName} (${postalCode}) est conçu aux dimensions exactes de votre local. Pas de compromis, juste la perfection.`,
    advantages: [
      {
        icon: "ruler",
        title: "Dimensions exactes",
        description: `Nous prenons les mesures sur place à ${zoneName}. Votre rideau s'adapte parfaitement à votre ouverture, même non standard.`,
        stat: "100%",
        statLabel: "sur-mesure",
        color: "primary",
      },
      {
        icon: "palette",
        title: "Personnalisation complète",
        description: `Choix du type de lames, couleur, finition et motorisation selon vos besoins à ${zoneName}. Votre rideau, vos options.`,
        stat: "50+",
        statLabel: "options",
        color: "secondary",
      },
      {
        icon: "factory",
        title: "Fabrication française",
        description: "Nos rideaux sont fabriqués dans nos ateliers en France avec des matériaux de première qualité. Traçabilité garantie.",
        stat: "Made in",
        statLabel: "France",
        color: "primary",
      },
      {
        icon: "clock",
        title: "Délai rapide",
        description: `2 à 3 semaines de fabrication puis installation à ${zoneName}. Votre rideau est opérationnel rapidement.`,
        stat: "2-3",
        statLabel: "semaines",
        color: "secondary",
      },
    ],
    processSteps: [
      { step: "1", title: "Prise de mesures", description: `Déplacement gratuit à ${zoneName}` },
      { step: "2", title: "Devis personnalisé", description: "Sous 24h, sans engagement" },
      { step: "3", title: "Fabrication", description: "Dans nos ateliers français" },
      { step: "4", title: "Installation", description: `Pose soignée à ${zoneName}` },
    ],
    features: [
      `Mesures précises sur site à ${zoneName}`,
      "Acier galvanisé ou aluminium au choix",
      "Lames pleines, microperforées ou tubes",
      "Motorisation Somfy, Nice ou Simu",
      "Garantie fabricant 2 ans",
      `SAV local dans le ${postalCode.substring(0, 2)}`,
    ],
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function SurMesureLocal({ zoneName, postalCode }: SurMesureLocalProps) {
  const content = getContent(zoneName, postalCode);

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            {icons.factory}
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
                  advantage.color === "primary" 
                    ? 'bg-primary-50 group-hover:bg-primary-100 text-primary-600' 
                    : 'bg-secondary-50 group-hover:bg-secondary-100 text-secondary-600'
                }`}>
                  {icons[advantage.icon as keyof typeof icons] || icons.shield}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`text-lg font-bold transition-colors ${
                      advantage.color === "primary" 
                        ? 'text-metal-800 group-hover:text-primary-700' 
                        : 'text-metal-800 group-hover:text-secondary-600'
                    }`}>
                      {advantage.title}
                    </h3>
                    <div className="text-right flex-shrink-0">
                      <p className={`text-xl font-bold ${
                        advantage.color === "primary" ? 'text-primary-600' : 'text-secondary-500'
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

        {/* Process Steps */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-metal-800 text-center mb-8">
            Notre processus de fabrication
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {content.processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold shadow-md">
                  {step.step}
                </div>
                <h4 className="font-bold text-metal-800 mb-1">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Checklist */}
        <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto shadow-card animate-fade-in-up animation-delay-400 border border-gray-100">
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
            Fabrication rideau métallique sur-mesure à {zoneName} ({postalCode}). 
            DRM fabrique vos rideaux métalliques aux dimensions exactes de votre local.
            Prise de mesures gratuite, fabrication française, installation comprise.
            Contactez-nous au {siteConfig.phone} pour un devis gratuit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SurMesureLocal;

