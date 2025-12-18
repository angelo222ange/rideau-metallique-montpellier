import { siteConfig } from "@/config/site";

interface TLDRBoxProps {
  content: string;
}

export function TLDRBox({ content }: TLDRBoxProps) {
  return (
    <div className="relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 md:p-8 border-l-4 border-primary-500 shadow-lg my-8">
      {/* Icon */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pl-6">
        <h2 className="text-lg md:text-xl font-bold text-primary-800">
          💡 Pas le temps de tout lire ?
        </h2>
      </div>

      {/* Content */}
      <p className="text-metal-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: content }} />

      {/* CTA */}
      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-primary-200">
        <span className="text-sm text-metal-600 font-medium">
          📞 Besoin d&apos;aide ? Contactez DRM {siteConfig.city}
        </span>
        <a 
          href={siteConfig.phoneLink}
          className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-bold px-4 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}

