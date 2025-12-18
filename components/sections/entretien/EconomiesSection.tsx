"use client";

import { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/config/site";
import economiesContent from "@/content/sections/entretien/economies.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  "piggy-bank": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  "check-circle": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "x-circle": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
// STAT CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function StatCard({ stat, index }: { stat: typeof economiesContent.stats[0]; index: number }) {
  const numericValue = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;
  const { count, ref } = useCountUp(numericValue, 2000);
  
  const displayValue = stat.value.includes('x') ? `${count}x` : `${count}${stat.unit}`;

  const colors = [
    "from-primary-500 to-primary-600",
    "from-green-500 to-green-600",
    "from-secondary-500 to-secondary-600",
    "from-accent-500 to-accent-600",
  ];

  return (
    <div 
      ref={ref}
      className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${colors[index % colors.length]} bg-clip-text text-transparent mb-2`}>
        {displayValue}
      </div>
      <p className="font-semibold text-metal-800 mb-1">{stat.label}</p>
      <p className="text-sm text-gray-500">{stat.description}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPARISON SECTION COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function ComparisonSection() {
  const { comparison } = economiesContent;
  const { count: withTotal, ref: withRef } = useCountUp(comparison.withMaintenance.totalCost, 2500);
  const { count: withoutTotal, ref: withoutRef } = useCountUp(comparison.withoutMaintenance.totalCost, 2500);

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-16">
      {/* With Maintenance */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 md:p-8 border-2 border-green-300 relative overflow-hidden">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-50 blur-xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center">
              {icons["check-circle"]}
            </span>
            <h3 className="text-xl font-bold text-green-700">{comparison.withMaintenance.label}</h3>
          </div>
          
          <div className="space-y-3 mb-6">
            {comparison.withMaintenance.items.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{item.label}</span>
                {'total' in item ? (
                  <span className="font-semibold text-green-700">{item.cost}€ {item.frequency} = {item.total}€</span>
                ) : (
                  <span className="font-semibold text-green-700">{item.value}</span>
                )}
              </div>
            ))}
          </div>
          
          <div ref={withRef} className="border-t border-green-200 pt-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-green-700">Total sur 5 ans</span>
              <span className="text-3xl font-bold text-green-600">{withTotal}€</span>
            </div>
            <div className="mt-2 px-4 py-2 bg-green-500 text-white rounded-xl text-center font-bold">
              {comparison.withMaintenance.highlight}
            </div>
          </div>
        </div>
      </div>

      {/* Without Maintenance */}
      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-6 md:p-8 border-2 border-red-200 relative overflow-hidden opacity-80">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-200 rounded-full opacity-50 blur-xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-red-400 text-white flex items-center justify-center">
              {icons["x-circle"]}
            </span>
            <h3 className="text-xl font-bold text-red-600">{comparison.withoutMaintenance.label}</h3>
          </div>
          
          <div className="space-y-3 mb-6">
            {comparison.withoutMaintenance.items.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-semibold text-red-600">{item.cost}€ {item.frequency} = {item.total}€</span>
              </div>
            ))}
          </div>
          
          <div ref={withoutRef} className="border-t border-red-200 pt-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-red-600">Total sur 5 ans</span>
              <span className="text-3xl font-bold text-red-500">{withoutTotal}€</span>
            </div>
            <div className="mt-2 text-sm text-red-500 text-center">
              Durée de vie réduite : {comparison.withoutMaintenance.durability}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DURABILITY BAR COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function DurabilityBar() {
  const { durability } = economiesContent;
  const maxYears = 30;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card mb-12">
      <h3 className="text-xl font-bold text-metal-800 text-center mb-8">
        {durability.title}
      </h3>
      
      <div className="space-y-6">
        {/* With maintenance */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-green-600">{durability.withMaintenance.label}</span>
            <span className="text-2xl font-bold text-green-600">{durability.withMaintenance.years} ans</span>
          </div>
          <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-1000"
              style={{ width: `${(durability.withMaintenance.years / maxYears) * 100}%` }}
            />
          </div>
        </div>
        
        {/* Without maintenance */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-red-500">{durability.withoutMaintenance.label}</span>
            <span className="text-2xl font-bold text-red-500">{durability.withoutMaintenance.years} ans</span>
          </div>
          <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-300 to-red-400 rounded-full transition-all duration-1000"
              style={{ width: `${(durability.withoutMaintenance.years / maxYears) * 100}%` }}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <span className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-700 rounded-full font-bold text-lg">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          {durability.difference} de durée de vie
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIAL COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function Testimonial() {
  const { testimonial } = economiesContent;
  
  return (
    <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-10 relative overflow-hidden mb-12">
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
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6 italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xl">
            {testimonial.author.charAt(0)}
          </div>
          <p className="font-semibold text-white">{testimonial.author}</p>
          <p className="text-white/70 text-sm">{testimonial.role}</p>
          <span className="px-4 py-1 bg-green-500 text-white rounded-full text-sm font-bold mt-2">
            {testimonial.savings}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function EconomiesSection() {
  return (
    <section className="section bg-sand-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-50" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-4">
            {icons["piggy-bank"]}
            {economiesContent.badge.text}
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            {economiesContent.title}
            <span className="block text-green-600 mt-2">
              {economiesContent.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {economiesContent.subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {economiesContent.stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Comparison Section */}
        <h3 className="text-2xl font-bold text-metal-800 text-center mb-8">
          {economiesContent.comparison.title}
        </h3>
        <ComparisonSection />

        {/* Durability Bar */}
        <DurabilityBar />

        {/* ROI Card */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card text-center mb-12 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-metal-800 mb-4">{economiesContent.roi.title}</h3>
          <p className="text-gray-600 mb-6">{economiesContent.roi.description}</p>
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-primary-50 rounded-2xl">
            <div className="text-center">
              <p className="text-sm text-gray-500">Investissement</p>
              <p className="text-2xl font-bold text-primary-600">{economiesContent.roi.calculation.investmentPerYear}€/an</p>
            </div>
            <span className="text-3xl text-gray-300">→</span>
            <div className="text-center">
              <p className="text-sm text-gray-500">Économie</p>
              <p className="text-2xl font-bold text-green-600">{economiesContent.roi.calculation.savingsPerYear}€/an</p>
            </div>
            <span className="text-3xl text-gray-300">=</span>
            <div className="text-center">
              <p className="text-sm text-gray-500">ROI</p>
              <p className="text-2xl font-bold text-secondary-500">{economiesContent.roi.calculation.roi}</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <Testimonial />

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-metal-800 mb-6">
            {economiesContent.cta.title}
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={economiesContent.cta.primary.href}
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {economiesContent.cta.primary.text}
              {icons.arrow}
            </a>
            <a 
              href={siteConfig.phoneLink}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-primary-600 border-2 border-primary-200 hover:bg-primary-50 transition-all"
            >
              {icons.phone}
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>{economiesContent.localSeo.intro}</p>
          <p>{economiesContent.localSeo.expertise}</p>
          <p>{economiesContent.localSeo.benefit}</p>
        </div>
      </div>
    </section>
  );
}

export default EconomiesSection;

