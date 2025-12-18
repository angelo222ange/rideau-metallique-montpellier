import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { 
  ArticleHeader, 
  TLDRBox, 
  AuthorBox, 
  RelatedArticles,
  BlogArticle 
} from "@/components/sections/blog";
import { CTA } from "@/components/sections/CTA";
import articlesData from "@/content/blog/articles.json";

// Type pour le contenu complet d'un article
interface ArticleContent {
  introduction: string;
  sections: {
    h2: string;
    content: string;
  }[];
  table: {
    title: string;
    headers: string[];
    rows: string[][];
  };
  list: {
    title: string;
    items: string[];
  };
  conclusion: string;
}

interface FullArticle extends BlogArticle {
  dateISO: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  tldr: string;
  content: ArticleContent;
  relatedService: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
}

const articles = articlesData as FullArticle[];

// ─────────────────────────────────────────────────────────────────────────────
// GENERATE STATIC PARAMS
// ─────────────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// GENERATE METADATA
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  
  if (!article) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `https://${siteConfig.domain}/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://${siteConfig.domain}/blog/${article.slug}`,
      siteName: siteConfig.fullName,
      locale: "fr_FR",
      type: "article",
      publishedTime: article.dateISO,
      authors: [siteConfig.fullName],
      images: [
        {
          url: `https://${siteConfig.domain}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [`https://${siteConfig.domain}${article.image}`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default async function BlogArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: article.title.substring(0, 40) + "...", href: `/blog/${article.slug}` },
  ];

  // Schema BlogPosting
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://${siteConfig.domain}/blog/${article.slug}/#article`,
    headline: article.title,
    description: article.excerpt,
    image: `https://${siteConfig.domain}${article.image}`,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: {
      "@type": "Organization",
      name: siteConfig.fullName,
      url: `https://${siteConfig.domain}`,
    },
    publisher: {
      "@type": "LocalBusiness",
      "@id": `https://${siteConfig.domain}/#organization`,
      name: siteConfig.fullName,
      logo: {
        "@type": "ImageObject",
        url: `https://${siteConfig.domain}/images/logos/logo-drm.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://${siteConfig.domain}/blog/${article.slug}`,
    },
    keywords: article.keywords.join(", "),
    articleSection: article.category,
    wordCount: article.content.sections.reduce((acc, s) => acc + s.content.split(" ").length, 0) + 500,
  };

  return (
    <>
      {/* Schema.org Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10">
          <Breadcrumb items={breadcrumbItems} variant="light" />
        </div>
      </section>

      {/* Article Content */}
      <article className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <ArticleHeader
              title={article.title}
              date={article.date}
              readingTime={article.readingTime}
              category={article.category}
            />

            {/* TLDR Box */}
            <TLDRBox content={article.tldr} />

            {/* Hero Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 shadow-xl">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-lg text-metal-700 leading-relaxed">
                {article.content.introduction}
              </p>
            </div>

            {/* Sections */}
            {article.content.sections.map((section, index) => (
              <section key={index} className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-metal-900 mb-4">
                  {section.h2}
                </h2>
                <div className="prose prose-lg max-w-none">
                  {section.content.split("\n\n").map((paragraph, pIndex) => (
                    <p 
                      key={pIndex} 
                      className="text-metal-700 leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ 
                        __html: paragraph
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\n/g, '<br />')
                      }}
                    />
                  ))}
                </div>
                
                {/* Image secondaire après la 3ème section */}
                {index === 2 && article.secondaryImage && (
                  <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={article.secondaryImage}
                      alt={article.secondaryImageAlt || "Image illustrative DRM Montpellier"}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white text-sm font-medium">
                        📷 {article.secondaryImageAlt || "DRM Montpellier - Expert rideau métallique"}
                      </p>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Table */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-metal-900 mb-6">
                📊 {article.content.table.title}
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
                <table className="w-full">
                  <thead className="bg-primary-600 text-white">
                    <tr>
                      {article.content.table.headers.map((header, index) => (
                        <th 
                          key={index} 
                          className="px-4 py-3 text-left font-semibold text-sm"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {article.content.table.rows.map((row, rowIndex) => (
                      <tr 
                        key={rowIndex} 
                        className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        {row.map((cell, cellIndex) => (
                          <td 
                            key={cellIndex} 
                            className="px-4 py-3 text-metal-700 border-t border-gray-200"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* List */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-metal-900 mb-6">
                {article.content.list.title}
              </h2>
              <div className="bg-gradient-to-br from-sand-50 to-sand-100 rounded-2xl p-6 md:p-8 border border-sand-200">
                <ul className="space-y-3">
                  {article.content.list.items.map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 text-metal-700"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-metal-900 mb-4">
                📝 Conclusion
              </h2>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 md:p-8 border border-primary-100">
                <p className="text-metal-700 leading-relaxed text-lg">
                  {article.content.conclusion}
                </p>
                
                {/* CTA inline */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <a 
                    href={siteConfig.phoneLink}
                    className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {siteConfig.phone}
                  </a>
                  <Link
                    href={article.relatedService}
                    className="inline-flex items-center gap-2 bg-white hover:bg-primary-50 text-primary-700 font-semibold px-6 py-3 rounded-xl border-2 border-primary-200 hover:border-primary-300 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Voir notre service
                  </Link>
                </div>
              </div>
            </section>

            {/* Author Box */}
            <AuthorBox />

            {/* Related Articles */}
            <RelatedArticles 
              articles={articles.map(a => ({
                slug: a.slug,
                title: a.title,
                excerpt: a.excerpt,
                date: a.date,
                readingTime: a.readingTime,
                category: a.category,
                image: a.image,
                imageAlt: a.imageAlt,
              }))} 
              currentSlug={article.slug} 
            />
          </div>
        </div>
      </article>

      {/* CTA Final */}
      <CTA />
    </>
  );
}

