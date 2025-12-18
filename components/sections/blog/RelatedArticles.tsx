"use client";

import { BlogCard, BlogArticle } from "./BlogCard";

interface RelatedArticlesProps {
  articles: BlogArticle[];
  currentSlug: string;
}

export function RelatedArticles({ articles, currentSlug }: RelatedArticlesProps) {
  // Filter out current article and take max 3
  const relatedArticles = articles
    .filter(article => article.slug !== currentSlug)
    .slice(0, 3);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Continuez votre lecture
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-metal-900">
          📚 Articles Connexes
        </h2>
        <p className="text-gray-600 mt-2">
          Découvrez nos autres guides et conseils sur les rideaux métalliques
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}

