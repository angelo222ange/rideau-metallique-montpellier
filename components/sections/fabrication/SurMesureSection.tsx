"use client";

import { siteConfig } from "@/config/site";
import surMesureContent from "@/content/sections/fabrication/sur-mesure.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  factory: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
  ruler: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5M3.75 19.5V15m0-3.75v-.75m0 .75h.75m3 3.75v-3.75m0 3.75h.75m3-3.75v-3m0 3h.75m3-3v-2.25m0 2.25h.75m3-2.25V6m0 2.25h.75" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  palette: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
    </svg>
  ),
  certificate: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  cross: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  arrow: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// ADVANTAGE CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function AdvantageCard({ advantage, index }: { advantage: typeof surMesureContent.advantages[0]; index: number }) {
  const colors = [
    { bg: "from-primary-500 to-primary-600", light: "bg-primary-50", text: "text-primary-600", border: "border-primary-200 hover:border-primary-400" },
    { bg: "from-secondary-500 to-secondary-600", light: "bg-secondary-50", text: "text-secondary-600", border: "border-secondary-200 hover:border-secondary-400" },
    { bg: "from-accent-500 to-accent-600", light: "bg-accent-50", text: "text-accent-600", border: "border-accent-200 hover:border-accent-400" },
    { bg: "from-green-500 to-green-600", light: "bg-green-50", text: "text-green-600", border: "border-green-200 hover:border-green-400" },
  ];
  
  const color = colors[index % colors.length];

  return (
    <div 
      className={`group relative bg-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border-2 ${color.border} animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Highlight badge */}
      <div className={`absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r ${color.bg} text-white text-xs font-bold rounded-full shadow-md`}>
        {advantage.highlight}
      </div>

      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color.bg} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        {icons[advantage.icon] || icons.shield}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-metal-800 mb-3">
        {advantage.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {advantage.description}
      </p>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color.bg} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPARISON TABLE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function ComparisonTable() {
  const { comparison } = surMesureContent;
  
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* Sur-Mesure Column */}
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-6 md:p-8 border-2 border-primary-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 px-4 py-1 bg-primary-500 text-white text-sm font-bold rounded-bl-xl">
          Recommandé
        </div>
        <h4 className="text-xl font-bold text-primary-700 mb-6 mt-4">
          {comparison.surMesure.label}
        </h4>
        <ul className="space-y-3">
          {comparison.surMesure.points.map((point, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">
                {icons.check}
              </span>
              <span className="text-gray-700 font-medium">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Standard Column */}
      <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-200 opacity-75">
        <h4 className="text-xl font-bold text-gray-500 mb-6">
          {comparison.standard.label}
        </h4>
        <ul className="space-y-3">
          {comparison.standard.points.map((point, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center flex-shrink-0">
                {icons.cross}
              </span>
              <span className="text-gray-500">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIAL COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function Testimonial() {
  const { testimonial } = surMesureContent;
  
  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card-hover border border-gray-100 max-w-3xl mx-auto relative">
      {/* Quote icon */}
      <div className="absolute -top-4 left-8 w-10 h-10 bg-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      {/* Rating stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-lg">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-metal-800">{testimonial.author}</p>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function SurMesureSection() {
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
            {icons.factory}
            {surMesureContent.badge.text}
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            {surMesureContent.title}
            <span className="block text-primary-600 mt-2">
              {surMesureContent.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {surMesureContent.subtitle}
          </p>
        </div>

        {/* Advantages Grid - 4 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {surMesureContent.advantages.map((advantage, index) => (
            <AdvantageCard key={advantage.id} advantage={advantage} index={index} />
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-metal-800 text-center mb-10">
            {surMesureContent.comparison.title}
          </h3>
          <ComparisonTable />
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
          {surMesureContent.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-1">
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mb-16">
          <Testimonial />
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grid-pattern" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Un projet de rideau sur-mesure à Montpellier ?
              </h3>
              <p className="text-white/80 max-w-xl">
                Nos experts se déplacent gratuitement pour prendre vos mesures exactes et vous conseiller sur la meilleure solution pour votre commerce dans le 34.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={siteConfig.phoneLink}
                className="flex items-center justify-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
              >
                {icons.phone}
                {siteConfig.phone}
              </a>
              
              <a 
                href="/contact-rideau-metallique"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all whitespace-nowrap"
              >
                Demander une étude
                {icons.arrow}
              </a>
            </div>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>{surMesureContent.localSeo.intro}</p>
          <p>{surMesureContent.localSeo.expertise}</p>
          <p>{surMesureContent.localSeo.zones}</p>
        </div>
      </div>
    </section>
  );
}

export default SurMesureSection;

