"use client";

import { siteConfig } from "@/config/site";
import confianceContent from "@/content/sections/contact/confiance.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  award: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
    </svg>
  ),
  calendar: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  tools: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  users: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  "check-circle": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  certificate: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  quote: (
    <svg className="w-8 h-8 opacity-20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// PILLAR CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function PillarCard({ pillar, index }: { pillar: typeof confianceContent.pillars[0]; index: number }) {
  const colorClasses = {
    primary: {
      bg: "from-primary-500 to-primary-600",
      bgLight: "bg-primary-50",
      text: "text-primary-600",
      border: "border-primary-200 hover:border-primary-400",
    },
    secondary: {
      bg: "from-secondary-500 to-secondary-600",
      bgLight: "bg-secondary-50",
      text: "text-secondary-600",
      border: "border-secondary-200 hover:border-secondary-400",
    },
    accent: {
      bg: "from-accent-500 to-accent-600",
      bgLight: "bg-accent-50",
      text: "text-accent-600",
      border: "border-accent-200 hover:border-accent-400",
    },
    green: {
      bg: "from-green-500 to-green-600",
      bgLight: "bg-green-50",
      text: "text-green-600",
      border: "border-green-200 hover:border-green-400",
    },
  };

  const colors = colorClasses[pillar.color as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <div 
      className={`group relative bg-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border-2 ${colors.border} animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon with gradient background */}
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        {icons[pillar.icon] || icons.calendar}
      </div>

      {/* Value with unit */}
      <div className="flex items-baseline gap-1 mb-2">
        <span className={`text-4xl md:text-5xl font-bold ${colors.text}`}>
          {pillar.value}
        </span>
        {pillar.unit && (
          <span className={`text-lg font-semibold ${colors.text}`}>
            {pillar.unit}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-metal-800 mb-3">
        {pillar.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {pillar.description}
      </p>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bg} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIAL HIGHLIGHT COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function TestimonialHighlight() {
  const testimonial = confianceContent.testimonialHighlight;
  
  return (
    <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
      
      {/* Quote icon */}
      <div className="absolute top-6 left-6 text-white/20">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <div className="relative z-10">
        {/* Rating stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
            {testimonial.author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-white">{testimonial.author}</p>
            <p className="text-white/70 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function ConfianceSection() {
  return (
    <section className="section bg-sand-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-50" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            {icons.award}
            {confianceContent.badge.text}
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            {confianceContent.title}
            <span className="block text-primary-600 mt-2">
              {confianceContent.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {confianceContent.subtitle}
          </p>
        </div>

        {/* Pillars Grid - 4 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {confianceContent.pillars.map((pillar, index) => (
            <PillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>

        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {confianceContent.trustBadges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-card border border-gray-100"
            >
              <span className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                {icons[badge.icon] || icons.shield}
              </span>
              <span className="font-semibold text-metal-800">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Testimonial + CTA Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Testimonial */}
          <TestimonialHighlight />
          
          {/* CTA Card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card-hover border border-gray-100">
            <h3 className="text-2xl font-bold text-metal-800 mb-4">
              Besoin d&apos;un expert rideau métallique à Montpellier ?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Notre équipe d&apos;artisans qualifiés intervient dans tout le département 34 pour vos projets de dépannage, installation, entretien et motorisation de rideaux métalliques.
            </p>
            
            {/* Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-gray-700">Intervention rapide en moins d&apos;1h</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-gray-700">Devis gratuit et sans engagement</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-gray-700">Disponible 24h/24, 7j/7</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <a 
              href={siteConfig.phoneLink}
              className="group relative inline-flex items-center gap-3 w-full justify-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-2xl bg-secondary-400 animate-pulse-ring opacity-50" />
              {icons.phone}
              <span className="relative">{siteConfig.phone}</span>
            </a>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>{confianceContent.localSeo.intro}</p>
          <p>{confianceContent.localSeo.expertise}</p>
          <p>{confianceContent.localSeo.zones}</p>
        </div>
      </div>
    </section>
  );
}

export default ConfianceSection;

