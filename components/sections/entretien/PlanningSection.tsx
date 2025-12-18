"use client";

import planningContent from "@/content/sections/entretien/planning.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  calendar: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  "calendar-month": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
    </svg>
  ),
  "calendar-quarter": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  "calendar-half": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15z" />
    </svg>
  ),
  "calendar-year": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  warning: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  check: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  clock: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  user: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  arrow: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// COLOR MAPPING
// ─────────────────────────────────────────────────────────────────────────────
const colorClasses = {
  primary: {
    bg: "bg-primary-500",
    bgLight: "bg-primary-50",
    text: "text-primary-600",
    border: "border-primary-200",
    gradient: "from-primary-500 to-primary-600",
  },
  accent: {
    bg: "bg-accent-500",
    bgLight: "bg-accent-50",
    text: "text-accent-600",
    border: "border-accent-200",
    gradient: "from-accent-500 to-accent-600",
  },
  secondary: {
    bg: "bg-secondary-500",
    bgLight: "bg-secondary-50",
    text: "text-secondary-600",
    border: "border-secondary-200",
    gradient: "from-secondary-500 to-secondary-600",
  },
  green: {
    bg: "bg-green-500",
    bgLight: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
    gradient: "from-green-500 to-green-600",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// TIMELINE CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function TimelineCard({ period, index }: { period: typeof planningContent.periods[0]; index: number }) {
  const colors = colorClasses[period.color as keyof typeof colorClasses] || colorClasses.primary;
  const isLast = index === planningContent.periods.length - 1;

  return (
    <div className="relative flex gap-6 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
      {/* Timeline line & dot */}
      <div className="flex flex-col items-center">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.gradient} text-white flex items-center justify-center shadow-lg z-10`}>
          {icons[period.icon] || icons.calendar}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-gray-200 to-gray-100 my-2" />
        )}
      </div>

      {/* Content Card */}
      <div className={`flex-1 bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border ${colors.border} mb-6`}>
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h3 className={`text-xl font-bold ${colors.text}`}>{period.frequency}</h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                {icons.user}
                {period.whoCanDo}
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1">
                {icons.clock}
                {period.duration}
              </span>
            </div>
          </div>
          <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${colors.bgLight} ${colors.text}`}>
            {period.benefit}
          </span>
        </div>

        {/* Tasks */}
        <div className="space-y-3">
          {period.tasks.map((task, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className={`w-6 h-6 rounded-full ${colors.bgLight} ${colors.text} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                {icons.check}
              </span>
              <div>
                <p className="font-semibold text-metal-800 text-sm">{task.title}</p>
                <p className="text-gray-500 text-sm">{task.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TIP CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function TipCard({ tip, index }: { tip: typeof planningContent.tips[0]; index: number }) {
  const isWarning = tip.icon === "warning";
  
  return (
    <div 
      className={`rounded-2xl p-6 ${isWarning ? 'bg-yellow-50 border border-yellow-200' : 'bg-green-50 border border-green-200'} animate-fade-in-up`}
      style={{ animationDelay: `${(planningContent.periods.length + index) * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isWarning ? 'bg-yellow-200 text-yellow-600' : 'bg-green-200 text-green-600'}`}>
          {icons[tip.icon] || icons.lightbulb}
        </div>
        <div>
          <h4 className={`font-bold ${isWarning ? 'text-yellow-700' : 'text-green-700'}`}>{tip.title}</h4>
          <p className={`text-sm ${isWarning ? 'text-yellow-600' : 'text-green-600'}`}>{tip.text}</p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function PlanningSection() {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            {icons.calendar}
            {planningContent.badge.text}
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            {planningContent.title}
            <span className="block text-primary-600 mt-2">
              {planningContent.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {planningContent.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-12">
          {planningContent.periods.map((period, index) => (
            <TimelineCard key={period.id} period={period} index={index} />
          ))}
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {planningContent.tips.map((tip, index) => (
            <TipCard key={index} tip={tip} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-metal-800 mb-4">
            {planningContent.cta.title}
          </h3>
          <a 
            href={planningContent.cta.href}
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            {planningContent.cta.text}
            {icons.arrow}
          </a>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>{planningContent.localSeo.intro}</p>
          <p>{planningContent.localSeo.expertise}</p>
          <p>{planningContent.localSeo.coverage}</p>
        </div>
      </div>
    </section>
  );
}

export default PlanningSection;

