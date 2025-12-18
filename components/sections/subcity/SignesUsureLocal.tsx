"use client";

import { siteConfig } from "@/config/site";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface SignesUsureLocalProps {
  zoneName: string;
  postalCode: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons = {
  search: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  volume: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  pause: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
    </svg>
  ),
  warning: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  arrows: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
  gap: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// SIGNES D'USURE DATA
// ─────────────────────────────────────────────────────────────────────────────
const signes = [
  {
    id: "bruit",
    icon: "volume",
    title: "Bruits anormaux",
    description: "Grincements, claquements ou vibrations à l'ouverture/fermeture",
    urgency: "medium",
    solution: "Graissage des glissières et vérification des lames",
  },
  {
    id: "lenteur",
    icon: "clock",
    title: "Lenteur inhabituelle",
    description: "Le rideau met plus de temps qu'avant pour s'ouvrir ou se fermer",
    urgency: "medium",
    solution: "Diagnostic moteur et réglage de la tension",
  },
  {
    id: "blocage",
    icon: "pause",
    title: "Blocages ou saccades",
    description: "Le rideau s'arrête à mi-course ou avance par à-coups",
    urgency: "high",
    solution: "Réglage des butées et nettoyage complet",
  },
  {
    id: "jeu",
    icon: "arrows",
    title: "Jeu dans les glissières",
    description: "Le tablier bouge latéralement, il n'est plus parfaitement guidé",
    urgency: "high",
    solution: "Réglage ou remplacement des guides latéraux",
  },
  {
    id: "fermeture",
    icon: "gap",
    title: "Fermeture incomplète",
    description: "Un espace reste visible entre le sol et le bas du rideau",
    urgency: "high",
    solution: "Réglage lame finale ou remplacement joint bas",
  },
  {
    id: "rouille",
    icon: "warning",
    title: "Rouille visible",
    description: "Points de corrosion sur les lames, coulisses ou coffre",
    urgency: "medium",
    solution: "Traitement anti-corrosion et peinture protectrice",
  },
];

const urgencyColors = {
  low: { bg: "bg-green-100", text: "text-green-700", label: "À surveiller" },
  medium: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Intervention conseillée" },
  high: { bg: "bg-red-100", text: "text-red-700", label: "Urgent" },
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function SignesUsureLocal({ zoneName, postalCode }: SignesUsureLocalProps) {
  return (
    <section className="section bg-sand-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-50" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-semibold mb-4">
            {icons.search}
            Diagnostic gratuit
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            Quand faire entretenir votre rideau
            <span className="block text-primary-600 mt-2">
              à {zoneName} ?
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Votre rideau métallique à {zoneName} ({postalCode}) vous envoie des signaux qu&apos;il ne faut pas ignorer. 
            Voici les 6 signes qui indiquent qu&apos;un entretien est nécessaire.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.entries(urgencyColors).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${
                key === 'low' ? 'bg-green-500' :
                key === 'medium' ? 'bg-yellow-500' :
                'bg-red-500'
              }`} />
              <span className="text-sm text-gray-600">{value.label}</span>
            </div>
          ))}
        </div>

        {/* Signs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {signes.map((signe, index) => {
            const urgency = urgencyColors[signe.urgency as keyof typeof urgencyColors];
            return (
              <div 
                key={signe.id}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0">
                    {icons[signe.icon as keyof typeof icons] || icons.warning}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-metal-800">{signe.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${urgency.bg} ${urgency.text}`}>
                        {urgency.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{signe.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 pt-4 border-t border-gray-100">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {icons.check}
                  </span>
                  <p className="text-sm text-green-700">
                    <span className="font-medium">Solution :</span> {signe.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-3xl p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grid-pattern" />
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Un de ces signes sur votre rideau à {zoneName} ?
            </h3>
            <p className="text-white/80 mb-6">
              Nos techniciens se déplacent gratuitement à {zoneName} pour un diagnostic complet
            </p>
            
            <a 
              href={siteConfig.phoneLink}
              className="inline-flex items-center gap-3 bg-white text-secondary-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              {icons.phone}
              <span>
                <span className="block">Diagnostic gratuit</span>
                <span className="block text-sm font-normal text-gray-500">{siteConfig.phone}</span>
              </span>
            </a>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>
            Signes d&apos;usure rideau métallique à {zoneName} ({postalCode}). 
            Symptômes de panne, bruits anormaux, blocages. 
            Diagnostic gratuit à domicile par DRM dans tout {zoneName} et ses environs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignesUsureLocal;

