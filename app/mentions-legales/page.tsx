"use client";

import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

export default function MentionsLegalesPage() {
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
    { id: "definitions", title: "Définitions" },
    { id: "presentation", title: "Présentation du site internet" },
    { id: "conditions", title: "Conditions générales d'utilisation" },
    { id: "services", title: "Description des services fournis" },
    { id: "limitations", title: "Limitations contractuelles" },
    { id: "propriete", title: "Propriété intellectuelle" },
    { id: "responsabilite", title: "Limitations de responsabilité" },
    { id: "donnees", title: "Gestion des données personnelles" },
    { id: "securite", title: "Notification d'incident – Sécurité" },
    { id: "cookies", title: "Liens hypertextes, cookies et balises" },
    { id: "droit", title: "Droit applicable et attribution" },
  ];

  return (
    <main className="pt-20">
      <section className="section bg-white">
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-3 prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>

              {/* Définitions */}
              <section id="definitions" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">Définitions</h2>
                <div className="space-y-4">
                  <p>
                    <strong>Client :</strong> Tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.
                  </p>
                  <p>
                    <strong>Prestations et Services :</strong> {siteConfig.domain} met à disposition des Clients l&apos;ensemble des services relatifs au dépannage, installation, motorisation et entretien de rideaux métalliques.
                  </p>
                  <p>
                    <strong>Contenu :</strong> Ensemble des éléments constituant l&apos;information présente sur le Site, notamment textes, images, vidéos, schémas techniques et documentations.
                  </p>
                  <p>
                    <strong>Informations clients :</strong> Ci-après dénommées « Information(s) », qui correspondent à l&apos;ensemble des données personnelles susceptibles d&apos;être détenues par {siteConfig.name} pour la gestion de votre compte, de la relation client et à des fins d&apos;analyses et de statistiques.
                  </p>
                  <p>
                    <strong>Utilisateur :</strong> Internaute se connectant et utilisant le site {siteConfig.domain}.
                  </p>
                  <p>
                    <strong>Informations personnelles :</strong> « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l&apos;identification des personnes physiques auxquelles elles s&apos;appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
                  </p>
                  <p>
                    Les termes « données à caractère personnel », « personne concernée », « sous-traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
                  </p>
                </div>
              </section>

              {/* Présentation du site */}
              <section id="presentation" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  1. Présentation du site internet
                </h2>
                <p className="mb-4">
                  En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site internet {siteConfig.domain} l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Propriétaire et éditeur du site :</h3>
                  <p className="mb-2">
                    <strong>{siteConfig.fullName}</strong>
                  </p>
                  <p className="mb-2">
                    Siège social : {siteConfig.address}
                  </p>
                  <p className="mb-2">
                    <strong>Contact :</strong>
                  </p>
                  <p className="mb-2">
                    Email : {siteConfig.email}
                  </p>
                  <p className="mb-2">
                    Téléphone : {siteConfig.phone}
                  </p>
                  <p>
                    Disponible du lundi au samedi de 8h à 19h<br />
                    Urgences 24h/24 et 7j/7
                  </p>
                </div>
              </section>

              {/* Conditions générales */}
              <section id="conditions" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  2. Conditions générales d&apos;utilisation du site et des services proposés
                </h2>
                <div className="space-y-4">
                  <p>
                    Le Site constitue une œuvre de l&apos;esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables.
                  </p>
                  <p>
                    Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site sans autorisation écrite préalable de {siteConfig.name}.
                  </p>
                  <p>
                    L&apos;utilisation du site {siteConfig.domain} implique l&apos;acceptation pleine et entière des conditions générales d&apos;utilisation ci-après décrites. Ces conditions d&apos;utilisation sont susceptibles d&apos;être modifiées ou complétées à tout moment. Les utilisateurs du site {siteConfig.domain} sont donc invités à les consulter de manière régulière.
                  </p>
                  <p>
                    Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut toutefois être décidée par {siteConfig.name}, qui s&apos;efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l&apos;intervention. En cas d&apos;urgence technique, l&apos;information pourra être communiquée a posteriori.
                  </p>
                  <p>
                    Le site web {siteConfig.domain} est mis à jour régulièrement par l&apos;équipe {siteConfig.name}. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s&apos;imposent néanmoins à l&apos;utilisateur qui est invité à s&apos;y référer le plus souvent possible afin d&apos;en prendre connaissance.
                  </p>
                </div>
              </section>

              {/* Description des services */}
              <section id="services" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  3. Description des services fournis
                </h2>
                <p className="mb-4">
                  Le site internet {siteConfig.domain} a pour objet de fournir une information concernant l&apos;ensemble des activités de la société {siteConfig.name} en matière de :
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Dépannage urgent de rideaux métalliques 24h/24 et 7j/7</li>
                  <li>Installation de rideaux métalliques neufs sur mesure</li>
                  <li>Motorisation de rideaux métalliques (moteurs tubulaires et centraux)</li>
                  <li>Entretien et maintenance préventive</li>
                  <li>Réparation de tous types de fermetures métalliques</li>
                </ul>
                <p className="mb-4">
                  {siteConfig.name} s&apos;efforce de fournir sur le site {siteConfig.domain} des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes et carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                </p>
                <p className="mb-4">
                  Toutes les informations indiquées sur le site {siteConfig.domain} sont données à titre indicatif et sont susceptibles d&apos;évoluer. Par ailleurs, les renseignements figurant sur le site {siteConfig.domain} ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
                </p>
                <p>
                  Les tarifs affichés sont indicatifs et peuvent varier selon les spécificités de chaque intervention. Un devis gratuit et sans engagement est systématiquement établi avant toute intervention.
                </p>
              </section>

              {/* Limitations contractuelles */}
              <section id="limitations" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  4. Limitations contractuelles sur les données techniques
                </h2>
                <div className="space-y-4">
                  <p>
                    Le site utilise les technologies web standards (HTML5, CSS3, JavaScript) pour garantir une compatibilité optimale.
                  </p>
                  <p>
                    Le site Internet ne pourra être tenu responsable de dommages matériels liés à l&apos;utilisation du site. De plus, l&apos;utilisateur du site s&apos;engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour (Chrome, Firefox, Safari, Edge).
                  </p>
                  <p>
                    Le site {siteConfig.domain} est hébergé chez un prestataire sur le territoire de l&apos;Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
                  </p>
                  <p>
                    L&apos;objectif est d&apos;apporter une prestation qui assure le meilleur taux d&apos;accessibilité possible. L&apos;hébergeur assure la continuité de son service 24 heures sur 24, tous les jours de l&apos;année. Il se réserve néanmoins la possibilité d&apos;interrompre le service d&apos;hébergement pour les durées les plus courtes possibles, notamment à des fins de maintenance, d&apos;amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.
                  </p>
                  <p>
                    {siteConfig.name} et l&apos;hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l&apos;encombrement du réseau empêchant l&apos;accès au serveur.
                  </p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section id="propriete" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  5. Propriété intellectuelle et contrefaçons
                </h2>
                <div className="space-y-4">
                  <p>
                    {siteConfig.name} est propriétaire exclusif des droits de propriété intellectuelle ou détient les droits d&apos;usage sur tous les éléments accessibles sur le site internet, notamment :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Les textes, descriptions et contenus rédactionnels</li>
                    <li>Les images, photographies et illustrations</li>
                    <li>Les graphismes, logos et chartes graphiques</li>
                    <li>Les vidéos et contenus multimédias</li>
                    <li>Les icônes, pictogrammes et éléments visuels</li>
                    <li>La structure, l&apos;arborescence et le design du site</li>
                  </ul>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de {siteConfig.name}.
                  </p>
                  <p>
                    Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                  </p>
                  <p>
                    Les marques {siteConfig.name}, ainsi que les logos figurant sur le site, sont des marques déposées. Toute reproduction totale ou partielle de ces marques ou de ces logos, effectuée à partir des éléments du site sans l&apos;autorisation expresse de {siteConfig.name}, est donc prohibée au sens de l&apos;article L.713-2 du Code de la Propriété Intellectuelle.
                  </p>
                </div>
              </section>

              {/* Limitations de responsabilité */}
              <section id="responsabilite" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  6. Limitations de responsabilité
                </h2>
                <div className="space-y-4">
                  <p>
                    {siteConfig.name} agit en tant qu&apos;éditeur du site. {siteConfig.name} est responsable de la qualité et de la véracité du Contenu qu&apos;il publie.
                  </p>
                  <p>
                    {siteConfig.name} ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès au site internet {siteConfig.domain}, et résultant soit de l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
                  </p>
                  <p>
                    {siteConfig.name} ne pourra également être tenu responsable des dommages indirects (tels par exemple qu&apos;une perte de marché ou perte d&apos;une chance) consécutifs à l&apos;utilisation du site {siteConfig.domain}.
                  </p>
                  <p>
                    Des espaces interactifs (formulaires de contact, demandes de devis en ligne) sont à la disposition des utilisateurs. {siteConfig.name} se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans ces espaces qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.
                  </p>
                  <p>
                    Le cas échéant, {siteConfig.name} se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l&apos;utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant ou pornographique, quel que soit le support utilisé (texte, photographie, vidéo).
                  </p>
                  <p>
                    Les liens hypertextes mis en place dans le cadre du présent site internet en direction d&apos;autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de {siteConfig.name}.
                  </p>
                </div>
              </section>

              {/* Gestion des données personnelles */}
              <section id="donnees" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  7. Gestion des données personnelles
                </h2>
                <p className="mb-4">
                  Le Client est informé des réglementations concernant la communication marketing, la loi du 21 juin 2014 pour la confiance dans l&apos;Économie Numérique, la Loi Informatique et Libertés du 06 août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  7.1 Responsable de la collecte des données personnelles
                </h3>
                <p className="mb-4">
                  Pour les Données Personnelles collectées dans le cadre de la navigation sur le Site et de l&apos;utilisation des services, le responsable du traitement des Données Personnelles est :
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="mb-2">
                    <strong>{siteConfig.fullName}</strong>
                  </p>
                  <p className="mb-2">
                    {siteConfig.address}
                  </p>
                  <p className="mb-2">
                    Email : {siteConfig.email}
                  </p>
                  <p>
                    Téléphone : {siteConfig.phone}
                  </p>
                </div>
                <p className="mb-4">
                  En tant que responsable du traitement des données qu&apos;il collecte, {siteConfig.name} s&apos;engage à respecter le cadre des dispositions légales en vigueur. Il appartient notamment à {siteConfig.name} d&apos;établir les finalités de ses traitements de données, de fournir à ses prospects et clients, à partir de la collecte de leurs consentements, une information complète sur le traitement de leurs données personnelles et de maintenir un registre des traitements conforme à la réalité.
                </p>
                <p>
                  Chaque fois que {siteConfig.name} traite des Données Personnelles, {siteConfig.name} prend toutes les mesures raisonnables pour s&apos;assurer de l&apos;exactitude et de la pertinence des Données Personnelles au regard des finalités pour lesquelles {siteConfig.name} les traite.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  7.2 Finalités des données collectées
                </h3>
                <p className="mb-4">
                  {siteConfig.name} est susceptible de traiter tout ou partie des données suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    <strong>Pour permettre la navigation sur le Site et la gestion des services :</strong>
                    <ul className="list-circle pl-6 mt-2 space-y-1">
                      <li>Données de connexion et d&apos;utilisation du Site</li>
                      <li>Adresse IP et données de navigation</li>
                      <li>Historique des demandes de devis et d&apos;intervention</li>
                      <li>Facturation et suivi commercial</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Pour prévenir et lutter contre la fraude informatique :</strong>
                    <ul className="list-circle pl-6 mt-2 space-y-1">
                      <li>Matériel informatique utilisé pour la navigation</li>
                      <li>Adresse IP et localisation approximative</li>
                      <li>Données de sécurité et d&apos;authentification</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Pour améliorer la qualité de service :</strong>
                    <ul className="list-circle pl-6 mt-2 space-y-1">
                      <li>Données de connexion et d&apos;utilisation</li>
                      <li>Parcours utilisateur sur le site</li>
                      <li>Pages consultées et temps de visite</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Pour assurer le service client :</strong>
                    <ul className="list-circle pl-6 mt-2 space-y-1">
                      <li>Nom, prénom, raison sociale</li>
                      <li>Adresse postale (pour interventions)</li>
                      <li>Numéro de téléphone</li>
                      <li>Adresse email</li>
                      <li>Informations sur les équipements (type de rideau, dimensions, etc.)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Pour mener des campagnes de communication (avec consentement explicite) :</strong>
                    <ul className="list-circle pl-6 mt-2 space-y-1">
                      <li>Numéro de téléphone (SMS)</li>
                      <li>Adresse email (newsletters, offres promotionnelles)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Pour mener des enquêtes de satisfaction (facultatives) :</strong>
                    <ul className="list-circle pl-6 mt-2 space-y-1">
                      <li>Adresse email</li>
                      <li>Retours d&apos;expérience clients</li>
                    </ul>
                  </li>
                </ul>
                <p>
                  {siteConfig.name} ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité opérationnelle ou à des fins statistiques et d&apos;analyses internes.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  7.3 Durée de conservation des données
                </h3>
                <p className="mb-4">Les données personnelles sont conservées selon les durées suivantes :</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Données de prospection : 3 ans à compter du dernier contact</li>
                  <li>Données clients : 10 ans à compter de la dernière transaction (obligations comptables)</li>
                  <li>Données de connexion : 12 mois (obligations légales)</li>
                  <li>Cookies : 13 mois maximum</li>
                  <li>Données de facturation : 10 ans (obligations légales et fiscales)</li>
                </ul>
                <p>
                  À l&apos;issue de ces durées, les données sont supprimées ou anonymisées de manière irréversible.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  7.4 Droit d&apos;accès, de rectification et d&apos;opposition
                </h3>
                <p className="mb-4">
                  Conformément à la réglementation européenne en vigueur, les Utilisateurs de {siteConfig.domain} disposent des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Droit d&apos;accès (article 15 RGPD) :</strong> Vous pouvez obtenir la confirmation que des données vous concernant sont traitées et accéder à ces données</li>
                  <li><strong>Droit de rectification (article 16 RGPD) :</strong> Vous pouvez obtenir la rectification de données inexactes ou incomplètes</li>
                  <li><strong>Droit à l&apos;effacement (article 17 RGPD) :</strong> Vous pouvez obtenir l&apos;effacement de vos données personnelles dans certains cas</li>
                  <li><strong>Droit à la limitation (article 18 RGPD) :</strong> Vous pouvez obtenir la limitation du traitement de vos données</li>
                  <li><strong>Droit d&apos;opposition (article 21 RGPD) :</strong> Vous pouvez vous opposer au traitement de vos données pour des motifs légitimes</li>
                  <li><strong>Droit à la portabilité (article 20 RGPD) :</strong> Vous pouvez recevoir vos données dans un format structuré et les transmettre à un autre responsable</li>
                  <li><strong>Droit de retirer son consentement :</strong> À tout moment pour les traitements basés sur le consentement</li>
                  <li><strong>Droit de définir des directives post-mortem :</strong> Vous pouvez définir le sort de vos données après votre décès</li>
                </ul>
                <p className="mb-4">
                  Pour exercer ces droits, vous pouvez contacter {siteConfig.name} :
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <p className="mb-2">
                    <strong>Par courrier postal :</strong>
                  </p>
                  <p className="mb-4">
                    {siteConfig.fullName}<br />
                    {siteConfig.address}
                  </p>
                  <p className="mb-2">
                    <strong>Par email :</strong> {siteConfig.email}
                  </p>
                  <p>
                    <strong>Par téléphone :</strong> {siteConfig.phone}
                  </p>
                </div>
                <p className="mb-4">
                  Votre demande doit être accompagnée d&apos;une copie d&apos;un titre d&apos;identité en cours de validité (carte d&apos;identité ou passeport) pour justifier de votre identité. {siteConfig.name} s&apos;engage à répondre à votre demande dans un délai de 1 mois à compter de sa réception.
                </p>
                <p className="mb-4">
                  Les demandes de suppression de Données Personnelles seront soumises aux obligations légales imposées à {siteConfig.name}, notamment en matière de conservation ou d&apos;archivage des documents.
                </p>
                <p className="mb-4">
                  Vous disposez également du droit de déposer une réclamation auprès de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2">
                    <strong>CNIL</strong> – 3 Place de Fontenoy – TSA 80715 – 75334 PARIS CEDEX 07
                  </p>
                  <p className="mb-2">
                    Téléphone : 01 53 73 22 22
                  </p>
                  <p>
                    Site web : <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://www.cnil.fr/fr/plaintes</a>
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  7.5 Non-communication des données personnelles
                </h3>
                <div className="space-y-4">
                  <p>
                    {siteConfig.name} s&apos;interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l&apos;Union Européenne ou reconnu comme « non adéquat » par la Commission européenne sans en informer préalablement le client.
                  </p>
                  <p>
                    Pour autant, {siteConfig.name} reste libre du choix de ses sous-traitants techniques et commerciaux à la condition qu&apos;ils présentent les garanties suffisantes au regard des exigences du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
                  </p>
                  <p>
                    {siteConfig.name} s&apos;engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations et notamment qu&apos;elles ne soient pas communiquées à des personnes non autorisées. Cependant, si un incident impactant l&apos;intégrité ou la confidentialité des Informations du Client est porté à la connaissance de {siteConfig.name}, celle-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures correctives prises.
                  </p>
                  <p>
                    Par ailleurs, {siteConfig.name} ne collecte aucune « donnée sensible » au sens de l&apos;article 9 du RGPD (origine raciale ou ethnique, opinions politiques, convictions religieuses ou philosophiques, appartenance syndicale, données génétiques, données biométriques, données concernant la santé ou la vie sexuelle).
                  </p>
                  <p>
                    Les Données Personnelles de l&apos;Utilisateur peuvent être traitées par des filiales de {siteConfig.name} et des sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la présente politique.
                  </p>
                  <p>
                    Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus, les principales personnes susceptibles d&apos;avoir accès aux données des Utilisateurs de {siteConfig.name} sont principalement les agents du service client, les techniciens intervenant sur site et le personnel administratif.
                  </p>
                </div>
              </section>

              {/* Notification d'incident */}
              <section id="securite" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  8. Notification d&apos;incident – Sécurité des données
                </h2>
                <div className="space-y-4">
                  <p>
                    Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n&apos;est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue.
                  </p>
                  <p>
                    Si nous prenions connaissance d&apos;une brèche de la sécurité, nous avertirions les utilisateurs concernés dans les 72 heures maximum afin qu&apos;ils puissent prendre les mesures appropriées. Nos procédures de notification d&apos;incident tiennent compte de nos obligations légales, qu&apos;elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.
                  </p>
                  <p>
                    Aucune information personnelle de l&apos;utilisateur du site {siteConfig.domain} n&apos;est publiée à l&apos;insu de l&apos;utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l&apos;hypothèse du rachat de {siteConfig.name} et de ses droits permettrait la transmission desdites informations à l&apos;éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis-à-vis de l&apos;utilisateur du site {siteConfig.domain}.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mt-6">
                    <h3 className="font-bold text-lg mb-4">Mesures de sécurité mises en œuvre</h3>
                    <p className="mb-4">
                      Pour assurer la sécurité et la confidentialité des Données Personnelles, {siteConfig.name} utilise des mesures de sécurité techniques et organisationnelles appropriées :
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Sécurité technique :</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Réseaux protégés par pare-feu (firewall)</li>
                          <li>Chiffrement SSL/TLS des données en transit (protocole HTTPS)</li>
                          <li>Pseudonymisation et chiffrement des données sensibles</li>
                          <li>Mots de passe sécurisés et régulièrement renouvelés</li>
                          <li>Sauvegardes régulières des données</li>
                          <li>Mise à jour régulière des systèmes de sécurité</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Sécurité organisationnelle :</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Accès limité aux données selon le principe du &quot;besoin d&apos;en connaître&quot;</li>
                          <li>Formation du personnel aux enjeux de protection des données</li>
                          <li>Procédures internes de gestion des incidents de sécurité</li>
                          <li>Clauses de confidentialité dans les contrats de travail</li>
                          <li>Audits réguliers de sécurité</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-4">
                      Lors du traitement des Données Personnelles, {siteConfig.name} prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  9. Liens hypertextes, cookies et balises Internet
                </h2>
                <p className="mb-4">
                  Le site {siteConfig.domain} peut contenir un certain nombre de liens hypertextes vers d&apos;autres sites (partenaires, fournisseurs, sites informatifs), mis en place avec l&apos;autorisation de {siteConfig.name}. Cependant, {siteConfig.name} n&apos;a pas la possibilité de vérifier l&apos;ensemble du contenu des sites ainsi visités et n&apos;assumera en conséquence aucune responsabilité de ce fait.
                </p>
                <p className="mb-4">
                  La navigation sur le site {siteConfig.domain} est susceptible de provoquer l&apos;installation de cookie(s) sur l&apos;ordinateur de l&apos;utilisateur.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  9.1 Les Cookies
                </h3>
                <p className="mb-4">
                  Un « cookie » est un petit fichier d&apos;information envoyé sur le navigateur de l&apos;Utilisateur et enregistré au sein du terminal de l&apos;Utilisateur (ordinateur, smartphone, tablette), (ci-après « Cookies »). Ce fichier comprend des informations telles que le nom de domaine de l&apos;Utilisateur, le fournisseur d&apos;accès Internet de l&apos;Utilisateur, le système d&apos;exploitation de l&apos;Utilisateur, ainsi que la date et l&apos;heure d&apos;accès. Les Cookies ne risquent en aucun cas d&apos;endommager le terminal de l&apos;Utilisateur.
                </p>
                <p className="mb-4">
                  {siteConfig.name} est susceptible de traiter les informations de l&apos;Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées, les demandes de devis soumises. Ces informations permettent à {siteConfig.name} d&apos;améliorer le contenu du Site et la navigation de l&apos;Utilisateur.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <h4 className="font-semibold mb-3">Types de cookies utilisés :</h4>
                  <ul className="space-y-3">
                    <li>
                      <strong>Cookies strictement nécessaires (exemptés de consentement) :</strong>
                      <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                        <li>Cookies de session permettant la navigation sur le site</li>
                        <li>Cookies de sécurité et d&apos;authentification</li>
                        <li>Cookies de mémorisation des choix (langue, région)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Cookies fonctionnels (nécessitent le consentement) :</strong>
                      <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                        <li>Cookies de personnalisation de l&apos;interface</li>
                        <li>Cookies de mémorisation des préférences utilisateur</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Cookies analytiques (nécessitent le consentement) :</strong>
                      <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                        <li>Cookies de mesure d&apos;audience (Google Analytics ou équivalent)</li>
                        <li>Cookies de statistiques de performance du site</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Cookies publicitaires (nécessitent le consentement) :</strong>
                      <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                        <li>Cookies de ciblage publicitaire</li>
                        <li>Cookies de remarketing</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg mb-4">
                  <h4 className="font-semibold mb-3">Gestion des cookies</h4>
                  <p className="mb-3 text-sm">
                    L&apos;Utilisateur peut configurer son navigateur pour qu&apos;il lui permette de décider s&apos;il souhaite ou non accepter les cookies de manière à ce que des Cookies soient enregistrés dans le terminal ou, au contraire, qu&apos;ils soient rejetés, soit systématiquement, soit selon leur émetteur.
                  </p>
                  <p className="mb-3 text-sm">
                    L&apos;Utilisateur peut également configurer son logiciel de navigation de manière à ce que l&apos;acceptation ou le refus des Cookies lui soient proposés ponctuellement, avant qu&apos;un Cookie soit susceptible d&apos;être enregistré dans son terminal.
                  </p>
                  <p className="mb-3 text-sm font-semibold">Configuration selon les navigateurs :</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Google Chrome : Menu &gt; Paramètres &gt; Confidentialité et sécurité &gt; Cookies et autres données de sites</li>
                    <li>Mozilla Firefox : Menu &gt; Options &gt; Vie privée et sécurité &gt; Cookies et données de sites</li>
                    <li>Safari : Préférences &gt; Confidentialité &gt; Gérer les données de site web</li>
                    <li>Microsoft Edge : Menu &gt; Paramètres &gt; Cookies et autorisations de site</li>
                  </ul>
                </div>
                <p className="mb-4">
                  <strong>Important :</strong> Si l&apos;Utilisateur refuse l&apos;enregistrement de Cookies dans son terminal ou son navigateur, ou si l&apos;Utilisateur supprime ceux qui y sont enregistrés, l&apos;Utilisateur est informé que sa navigation et son expérience sur le Site peuvent être limitées. Cela pourrait également être le cas lorsque {siteConfig.name} ou l&apos;un de ses prestataires ne peut pas reconnaître, à des fins de compatibilité technique, le type de navigateur utilisé par le terminal, les paramètres de langue et d&apos;affichage ou le pays depuis lequel le terminal semble connecté à Internet.
                </p>
                <p className="mb-4">
                  Le cas échéant, {siteConfig.name} décline toute responsabilité pour les conséquences liées au fonctionnement dégradé du Site résultant (i) du refus de Cookies par l&apos;Utilisateur (ii) de l&apos;impossibilité pour {siteConfig.name} d&apos;enregistrer ou de consulter les Cookies nécessaires à leur fonctionnement du fait du choix de l&apos;Utilisateur.
                </p>
                <p className="mb-4">
                  <strong>Durée de conservation des cookies</strong><br />
                  Conformément aux recommandations de la CNIL, la durée maximale de conservation des cookies est de 13 mois au maximum après leur premier dépôt dans le terminal de l&apos;Utilisateur. À l&apos;issue de cette durée, le consentement de l&apos;Utilisateur sera à nouveau requis.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  9.2 Balises (&quot;tags&quot;) Internet
                </h3>
                <p>
                  {siteConfig.name} peut employer occasionnellement des balises Internet (également appelées « tags », ou balises d&apos;action, GIF à un pixel, GIF transparents, GIF invisibles et GIF un à un) et les déployer par l&apos;intermédiaire d&apos;un partenaire spécialiste d&apos;analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l&apos;adresse IP de l&apos;Utilisateur) dans un pays étranger respectant le RGPD.
                </p>
                <p className="mt-4">
                  Ces balises sont placées à la fois dans les publicités en ligne permettant aux internautes d&apos;accéder au Site et sur les différentes pages de celui-ci.
                </p>
                <p className="mt-4">
                  Cette technologie permet à {siteConfig.name} d&apos;évaluer les réponses des visiteurs face au Site et l&apos;efficacité de ses actions (par exemple, le nombre de fois où une page est ouverte et les informations consultées), ainsi que l&apos;utilisation de ce Site par l&apos;Utilisateur.
                </p>
                <p className="mt-4">
                  Le prestataire externe pourra éventuellement recueillir des informations sur les visiteurs du Site et d&apos;autres sites Internet grâce à ces balises, constituer des rapports sur l&apos;activité du Site à l&apos;attention de {siteConfig.name}, et fournir d&apos;autres services relatifs à l&apos;utilisation de celui-ci et d&apos;Internet.
                </p>
              </section>

              {/* Droit applicable */}
              <section id="droit" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  10. Droit applicable et attribution de juridiction
                </h2>
                <div className="space-y-4">
                  <p>
                    Les présentes conditions du site {siteConfig.domain} sont régies par les lois françaises et soumises à la compétence des tribunaux du siège social de {siteConfig.name}, sous réserve d&apos;une attribution de compétence spécifique découlant d&apos;un texte de loi ou réglementaire particulier.
                  </p>
                  <p>
                    Tout litige en relation avec l&apos;utilisation du site {siteConfig.domain} est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de {siteConfig.city}.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mt-6">
                    <p className="mb-4">
                      Pour toute question relative aux présentes mentions légales ou aux conditions d&apos;utilisation du site, vous pouvez nous contacter :
                    </p>
                    <p className="mb-2">
                      <strong>Par téléphone :</strong> {siteConfig.phone}
                    </p>
                    <p className="mb-2">
                      <strong>Par email :</strong> {siteConfig.email}
                    </p>
                    <p>
                      <strong>Par courrier :</strong><br />
                      {siteConfig.fullName}<br />
                      {siteConfig.address}
                    </p>
                  </div>
                  <p className="mt-6 text-sm text-gray-600">
                    <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" })}
                  </p>
                  <p className="text-sm text-gray-600">
                    {siteConfig.name} se réserve le droit de modifier les présentes mentions légales à tout moment. Les utilisateurs sont invités à les consulter régulièrement.
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
