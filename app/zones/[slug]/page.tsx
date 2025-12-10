import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig, zones } from "@/config/site";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { getPageContent } from "@/lib/content";
import faqData from "@/content/faq.json";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return zones.filter(zone => !zone.isMain).map((zone) => ({ slug: zone.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const zone = zones.find((z) => z.slug === params.slug);
  if (!zone) return { title: "Zone non trouvée" };

  return {
    title: `Rideau Métallique ${zone.name}`,
    description: `Dépannage rideau métallique à ${zone.name} (${zone.postalCode}). Intervention rapide 24h/24. ☎️ ${siteConfig.phone}`,
  };
}

export default function ZonePage({ params }: Props) {
  const zone = zones.find((z) => z.slug === params.slug);
  if (!zone) notFound();

  const zoneFaq = getPageContent(faqData).map(item => ({
    ...item,
    answer: item.answer.replace(new RegExp(siteConfig.city, 'g'), zone.name),
  }));

  return (
    <main>
      <Hero
        badge={`📍 ${zone.name}`}
        title={`Rideau Métallique ${zone.name}`}
        subtitle={`Intervention rapide en 1 heure à ${zone.name} (${zone.postalCode}). Dépannage, installation, motorisation. 24h/24.`}
      />
      <Services title={`Nos services à ${zone.name}`} zoneSlug={zone.slug} />
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Rideau métallique à {zone.name}</h2>
            <p>
              Vous recherchez un spécialiste du <strong>rideau métallique à {zone.name}</strong> ? 
              {siteConfig.name} intervient rapidement sur {zone.name} ({zone.postalCode}) pour tous vos besoins : 
              dépannage, installation, motorisation et entretien.
            </p>
            <h3>Pourquoi choisir {siteConfig.name} à {zone.name} ?</h3>
            <ul>
              <li><strong>Intervention en 1 heure</strong> sur {zone.name}</li>
              <li><strong>Disponible 24h/24</strong>, y compris week-ends et jours fériés</li>
              <li><strong>Devis gratuit</strong> avant intervention</li>
              <li><strong>Techniciens qualifiés</strong> toutes marques</li>
            </ul>
          </div>
        </div>
      </section>

      <FAQ items={zoneFaq.slice(0, 5)} title={`FAQ - Rideau Métallique ${zone.name}`} />
      <CTA title={`Besoin d'un dépannage à ${zone.name} ?`} />
    </main>
  );
}

