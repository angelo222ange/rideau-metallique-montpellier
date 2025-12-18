"use client";

import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

export default function CookiesPage() {
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
    { id: "objectif", title: "Objectif de notre politique" },
    { id: "definition", title: "Que sont les cookies ?" },
    { id: "techniques", title: "Cookies techniques" },
    { id: "statistiques", title: "Cookies statistiques" },
    { id: "publicitaires", title: "Cookies publicitaires" },
    { id: "donnees", title: "Données personnelles traitées" },
    { id: "controle", title: "Comment contrôler les cookies ?" },
    { id: "cnil", title: "Contacter la CNIL" },
    { id: "contact", title: "Nous contacter" },
  ];

  return (
    <main className="pt-20">
      <section className="section bg-white">
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-3 prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold mb-4">Politique en Matière de Cookies</h1>
              <p className="text-xl text-gray-600 mb-8">
                La confidentialité de vos données est notre priorité
              </p>

              {/* Introduction */}
              <section id="introduction" className="scroll-mt-24">
                <div className="bg-blue-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-8">
                  <p className="text-lg leading-relaxed">
                    La confidentialité de vos données est au cœur de nos préoccupations. Nous considérons qu&apos;elle est un gage de notre sérieux et de la confiance que vous nous accordez, qu&apos;il s&apos;agisse de cookies ou de données personnelles.
                  </p>
                </div>
              </section>

              {/* Objectif */}
              <section id="objectif" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Objectif de notre politique d&apos;utilisation des cookies
                </h2>
                <div className="space-y-4">
                  <p>
                    {siteConfig.name}, qui gère le site web {siteConfig.domain}, attache une grande importance à la confidentialité de vos données personnelles, qui représente pour nous un gage de sérieux et de confiance, y compris en matière de cookies.
                  </p>
                  <p>
                    À cet égard, notre politique d&apos;utilisation des cookies témoigne de notre volonté de faire respecter les règles applicables à la protection des données personnelles, et notamment celles relatives aux cookies utilisés lorsque vous naviguez sur notre site {siteConfig.domain}.
                  </p>
                  <p>
                    Pour plus d&apos;informations sur nos autres traitements de données personnelles, nous vous invitons à consulter notre <a href="/confidentialite" className="text-primary-600 hover:underline">politique de confidentialité des données personnelles</a>, accessible à tout moment sur notre site.
                  </p>
                </div>
              </section>

              {/* Définition */}
              <section id="definition" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Que sont les cookies et peuvent-ils vous identifier directement ?
                </h2>
                <div className="space-y-4">
                  <p>
                    Un cookie est un petit fichier « texte » déposé et hébergé par un serveur sur votre terminal (smartphone, tablette ou ordinateur) lorsque vous visitez un site internet.
                  </p>
                  <p>
                    Un cookie ne permet pas de vous identifier personnellement, puisqu&apos;il permet uniquement d&apos;identifier votre terminal via votre adresse IP, ainsi que diverses informations relatives à votre navigation :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Temps de navigation sur le site</li>
                    <li>Pages consultées</li>
                    <li>Taille et résolution de l&apos;écran</li>
                    <li>Système d&apos;exploitation et navigateur utilisé</li>
                    <li>Source de navigation (référent)</li>
                  </ul>
                  <p>
                    Les cookies améliorent votre expérience de navigation en personnalisant le contenu et en mémorisant vos préférences.
                  </p>
                </div>
              </section>

              {/* Cookies techniques */}
              <section id="techniques" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Que sont les cookies techniques et pourquoi les utilisons-nous ?
                </h2>
                <div className="space-y-4">
                  <p>
                    Le bon fonctionnement de notre site {siteConfig.domain} implique nécessairement l&apos;utilisation de cookies techniques, que nous pouvons utiliser sans votre consentement préalable, sur la base de notre intérêt légitime à vous fournir un site web fonctionnel.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">Exemples de cookies techniques utilisés :</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Cookies de session :</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Maintiennent votre connexion active pendant votre visite</li>
                          <li>Mémorisent temporairement vos actions sur le site</li>
                          <li>Se suppriment automatiquement à la fermeture du navigateur</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Cookies de préférence :</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Conservent la langue de votre site web</li>
                          <li>Mémorisent le format d&apos;affichage (mobile, tablette, ordinateur)</li>
                          <li>Facilitent les connexions et la navigation futures</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Cookies de sécurité :</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Protègent contre les tentatives de fraude</li>
                          <li>Détectent les activités suspectes</li>
                          <li>Sécurisent vos données lors de la navigation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mt-6">
                    <h3 className="font-bold text-lg mb-3">Puis-je refuser les cookies techniques ?</h3>
                    <p className="mb-3">
                      Bien que nous ne le recommandions pas, vous pouvez toujours vous opposer au dépôt de ces cookies sur votre terminal en utilisant les paramètres de votre navigateur, en suivant les instructions ci-dessous :
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>
                        <strong>Chrome :</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://support.google.com/chrome/answer/95647</a>
                      </li>
                      <li>
                        <strong>Microsoft Edge :</strong> <a href="https://support.microsoft.com/fr-fr/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://support.microsoft.com/fr-fr/microsoft-edge</a>
                      </li>
                      <li>
                        <strong>Safari :</strong> <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://support.apple.com/fr-fr/guide/safari/sfri11471</a>
                      </li>
                      <li>
                        <strong>Firefox :</strong> <a href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur</a>
                      </li>
                      <li>
                        <strong>Opera :</strong> <a href="https://help.opera.com/en/latest/web-preferences/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://help.opera.com/en/latest/web-preferences/</a>
                      </li>
                    </ul>
                    <p className="mt-4 font-semibold">
                      ⚠️ Attention : Dans ce cas, votre expérience de visiteur peut être dégradée. Certaines fonctionnalités du site peuvent ne plus être accessibles. Pour rétablir votre expérience de navigation, vous devrez réinitialiser vos cookies techniques.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookies statistiques */}
              <section id="statistiques" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Que sont les cookies statistiques et pourquoi les utilisons-nous ?
                </h2>
                <div className="space-y-4">
                  <p>
                    Un cookie statistique (ou cookie analytique) est utilisé pour analyser votre utilisation d&apos;un site web afin d&apos;améliorer votre expérience et de vous fournir un service adapté à vos besoins.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">Informations collectées par les cookies statistiques :</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Temps de navigation :</strong> Durée passée sur chaque page</li>
                      <li><strong>Pages visitées :</strong> Parcours de navigation sur le site</li>
                      <li><strong>Taux de rebond :</strong> Pages quittées rapidement</li>
                      <li><strong>Source de trafic :</strong> Comment vous êtes arrivé sur notre site</li>
                      <li><strong>Comportement utilisateur :</strong> Actions effectuées sur le site</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">Comment utilisons-nous ces données ?</h3>
                    <p className="mb-3">Ces informations nous permettent de :</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Comprendre comment vous utilisez notre site</li>
                      <li>Identifier les pages les plus consultées</li>
                      <li>Détecter les problèmes techniques ou ergonomiques</li>
                      <li>Améliorer la structure et le contenu du site</li>
                      <li>Optimiser votre expérience utilisateur</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mt-6">
                    <h3 className="font-bold text-lg mb-3">Consentement requis</h3>
                    <p>
                      Pour notre site {siteConfig.domain}, nous utilisons des cookies statistiques non exemptés, qui ne peuvent être déposés sur votre terminal qu&apos;avec votre consentement préalable exprimé via notre bannière cookies.
                    </p>
                    <p className="mt-3">
                      Vous êtes libre d&apos;accepter ou de refuser ces cookies à tout moment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookies publicitaires */}
              <section id="publicitaires" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Qu&apos;est-ce qu&apos;un cookie publicitaire et pourquoi l&apos;utilisons-nous ?
                </h2>
                <div className="space-y-4">
                  <p>
                    Un cookie publicitaire peut être utilisé pour deux finalités principales :
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">1. Affichage de publicités ciblées</h3>
                    <p className="mb-3">
                      Les cookies publicitaires nous permettent d&apos;afficher sur notre site web des publicités adaptées à vos centres d&apos;intérêt, sur la base de votre navigation sur d&apos;autres sites web.
                    </p>
                    <div className="bg-white p-4 rounded border-l-4 border-primary-500">
                      <h4 className="font-semibold mb-2">Comment cela fonctionne ?</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Les annonceurs nous présentent des publicités ciblées</li>
                        <li>Ces publicités sont basées sur des cookies que vous avez acceptés sur d&apos;autres sites web</li>
                        <li>Les publicités affichées sont plus pertinentes pour vous</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">2. Référencement et analyse de la source de trafic</h3>
                    <p className="mb-3">Nous utilisons également des cookies publicitaires pour :</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Être référencés sur les moteurs de recherche (Google, Bing, etc.)</li>
                      <li>Identifier la source d&apos;arrivée du visiteur sur notre site web</li>
                      <li>Mesurer l&apos;efficacité de nos campagnes publicitaires</li>
                      <li>Optimiser notre stratégie de communication digitale</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mt-6">
                    <h3 className="font-bold text-lg mb-3">Consentement requis</h3>
                    <p>
                      Les cookies publicitaires, utilisés à la fois pour le référencement et pour la publication de publicités sur notre plateforme, ne sont déposés sur votre terminal qu&apos;avec votre consentement préalable fourni via notre bannière cookies.
                    </p>
                    <p className="mt-3">
                      Vous pouvez retirer votre consentement à tout moment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Données personnelles */}
              <section id="donnees" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Quelles données personnelles traitons-nous avec nos cookies et pendant combien de temps ?
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">1. Cookies techniques (sans consentement)</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Données collectées :</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Votre adresse IP</li>
                          <li>Un identifiant unique que nous créons lors de votre première connexion</li>
                          <li>Informations sur votre terminal (type d&apos;appareil, système d&apos;exploitation, navigateur)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Durée de conservation :</h4>
                        <p className="text-sm">
                          Maximum 13 mois à compter de votre première connexion
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">2. Cookies statistiques (avec consentement)</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Données collectées :</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Votre adresse IP et identifiant unique</li>
                          <li>Données personnelles liées à votre navigation sur notre site :
                            <ul className="list-circle pl-6 mt-2 space-y-1">
                              <li>Pages visitées</li>
                              <li>Temps de navigation sur chaque page</li>
                              <li>Parcours de navigation</li>
                              <li>Actions effectuées sur le site</li>
                              <li>Taux de rebond</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Durée de conservation :</h4>
                        <p className="text-sm">
                          Maximum 13 mois, non renouvelable avant toute nouvelle connexion avant le 14ème mois
                        </p>
                        <p className="text-sm mt-2 italic">
                          À l&apos;issue de cette période, nous vous redemanderons votre consentement
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">3. Cookies publicitaires (avec consentement)</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Données collectées :</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Votre adresse IP et identifiant unique</li>
                          <li>Données de navigation nécessaires à l&apos;affichage de la publicité :
                            <ul className="list-circle pl-6 mt-2 space-y-1">
                              <li>Format d&apos;écran et résolution</li>
                              <li>Pages consultées avant l&apos;affichage de la publicité</li>
                              <li>Interactions avec les publicités affichées</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Durée de conservation :</h4>
                        <p className="text-sm">
                          Maximum 13 mois, non renouvelable avant toute nouvelle connexion avant le 14ème mois
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-6">
                    <h3 className="font-bold text-lg mb-3">Que deviennent vos données après expiration ?</h3>
                    <p>
                      À l&apos;expiration des durées de conservation précisées ci-dessus, nous ne conservons aucune donnée vous concernant.
                    </p>
                    <p className="mt-3">
                      Tout au plus, nous pouvons anonymiser vos données à des fins statistiques (les données anonymisées ne permettent plus de vous identifier).
                    </p>
                  </div>
                </div>
              </section>

              {/* Contrôle des cookies */}
              <section id="controle" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Comment contrôler l&apos;utilisation des cookies ?
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">1. Via notre bannière de cookies</h3>
                    <p className="mb-3">
                      Lors de votre première visite, une bannière apparaît et vous permet de :
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>✅ <strong>Accepter tous les cookies</strong></li>
                      <li>🛠️ <strong>Personnaliser vos choix</strong> (cookies par catégorie)</li>
                      <li>❌ <strong>Refuser les cookies non essentiels</strong></li>
                    </ul>
                    <p className="mt-4">
                      Vous pouvez modifier vos préférences à tout moment en cliquant sur le lien « Gérer les cookies » en bas de page.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">2. Via l&apos;onglet « Gérer les cookies »</h3>
                    <p>
                      Si le bandeau cookies n&apos;est plus affiché, vous pouvez accéder à tout moment à notre outil de gestion des cookies via l&apos;onglet « Gérer les cookies » présent en pied de page de notre site internet.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">3. Via les paramètres de votre navigateur</h3>
                    <p className="mb-4">
                      Vous pouvez également configurer directement les cookies sur votre navigateur en suivant les instructions ci-dessous :
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Google Chrome :</h4>
                        <p className="text-sm mb-1">
                          Menu &gt; Paramètres &gt; Confidentialité et sécurité &gt; Cookies et autres données de sites
                        </p>
                        <p className="text-sm">
                          Documentation : <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://support.google.com/chrome/answer/95647</a>
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Microsoft Edge :</h4>
                        <p className="text-sm mb-1">
                          Menu &gt; Paramètres &gt; Cookies et autorisations de site
                        </p>
                        <p className="text-sm">
                          Documentation : <a href="https://support.microsoft.com/fr-fr/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://support.microsoft.com/fr-fr/microsoft-edge</a>
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Safari (Mac) :</h4>
                        <p className="text-sm mb-1">
                          Safari &gt; Préférences &gt; Confidentialité &gt; Gérer les données de site web
                        </p>
                        <p className="text-sm">
                          Documentation : <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://support.apple.com/fr-fr/guide/safari/sfri11471</a>
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Safari (iOS) :</h4>
                        <p className="text-sm mb-1">
                          Réglages &gt; Safari &gt; Confidentialité et sécurité
                        </p>
                        <p className="text-sm">
                          Documentation : <a href="https://support.apple.com/fr-fr/HT201265" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://support.apple.com/fr-fr/HT201265</a>
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Mozilla Firefox :</h4>
                        <p className="text-sm mb-1">
                          Menu &gt; Options &gt; Vie privée et sécurité &gt; Cookies et données de sites
                        </p>
                        <p className="text-sm">
                          Documentation : <a href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur</a>
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Opera :</h4>
                        <p className="text-sm mb-1">
                          Menu &gt; Paramètres &gt; Confidentialité et sécurité &gt; Cookies
                        </p>
                        <p className="text-sm">
                          Documentation : <a href="https://help.opera.com/en/latest/web-preferences/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://help.opera.com/en/latest/web-preferences/</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">4. Via les plateformes de désactivation publicitaire</h3>
                    <p className="mb-3">
                      Pour refuser spécifiquement les cookies publicitaires tiers, vous pouvez utiliser :
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Plateforme européenne Your Online Choices :</strong> <a href="https://www.youronlinechoices.com/fr/controler-ses-cookies" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://www.youronlinechoices.com/fr/controler-ses-cookies</a>
                      </li>
                      <li>
                        <strong>Network Advertising Initiative (NAI) :</strong> <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://optout.networkadvertising.org/</a>
                      </li>
                      <li>
                        <strong>Digital Advertising Alliance (DAA) :</strong> <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://optout.aboutads.info/</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* CNIL */}
              <section id="cnil" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Comment contacter la CNIL ?
                </h2>
                <div className="space-y-4">
                  <p>
                    Si vous estimez que vos droits ne sont pas respectés ou si vous souhaitez déposer une réclamation concernant l&apos;utilisation de cookies sur notre site, vous pouvez à tout moment contacter la Commission Nationale de l&apos;Informatique et des Libertés (CNIL).
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">
                      Commission Nationale de l&apos;Informatique et des Libertés (CNIL)
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold mb-1">Par courrier :</p>
                        <p className="text-sm">
                          Service des plaintes de la CNIL<br />
                          3 Place de Fontenoy - TSA 80751<br />
                          75334 Paris Cedex 07
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Par téléphone :</p>
                        <p className="text-sm">01 53 73 22 22</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">En ligne :</p>
                        <p className="text-sm">
                          Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://www.cnil.fr</a>
                        </p>
                        <p className="text-sm">
                          Formulaire de plainte : <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://www.cnil.fr/fr/plaintes</a>
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm italic">
                      Note : La CNIL recommande de contacter d&apos;abord le responsable du site ({siteConfig.name} dans notre cas) avant de déposer une plainte formelle.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Nous contacter pour toute question sur les cookies
                </h2>
                <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                  <p className="mb-4">
                    Pour toute question concernant notre politique d&apos;utilisation des cookies, vous pouvez nous contacter :
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold mb-1">Par email :</p>
                      <p className="text-sm">
                        <a href={`mailto:${siteConfig.email}`} className="text-primary-600 hover:underline">{siteConfig.email}</a>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Par téléphone :</p>
                      <p className="text-sm">
                        <a href={siteConfig.phoneLink} className="text-primary-600 hover:underline">{siteConfig.phone}</a>
                      </p>
                      <p className="text-sm text-gray-600">
                        Du lundi au samedi de 8h à 19h
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Par courrier postal :</p>
                      <p className="text-sm">
                        {siteConfig.fullName}<br />
                        Service Protection des Données<br />
                        {siteConfig.address}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 font-medium">
                    Nous nous engageons à vous répondre dans les meilleurs délais.
                  </p>
                </div>
                <p className="mt-6 text-sm text-gray-600">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" })}
                </p>
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

