# 🎯 CONTEXTE PROJET - Dépannage Rideau Métallique Montpellier

## 📋 Informations Entreprise

| Information | Valeur |
|-------------|--------|
| **Nom** | DRM - Dépannage Rideau Métallique |
| **Téléphone** | 04 11 93 76 76 |
| **Email** | contact@depannage-rideau-metallique-montpellier.fr |
| **Adresse** | 15 Rue Marceau, 34000 Montpellier, France |
| **Ville principale** | Montpellier |
| **Code postal** | 34000 |
| **Région** | Occitanie |
| **Disponibilité** | 24h/24 - 7j/7 |

---

## ✅ État d'Implémentation

### Phase 1 : Configuration & Design System ✅ TERMINÉE

| Fichier | Status | Description |
|---------|--------|-------------|
| `config/site.ts` | ✅ | Infos DRM Montpellier, navigation simplifiée, zones d'intervention |
| `tailwind.config.js` | ✅ | Palette Montpellier (Bleu Méditerranée, Terracotta, Azur), gradients, shadows |
| `app/globals.css` | ✅ | Variables CSS, composants (.btn-primary, .card, .section), animations |
| `app/layout.tsx` | ✅ | Google Fonts (Plus Jakarta Sans, DM Sans), Schema.org LocalBusiness |

---

### Phase 2 : Page Accueil ✅ TERMINÉE

| Fichier | Status | Description |
|---------|--------|-------------|
| `components/sections/Hero.tsx` | ✅ | Design moderne gradient bleu méditerranée, trust badges animés, double CTA |
| `components/sections/Services.tsx` | ✅ | 4 cards avec icônes SVG personnalisées, design hover moderne |
| `components/sections/WhyUs.tsx` | ✅ | Layout alternée texte/image, 4 avantages avec stats |
| `components/sections/Zones.tsx` | ✅ | Focus Montpellier + quartiers + communes, carte placeholder |
| `components/sections/FAQ.tsx` | ✅ | Accordion moderne, 2 variants (default + centered) |
| `components/sections/CTA.tsx` | ✅ | 3 variants (default, compact, urgent) avec gradients |
| `content/faq/accueil.json` | ✅ | 6 questions FAQ optimisées SEO avec "Qui appeler" en premier |
| `app/page.tsx` | ✅ | Page accueil assemblée (sans Tarifs) |

#### Composants Hero Implémentés
- **Design** : Gradient `bg-gradient-hero` (bleu méditerranée vers azur)
- **Animations** : `animate-fade-in-up`, `animate-float`, `animation-delay-*`
- **Trust Badges** : 24h/24, Intervention -1h, Garantie (avec icônes SVG)
- **Double CTA** : Téléphone (terracotta pulsant) + Devis gratuit
- **Image** : Placeholder avec badge flottant 24/7 + note Google

