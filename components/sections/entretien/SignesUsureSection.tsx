"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import signesUsureContent from "@/content/sections/entretien/signes-usure.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
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
  turtle: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  pause: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
    </svg>
  ),
  rust: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  arrows: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
  remote: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  gap: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>
  ),
  chevronDown: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  wrench: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// URGENCY BADGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function UrgencyBadge({ urgency }: { urgency: string }) {
  const levels = signesUsureContent.urgencyLevels as Record<string, { label: string; color: string }>;
  const level = levels[urgency] || levels.medium;
  
  const colorClasses = {
    green: "bg-green-100 text-green-700 border-green-200",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
    red: "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${colorClasses[level.color as keyof typeof colorClasses]}`}>
      {level.label}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ACCORDION ITEM COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function AccordionItem({ sign, index, isOpen, onToggle }: { 
  sign: typeof signesUsureContent.signs[0]; 
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div 
      className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border-2 ${
        isOpen ? 'border-primary-300 shadow-card-hover' : 'border-gray-100 shadow-card hover:border-primary-200'
      } animate-fade-in-up`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Header - Always visible */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
          isOpen ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'
        }`}>
          {icons[sign.icon] || icons.wrench}
        </div>
        
        {/* Title + Badge */}
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className={`font-bold transition-colors ${isOpen ? 'text-primary-700' : 'text-metal-800'}`}>
              {sign.title}
            </h3>
            <UrgencyBadge urgency={sign.urgency} />
          </div>
          <p className="text-sm text-gray-500 mt-1 line-clamp-1">{sign.description}</p>
        </div>
        
        {/* Chevron */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
          isOpen ? 'bg-primary-100 text-primary-600 rotate-180' : 'bg-gray-100 text-gray-400'
        }`}>
          {icons.chevronDown}
        </div>
      </button>
      
      {/* Content - Expandable */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-5 pb-5 pt-2 border-t border-gray-100">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Consequence */}
            <div className="bg-red-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span className="font-semibold text-red-700 text-sm">Si non traité</span>
              </div>
              <p className="text-red-600 text-sm">{sign.consequence}</p>
            </div>
            
            {/* Solution */}
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-green-700 text-sm">Notre solution</span>
              </div>
              <p className="text-green-600 text-sm">{sign.solution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function SignesUsureSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            {signesUsureContent.badge.text}
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            {signesUsureContent.title}
            <span className="block text-primary-600 mt-2">
              {signesUsureContent.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {signesUsureContent.subtitle}
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.entries(signesUsureContent.urgencyLevels).map(([key, level]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${
                level.color === 'green' ? 'bg-green-500' :
                level.color === 'yellow' ? 'bg-yellow-500' :
                'bg-red-500'
              }`} />
              <span className="text-sm text-gray-600">{level.label}</span>
            </div>
          ))}
        </div>

        {/* Accordion Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-12">
          {signesUsureContent.signs.map((sign, index) => (
            <AccordionItem 
              key={sign.id}
              sign={sign}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-3xl p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grid-pattern" />
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {signesUsureContent.cta.title}
            </h3>
            <p className="text-white/80 mb-6">
              {signesUsureContent.cta.subtext}
            </p>
            
            <a 
              href={siteConfig.phoneLink}
              className="inline-flex items-center gap-3 bg-white text-secondary-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              {icons.phone}
              <span>
                <span className="block">{signesUsureContent.cta.text}</span>
                <span className="block text-sm font-normal text-gray-500">{siteConfig.phone}</span>
              </span>
            </a>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>{signesUsureContent.localSeo.intro}</p>
          <p>{signesUsureContent.localSeo.expertise}</p>
          <p>{signesUsureContent.localSeo.coverage}</p>
        </div>
      </div>
    </section>
  );
}

export default SignesUsureSection;

