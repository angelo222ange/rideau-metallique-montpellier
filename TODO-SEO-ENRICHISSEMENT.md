# 📋 TODO - Enrichissement SEO par Page

> **Objectif** : Améliorer le positionnement SEO en créant des composants qui traitent en profondeur chaque sujet selon l'intention de recherche. Ajouter 2-3 nouvelles sections par page avec des designs variés.

---

## 🎯 Philosophie Générale

### Principes SEO à respecter
- **Cocon sémantique** : Traiter tous les sujets connexes à la requête ciblée
- **Variantes sémantiques** : Utiliser synonymes et expressions alternatives (ville, département, région, code postal)
- **Expertise E-E-A-T** : Montrer notre expertise technique pour passer pro aux yeux de Google
- **Contenu qui convertit** : Chaque section doit avoir un CTA subtil ou une incitation à l'action

### Variantes géographiques à utiliser
- **Ville** : Montpellier, Montpellier Centre, L'Écusson
- **Code postal** : 34000, 34
- **Département** : Hérault, dans l'Hérault
- **Région** : Occitanie, Sud de la France
- **Expressions** : agglomération montpelliéraine, métropole de Montpellier, région montpelliéraine

### Design de composants variés (éviter la répétition)
1. **Texte gauche + Visuel droite** (classique)
2. **Visuel gauche + Texte droite** (inversé)
3. **Texte centré + Grille d'icônes en dessous**
4. **Grande image en fond + texte superposé**
5. **Timeline verticale/horizontale**
6. **Cards en grille (2x2 ou 3x3)**
7. **Split screen (50/50 avec couleur de fond différente)**
8. **Accordion + Visuel latéral**
9. **Stats flottantes + Background pattern**
10. **Bento grid (style Apple)**

---

## 🏠 PAGE ACCUEIL (`/`)

**Requête principale** : `dépannage rideau métallique Montpellier`

**Requêtes secondaires** :
- déblocage rideau métallique Montpellier
- réparation rideau métallique bloqué 34
- rideau métallique coincé que faire Hérault
- urgence rideau métallique Occitanie
- intervention rapide rideau métallique 34000

### Section 1 : Déblocage Rideau Métallique ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/home/DeblocageSection.tsx`
- [x] **Design** : Split screen - Visuel gauche (technicien en action) + Texte droite
- [x] **Contenu** :
  - H2 : "Déblocage de Rideau Métallique à Montpellier - Intervention Express"
  - Parler des causes de blocage (axe cassé, lames enroulées, problème moteur)
  - Méthode d'intervention DRM (processus 4 étapes)
  - Temps moyen de déblocage : 30-45 min
  - Features et avantages
- [x] **Mots-clés intégrés** : déblocage, rideau bloqué, coincé, 34, Hérault, agglomération
- [x] **Fichier JSON** : `content/sections/home/deblocage.json`
- [x] **Intégré dans** : `app/page.tsx` (après Services)

### Section 2 : Types de Pannes Courantes ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/home/PannesSection.tsx`
- [x] **Design** : Bento Grid moderne avec 6 types de pannes
- [x] **Contenu** :
  - H2 : "Pannes de Rideau Métallique : Diagnostic et Réparation à Montpellier"
  - Panne moteur électrique (grillé, ne répond plus)
  - Lames abîmées ou tordues
  - Axe d'enroulement cassé
  - Attache tablier défaillante
  - Butées de fin de course HS
  - Problème de télécommande/récepteur
- [x] **Mots-clés** : panne rideau métallique, réparation, moteur grillé, lames cassées, axe enroulement
- [x] **Fichier JSON** : `content/sections/home/pannes.json`
- [x] **Intégré dans** : `app/page.tsx` (après DeblocageSection)

### Section 3 : Intervention Urgence 24h/24 ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/home/UrgenceSection.tsx`
- [x] **Design** : Grande image fond + overlay gradient + texte centré + stats animées
- [x] **Contenu** :
  - H2 : "Dépannage Urgence Rideau Métallique Montpellier - Disponible 24h/24"
  - Promesse : intervention en moins d'1h dans tout Montpellier
  - Stats : 127+ interventions/mois, 98% résolues en 1 passage
  - Cas d'urgence traités : cambriolage, effraction, panne totale
  - Numéro urgence bien visible
- [x] **Mots-clés** : urgence, 24h/24, intervention rapide, dépannage nuit, week-end
- [x] **Fichier JSON** : `content/sections/home/urgence.json`
- [x] **Intégré dans** : `app/page.tsx` (après PannesSection)

