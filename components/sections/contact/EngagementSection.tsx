"use client";

import { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/config/site";
import engagementContent from "@/content/sections/contact/engagement.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  "shield-check": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  document: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  euro: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  warranty: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  headset: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  ),
  sparkles: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  certificate: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  insurance: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  award: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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
// ANIMATED COUNTER HOOK
// ─────────────────────────────────────────────────────────────────────────────
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

// ─────────────────────────────────────────────────────────────────────────────
// ENGAGEMENT CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function EngagementCard({ engagement, index }: { engagement: typeof engagementContent.engagements[0]; index: number }) {
  return (
    <div 
      className={`group relative flex items-start gap-4 p-5 md:p-6 rounded-2xl transition-all duration-300 hover:shadow-card ${
        engagement.highlight 
          ? 'bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200 hover:border-primary-400' 
          : 'bg-white border border-gray-200 hover:border-primary-200'
      } animate-fade-in-up`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
        engagement.highlight 
          ? 'bg-primary-500 text-white shadow-lg' 
          : 'bg-gray-100 text-primary-600 group-hover:bg-primary-500 group-hover:text-white'
      }`}>
        {icons[engagement.icon] || icons.check}
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h4 className={`font-bold mb-2 ${engagement.highlight ? 'text-primary-700' : 'text-metal-800'}`}>
          {engagement.title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          {engagement.description}
        </p>
      </div>
      
      {/* Highlight badge */}
      {engagement.highlight && (
        <span className="absolute -top-2 -right-2 px-3 py-1 bg-secondary-500 text-white text-xs font-bold rounded-full shadow-md">
          Garantie
        </span>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GUARANTEE BADGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function GuaranteeBadge({ guarantee, index }: { guarantee: typeof engagementContent.guarantees[0]; index: number }) {
  return (
    <div 
      className="group relative bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        {icons[guarantee.icon] || icons.shield}
      </div>
      
      {/* Label */}
      <h4 className="font-bold text-metal-800 mb-1">
        {guarantee.label}
      </h4>
      
      {/* Description */}
      <p className="text-sm text-gray-500">
        {guarantee.description}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STATS SECTION
// ─────────────────────────────────────────────────────────────────────────────
function StatsSection() {
  const stats = engagementContent.stats;
  const { count: satisfaction, ref: satisfactionRef } = useCountUp(stats.satisfaction.value);
  const { count: firstTime, ref: firstTimeRef } = useCountUp(stats.firstTime.value);
  const { count: response, ref: responseRef } = useCountUp(stats.response.value);

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-8">
      <div ref={satisfactionRef} className="text-center p-4 md:p-6">
        <div className="text-3xl md:text-5xl font-bold text-primary-600 mb-2">
          {satisfaction}%
        </div>
        <p className="text-sm md:text-base text-gray-600">{stats.satisfaction.label}</p>
      </div>
      
      <div ref={firstTimeRef} className="text-center p-4 md:p-6 border-x border-gray-200">
        <div className="text-3xl md:text-5xl font-bold text-secondary-500 mb-2">
          {firstTime}%
        </div>
        <p className="text-sm md:text-base text-gray-600">{stats.firstTime.label}</p>
      </div>
      
      <div ref={responseRef} className="text-center p-4 md:p-6">
        <div className="text-3xl md:text-5xl font-bold text-accent-500 mb-2">
          {response}<span className="text-xl md:text-2xl">{stats.response.unit}</span>
        </div>
        <p className="text-sm md:text-base text-gray-600">{stats.response.label}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function EngagementSection() {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-4">
            {icons["shield-check"]}
            {engagementContent.badge.text}
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            {engagementContent.title}
            <span className="block text-primary-600 mt-2">
              {engagementContent.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {engagementContent.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Left: Engagements List (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            {engagementContent.engagements.map((engagement, index) => (
              <EngagementCard key={engagement.id} engagement={engagement} index={index} />
            ))}
          </div>
          
          {/* Right: Guarantees Grid (2 cols) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 content-start">
            {engagementContent.guarantees.map((guarantee, index) => (
              <GuaranteeBadge key={guarantee.label} guarantee={guarantee} index={index} />
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-br from-sand-100 to-primary-50 rounded-3xl p-6 md:p-10 mb-12 border border-primary-100">
          <h3 className="text-xl md:text-2xl font-bold text-metal-800 text-center mb-8">
            Des Chiffres qui Parlent dans le <span className="text-primary-600">34</span>
          </h3>
          <StatsSection />
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grid-pattern" />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Prêt à bénéficier de nos engagements qualité ?
              </h3>
              <p className="text-white/80 max-w-xl">
                Contactez-nous dès maintenant pour un devis gratuit. Nos experts rideau métallique interviennent à Montpellier et dans tout l&apos;Hérault.
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
                href="/contact#form"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all whitespace-nowrap"
              >
                Demander un devis
                {icons.arrow}
              </a>
            </div>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>{engagementContent.localSeo.intro}</p>
          <p>{engagementContent.localSeo.coverage}</p>
          <p>{engagementContent.localSeo.commitment}</p>
        </div>
      </div>
    </section>
  );
}

export default EngagementSection;

