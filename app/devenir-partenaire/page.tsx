import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumb, generateBreadcrumbSchema } from "@/components/ui";
import PartnerForm from "@/components/forms/PartnerForm";

// Fil d'Ariane
const breadcrumbItems = [
  { label: "Devenir partenaire" }
];
const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `Devenir Partenaire | Rejoignez le Réseau DRM ${siteConfig.city}`,
  description: `Artisan spécialisé en rideaux métalliques ? Rejoignez le réseau DRM ${siteConfig.city}. ✓ Missions régulières ✓ Paiement rapide ✓ Support technique. Candidature en ligne.`,
  keywords: [
    "devenir partenaire rideau métallique",
    "sous-traitant rideau métallique Montpellier",
    "artisan rideau métallique",
    "partenariat dépannage rideau",
    "rejoindre réseau DRM",
  ],
  alternates: {
    canonical: `https://${siteConfig.domain}/devenir-partenaire`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS DATA
// ─────────────────────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Marc D.",
    role: "Artisan métallier",
    location: "Montpellier",
    content: "Je travaille avec DRM depuis 2 ans. Les missions sont régulières et le paiement est toujours à l'heure. Une vraie relation de confiance.",
    rating: 5,
    since: "2022",
  },
  {
    name: "Karim B.",
    role: "Technicien indépendant",
    location: "Castelnau-le-Lez",
    content: "L'équipe DRM est très professionnelle. Ils m'envoient des interventions dans ma zone et je gère mon planning comme je veux. Top !",
    rating: 5,
    since: "2023",
  },
  {
    name: "Philippe M.",
    role: "Entreprise de métallerie",
    location: "Lattes",
    content: "En tant que sous-traitant, j'apprécie la qualité des clients envoyés par DRM. Pas de mauvaises surprises, tout est bien cadré.",
    rating: 5,
    since: "2021",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ADVANTAGES DATA
// ─────────────────────────────────────────────────────────────────────────────
const advantages = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Paiement rapide",
    description: "Règlement immédiat après l'intervention. Pas d'attente interminable.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Missions régulières",
    description: "Un flux constant d'interventions dans votre zone. Vous choisissez celles qui vous conviennent.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Liberté totale",
    description: "Gardez votre indépendance. Acceptez ou refusez les missions selon votre planning.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Support technique",
    description: "Accès à notre réseau de fournisseurs et support technique si besoin.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function DevenirPartenairePage() {
  return (
    <>
      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Fil d'Ariane visible */}
      <Breadcrumb items={breadcrumbItems} />
      
      <main>
        {/* ═══════════════════════════════════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-hero">
          {/* Background patterns */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10 pt-32 pb-16">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6 animate-fade-in-up">
                <svg className="w-4 h-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                Recrutement partenaires
              </div>

              {/* Title H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100 text-white">
                Devenez Partenaire DRM
              </h1>
              <p className="text-2xl md:text-3xl font-medium mb-4 text-accent-400 animate-fade-in-up animation-delay-150">
                Rejoignez notre réseau d&apos;artisans
              </p>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                Vous êtes artisan métallier ou technicien spécialisé en rideaux métalliques ? 
                Rejoignez notre réseau et bénéficiez de missions régulières dans votre zone.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up animation-delay-300">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-white">Paiement immédiat</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-white">Missions régulières</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-white">Liberté totale</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-16 md:h-24 text-white fill-current" viewBox="0 0 1440 74" preserveAspectRatio="none">
              <path d="M0,37 C240,74 480,0 720,37 C960,74 1200,0 1440,37 L1440,74 L0,74 Z" />
            </svg>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            AVANTAGES SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Avantages
              </span>
              <h2 className="section-title">Pourquoi rejoindre DRM ?</h2>
              <p className="section-subtitle mx-auto mt-4">
                Nous cherchons des artisans de confiance pour répondre à la demande croissante. 
                En échange, nous vous offrons des conditions avantageuses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-bold text-metal-800 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            FORMULAIRE + INFOS
        ═══════════════════════════════════════════════════════════════════════ */}
        <section id="formulaire" className="section bg-sand-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-dots-pattern opacity-50" />
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Colonne Gauche - Infos */}
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-semibold mb-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                  Comment ça marche ?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-metal-800 mb-6">
                  Un partenariat simple et efficace
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Nous recevons des demandes d&apos;intervention chaque jour. Quand une mission correspond 
                  à votre zone et vos compétences, nous vous la proposons. Vous êtes libre d&apos;accepter ou non.
                </p>

                {/* Process steps */}
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-metal-800 mb-1">Inscrivez-vous</h3>
                      <p className="text-gray-600 text-sm">Remplissez le formulaire avec vos informations professionnelles.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-metal-800 mb-1">Validation</h3>
                      <p className="text-gray-600 text-sm">Notre équipe étudie votre candidature sous 48h.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-metal-800 mb-1">Recevez des missions</h3>
                      <p className="text-gray-600 text-sm">Dès que validé, vous recevez des propositions d&apos;intervention.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-metal-800 mb-1">Soyez payé immédiatement</h3>
                      <p className="text-gray-600 text-sm">Règlement immédiat après l&apos;intervention.</p>
                    </div>
                  </div>
                </div>

                {/* Contact info */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-metal-800 mb-3">Des questions ?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Notre équipe est disponible pour répondre à toutes vos questions sur le partenariat.
                  </p>
                  <a 
                    href={siteConfig.phoneLink}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Colonne Droite - Formulaire */}
              <div>
                <PartnerForm />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            TESTIMONIALS SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Témoignages
              </span>
              <h2 className="section-title">Ce que disent nos partenaires</h2>
              <p className="section-subtitle mx-auto mt-4">
                Découvrez les retours d&apos;expérience des artisans qui travaillent déjà avec nous.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-metal-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role} • {testimonial.location}</p>
                      <p className="text-xs text-primary-500 font-medium">Partenaire depuis {testimonial.since}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            CTA FINAL
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="py-16 bg-gradient-cta relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
          
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à rejoindre notre réseau ?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Candidature gratuite et sans engagement. Notre équipe vous recontacte sous 48h.
            </p>
            <a 
              href="#formulaire"
              className="inline-flex items-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Remplir le formulaire
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

