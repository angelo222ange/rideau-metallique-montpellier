"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import pannesContent from "@/content/sections/home/pannes.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  wrench: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  bolt: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  layers: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  ),
  cog: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
    </svg>
  ),
  link: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  ),
  stop: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
    </svg>
  ),
  signal: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
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
  alert: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
};

// Urgency badge colors
const urgencyColors = {
  high: "bg-red-100 text-red-700 border-red-200",
  medium: "bg-amber-100 text-amber-700 border-amber-200",
  low: "bg-green-100 text-green-700 border-green-200",
};

const urgencyLabels = {
  high: "Urgence haute",
  medium: "Priorité moyenne",
  low: "Non urgent",
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function PannesSection() {
  const { pannes, stats } = pannesContent;
  
  // Featured pannes (les 2 premières avec featured: true)
  const featuredPannes = pannes.filter(p => p.featured);
  // Other pannes
  const otherPannes = pannes.filter(p => !p.featured);

  return (
    <section className="section bg-sand-100 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-50" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            {icons.wrench}
            {pannesContent.badge.text}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            {pannesContent.title} :{" "}
            <span className="text-primary-600">{pannesContent.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: pannesContent.subtitle }} />
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="text-center p-4 md:p-6 bg-white rounded-2xl shadow-card">
            <div className="text-2xl md:text-4xl font-bold text-primary-600 mb-1">
              {stats.pannesResolues.value}
            </div>
            <div className="text-xs md:text-sm text-gray-600">{stats.pannesResolues.label}</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-white rounded-2xl shadow-card">
            <div className="text-2xl md:text-4xl font-bold text-secondary-500 mb-1">
              {stats.tempsIntervention.value}
            </div>
            <div className="text-xs md:text-sm text-gray-600">{stats.tempsIntervention.label}</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-white rounded-2xl shadow-card">
            <div className="text-2xl md:text-4xl font-bold text-accent-600 mb-1">
              {stats.experience.value}
            </div>
            <div className="text-xs md:text-sm text-gray-600">{stats.experience.label}</div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Featured Cards - Large (span 2 columns on desktop) */}
          {featuredPannes.map((panne, index) => (
            <div 
              key={panne.id}
              className={`group relative bg-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
                index === 0 ? 'lg:col-span-2' : 'lg:col-span-1 lg:row-span-2'
              }`}
            >
              {/* Urgency Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${urgencyColors[panne.urgency as keyof typeof urgencyColors]}`}>
                {urgencyLabels[panne.urgency as keyof typeof urgencyLabels]}
              </div>
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors ${
                panne.urgency === 'high' 
                  ? 'bg-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white'
                  : 'bg-primary-100 text-primary-600 group-hover:bg-primary-500 group-hover:text-white'
              }`}>
                {icons[panne.icon] || icons.wrench}
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-metal-800 mb-3 pr-24">
                {panne.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: panne.description }} />
              
              {/* Symptoms */}
              <div className="space-y-2 mb-5">
                <p className="text-sm font-semibold text-metal-700 flex items-center gap-2">
                  {icons.alert}
                  Symptômes :
                </p>
                <ul className="space-y-1.5">
                  {panne.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 flex-shrink-0" />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Solution */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-green-50 border border-green-100">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">
                  {icons.check}
                </span>
                <span className="text-sm text-green-700 font-medium">{panne.solution}</span>
              </div>
            </div>
          ))}

          {/* Other Pannes - Regular Cards */}
          {otherPannes.map((panne) => (
            <div 
              key={panne.id}
              className="group relative bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Urgency Badge */}
              <div className={`absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-xs font-medium border ${urgencyColors[panne.urgency as keyof typeof urgencyColors]}`}>
                {panne.urgency === 'high' ? 'Urgent' : panne.urgency === 'medium' ? 'Prioritaire' : 'Normal'}
              </div>
              
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                panne.urgency === 'high' 
                  ? 'bg-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white'
                  : panne.urgency === 'medium'
                    ? 'bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white'
                    : 'bg-primary-100 text-primary-600 group-hover:bg-primary-500 group-hover:text-white'
              }`}>
                {icons[panne.icon] || icons.wrench}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-metal-800 mb-2 pr-16">
                {panne.shortTitle}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: panne.description }} />
              
              {/* Symptoms preview */}
              <div className="space-y-1.5 mb-4">
                {panne.symptoms.slice(0, 2).map((symptom, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-500">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                    {symptom}
                  </div>
                ))}
              </div>
              
              {/* Solution */}
              <div className="flex items-center gap-2 text-sm">
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                  {icons.check}
                </span>
                <span className="text-green-700 font-medium text-xs">{panne.solution}</span>
              </div>
            </div>
          ))}

          {/* Solution DRM Card - With Background Image */}
          <div className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 min-h-[320px] lg:col-span-1">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/services/depannage-rideau-metallique-drm-services.webp"
                alt="La solution DRM - Dépannage rideau métallique"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/60 to-primary-900/30" />
            </div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6">
              {/* Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-secondary-500 text-white">
                Expert
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                La Solution <span className="text-accent-400">DRM</span>
              </h3>
              
              {/* Features */}
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm text-white/90">
                  <span className="w-5 h-5 rounded-full bg-accent-400 flex items-center justify-center flex-shrink-0">
                    {icons.check}
                  </span>
                  Intervention en moins d&apos;1h
                </li>
                <li className="flex items-center gap-2 text-sm text-white/90">
                  <span className="w-5 h-5 rounded-full bg-accent-400 flex items-center justify-center flex-shrink-0">
                    {icons.check}
                  </span>
                  Diagnostic gratuit sur place
                </li>
                <li className="flex items-center gap-2 text-sm text-white/90">
                  <span className="w-5 h-5 rounded-full bg-accent-400 flex items-center justify-center flex-shrink-0">
                    {icons.check}
                  </span>
                  Pièces de qualité garanties
                </li>
              </ul>
              
              {/* CTA */}
              <a 
                href={siteConfig.phoneLink}
                className="inline-flex items-center justify-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-5 rounded-xl transition-colors"
              >
                {icons.phone}
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-500/20 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {pannesContent.cta.title}
              </h3>
              <p className="text-white/80 max-w-lg" dangerouslySetInnerHTML={{ __html: pannesContent.cta.description }} />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href={siteConfig.phoneLink}
                className="group relative inline-flex items-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
              >
                <span className="absolute inset-0 rounded-2xl bg-secondary-500 scale-0 group-hover:scale-100 transition-transform duration-300" />
                <span className="relative group-hover:text-white transition-colors flex items-center gap-3">
                  {icons.phone}
                  {siteConfig.phone}
                </span>
              </a>
              
              <a 
                href="/contact-rideau-metallique"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                {pannesContent.cta.buttonText}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* SEO Keywords - Hidden but crawlable */}
        <div className="sr-only">
          <p>
            Dépannage et réparation de pannes de rideau métallique à Montpellier (34000) et dans l&apos;Hérault. 
            Intervention sur moteur grillé, lames cassées, axe d&apos;enroulement défectueux, attaches tablier 
            et télécommandes. Techniciens experts disponibles 24h/24 en Occitanie.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PannesSection;

