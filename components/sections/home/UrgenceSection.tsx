"use client";

import { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/config/site";
import urgenceContent from "@/content/sections/home/urgence.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  tools: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  check: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  calendar: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
    </svg>
  ),
  lock: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  bolt: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  cloud: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  phone: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  checkSmall: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  arrow: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
  emergency: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATED COUNTER HOOK
// ─────────────────────────────────────────────────────────────────────────────
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

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
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
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
// STAT CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function StatCard({ stat, index }: { stat: typeof urgenceContent.stats[0]; index: number }) {
  const numericValue = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;
  const { count, ref } = useCountUp(numericValue, 2000);
  
  // Format the display value
  const displayValue = stat.value.includes('+') 
    ? `${count}+` 
    : stat.value.includes('%') 
      ? `${count}%`
      : stat.value.includes('<')
        ? stat.value
        : stat.value.includes('/')
          ? stat.value
          : count.toString();

  return (
    <div 
      ref={ref}
      className="relative group"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon */}
        <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center text-white">
          {icons[stat.icon] || icons.check}
        </div>
        
        {/* Value */}
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 relative">
          {displayValue}
        </div>
        
        {/* Label */}
        <div className="text-white/80 text-sm md:text-base font-medium">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EMERGENCY CASE CARD
// ─────────────────────────────────────────────────────────────────────────────
function EmergencyCard({ item, index }: { item: typeof urgenceContent.emergencyCases[0]; index: number }) {
  return (
    <div 
      className="group relative bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-500 to-secondary-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icons[item.icon] || icons.shield}
      </div>
      
      {/* Content */}
      <h4 className="text-lg font-bold text-metal-800 mb-2">
        {item.title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }} />
      
      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function UrgenceSection() {
  return (
    <section className="relative overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────────────
          HERO SECTION WITH BACKGROUND IMAGE
      ───────────────────────────────────────────────────────────────────── */}
      <div className="relative min-h-[80vh] flex items-center justify-center py-20 md:py-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${urgenceContent.image})`,
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-secondary-900/85" />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>
        
        {/* Floating circles decoration */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-500/10 rounded-full blur-3xl" />
        
        {/* Content */}
        <div className="container relative z-10">
          {/* Badge */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary-500/20 border border-secondary-500/30 text-secondary-300 text-sm font-semibold backdrop-blur-sm">
              {icons.emergency}
              {urgenceContent.badge.text}
            </span>
          </div>
          
          {/* Title */}
          <div className="text-center max-w-4xl mx-auto mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
              {urgenceContent.title}
              <span className="block text-secondary-400 mt-2">
                {urgenceContent.titleHighlight}
              </span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 text-center max-w-3xl mx-auto mb-12 leading-relaxed" dangerouslySetInnerHTML={{ __html: urgenceContent.subtitle }} />
          
          {/* Promise Banner */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500 text-white text-sm font-bold rounded-full shadow-lg">
                  {icons.clock}
                  PROMESSE
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3">
                {urgenceContent.promise.title}
              </h3>
              <p className="text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: urgenceContent.promise.description }} />
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {urgenceContent.stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={siteConfig.phoneLink}
              className="group relative inline-flex items-center gap-3 bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-secondary-500/30 hover:scale-105 transition-all duration-300"
            >
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-2xl bg-secondary-400 animate-pulse-ring opacity-50" />
              {icons.phone}
              <span className="relative flex flex-col items-start">
                <span>{siteConfig.phone}</span>
                <span className="text-xs font-normal text-white/80">{urgenceContent.cta.primary.subtext}</span>
              </span>
            </a>
            
            <a 
              href={urgenceContent.cta.secondary.href}
              className="inline-flex items-center gap-2 px-8 py-5 rounded-2xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              {urgenceContent.cta.secondary.text}
              {icons.arrow}
            </a>
          </div>
        </div>
      </div>
      
      {/* ─────────────────────────────────────────────────────────────────────
          EMERGENCY CASES SECTION
      ───────────────────────────────────────────────────────────────────── */}
      <div className="bg-sand-100 py-16 md:py-24 relative">
        {/* Pattern */}
        <div className="absolute inset-0 bg-dots-pattern opacity-50" />
        
        <div className="container relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-metal-800 mb-4">
              Situations d&apos;Urgence Traitées dans le <span className="text-primary-600">34</span>
            </h3>
            <p className="text-gray-600 text-lg">
              Nos techniciens experts interviennent sur tous types de pannes et urgences pour votre rideau métallique à Montpellier et dans l&apos;Hérault.
            </p>
          </div>
          
          {/* Emergency Cases Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {urgenceContent.emergencyCases.map((item, index) => (
              <EmergencyCard key={item.id} item={item} index={index} />
            ))}
          </div>
          
          {/* Guarantees */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card">
              <h4 className="text-xl font-bold text-metal-800 mb-6 text-center">
                Nos Engagements pour Votre Urgence
              </h4>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {urgenceContent.guarantees.map((guarantee, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                      {icons.checkSmall}
                    </span>
                    <span className="text-gray-700 font-medium">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: urgenceContent.localSeo.expertise }} />
            <a 
              href={siteConfig.phoneLink}
              className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {icons.phone}
              <span>Appeler le {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* ─────────────────────────────────────────────────────────────────────
          SEO HIDDEN CONTENT
      ───────────────────────────────────────────────────────────────────── */}
      <div className="sr-only">
        <p>
          {urgenceContent.localSeo.intro} {urgenceContent.localSeo.zones}
        </p>
        <p>
          Service d&apos;urgence disponible 24 heures sur 24, 7 jours sur 7 pour dépannage rideau métallique 
          bloqué, cassé ou endommagé. Intervention rapide de nuit, le week-end et les jours fériés 
          à Montpellier (34000), dans le département de l&apos;Hérault et en région Occitanie.
        </p>
      </div>
    </section>
  );
}

export default UrgenceSection;

