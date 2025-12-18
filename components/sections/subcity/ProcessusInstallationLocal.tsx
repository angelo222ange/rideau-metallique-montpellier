"use client";

import { siteConfig } from "@/config/site";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface ProcessusInstallationLocalProps {
  zoneName: string;
  postalCode: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons = {
  ruler: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5M3.75 19.5V15m0-3.75v-.75m0 .75h.75m3 3.75v-3.75m0 3.75h.75m3-3.75v-3m0 3h.75m3-3v-2.25m0 2.25h.75m3-2.25V6m0 2.25h.75" />
    </svg>
  ),
  document: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  factory: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
  truck: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  wrench: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  ),
  check: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  checkSmall: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  star: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  settings: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
function getProcessusData(zoneName: string, postalCode: string) {
  return {
    steps: [
      {
        step: 1,
        icon: "ruler",
        title: "Visite & Prise de mesures",
        duration: "30-60 min",
        description: `Un technicien se déplace gratuitement à ${zoneName} pour prendre les mesures exactes de votre ouverture et évaluer les contraintes techniques.`,
        details: [
          "Mesures précises de l'ouverture",
          "Étude des contraintes techniques",
          "Conseils sur le type de rideau adapté",
          "Vérification de l'alimentation électrique",
        ],
        color: "primary",
      },
      {
        step: 2,
        icon: "document",
        title: "Devis détaillé",
        duration: "24-48h",
        description: "Vous recevez un devis complet et transparent incluant fourniture, fabrication et pose. Sans engagement, valable 30 jours.",
        details: [
          "Devis gratuit sous 24-48h",
          "Prix tout compris (fourniture + pose)",
          "Options clairement détaillées",
          "Aucune surprise à la facture",
        ],
        color: "secondary",
      },
      {
        step: 3,
        icon: "factory",
        title: "Fabrication sur-mesure",
        duration: "2-3 semaines",
        description: "Votre rideau est fabriqué dans nos ateliers en France aux dimensions exactes relevées. Matériaux premium et contrôle qualité rigoureux.",
        details: [
          "Fabrication française",
          "Acier galvanisé haute qualité",
          "Contrôle qualité avant expédition",
          "Traçabilité complète",
        ],
        color: "primary",
      },
      {
        step: 4,
        icon: "truck",
        title: "Livraison à {zone}",
        duration: "Date convenue",
        description: `Livraison directement sur votre site à ${zoneName} (${postalCode}) à la date convenue ensemble. Nos équipes coordonnent tout.`,
        details: [
          `Livraison sur site à ${zoneName}`,
          "Créneau horaire respecté",
          "Matériel protégé",
          "Aucun frais caché",
        ],
        color: "secondary",
      },
      {
        step: 5,
        icon: "wrench",
        title: "Installation professionnelle",
        duration: "½ à 1 journée",
        description: `Nos techniciens certifiés installent votre rideau à ${zoneName}. Travail soigné, propre et dans les règles de l'art.`,
        details: [
          "Pose par techniciens certifiés",
          "Scellement et fixation sécurisés",
          "Raccordement électrique",
          "Tests de fonctionnement",
        ],
        color: "primary",
      },
      {
        step: 6,
        icon: "check",
        title: "Réception & Formation",
        duration: "30 min",
        description: "Vérification complète avec vous, formation à l'utilisation et remise des documents. Votre rideau est opérationnel !",
        details: [
          "Tests devant vous",
          "Formation utilisation",
          "Remise télécommandes/clés",
          "Documents garantie",
        ],
        color: "secondary",
      },
    ],
    guarantees: [
      {
        icon: "shield",
        title: "Garantie 2 ans",
        description: "Pièces et main d'œuvre",
      },
      {
        icon: "settings",
        title: "SAV réactif",
        description: "Intervention rapide si besoin",
      },
      {
        icon: "star",
        title: "Qualité pro",
        description: "Pose dans les règles de l'art",
      },
      {
        icon: "clock",
        title: "Délais tenus",
        description: "Engagement de ponctualité",
      },
    ],
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function ProcessusInstallationLocal({ zoneName, postalCode }: ProcessusInstallationLocalProps) {
  const data = getProcessusData(zoneName, postalCode);

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary-50 rounded-full translate-x-1/2 blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-50 rounded-full -translate-x-1/2 blur-3xl opacity-40" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            {icons.settings}
            Processus transparent
          </span>
          <h2 className="section-title">
            Notre processus d&apos;installation à {zoneName}
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            De la prise de mesures à la mise en service, nous vous accompagnons à chaque étape de votre projet d&apos;installation à {zoneName} ({postalCode}).
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          {data.steps.map((step, index) => (
            <div 
              key={step.step}
              className="relative flex gap-6 pb-12 last:pb-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline line */}
              {index < data.steps.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-primary-100" />
              )}

              {/* Step number */}
              <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${
                step.color === "primary" 
                  ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white' 
                  : 'bg-gradient-to-br from-secondary-500 to-secondary-600 text-white'
              }`}>
                {icons[step.icon as keyof typeof icons]}
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-card-hover transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Étape {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-metal-800">
                      {step.title.replace("{zone}", zoneName)}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    step.color === "primary" 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'bg-secondary-50 text-secondary-700'
                  }`}>
                    {step.duration}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-2">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        {icons.checkSmall}
                      </span>
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="bg-gradient-to-r from-primary-50 via-white to-secondary-50 rounded-3xl p-8 max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-metal-800 text-center mb-8">
            Nos engagements pour votre installation à {zoneName}
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {data.guarantees.map((guarantee, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md text-primary-600 flex items-center justify-center mx-auto mb-3">
                  {icons[guarantee.icon as keyof typeof icons]}
                </div>
                <h4 className="font-bold text-metal-800 mb-1">{guarantee.title}</h4>
                <p className="text-sm text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Prêt à démarrer votre projet d&apos;installation à {zoneName} ?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
            Processus d&apos;installation rideau métallique à {zoneName} ({postalCode}). 
            DRM vous accompagne de A à Z : prise de mesures, devis, fabrication, livraison et pose professionnelle.
            Installation garantie 2 ans à {zoneName}. Contactez-nous au {siteConfig.phone}.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProcessusInstallationLocal;