---

## 🏭 PAGE FABRICATION (`/fabrication`)

**Requête principale** : `fabrication rideau métallique Montpellier`

**Requêtes secondaires** :
- rideau métallique sur-mesure Montpellier
- pose rideau métallique neuf 34
- installation rideau métallique commerce Hérault
- fabricant rideau métallique local Occitanie

### Section 1 : Pourquoi Choisir un Rideau Sur-Mesure ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/fabrication/SurMesureSection.tsx`
- [x] **Design** : Texte centré + 4 cards avantages en grille + comparatif + témoignage
- [x] **Contenu** :
  - H2 : "Rideau Métallique Sur-Mesure à Montpellier : L'Excellence Artisanale"
  - Avantages : adaptation parfaite, durabilité supérieure, esthétique personnalisée, normes respectées
  - Comparaison vs rideau standard
  - Témoignage client
- [x] **Mots-clés** : sur-mesure, personnalisé, fabrication locale, artisan rideau métallique
- [x] **Fichier JSON** : `content/sections/fabrication/sur-mesure.json`
- [x] **Intégré dans** : `app/fabrication/page.tsx` (après Hero)

### Section 2 : Nos Réalisations à Montpellier ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/fabrication/RealisationsSection.tsx`
- [x] **Design** : Galerie en grille avec hover effect + filtres (commerce, garage, industrie, restaurant)
- [x] **Contenu** :
  - H2 : "Réalisations de Rideaux Métalliques dans l'Hérault"
  - 6 mini-études de cas : Restaurant Comédie, Pharmacie Antigone, Garage Port Marianne, Boutique Écusson, Boulangerie Castelnau, Entrepôt Lattes
  - Mention des quartiers Montpellier et communes
- [x] **Mots-clés** : réalisation, installation, pose, commerce Montpellier, local professionnel
- [x] **Fichier JSON** : `content/sections/fabrication/realisations.json`
- [x] **Intégré dans** : `app/fabrication/page.tsx` (après Types de rideaux)

### Section 3 : Normes et Certifications ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/fabrication/NormesSection.tsx`
- [x] **Design** : Norme principale + 4 cards certifications + timeline processus + garanties + info ERP
- [x] **Contenu** :
  - H2 : "Rideaux Métalliques Certifiés CE - Normes Européennes Respectées"
  - Normes NF EN 13241-1
  - Certification coupe-feu, anti-effraction, isolation thermique
  - Assurance décennale
  - Info ERP (Établissements Recevant du Public)
- [x] **Mots-clés** : norme CE, certification, coupe-feu, assurance, garantie, ERP
- [x] **Fichier JSON** : `content/sections/fabrication/normes.json`
- [x] **Intégré dans** : `app/fabrication/page.tsx` (après Matériaux)

---

## 🛠️ PAGE ENTRETIEN (`/entretien`)

**Requête principale** : `entretien rideau métallique Montpellier`

**Requêtes secondaires** :
- maintenance rideau métallique 34
- contrat entretien rideau métallique Hérault
- révision rideau métallique commerce
- graissage rideau métallique prix

### Section 1 : Signes d'Usure à Surveiller ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/entretien/SignesUsureSection.tsx`
- [x] **Design** : Accordion interactif avec icônes + niveaux d'urgence (badges colorés)
- [x] **Contenu** :
  - H2 : "Quand Faire Entretenir Votre Rideau Métallique à Montpellier ?"
  - 8 signes : bruit anormal, lenteur, blocage partiel, rouille visible, jeu dans les glissières, télécommande capricieuse, voyants défaillants, fermeture incomplète
  - Pour chaque signe : description + conséquence si non traité + solution
  - CTA : "Diagnostic gratuit"
- [x] **Mots-clés** : signes usure, symptômes panne, rideau qui grince, lent, bloqué
- [x] **Fichier JSON** : `content/sections/entretien/signes-usure.json`
- [x] **Intégré dans** : `app/entretien/page.tsx` (après Hero)

### Section 2 : Planning d'Entretien Recommandé ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/entretien/PlanningSection.tsx`
- [x] **Design** : Timeline verticale avec 4 périodes + tips pratiques
- [x] **Contenu** :
  - H2 : "Calendrier d'Entretien Rideau Métallique - Bonnes Pratiques"
  - Mensuel : inspection visuelle, nettoyage lames, test fonctionnement
  - Trimestriel : lubrification glissières, nettoyage capteurs, vérification serrure
  - Semestriel : contrôle sécurités, tension ressorts, inspection motorisation
  - Annuel : révision complète, remplacement préventif, rapport d'intervention
