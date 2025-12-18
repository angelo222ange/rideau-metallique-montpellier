"use client";

import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

export default function ConfidentialitePage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "identification", title: "Identification du responsable" },
    { id: "collecte", title: "Collecte et utilisation" },
    { id: "protection", title: "Protection des données" },
    { id: "partage", title: "Partage des données" },
    { id: "cookies", title: "Cookies" },
    { id: "droits", title: "Droits d'accès et modification" },
    { id: "resume", title: "En résumé" },
    { id: "reclamation", title: "Réclamation CNIL" },
  ];

  return (
    <main className="pt-20">
      <section className="section bg-white">
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-3 prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold mb-4">Confidentialité des données personnelles</h1>
              <p className="text-xl text-gray-600 mb-8">
                La protection de vos données personnelles constitue une priorité absolue pour {siteConfig.name}
              </p>

              {/* Introduction */}
              <section id="introduction" className="scroll-mt-24">
                <div className="bg-blue-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-8">
                  <p className="text-lg leading-relaxed">
                    La protection de vos données personnelles constitue une priorité absolue pour {siteConfig.name}. Nous nous engageons à garantir la confidentialité de nos clients et des visiteurs de notre site web {siteConfig.domain}, conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD).
                  </p>
                </div>
              </section>

              {/* Identification */}
              <section id="identification" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Identification du responsable de traitement
                </h2>
                <div className="space-y-4">
                  <p>
                    En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, nous informons nos utilisateurs de l&apos;identité des différents intervenants impliqués dans la réalisation et le suivi de ce site.
                  </p>
                  <p>
                    Le propriétaire de ce site est la <strong>{siteConfig.fullName}</strong>.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">Informations légales :</h3>
                    <ul className="space-y-2">
                      <li>
                        <strong>Siège social :</strong> {siteConfig.address}
                      </li>
                      <li>
                        <strong>Contact :</strong>
                      </li>
                      <li className="ml-4">
                        À l&apos;adresse e-mail : <a href={`mailto:${siteConfig.email}`} className="text-primary-600 hover:underline">{siteConfig.email}</a>
                      </li>
                      <li className="ml-4">
                        Par téléphone : <a href={siteConfig.phoneLink} className="text-primary-600 hover:underline">{siteConfig.phone}</a>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-4">
                    Pour toute question relative à la protection de vos données personnelles, vous pouvez nous contacter aux coordonnées ci-dessus.
                  </p>
                </div>
              </section>

              {/* Collecte */}
              <section id="collecte" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Collecte et utilisation des données personnelles
                </h2>
                <div className="space-y-4">
                  <p>
                    Nous collectons des données personnelles telles que les noms, prénoms, raisons sociales, adresses e-mail, numéros de téléphone et adresses postales lorsque les visiteurs remplissent des formulaires de contact ou de devis sur notre site web.
                  </p>
                  <p>
                    Ces données sont utilisées pour :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Répondre aux demandes de devis et d&apos;intervention</li>
                    <li>Organiser les dépannages et prestations techniques</li>
                    <li>Gérer la relation client et le suivi des interventions</li>
                    <li>Établir la facturation et assurer le suivi administratif</li>
                    <li>Tenir informés nos clients des nouveautés et des offres spéciales de notre entreprise (avec votre accord préalable)</li>
                  </ul>
                </div>
              </section>

              {/* Protection */}
              <section id="protection" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Protection des données personnelles
                </h2>
                <div className="space-y-4">
                  <p>
                    Nous prenons toutes les mesures nécessaires pour garantir la sécurité des données personnelles que nous collectons, notamment en utilisant des méthodes de stockage et de traitement appropriées pour empêcher toute perte, tout vol, tout accès non autorisé ou toute modification des données.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">Les mesures de protection mises en place incluent :</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Le chiffrement des données sensibles (protocole HTTPS)</li>
                      <li>Des systèmes de pare-feu pour protéger nos serveurs</li>
                      <li>Des mots de passe sécurisés et des accès restreints</li>
                      <li>Des sauvegardes régulières de nos bases de données</li>
                      <li>La formation de notre personnel à la protection des données</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Partage */}
              <section id="partage" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Partage des données personnelles
                </h2>
                <div className="space-y-4">
                  <p>
                    Nous ne partageons pas les données personnelles que nous collectons avec des tiers à des fins commerciales. Vos données ne sont jamais vendues.
                  </p>
                  <p>
                    Nous pouvons être amenés à partager vos données uniquement dans les cas suivants :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Pour répondre aux demandes des visiteurs (prestataires techniques, fournisseurs)</li>
                    <li>Pour respecter nos obligations légales (administration fiscale, autorités compétentes)</li>
                    <li>Avec nos sous-traitants techniques (hébergement, maintenance) qui sont tenus à la même obligation de confidentialité</li>
                  </ul>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Cookies
                </h2>
                <div className="space-y-6">
                  <p>
                    Nous utilisons des cookies pour améliorer l&apos;expérience des visiteurs sur notre site web. Les cookies sont de petits fichiers texte qui sont stockés sur l&apos;ordinateur ou l&apos;appareil mobile d&apos;un visiteur lorsqu&apos;il visite notre site. Nous utilisons des cookies pour collecter des informations sur l&apos;utilisation du site et pour personnaliser le contenu proposé aux visiteurs.
                  </p>

                  <div>
                    <h3 className="text-2xl font-bold mt-8 mb-4">Les différents types de cookies</h3>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-4">
                      <h4 className="font-bold text-lg mb-3">Les cookies internes</h4>
                      <p>
                        Les cookies internes sont émis directement par notre site internet {siteConfig.domain}.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg mb-4">
                      <h4 className="font-bold text-lg mb-3">Les cookies de session</h4>
                      <p>
                        Les cookies de session permettent de mémoriser les données d&apos;identification des utilisateurs d&apos;une page à l&apos;autre afin qu&apos;ils puissent parcourir le site plus rapidement sans avoir à s&apos;identifier à nouveau ou à retraiter chaque nouvelle partie du site visité. Le cookie sera automatiquement détruit une fois que votre session sera terminée (fermeture du navigateur).
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg mb-4">
                      <h4 className="font-bold text-lg mb-3">Les cookies techniques</h4>
                      <p>
                        Les cookies techniques facilitent la navigation de l&apos;utilisateur en lui suggérant des services susceptibles de l&apos;intéresser en fonction de ses habitudes de connexion. Ils peuvent également permettre de personnaliser l&apos;expérience utilisateur de notre site pour offrir un service davantage adapté aux besoins.
                      </p>
                      <p className="mt-3">
                        Ils permettent également de déterminer le terminal utilisé (mobile, tablette, ordinateur) afin d&apos;adapter automatiquement l&apos;affichage du site au support pour faciliter la consultation.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg mb-4">
                      <h4 className="font-bold text-lg mb-3">Les cookies tiers</h4>
                      <p>
                        Notre site est susceptible de faire appel à des services tiers spécialisés pour enrichir les solutions de communication ou mesurer l&apos;audience du site.
                      </p>
                      <p className="mt-3 mb-2">Ces cookies supplémentaires peuvent assurer l&apos;affichage de services tels que :</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>La mesure d&apos;audience (statistiques de fréquentation)</li>
                        <li>Le partage sur les réseaux sociaux</li>
                        <li>L&apos;affichage de cartes interactives</li>
                        <li>Les publicités ciblées (avec votre consentement)</li>
                      </ul>
                      <p className="mt-3">
                        Il s&apos;agit des cookies déposés sur votre terminal par des sociétés tierces lorsque vous naviguez sur le site ou cliquez dans certains espaces.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h3 className="font-bold text-lg mb-4">Accepter ou refuser les cookies</h3>
                    <p className="mb-3">
                      Lorsqu&apos;un cookie est susceptible d&apos;être déposé sur votre navigateur internet, un bandeau d&apos;information vous informe de sa présence et vous permet de faire un choix.
                    </p>
                    <p className="mb-3">Vous pouvez :</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Accepter tous les cookies en poursuivant simplement votre navigation sur le site</li>
                      <li>Personnaliser vos choix en sélectionnant les catégories de cookies que vous acceptez</li>
                      <li>Refuser les cookies non essentiels au cas par cas ou systématiquement</li>
                    </ul>
                    <p className="mt-4">
                      Nous vous rappelons que le paramétrage est susceptible de modifier vos conditions d&apos;accès à nos services nécessitant l&apos;utilisation de cookies.
                    </p>
                    <p className="mt-3 font-semibold">
                      Important : Si votre navigateur est configuré de manière à refuser l&apos;ensemble des cookies, vous ne pourrez pas profiter de certaines fonctionnalités de notre site. Afin de gérer les cookies au plus près de vos attentes, nous vous invitons à paramétrer votre navigateur en tenant compte de la finalité des cookies telle que mentionnée ci-dessus.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mt-8 mb-4">Comment contrôler ou empêcher l&apos;enregistrement des cookies</h3>
                    <p className="mb-4">
                      La configuration de chaque navigateur est différente. Elle est décrite dans le menu d&apos;aide de votre navigateur, qui vous permettra de savoir comment modifier vos préférences en matière de cookies.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-2">Mozilla Firefox</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm mb-2">
                          <li>Choisissez le menu « Outils », puis « Options »</li>
                          <li>Cliquez sur l&apos;icône « Vie privée et sécurité »</li>
                          <li>Repérez le menu « Cookies et données de sites »</li>
                          <li>Sélectionnez les options qui vous conviennent</li>
                        </ul>
                        <p className="text-sm">
                          Plus d&apos;informations sur le support de l&apos;éditeur Mozilla : <a href="https://support.mozilla.org/fr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://support.mozilla.org/fr/</a>
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-2">Microsoft Edge / Internet Explorer</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm mb-2">
                          <li>Choisissez le menu « Outils » ou « Paramètres »</li>
                          <li>Puis « Options Internet » ou « Confidentialité, recherche et services »</li>
                          <li>Cliquez sur l&apos;onglet « Confidentialité »</li>
                          <li>Sélectionnez le niveau souhaité à l&apos;aide du curseur ou des options proposées</li>
                        </ul>
                        <p className="text-sm">
                          Plus d&apos;informations sur le support de l&apos;éditeur Microsoft : <a href="https://support.microsoft.com/fr-fr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://support.microsoft.com/fr-fr/</a>
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-2">Google Chrome</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm mb-2">
                          <li>Cliquez sur le menu Chrome (les trois points verticaux en haut à droite)</li>
                          <li>Allez dans « Paramètres »</li>
                          <li>Cliquez sur « Confidentialité et sécurité »</li>
                          <li>Puis sur « Cookies et autres données de sites »</li>
                          <li>Choisissez vos préférences</li>
                        </ul>
                        <p className="text-sm">
                          Plus d&apos;informations sur le support de Google : <a href="https://support.google.com/chrome/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://support.google.com/chrome/</a>
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-2">Safari (Mac et iOS)</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm mb-2">
                          <li>Allez dans le menu « Safari » puis « Préférences »</li>
                          <li>Cliquez sur « Confidentialité »</li>
                          <li>Dans « Bloquer les cookies », sélectionnez vos préférences</li>
                          <li>Pour bloquer tous les cookies, cochez « Toujours »</li>
                        </ul>
                        <p className="text-sm">
                          Plus d&apos;information sur le support de l&apos;éditeur Apple : <a href="https://support.apple.com/fr-fr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://support.apple.com/fr-fr/</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Droits */}
              <section id="droits" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Droit d&apos;accès, de modification et de suppression des données personnelles
                </h2>
                <div className="space-y-4">
                  <p>
                    Conformément au RGPD et à la loi Informatique et Libertés, les visiteurs disposent des droits suivants concernant leurs données personnelles :
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Droit d&apos;accès :</strong> Vous pouvez obtenir la confirmation que des données vous concernant sont traitées et accéder à ces données.</li>
                      <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de vos données si elles sont inexactes ou incomplètes.</li>
                      <li><strong>Droit à l&apos;effacement :</strong> Vous pouvez demander la suppression de vos données dans certains cas.</li>
                      <li><strong>Droit d&apos;opposition :</strong> Vous pouvez vous opposer au traitement de vos données pour des motifs légitimes.</li>
                      <li><strong>Droit à la limitation :</strong> Vous pouvez demander la limitation du traitement de vos données dans certaines situations.</li>
                      <li><strong>Droit à la portabilité :</strong> Vous pouvez recevoir vos données dans un format structuré et les transmettre à un autre responsable.</li>
                    </ul>
                  </div>
                  <p>
                    Pour exercer ces droits, vous pouvez :
                  </p>
                  <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                    <ul className="space-y-3">
                      <li>
                        Envoyer un e-mail à l&apos;adresse <a href={`mailto:${siteConfig.email}`} className="text-primary-600 hover:underline font-semibold">{siteConfig.email}</a>
                      </li>
                      <li>
                        Nous appeler au <a href={siteConfig.phoneLink} className="text-primary-600 hover:underline font-semibold">{siteConfig.phone}</a>
                      </li>
                      <li>
                        Nous écrire par courrier postal à l&apos;adresse suivante :<br />
                        <strong>{siteConfig.fullName}</strong><br />
                        Service Protection des Données<br />
                        {siteConfig.address}
                      </li>
                    </ul>
                    <p className="mt-4">
                      Votre demande devra être accompagnée d&apos;une copie d&apos;un titre d&apos;identité en cours de validité (carte d&apos;identité ou passeport) pour vérifier votre identité. Nous nous engageons à vous répondre dans un délai de 1 mois maximum.
                    </p>
                  </div>
                </div>
              </section>

              {/* Résumé */}
              <section id="resume" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  En résumé
                </h2>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <p className="mb-4">
                    Chez {siteConfig.name}, nous sommes pleinement engagés dans la protection de la confidentialité des données personnelles de nos clients et de nos visiteurs.
                  </p>
                  <p className="mb-3">Nous nous engageons à :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Collecter et utiliser les données personnelles de manière responsable et transparente</li>
                    <li>Protéger vos données avec les mesures de sécurité appropriées</li>
                    <li>Ne jamais vendre vos données à des tiers</li>
                    <li>Respecter vos droits et répondre à vos demandes dans les meilleurs délais</li>
                  </ul>
                  <p className="mt-4">
                    Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, n&apos;hésitez pas à nous contacter à l&apos;adresse e-mail <a href={`mailto:${siteConfig.email}`} className="text-primary-600 hover:underline font-semibold">{siteConfig.email}</a> ou par téléphone au <a href={siteConfig.phoneLink} className="text-primary-600 hover:underline font-semibold">{siteConfig.phone}</a>.
                  </p>
                </div>
              </section>

              {/* Réclamation CNIL */}
              <section id="reclamation" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Réclamation auprès de la CNIL
                </h2>
                <div className="space-y-4">
                  <p>
                    Si la réponse fournie par {siteConfig.name} ne vous satisfait pas ou si vous souhaitez la contester, vous avez le droit d&apos;introduire une réclamation auprès de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL).
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">
                      Commission Nationale de l&apos;Informatique et des Libertés (CNIL)
                    </h3>
                    <div className="space-y-3">
                      <p>
                        <strong>3 Place de Fontenoy</strong><br />
                        TSA 80715<br />
                        75334 PARIS CEDEX 07
                      </p>
                      <p>
                        <strong>Téléphone :</strong> 01 53 73 22 22
                      </p>
                      <p>
                        <strong>Site web :</strong> <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://www.cnil.fr/fr/plaintes</a>
                      </p>
                      <p>
                        <strong>Formulaire en ligne :</strong> <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://www.cnil.fr/fr/plaintes</a>
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-gray-600">
                    <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" })}
                  </p>
                  <p className="text-sm text-gray-600">
                    Cette politique de confidentialité peut être modifiée à tout moment. Nous vous encourageons à la consulter régulièrement.
                  </p>
                </div>
              </section>
            </div>

            {/* Sommaire dynamique */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Sommaire</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(section.id);
                        }}
                        className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                          activeSection === section.id
                            ? "bg-primary-600 text-white font-medium"
                            : "text-gray-700 hover:bg-gray-200 hover:text-primary-600"
                        }`}
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
