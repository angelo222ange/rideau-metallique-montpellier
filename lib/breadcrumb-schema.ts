// Générateur de Schema.org BreadcrumbList (Server-side)
import { siteConfig } from "@/config/site";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const listItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: `https://${siteConfig.domain}/`,
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.label,
      ...(item.href ? { item: `https://${siteConfig.domain}${item.href}` } : {}),
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: listItems,
  };
}