- [x] **Mots-clés** : fréquence entretien, planning maintenance, révision annuelle
- [x] **Fichier JSON** : `content/sections/entretien/planning.json`
- [x] **Intégré dans** : `app/entretien/page.tsx` (après Prestations)

### Section 3 : Économies Réalisées avec l'Entretien ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/entretien/EconomiesSection.tsx`
- [x] **Design** : Infographie comparative (avec vs sans entretien) + stats animées + barre durabilité + témoignage + ROI
- [x] **Contenu** :
  - H2 : "Entretien Préventif : Économisez jusqu'à 70% sur les Réparations"
  - Comparatif coûts sur 5 ans : 950€ (avec) vs 3000€ (sans)
  - ROI : 267% (150€ investi = 400€ économisés/an)
  - Durée de vie : 25 ans avec entretien vs 12 ans sans (+13 ans)
- [x] **Mots-clés** : économie, coût entretien, prix maintenance, éviter panne
- [x] **Fichier JSON** : `content/sections/entretien/economies.json`
- [x] **Intégré dans** : `app/entretien/page.tsx` (après Planning)

---

## ⚡ PAGE MOTORISATION (`/motorisation`)

**Requête principale** : `motorisation rideau métallique Montpellier`

**Requêtes secondaires** :
- automatisation rideau métallique 34
- moteur rideau métallique prix Hérault
- installer moteur rideau existant
- télécommande rideau métallique

### Section 1 : Comparatif Manuel vs Motorisé ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/motorisation/ComparatifSection.tsx`
- [x] **Design** : Split screen 50/50 avec tableau comparatif visuel
- [x] **Contenu** :
  - H2 : "Rideau Métallique Manuel ou Motorisé : Le Guide Complet"
  - Critères : confort, sécurité, durabilité, prix, maintenance
  - Verdict : pour qui chaque option est adaptée
  - Simulation économie de temps quotidienne
- [x] **Mots-clés** : motorisé vs manuel, comparatif, avantages motorisation
- [x] **Fichier JSON** : `content/sections/motorisation/comparatif.json`
- [x] **Intégré dans** : `app/motorisation/page.tsx` (après Accessoires)

