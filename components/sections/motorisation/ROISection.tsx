"use client";

import { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/config/site";
import roiContent from "@/content/sections/motorisation/roi.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  chart: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  clock: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  calendar: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  lock: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  building: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  arrow: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
  trendUp: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
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
function StatCard({ stat, index }: { stat: typeof roiContent.stats[0]; index: number }) {
  const numericValue = parseInt(stat.value.replace(/[^0-9]/g, "")) || 0;
  const { count, ref } = useCountUp(numericValue, 2000);

  const displayValue = stat.value.startsWith("-")
    ? `-${count}%`
    : stat.value.startsWith("+")
    ? `+${count}`
    : stat.value.includes("h")
    ? `${count}h`
    : count.toString();

  const bgColors = [
    "bg-gradient-to-br from-primary-500 to-primary-600",
    "bg-gradient-to-br from-accent-500 to-accent-600",
    "bg-gradient-to-br from-secondary-400 to-secondary-500",
    "bg-gradient-to-br from-green-500 to-green-600",
  ];

  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl ${bgColors[index % 4]} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {icons[stat.icon] || icons.chart}
      </div>

      {/* Value */}
      <div className="text-4xl font-bold text-metal-800 mb-1">{displayValue}</div>

      {/* Label */}
      <div className="text-primary-600 font-semibold mb-2">{stat.label}</div>

      {/* Description */}
      <p className="text-sm text-gray-500">{stat.description}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function ROISection() {
  const { stats, calcul, benefices, timeline, temoignage } = roiContent;

  return (
    <section className="section bg-sand-100 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-50" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
            {icons.chart}
            {roiContent.badge.text}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            {roiContent.title} :{" "}
            <span className="text-primary-600">{roiContent.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{roiContent.subtitle}</p>
        </div>

        {/* Intro with highlight */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card">
            <p className="text-gray-600 leading-relaxed mb-4">{roiContent.intro.text}</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-50 text-secondary-700 rounded-xl font-bold">
              {icons.trendUp}
              {roiContent.intro.highlight}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-6 md:p-10 text-white mb-16 relative overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{calcul.title}</h3>
              <p className="text-white/80">{calcul.subtitle}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Investissement */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-red-500/30 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                  {calcul.investissement.label}
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">{calcul.investissement.moteur.label}</span>
                    <span className="font-semibold">
                      {calcul.investissement.moteur.valeur}€
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">{calcul.investissement.accessoires.label}</span>
                    <span className="font-semibold">
                      {calcul.investissement.accessoires.valeur}€
                    </span>
                  </div>
                  <div className="border-t border-white/20 pt-3 flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold">{calcul.investissement.total}€</span>
                  </div>
                </div>
              </div>

              {/* Economies */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-green-500/30 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </span>
                  {calcul.economies.label}
                </h4>
                <div className="space-y-2">
                  {calcul.economies.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-start gap-2 text-sm">
                      <span className="text-white/80">{item.label}</span>
                      <span className="font-semibold text-green-300 whitespace-nowrap">
                        +{item.valeur}€
                      </span>
                    </div>
                  ))}
                  <div className="border-t border-white/20 pt-3 flex justify-between items-center">
                    <span className="font-semibold">Total/an</span>
                    <span className="text-2xl font-bold text-green-300">
                      +{calcul.economies.total}€
                    </span>
                  </div>
                </div>
              </div>

              {/* ROI */}
              <div className="bg-secondary-500 rounded-2xl p-6 flex flex-col justify-center">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-white/30 flex items-center justify-center">
                    {icons.trendUp}
                  </span>
                  {calcul.roi.label}
                </h4>
                <div className="text-5xl md:text-6xl font-bold mb-2">{calcul.roi.valeur}</div>
                <p className="text-white/90">{calcul.roi.highlight}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-metal-800 text-center mb-10">
            Les 4 Piliers de Votre Rentabilité
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefices.map((benefice, index) => (
              <div
                key={benefice.id}
                className="group bg-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${
                      index === 0
                        ? "bg-primary-100 text-primary-600"
                        : index === 1
                        ? "bg-accent-100 text-accent-600"
                        : index === 2
                        ? "bg-secondary-100 text-secondary-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {icons[benefice.icon] || icons.chart}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-metal-800">{benefice.title}</h4>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-bold ${
                          index === 0
                            ? "bg-primary-100 text-primary-700"
                            : index === 1
                            ? "bg-accent-100 text-accent-700"
                            : index === 2
                            ? "bg-secondary-100 text-secondary-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {benefice.stat}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{benefice.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-card mb-16">
          <h3 className="text-2xl font-bold text-metal-800 text-center mb-10">
            {timeline.title}
          </h3>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-amber-200 to-green-300" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2">
              {timeline.years.map((year, index) => (
                <div key={year.annee} className="relative text-center">
                  {/* Dot */}
                  <div
                    className={`relative z-10 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center font-bold text-white shadow-lg ${
                      year.cumul < 0
                        ? "bg-gradient-to-br from-red-400 to-red-500"
                        : index === 2
                        ? "bg-gradient-to-br from-amber-400 to-amber-500"
                        : "bg-gradient-to-br from-green-400 to-green-500"
                    }`}
                  >
                    A{year.annee}
                  </div>

                  {/* Content */}
                  <h4 className="font-bold text-metal-800 mb-1">{year.label}</h4>
                  <div
                    className={`text-xl font-bold mb-2 ${
                      year.cumul < 0 ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {year.cumul > 0 ? "+" : ""}
                    {year.cumul}€
                  </div>
                  <p className="text-xs text-gray-500">{year.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-3xl p-6 md:p-10 mb-12 relative overflow-hidden">
          <div className="absolute top-4 right-4 text-accent-200">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: temoignage.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400">
                  {icons.star}
                </span>
              ))}
            </div>
            <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
              &quot;{temoignage.text}&quot;
            </p>
            <div>
              <p className="font-bold text-metal-800">{temoignage.auteur}</p>
              <p className="text-primary-600">{temoignage.commerce}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-metal-800 mb-3">{roiContent.cta.title}</h3>
          <p className="text-gray-600 mb-6">{roiContent.cta.description}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.phoneLink}
              className="group relative inline-flex items-center gap-3 bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-2xl bg-secondary-400 animate-pulse-ring opacity-50" />
              {icons.phone}
              <span className="relative">{siteConfig.phone}</span>
            </a>

            <a
              href="/contact-rideau-metallique"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-primary-600 border-2 border-primary-200 bg-white hover:bg-primary-50 transition-all duration-300"
            >
              {roiContent.cta.buttonText}
              {icons.arrow}
            </a>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>
            Calculez le retour sur investissement de la motorisation de votre rideau métallique
            à Montpellier (34000). Économies réalisées, durée de vie prolongée et réduction des
            sinistres pour votre commerce dans l&apos;Hérault. Rentabilité prouvée en 2-3 ans
            pour les commerçants de l&apos;agglomération montpelliéraine.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ROISection;