#### Composants Services Implémentés
- **4 Services** : Dépannage, Fabrication, Entretien, Motorisation
- **Icônes SVG** : Personnalisées pour chaque service (pas d'emojis)
- **Design Cards** : Hover avec background coloré, badges, features list
- **Couleurs** : Thème différent par service (primary, secondary, accent)

#### Composant WhyUs Implémenté
- **Layout** : Alternée (Image gauche → Texte droite, puis inverse)
- **4 Avantages** : Expertise locale (15+ ans), Réactivité (-1h), Prix justes (0€ devis), Garantie (1 an)
- **Stats flottants** : 127+ interventions/an, 98% clients satisfaits
- **Bottom stats** : 15+ ans, 24/7, 4.9 note, 5000+ interventions

#### Composant Zones Implémenté
- **Structure** : Montpellier (main) + Quartiers + Communes
- **Carte** : Placeholder avec badge "Rayon 30km"
- **Liens** : Vers pages zones individuelles

#### FAQ Accueil Implémentée (6 questions)
1. Qui appeler pour dépannage rideau métallique à Montpellier ?
2. Combien coûte un dépannage de rideau métallique à Montpellier ?
3. Quel délai d'intervention pour un rideau bloqué à Montpellier ?
4. Intervenez-vous le week-end et les jours fériés à Montpellier ?
5. Quelles sont les pannes les plus courantes sur un rideau métallique ?
6. Proposez-vous des contrats d'entretien à Montpellier ?

#### CTA Variants Implémentés
- **default** : Full width avec gradient hero, badges, double CTA
- **compact** : Barre horizontale avec gradient primary
- **urgent** : Style urgence avec gradient terracotta et pulse

---

### Phase 3 : Page Fabrication ✅ TERMINÉE

| Fichier | Status | Description |
|---------|--------|-------------|
| `app/fabrication/page.tsx` | ✅ | Page complète avec Hero, Types de rideaux, Processus, Matériaux, Garanties, FAQ, CTA |
| `content/pages/fabrication.json` | ✅ | Contenu SEO complet (meta, hero, types, processus, matériaux, garanties) |
| `content/faq/fabrication.json` | ✅ | 6 questions FAQ optimisées SEO avec "Qui appeler" en premier |

#### Sections Page Fabrication Implémentées
- **Hero** : Gradient bleu méditerranée, badges flottants (100% Sur-Mesure, Certifié CE), double CTA
- **Types de Rideaux** : 4 types en sections alternées (Lames pleines, Micro-perforés, Grilles articulées, Coupe-feu)
- **Processus Fabrication** : Timeline horizontale avec 4 étapes (Mesures → Devis → Fabrication → Installation)
- **Matériaux** : 3 cards (Acier galvanisé, Aluminium, Acier inoxydable) avec avantages
- **Garanties** : Barre horizontale avec 4 garanties (2 ans, Devis gratuit, SAV réactif, Normes CE)
- **FAQ** : 6 questions optimisées SEO
- **CTA Final** : Design standard avec gradient

#### FAQ Fabrication Implémentée (6 questions)
1. Qui appeler pour fabrication rideau métallique à Montpellier ?
2. Quels types de rideaux métalliques fabriquez-vous à Montpellier ?
3. Quel délai pour une fabrication sur-mesure à Montpellier ?
4. Quels matériaux utilisez-vous pour vos rideaux métalliques ?
5. Proposez-vous des rideaux métalliques isolants à Montpellier ?
6. Combien coûte un rideau métallique sur-mesure à Montpellier ?

---

### Phase 4 : Page Entretien ✅ TERMINÉE

| Fichier | Status | Description |
|---------|--------|-------------|
| `app/entretien/page.tsx` | ✅ | Page complète avec Hero, Pourquoi entretenir (4 sections alternées), Prestations, Contrats, Urgence, FAQ, CTA |
| `content/pages/entretien.json` | ✅ | Contenu SEO complet (meta, hero, pourquoi, prestations, contrats, urgence, cta) |
| `content/faq/entretien.json` | ✅ | 6 questions FAQ optimisées SEO avec "Qui appeler" en premier |

#### Sections Page Entretien Implémentées
- **Hero** : Gradient bleu méditerranée, badges flottants (+10 ans durée de vie, -70% pannes), double CTA
- **Pourquoi Entretenir** : 4 sections alternées (Durée de vie, Économies, Sécurité, Conformité) avec stats et features
- **Prestations Incluses** : 6 cards (Lubrification, Réglages, Inspection, Sécurité, Motorisation, Rapport)
- **Contrats Maintenance** : 3 formules pricing (Essentiel 150€, Pro 280€ recommandé, Premium sur devis)
- **Urgence Banner** : Barre terracotta avec CTA téléphone
- **FAQ** : 6 questions optimisées SEO
- **CTA Final** : Design standard avec gradient

#### FAQ Entretien Implémentée (6 questions)
1. Qui appeler pour entretien rideau métallique à Montpellier ?
2. À quelle fréquence faut-il entretenir un rideau métallique ?
3. Que comprend un contrat d'entretien chez DRM Montpellier ?
4. L'entretien est-il obligatoire pour un rideau métallique ?
5. Combien coûte un contrat d'entretien annuel à Montpellier ?
6. Quels sont les signes qu'un rideau métallique a besoin d'entretien ?

---

### Phase 5 : Page Motorisation ✅ TERMINÉE

| Fichier | Status | Description |
|---------|--------|-------------|
| `app/motorisation/page.tsx` | ✅ | Page complète avec Hero, Avantages (4 sections alternées), Types de moteurs, Accessoires, Processus, Urgence, FAQ, CTA |
| `content/pages/motorisation.json` | ✅ | Contenu SEO complet (meta, hero, avantages, moteurs, accessoires, processus, urgence, cta) |
| `content/faq/motorisation.json` | ✅ | 6 questions FAQ optimisées SEO avec "Qui appeler" en premier |

#### Sections Page Motorisation Implémentées
- **Hero** : Gradient bleu méditerranée, badges flottants (1 clic, 2 ans garantie), double CTA
- **Avantages Motorisation** : 4 sections alternées (Confort, Temps, Sécurité, Longévité) avec stats et features
- **Types de Moteurs** : 3 cards (Tubulaire 450€, Central 650€, Latéral 350€) avec specs détaillées
- **Accessoires** : 6 cards (Télécommande incluse, Clavier 90€, Détecteur 120€, Batterie 180€, Smartphone 150€, Horloge 80€)
- **Processus** : Timeline 4 étapes (Diagnostic → Devis → Installation → Formation)
- **Urgence Banner** : Barre terracotta avec CTA téléphone
- **FAQ** : 6 questions optimisées SEO
- **CTA Final** : Design standard avec gradient

#### FAQ Motorisation Implémentée (6 questions)
1. Qui appeler pour motorisation rideau métallique à Montpellier ?
2. Peut-on motoriser un rideau métallique existant à Montpellier ?
3. Quel type de moteur choisir pour mon rideau métallique ?
4. Combien coûte la motorisation d'un rideau métallique à Montpellier ?
5. La motorisation nécessite-t-elle une alimentation électrique spéciale ?
6. Quels accessoires sont inclus avec la motorisation ?

---

### Phase 6 : Page Contact ✅ TERMINÉE

| Fichier | Status | Description |
|---------|--------|-------------|
| `app/contact/page.tsx` | ✅ | Page complète avec Hero, Coordonnées, Formulaire devis, Google Maps, FAQ, CTA |

#### Sections Page Contact Implémentées
- **Hero** : Gradient bleu méditerranée, badges (Disponible 24h/24, Devis gratuit, 4.9/5 avis)
- **Coordonnées** : 4 cards modernes (Téléphone urgence, Email, Adresse, Horaires)
- **Formulaire Devis** : Design moderne 4 champs (Nom, Téléphone, Service, Message) avec validation visuelle
- **Google Maps** : Iframe intégré avec card adresse overlay et zones d'intervention
- **Urgence Banner** : Barre terracotta avec CTA téléphone
- **FAQ** : 4 questions sur le contact et devis
- **CTA Final** : Design standard avec gradient

#### FAQ Contact Implémentée (4 questions)
1. Qui appeler pour un devis rideau métallique à Montpellier ?
2. Quel est le délai de réponse pour une demande de devis ?
3. Dans quelles zones intervenez-vous autour de Montpellier ?
4. Comment se déroule une demande de devis ?

---

### Phase 7 : Composants Globaux ✅ TERMINÉE

| Fichier | Status | Description |
|---------|--------|-------------|
| `components/layout/Header.tsx` | ✅ | Nouveau design Montpellier, navigation 5 liens, CTA téléphone pulsant, menu mobile slide-in, top bar urgence |
| `components/layout/Footer.tsx` | ✅ | Colonnes Services/Contact/Zones, coordonnées complètes, réseaux sociaux, design moderne gradient |
| `components/ui/FloatingButton.tsx` | ✅ | Style terracotta cohérent, animation pulse, bouton scroll-to-top |
| `components/ui/SectionAlternee.tsx` | ✅ | Composant réutilisable texte/image alternés avec thèmes |
| `components/ui/ImagePlaceholder.tsx` | ✅ | Placeholders stylisés avec icônes et thèmes couleurs |
| `components/ui/TrustBadges.tsx` | ✅ | 4 variantes (default, compact, detailed, inline) |
| `components/ui/CTABanner.tsx` | ✅ | 4 variantes (default, urgent, minimal, gradient) |
| `components/ui/index.ts` | ✅ | Export centralisé des composants UI |

#### Header Implémenté
- **Top Bar Urgence** : Bandeau terracotta visible avec numéro (disparaît au scroll)
- **Logo** : Icône rideau métallique stylisée avec pulse ring
- **Navigation Desktop** : 5 liens avec indicateur actif gradient
- **CTA Téléphone** : Bouton terracotta avec pulse et badge vert "online"
- **Menu Mobile** : Slide-in moderne avec icônes, zone d'intervention, CTA footer

#### Footer Implémenté
- **Design** : Gradient bleu nuit avec pattern grille
- **4 Colonnes** : À propos, Services, Zones, Contact
- **Trust Badges** : 24h/24, Note Google, Garantie
- **Réseaux Sociaux** : Facebook, Instagram, Google (placeholders)
- **Bottom Bar** : Copyright, Mentions légales, Confidentialité

#### Composants Réutilisables Créés

**SectionAlternee.tsx**
- Layout alternée texte/image responsive
- Props : title, description, features, stat, cta, image, theme
- Thèmes : primary, secondary, accent
- Backgrounds : white, sand, gradient

**ImagePlaceholder.tsx**
- Placeholders avec gradients et icônes
- 9 icônes : shutter, tools, lightning, settings, shield, clock, factory, truck, check
- Thèmes : primary, secondary, accent, neutral
- Badge "Image à venir"

**TrustBadges.tsx**
- 4 variantes d'affichage
- Badges par défaut : 24h/24, Intervention <1h, Garantie 1 an, Note 4.9/5
- Support thème light/dark

**CTABanner.tsx**
- `default` : Section standard avec gradient bleu
- `urgent` : Bandeau terracotta avec pulse pour urgences
- `minimal` : Barre simple horizontale
- `gradient` : Section complète avec décorations et double CTA

---

### Phase 8 : SEO & Métadonnées ✅ TERMINÉE

| Fichier | Status | Description |
|---------|--------|-------------|
| `app/page.tsx` | ✅ | Metadata complète, Schema FAQ + Service, OG tags |
| `app/fabrication/page.tsx` | ✅ | Metadata complète, Schema FAQ + Service, OG tags |
| `app/entretien/page.tsx` | ✅ | Metadata complète, Schema FAQ + Service (avec prix), OG tags |
| `app/motorisation/page.tsx` | ✅ | Metadata complète, Schema FAQ + Service (avec prix), OG tags |
| `app/contact/page.tsx` | ✅ | Metadata complète, Schema FAQ + ContactPage, OG tags |
| `app/layout.tsx` | ✅ | Schema LocalBusiness complet avec services, avis, zone intervention |
| `public/sitemap.xml` | ✅ | Sitemap avec toutes les pages et zones |
| `public/robots.txt` | ✅ | Configuration robots avec sitemap |

#### Éléments SEO Implémentés
- **Metadata Next.js** : Title, description, keywords, canonical, OG, Twitter Cards
- **Schema LocalBusiness** : Coordonnées, horaires, avis agrégés, zone service
- **Schema FAQPage** : Sur chaque page avec question "Qui appeler..." en premier
- **Schema Service** : Pour chaque service (Dépannage, Fabrication, Entretien, Motorisation)
- **Schema ContactPage** : Sur la page contact

---

### Phase 9 : Assets & Images ✅ TERMINÉE

| Fichier | Status | Description |
|---------|--------|-------------|
| `public/images/README.md` | ✅ | Documentation complète des images requises pour DRM Montpellier |
| `public/images/hero/` | ✅ | Dossier créé (images à fournir) |
| `public/images/services/` | ✅ | Dossier créé (images à fournir) |
| `public/images/fabrication/` | ✅ | Dossier créé (images à fournir) |
| `public/images/entretien/` | ✅ | Dossier créé (images à fournir) |
| `public/images/motorisation/` | ✅ | Dossier créé (images à fournir) |
| `public/images/contact/` | ✅ | Dossier créé (images à fournir) |
| `public/images/why-us/` | ✅ | Dossier créé (images à fournir) |
| `public/images/zones/` | ✅ | Dossier créé (images à fournir) |
| `public/images/logos/` | ✅ | Dossier créé (images à fournir) |
| `public/images/icons/` | ✅ | Dossier créé (images à fournir) |
| `components/ui/ImagePlaceholder.tsx` | ✅ | Composant placeholder stylisé avec icônes et thèmes |

#### Structure Dossiers Images Créée
```
public/images/
├── hero/           → Bannières pages (1920×1080)
├── services/       → Images 4 services (600×400)
├── fabrication/    → Images page fabrication
├── entretien/      → Images page entretien
├── motorisation/   → Images page motorisation
├── contact/        → Images page contact
├── why-us/         → Section pourquoi nous (800×600)
├── zones/          → Carte Montpellier
├── logos/          → Logo DRM, favicon, OG image
├── icons/          → Icônes personnalisées
├── gallery/        → Galerie réalisations
├── team/           → Photos équipe
├── types/          → Types de rideaux
└── backgrounds/    → Textures et fonds
```

#### Composant ImagePlaceholder
- Placeholders stylisés avec gradients aux couleurs de la charte
- 9 icônes disponibles : shutter, tools, lightning, settings, shield, clock, factory, truck, check
- 4 thèmes couleurs : primary, secondary, accent, neutral
- Badge "Image à venir" automatique
- Dimensions affichées au centre

#### Images Prioritaires Documentées
| Priorité | Image | Dimensions |
|----------|-------|------------|
| ⭐⭐⭐ | Logo DRM | 200×60 |
| ⭐⭐⭐ | Hero Accueil | 1920×1080 |
| ⭐⭐⭐ | OG Image | 1200×630 |
| ⭐⭐ | Services (×4) | 600×400 |
| ⭐⭐ | Why Us (×2) | 800×600 |
| ⭐⭐ | Heroes pages | 1920×1080 |

---

## 🎨 Identité Visuelle - Inspiration Montpellier

### Palette de Couleurs Inspirée par Montpellier

Montpellier est une ville méditerranéenne connue pour :
- La **Place de la Comédie** et son architecture historique
- Les **toitures en terre cuite** ocre et terracotta
- Le **ciel azur** méditerranéen
- Les **pierres calcaires** blanc-crème des façades
- L'**Écusson** médiéval et son patrimoine

#### Couleurs Primaires ✅ IMPLÉMENTÉES
| Nom | Code HEX | Tailwind Class | Usage |
|-----|----------|----------------|-------|
| **Bleu Méditerranée** | `#0077B6` | `primary-500` | Couleur principale - confiance, professionnalisme |
| **Bleu Nuit Écusson** | `#023E8A` | `primary-800` | Accents profonds, headers |
| **Azur Ciel** | `#48CAE4` | `accent-400` | Highlights, badges |

#### Couleurs Secondaires ✅ IMPLÉMENTÉES
| Nom | Code HEX | Tailwind Class | Usage |
|-----|----------|----------------|-------|
| **Terracotta Toiture** | `#E07B39` | `secondary-500` | CTA urgence, boutons action |
| **Ocre Doré** | `#E6A23C` | `gold-500` | Accents chaleureux |
| **Sable Calcaire** | `#FAF8F0` | `sand-100` | Backgrounds clairs |

#### Couleurs Neutres ✅ IMPLÉMENTÉES
| Nom | Code HEX | Tailwind Class | Usage |
|-----|----------|----------------|-------|
| **Anthracite Métal** | `#1F2937` | `metal-800` | Textes principaux |
| **Gris Pierre** | `#6B7280` | `gray-500` | Textes secondaires |
| **Blanc Façade** | `#FFFFFF` | `white` | Backgrounds |

### Typographie ✅ IMPLÉMENTÉE
- **Titres** : Plus Jakarta Sans (`font-heading`)
- **Corps** : DM Sans (`font-sans`)

### Ambiance Design
- Style **moderne et professionnel** avec touches méditerranéennes
- **Ombres douces** et **coins arrondis** (rounded-xl, rounded-2xl, rounded-3xl)
- **Gradients subtils** bleu vers azur (`bg-gradient-primary`, `bg-gradient-hero`)
- **Motifs géométriques** inspirés des grilles métalliques (`bg-grid-pattern`)
- **Photos avec overlay** bleu pour cohérence (`overlay-primary`)

---

## 🧩 Classes CSS Disponibles

### Boutons
| Classe | Description |
|--------|-------------|
| `.btn-primary` | Bouton bleu méditerranée avec shadow |
| `.btn-secondary` | Bouton contour bleu |
| `.btn-phone` | Bouton téléphone urgence terracotta avec pulse |
| `.btn-phone-header` | Version compacte pour header |

### Cards & Containers
| Classe | Description |
|--------|-------------|
| `.card` | Card blanche avec border et shadow |
| `.card-hover` | Card avec effet hover lift |
| `.section` | Section avec padding responsive |
| `.section-sand` | Section fond sable |

### Badges
| Classe | Description |
|--------|-------------|
| `.badge-primary` | Badge bleu clair |
| `.badge-secondary` | Badge terracotta clair |
| `.badge-accent` | Badge azur clair |
| `.badge-success` | Badge vert |
| `.trust-badge` | Badge avec backdrop-blur |

### Typographie
| Classe | Description |
|--------|-------------|
| `.section-title` | Titre de section (H2) |
| `.section-subtitle` | Sous-titre de section |
| `.text-gradient` | Texte en dégradé bleu |

### Patterns & Effets
| Classe | Description |
|--------|-------------|
| `.bg-grid-pattern` | Pattern grille subtile |
| `.bg-dots-pattern` | Pattern points |
| `.placeholder-image` | Placeholder gradient pour images |

### Animations
| Classe | Description |
|--------|-------------|
| `.animate-float` | Animation flottante |
| `.animate-pulse-slow` | Pulse lent |
| `.animate-fade-in-up` | Fade in vers le haut |
| `.animation-delay-100` à `.animation-delay-500` | Délais pour stagger |

---

## 🖼️ Images à Fournir (Placeholders créés)

### Structure Dossiers Images
```
public/images/
├── hero/
│   └── hero-depannage-montpellier.webp (1920x1080)
├── why-us/
│   ├── expertise.webp (800x600)
│   └── reactivite.webp (800x600)
├── zones/
│   └── carte-montpellier.webp (800x800)
├── fabrication/
├── entretien/
├── motorisation/
└── contact/
```

### Images Page Accueil
| Image | Dimensions | Chemin |
|-------|------------|--------|
| Hero principal | 1920x1080 | `/images/hero/hero-depannage-montpellier.webp` |
| Why Us - Expertise | 800x600 | `/images/why-us/expertise.webp` |
| Why Us - Réactivité | 800x600 | `/images/why-us/reactivite.webp` |
| Carte Montpellier | 800x800 | `/images/zones/carte-montpellier.webp` |

### Images Page Fabrication
| Image | Dimensions | Chemin |
|-------|------------|--------|
| Hero Fabrication | 1920x1080 | `/images/fabrication/hero-fabrication.webp` |
| Lames pleines | 600x400 | `/images/fabrication/lames-pleines.webp` |
| Micro-perforé | 600x400 | `/images/fabrication/micro-perfore.webp` |
| Grille articulée | 600x400 | `/images/fabrication/grille.webp` |
| Coupe-feu | 600x400 | `/images/fabrication/coupe-feu.webp` |

### Images Page Entretien
| Image | Dimensions | Chemin |
|-------|------------|--------|
| Hero Entretien | 1920x1080 | `/images/entretien/hero-entretien.webp` |
| Durée de vie | 800x600 | `/images/entretien/duree-vie.webp` |
| Économies | 800x600 | `/images/entretien/economies.webp` |
| Sécurité | 800x600 | `/images/entretien/securite.webp` |
| Conformité | 800x600 | `/images/entretien/conformite.webp` |

### Images Page Motorisation
| Image | Dimensions | Chemin |
|-------|------------|--------|
| Hero Motorisation | 1920x1080 | `/images/motorisation/hero-motorisation.webp` |
| Confort | 800x600 | `/images/motorisation/confort.webp` |
| Temps | 800x600 | `/images/motorisation/temps.webp` |
| Sécurité | 800x600 | `/images/motorisation/securite.webp` |
| Longévité | 800x600 | `/images/motorisation/longevite.webp` |
| Moteur Tubulaire | 600x400 | `/images/motorisation/moteur-tubulaire.webp` |
| Moteur Central | 600x400 | `/images/motorisation/moteur-central.webp` |
| Moteur Latéral | 600x400 | `/images/motorisation/moteur-lateral.webp` |

---

## 📄 Structure des Pages

### Navigation Header ✅ IMPLÉMENTÉE
```
Accueil | Fabrication | Entretien | Motorisation | Contact
```

### Page Accueil (`/`) ✅ IMPLÉMENTÉE
**Requête ciblée** : `dépannage rideau métallique Montpellier`
- ✅ Hero impactant avec CTA urgence
- ✅ Présentation 4 services principaux
- ✅ Section "Pourquoi nous choisir" avec layout alternée
- ✅ Zones d'intervention Montpellier et agglomération
- ✅ FAQ générale (6 questions)
- ✅ CTA final

### Pages À Faire

#### Page Fabrication (`/fabrication`)
**Requête ciblée** : `fabrication rideau métallique Montpellier`
- Hero avec visuel fabrication
- Types de rideaux fabriqués (lames pleines, micro-perforées, grilles)
- Processus de fabrication sur-mesure
- Matériaux utilisés (acier galvanisé, aluminium)
- FAQ fabrication

#### Page Entretien (`/entretien`)
**Requête ciblée** : `entretien rideau métallique Montpellier`
- Hero avec visuel entretien
- Pourquoi l'entretien est crucial
- Prestations incluses dans l'entretien
- Contrats de maintenance (formules)
- FAQ entretien

#### Page Motorisation (`/motorisation`)
**Requête ciblée** : `motorisation rideau métallique Montpellier`
- Hero avec visuel motorisation
- Avantages de la motorisation
- Types de moteurs (tubulaire, central, latéral)
- Accessoires (télécommande, clavier à code, etc.)
- FAQ motorisation

#### Page Contact (`/contact`) ✅ IMPLÉMENTÉE
**Requête ciblée** : `rideau métallique Montpellier contact`
- ✅ Hero avec badges (Disponible 24h/24, Devis gratuit, 4.9/5)
- ✅ Coordonnées complètes (4 cards: Téléphone, Email, Adresse, Horaires)
- ✅ Formulaire de devis moderne (4 champs)
- ✅ Google Maps intégré (15 Rue Marceau, Montpellier)
- ✅ FAQ Contact (4 questions)
- ✅ CTA final

---

## 🔍 Stratégie SEO

### Objectif Principal
**Se positionner #1 sur** : `dépannage rideau métallique Montpellier`

### Schema.org ✅ IMPLÉMENTÉ
- LocalBusiness avec toutes les infos entreprise
- Services (Dépannage, Fabrication, Entretien, Motorisation)
- Zone de service (Montpellier + 30km)
- Avis agrégés (4.9/5, 127 avis)

### Requêtes Secondaires par Page
| Page | Requête Principale | Requêtes Secondaires |
|------|-------------------|---------------------|
| Accueil | dépannage rideau métallique Montpellier | réparation rideau métallique Montpellier, rideau métallique bloqué Montpellier |
| Fabrication | fabrication rideau métallique Montpellier | rideau métallique sur-mesure Montpellier, pose rideau métallique Montpellier |
| Entretien | entretien rideau métallique Montpellier | maintenance rideau métallique Montpellier, contrat entretien rideau Montpellier |
| Motorisation | motorisation rideau métallique Montpellier | automatisation rideau métallique Montpellier, moteur rideau métallique Montpellier |
| Contact | - | devis rideau métallique Montpellier |

---

## ❓ Structure FAQ Standard

### Première Question Obligatoire (toutes les pages)
**Question** : Qui appeler pour [service] à Montpellier ?
**Réponse** : Pour [service] à Montpellier, contactez DRM au **04 11 93 76 76**. Notre équipe intervient rapidement dans tout Montpellier et son agglomération.

### Questions Types par Page

#### Accueil (Dépannage) ✅ IMPLÉMENTÉE
1. Qui appeler pour dépannage rideau métallique à Montpellier ?
2. Combien coûte un dépannage de rideau métallique à Montpellier ?
3. Quel délai d'intervention pour un rideau bloqué à Montpellier ?
4. Intervenez-vous le week-end et les jours fériés à Montpellier ?
5. Quelles sont les pannes les plus courantes sur un rideau métallique ?
6. Proposez-vous des contrats d'entretien à Montpellier ?

#### Fabrication
1. Qui appeler pour fabrication rideau métallique à Montpellier ?
2. Quels types de rideaux métalliques fabriquez-vous à Montpellier ?
3. Quel délai pour une fabrication sur-mesure à Montpellier ?
4. Quels matériaux utilisez-vous pour vos rideaux métalliques ?
5. Proposez-vous des rideaux métalliques isolants à Montpellier ?

#### Entretien
1. Qui appeler pour entretien rideau métallique à Montpellier ?
2. À quelle fréquence faut-il entretenir un rideau métallique ?
3. Que comprend un contrat d'entretien chez DRM Montpellier ?
4. L'entretien est-il obligatoire pour un rideau métallique ?
5. Combien coûte un contrat d'entretien annuel à Montpellier ?

#### Motorisation
1. Qui appeler pour motorisation rideau métallique à Montpellier ?
2. Peut-on motoriser un rideau métallique existant à Montpellier ?
3. Quel type de moteur choisir pour mon rideau métallique ?
4. Combien coûte la motorisation d'un rideau métallique à Montpellier ?
5. La motorisation nécessite-t-elle une alimentation électrique spéciale ?

---

## 📱 Optimisation Conversion

### Éléments CTA Prioritaires
1. **Bouton téléphone flottant** (mobile) - toujours visible
2. **Numéro dans le header** - style urgent (pulsing)
3. **CTA après chaque section** - téléphone + formulaire
4. **Formulaire devis simplifié** - 3 champs max

### Trust Signals ✅ IMPLÉMENTÉS
- ⭐ Note Google 4.9/5 (127 avis)
- ✅ Intervention 24h/24
- 🚀 Intervention en -1h
- 🛡️ Garantie pièces et main d'œuvre
- 📍 Entreprise locale Montpellier

---

## 📐 Layout Type Section Alternée ✅ IMPLÉMENTÉ

```
┌─────────────────────────────────────────┐
│  TEXTE        │        VISUEL           │
│  (gauche)     │        (droite)         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  VISUEL       │        TEXTE            │
│  (gauche)     │        (droite)         │
└─────────────────────────────────────────┘
```

Chaque section alternée comprend :
- Un titre H2 ou H3
- Un paragraphe descriptif
- Une liste de points clés (3-5 éléments)
- Un CTA secondaire
- Un placeholder image avec dimensions fixes