### Section 2 : Retour sur Investissement ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/motorisation/ROISection.tsx`
- [x] **Design** : Calculateur interactif ou infographie avec stats
- [x] **Contenu** :
  - H2 : "Motorisation Rideau Métallique : Un Investissement Rentable"
  - Calcul : temps gagné/jour × 250 jours = économie annuelle
  - Réduction usure (moins d'efforts mécaniques)
  - Sécurité renforcée = moins de sinistres
  - Valorisation du local commercial
- [x] **Mots-clés** : rentabilité, investissement, économie temps, productivité
- [x] **Fichier JSON** : `content/sections/motorisation/roi.json`
- [x] **Intégré dans** : `app/motorisation/page.tsx` (après ComparatifSection)

### Section 3 : Témoignages Commerçants Montpellier ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/motorisation/TemoignagesSection.tsx`
- [x] **Design** : Cards témoignages avec photos et étoiles + slider/pagination
- [x] **Contenu** :
  - H2 : "Ils Ont Motorisé Leur Rideau : Témoignages de Commerçants Montpelliérains"
  - 6 témoignages fictifs mais réalistes (boulangerie, pharmacie, garage, boutique, restaurant, traiteur)
  - Mention des quartiers (Comédie, Antigone, Port Marianne, L'Écusson, Castelnau-le-Lez)
  - Note globale et avantages cités
- [x] **Mots-clés** : avis, témoignage, commerçant Montpellier, recommandation
- [x] **Fichier JSON** : `content/sections/motorisation/temoignages.json`
- [x] **Intégré dans** : `app/motorisation/page.tsx` (après ROISection)

---

## 📞 PAGE CONTACT (`/contact`)

**Requête principale** : `rideau métallique Montpellier contact`

**Requêtes secondaires** :
- devis rideau métallique Montpellier
- numéro dépannage rideau métallique 34
- artisan rideau métallique Hérault

### Section 1 : Pourquoi Nous Faire Confiance ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/contact/ConfianceSection.tsx`
- [x] **Design** : 4 piliers en grille avec icônes et descriptions + témoignage highlight
- [x] **Contenu** :
  - H2 : "DRM Montpellier : Votre Expert Rideau Métallique de Confiance"
  - 15+ ans d'expérience locale
  - +5000 interventions réalisées
  - Équipe de 8 techniciens qualifiés
  - 100% des devis honorés
- [x] **Mots-clés** : expert, professionnel, expérience, confiance
- [x] **Fichier JSON** : `content/sections/contact/confiance.json`
- [x] **Intégré dans** : `app/contact/page.tsx` (après Hero)

### Section 2 : Notre Engagement Qualité ✅ TERMINÉE
- [x] **Créer composant** : `components/sections/contact/EngagementSection.tsx`
- [x] **Design** : Checklist visuelle avec badges de garantie + stats animées
- [x] **Contenu** :
  - H2 : "Nos Engagements Qualité pour Votre Rideau Métallique"
  - Devis gratuit et sans engagement
  - Prix fixe annoncé respecté
  - Intervention dans les délais promis
  - Garantie pièces et main d'œuvre
  - SAV réactif
  - Chantier propre et respectueux
- [x] **Mots-clés** : engagement, qualité, garantie, devis gratuit, prix
- [x] **Fichier JSON** : `content/sections/contact/engagement.json`
- [x] **Intégré dans** : `app/contact/page.tsx` (après ConfianceSection)

---

## 🧩 COMPOSANTS RÉUTILISABLES À CRÉER

### Layouts de sections variés
- [ ] `components/ui/SplitSection.tsx` - 50/50 avec variations
- [ ] `components/ui/BentoGrid.tsx` - Grille style Apple
- [ ] `components/ui/TimelineVertical.tsx` - Timeline verticale
- [ ] `components/ui/StatsSection.tsx` - Section avec stats animées
- [ ] `components/ui/AccordionWithImage.tsx` - Accordion + image latérale
- [ ] `components/ui/ComparisonTable.tsx` - Tableau comparatif visuel
- [ ] `components/ui/TestimonialSlider.tsx` - Slider témoignages

### Éléments visuels
- [ ] Nouvelles icônes SVG techniques (panne, outil, éclair, etc.)
- [ ] Illustrations placeholder pour chaque type de contenu
- [ ] Badges de confiance (garantie, certifié, etc.)

---

## 📝 FICHIERS CONTENU À CRÉER

Pour chaque nouvelle section, créer le fichier JSON correspondant dans `content/sections/` :

- [x] `content/sections/home/deblocage.json` ✅
- [x] `content/sections/home/pannes.json` ✅
- [x] `content/sections/home/urgence.json` ✅
- [x] `content/sections/fabrication/sur-mesure.json` ✅
- [x] `content/sections/fabrication/realisations.json` ✅
- [x] `content/sections/fabrication/normes.json` ✅
- [x] `content/sections/entretien/signes-usure.json` ✅
- [x] `content/sections/entretien/planning.json` ✅
- [x] `content/sections/entretien/economies.json` ✅
- [x] `content/sections/motorisation/comparatif.json` ✅
- [x] `content/sections/motorisation/roi.json` ✅
- [x] `content/sections/motorisation/temoignages.json` ✅
- [x] `content/sections/contact/confiance.json` ✅
- [x] `content/sections/contact/engagement.json` ✅

---

## 🚀 ORDRE DE PRIORITÉ

### Phase 1 - Page Accueil (Priorité MAX)
C'est la page qui doit ranker sur "dépannage rideau métallique Montpellier"
1. DeblocageSection
2. PannesSection
3. UrgenceSection

### Phase 2 - Pages Services
1. Fabrication : SurMesureSection, RealisationsSection, NormesSection
2. Entretien : SignesUsureSection, PlanningSection, EconomiesSection
3. Motorisation : ComparatifSection, ROISection, TemoignagesSection

### Phase 3 - Page Contact
1. ConfianceSection
2. EngagementSection

---

## ✅ CHECKLIST FINALE

Pour chaque section créée, vérifier :
- [ ] H2 contient le mot-clé principal + variante géographique
- [ ] Paragraphe intro contient au moins 2 variantes sémantiques
- [ ] Au moins 1 mention du code postal (34000 ou 34)
- [ ] Au moins 1 mention du département (Hérault)
- [ ] Numéro de téléphone présent ou CTA vers contact
- [ ] Design différent des sections existantes
- [ ] Images avec alt text optimisé SEO
- [ ] Contenu minimum 200 mots par section

