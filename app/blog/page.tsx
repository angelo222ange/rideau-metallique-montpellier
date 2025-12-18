import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BlogHero, BlogCard, BlogArticle } from "@/components/sections/blog";
import { CTA } from "@/components/sections/CTA";
import articlesData from "@/content/blog/articles.json";

// Cast des articles
const articles = articlesData as BlogArticle[];

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `Blog Rideau Métallique ${siteConfig.city} | Conseils & Guides | ${siteConfig.name}`,
  description: `Blog expert sur les rideaux métalliques : conseils entretien, guides prix, solutions pannes. Actualités et astuces par DRM ${siteConfig.city}. ☎️ ${siteConfig.phone}`,
  keywords: [
    `blog rideau métallique ${siteConfig.city}`,
    `conseils rideau métallique`,
    `guide entretien rideau métallique`,
    `prix rideau métallique ${siteConfig.department}`,
    `astuces rideau de fer`,
  ],
  alternates: {
    canonical: `https://${siteConfig.domain}/blog`,
  },
  openGraph: {
    title: `Blog Rideau Métallique ${siteConfig.city} | Conseils & Guides Expert`,
    description: `Découvrez nos guides et conseils d'experts sur les rideaux métalliques. Entretien, prix, choix, motorisation... Par DRM ${siteConfig.city}.`,
    url: `https://${siteConfig.domain}/blog`,
    siteName: siteConfig.fullName,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog Rideau Métallique ${siteConfig.city}`,
    description: `Conseils et guides experts sur les rideaux métalliques par DRM ${siteConfig.city}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SCHEMA.ORG BLOG
// ─────────────────────────────────────────────────────────────────────────────
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `https://${siteConfig.domain}/blog/#blog`,
  name: `Blog ${siteConfig.fullName}`,
  description: `Conseils, guides et actualités sur les rideaux métalliques par ${siteConfig.name}`,
  url: `https://${siteConfig.domain}/blog`,
  publisher: {
    "@type": "LocalBusiness",
    "@id": `https://${siteConfig.domain}/#organization`,
    name: siteConfig.fullName,
    telephone: siteConfig.phone,
  },
  blogPost: articles.map((article) => ({
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.dateISO,
    url: `https://${siteConfig.domain}/blog/${article.slug}`,
    author: {
      "@type": "Organization",
      name: siteConfig.fullName,
    },
  })),
};

// Breadcrumb items
const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Blog", href: "/blog" },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  return (
    <>
      {/* Schema.org Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero */}
      <BlogHero />

      {/* Breadcrumb */}
      <div className="container pt-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Articles Grid */}
      <section className="section bg-white">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              {articles.length} articles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-metal-900 mb-4">
              Nos Derniers Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guides pratiques, conseils d&apos;experts et actualités sur les rideaux métalliques 
              à {siteConfig.city} et en {siteConfig.department}
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories / Tags Section */}
      <section className="section-sand">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-metal-900 mb-4">
              Parcourir par Catégorie
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["Entretien", "Dépannage", "Guide Prix", "Guide Achat", "Motorisation"].map((category) => (
              <div
                key={category}
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <span className="w-3 h-3 bg-primary-500 rounded-full" />
                <span className="font-medium text-metal-700">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}

