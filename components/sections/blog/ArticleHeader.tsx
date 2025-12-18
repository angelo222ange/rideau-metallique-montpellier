import { siteConfig } from "@/config/site";

interface ArticleHeaderProps {
  title: string;
  date: string;
  readingTime: string;
  category: string;
}

export function ArticleHeader({ title, date, readingTime, category }: ArticleHeaderProps) {
  return (
    <header className="mb-8">
      {/* Category */}
      <div className="mb-4">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary-100 text-primary-700">
          {category}
        </span>
      </div>

      {/* Title H1 */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-900 leading-tight mb-6">
        {title}
      </h1>

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-4 text-gray-600 pb-6 border-b border-gray-200">
        {/* Date */}
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time dateTime={date} className="font-medium">
            {date}
          </time>
        </div>

        {/* Separator */}
        <span className="text-gray-300">•</span>

        {/* Reading time */}
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{readingTime}</span>
        </div>

        {/* Separator */}
        <span className="text-gray-300">•</span>

        {/* Author */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span>Par <strong className="text-metal-800">{siteConfig.name}</strong></span>
        </div>
      </div>
    </header>
  );
}

