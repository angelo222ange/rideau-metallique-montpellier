# 📝 TODO - Création Page Blog DRM Montpellier

## 📋 Objectif
Créer une section blog SEO-friendly avec 5 articles optimisés pour le référencement naturel et l'IA, ciblant les requêtes informationnelles autour des rideaux métalliques à Montpellier.

---

## 🏗️ Structure Technique à Créer

### Fichiers à créer
| Fichier | Description |
|---------|-------------|
| `app/blog/page.tsx` | Page listing tous les articles |
| `app/blog/[slug]/page.tsx` | Template article dynamique |
| `content/blog/` | Dossier JSON des articles |
| `components/sections/blog/` | Composants spécifiques blog |

### Composants Blog à développer
- [x] `BlogCard.tsx` - Card aperçu article ✅
- [x] `BlogHero.tsx` - Hero page listing blog ✅
- [x] `ArticleHeader.tsx` - En-tête article (H1 + date + temps lecture) ✅
- [x] `TLDRBox.tsx` - Encadré "Pas le temps de tout lire ?" ✅
- [ ] `TableOfContents.tsx` - Sommaire flottant (optionnel)
- [x] `AuthorBox.tsx` - Encadré auteur/entreprise ✅
- [x] `RelatedArticles.tsx` - Articles connexes ✅

---

## 📰 Structure Type d'un Article de Blog

```
┌─────────────────────────────────────────────────────────┐
│  [Breadcrumb: Accueil > Blog > Titre article]           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  📅 15 Décembre 2025 • 5 min de lecture                │
│                                                         │
│  # H1 - Titre Principal avec Année                      │
│     (Ex: 5 Astuces pour Entretenir Votre Rideau        │
│          Métallique en 2025)                            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐    │
│  │ 💡 PAS LE TEMPS DE TOUT LIRE ?                  │    │
│  │                                                  │    │
│  │ [Réponse directe à l'intention de recherche     │    │
│  │  en 2-3 phrases maximum. Doit répondre à la     │    │
│  │  question principale de l'article.]             │    │
│  │                                                  │    │
│  │ 📞 Besoin d'aide ? Contactez DRM Montpellier    │    │
│  │    au 04 11 93 76 76                            │    │
│  └─────────────────────────────────────────────────┘    │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  [IMAGE HERO ARTICLE - 1200x630]                        │
│  Alt: Description sémantique avec mots-clés             │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ## Introduction                                        │
│  Paragraphe contextuel mentionnant Montpellier et DRM   │
│                                                         │
│  ## H2 - Section 1                                      │
│  Contenu détaillé...                                    │
│                                                         │
│  ## H2 - Section 2                                      │
│  Contenu détaillé...                                    │
│                                                         │
│  [IMAGE CONTEXTUELLE - 800x600]                         │
│                                                         │
│  ## H2 - Tableau Récapitulatif                          │
│  | Colonne 1 | Colonne 2 | Colonne 3 |                  │
│  |-----------|-----------|-----------|                  │
│  | ...       | ...       | ...       |                  │
│                                                         │
│  ## H2 - Liste des Points Clés                          │
│  ✅ Point 1                                             │
│  ✅ Point 2                                             │
│  ✅ Point 3                                             │
│                                                         │
│  ## Conclusion                                          │
│  Résumé + CTA vers DRM Montpellier                     │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐    │
│  │ 🏢 À PROPOS DE DRM MONTPELLIER                  │    │
│  │ Expert en rideaux métalliques depuis 15 ans...  │    │
│  │ 📞 04 11 93 76 76 | 24h/24 - 7j/7              │    │
│  └─────────────────────────────────────────────────┘    │
│                                                         │
│  📚 ARTICLES CONNEXES                                   │
│  [Card 1] [Card 2] [Card 3]                             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 📚 Les 5 Articles de Blog à Créer

---

### 📄 ARTICLE 1 : Entretien Rideau Métallique

| Élément | Contenu |
|---------|---------|
| **Slug** | `entretien-rideau-metallique-astuces-2025` |
| **H1** | 5 Astuces pour Entretenir Votre Rideau Métallique en 2025 |
| **Date** | Décembre 2025 |
| **Intention de recherche** | Comment entretenir un rideau métallique ? |
| **Mot-clé principal** | entretien rideau métallique |
| **Mots-clés secondaires** | maintenance rideau métallique, nettoyer rideau métallique, lubrifier rideau métallique |

#### Encadré "Pas le temps de tout lire ?"
> Pour entretenir votre rideau métallique, effectuez un nettoyage mensuel à l'eau savonneuse, lubrifiez les rails et axes tous les 3 mois avec un spray silicone, et faites réaliser une maintenance professionnelle annuelle. À Montpellier, DRM assure l'entretien complet de votre rideau au 04 11 93 76 76.

#### Structure de l'article
- [ ] **Introduction** : Importance de l'entretien pour la longévité (mentionner climat méditerranéen Montpellier)
- [ ] **H2 - Astuce 1** : Nettoyage régulier des lames et rails
- [ ] **H2 - Astuce 2** : Lubrification des mécanismes
- [ ] **H2 - Astuce 3** : Vérification des fixations et axes
- [ ] **H2 - Astuce 4** : Contrôle du système de motorisation
- [ ] **H2 - Astuce 5** : Inspection visuelle des signes d'usure
- [ ] **Tableau** : Fréquence d'entretien recommandée par élément
- [ ] **Liste** : ✅ Checklist entretien mensuel
- [ ] **Conclusion** : Recommandation contrat maintenance DRM Montpellier

#### Images requises
| Image | Dimensions | Alt Text |
|-------|------------|----------|
| `blog/entretien-hero.webp` | 1200x630 | Technicien DRM effectuant l'entretien d'un rideau métallique à Montpellier |
| `blog/entretien-lubrification.webp` | 800x600 | Lubrification des rails d'un rideau métallique professionnel |

#### Tableau à inclure
| Élément | Fréquence | Action |
|---------|-----------|--------|
| Lames | Mensuel | Nettoyage eau savonneuse |
| Rails | Trimestriel | Lubrification silicone |
| Axes | Semestriel | Graissage + vérification |
| Moteur | Annuel | Révision professionnelle |
| Système complet | Annuel | Maintenance DRM |

#### Liste à inclure
✅ Nettoyer les lames avec un chiffon doux  
✅ Vérifier l'absence de débris dans les rails  
✅ Tester le fonctionnement manuel  
✅ Contrôler les butées hautes et basses  
✅ Écouter les bruits anormaux  
✅ Vérifier la tension des ressorts  

---

### 📄 ARTICLE 2 : Rideau Bloqué - Que Faire ?

| Élément | Contenu |
|---------|---------|
| **Slug** | `rideau-metallique-bloque-solutions-urgence` |
| **H1** | Rideau Métallique Bloqué : 7 Solutions pour le Débloquer en 2025 |
| **Date** | Décembre 2025 |
| **Intention de recherche** | Mon rideau métallique est bloqué, que faire ? |
| **Mot-clé principal** | rideau métallique bloqué |
| **Mots-clés secondaires** | débloquer rideau métallique, rideau de fer coincé, rideau métallique ne remonte plus |

#### Encadré "Pas le temps de tout lire ?"
> Si votre rideau métallique est bloqué, vérifiez d'abord l'alimentation électrique et les obstacles dans les rails. Pour un déblocage en urgence à Montpellier, contactez DRM au 04 11 93 76 76 – intervention en moins d'1 heure, 24h/24 et 7j/7. Ne forcez jamais sur le mécanisme pour éviter d'aggraver la panne.

#### Structure de l'article
- [ ] **Introduction** : Situation stressante d'un rideau bloqué (commerce à Montpellier)
- [ ] **H2 - Diagnostic** : Identifier la cause du blocage
- [ ] **H2 - Solution 1** : Vérifier l'alimentation électrique
- [ ] **H2 - Solution 2** : Dégager les rails des obstacles
- [ ] **H2 - Solution 3** : Utiliser le débrayage manuel
- [ ] **H2 - Solution 4** : Réinitialiser le moteur
- [ ] **H2 - Solution 5** : Vérifier la télécommande/boîtier
- [ ] **H2 - Solution 6** : Contrôler les fins de course
- [ ] **H2 - Solution 7** : Appeler un professionnel DRM
- [ ] **Tableau** : Causes de blocage et solutions
- [ ] **Liste** : ❌ Ce qu'il ne faut JAMAIS faire
- [ ] **Conclusion** : Numéro urgence DRM Montpellier 24h/24

#### Images requises
| Image | Dimensions | Alt Text |
|-------|------------|----------|
| `blog/rideau-bloque-hero.webp` | 1200x630 | Rideau métallique bloqué devant un commerce à Montpellier |
| `blog/debrayage-manuel.webp` | 800x600 | Système de débrayage manuel sur rideau métallique |

#### Tableau à inclure
| Symptôme | Cause probable | Solution |
|----------|---------------|----------|
| Ne bouge pas du tout | Coupure électrique | Vérifier disjoncteur |
| Bloqué à mi-course | Obstacle dans les rails | Nettoyer les rails |
| Monte mais ne descend pas | Fin de course défaillant | Réglage fin de course |
| Bruit sans mouvement | Moteur HS | Appeler DRM |
| Bloqué après orage | Surtension | Réinitialiser |

#### Liste à inclure
❌ Ne jamais forcer sur le tablier  
❌ Ne pas tirer sur les lames à la main  
❌ Ne pas démonter le coffre soi-même  
❌ Ne pas utiliser d'outils inadaptés  
❌ Ne pas ignorer les bruits anormaux  
❌ Ne pas attendre que la situation empire  

---

### 📄 ARTICLE 3 : Prix Rideau Métallique

| Élément | Contenu |
|---------|---------|
| **Slug** | `prix-rideau-metallique-guide-tarifs-2025` |
| **H1** | Prix Rideau Métallique en 2025 : Guide Complet des Tarifs à Montpellier |
| **Date** | Décembre 2025 |
| **Intention de recherche** | Combien coûte un rideau métallique ? |
| **Mot-clé principal** | prix rideau métallique |
| **Mots-clés secondaires** | tarif rideau métallique, coût installation rideau métallique, devis rideau métallique Montpellier |

#### Encadré "Pas le temps de tout lire ?"
> Le prix d'un rideau métallique varie de 800€ à 4000€ selon les dimensions, le type (lames pleines, micro-perforées, grilles) et la motorisation. À Montpellier, DRM propose des devis gratuits et personnalisés au 04 11 93 76 76. Comptez en moyenne 1500€ à 2500€ pour un rideau standard motorisé avec pose.

#### Structure de l'article
- [ ] **Introduction** : Investissement sécurité pour commerces Montpellier
- [ ] **H2 - Facteurs influençant le prix** : Dimensions, matériaux, options
- [ ] **H2 - Prix par type de rideau** : Lames pleines, micro-perforées, grilles, coupe-feu
- [ ] **H2 - Coût de la motorisation** : Tubulaire, central, latéral
- [ ] **H2 - Prix de la pose** : Main d'œuvre installation
- [ ] **H2 - Coûts d'entretien annuel** : Contrats maintenance
- [ ] **H2 - Comment obtenir le meilleur prix** : Conseils négociation
- [ ] **Tableau** : Grille tarifaire complète 2025
- [ ] **Liste** : ✅ Ce qui est inclus dans un devis DRM
- [ ] **Conclusion** : Devis gratuit DRM Montpellier

#### Images requises
| Image | Dimensions | Alt Text |
|-------|------------|----------|
| `blog/prix-rideau-hero.webp` | 1200x630 | Différents types de rideaux métalliques installés à Montpellier |
| `blog/devis-rideau.webp` | 800x600 | Technicien DRM établissant un devis pour rideau métallique |

#### Tableau à inclure
| Type de rideau | Prix fourniture | Prix pose | Total TTC |
|----------------|-----------------|-----------|-----------|
| Lames pleines manuel | 600€ - 1200€ | 300€ - 500€ | 900€ - 1700€ |
| Lames pleines motorisé | 1000€ - 1800€ | 400€ - 600€ | 1400€ - 2400€ |
| Micro-perforé motorisé | 1200€ - 2000€ | 400€ - 600€ | 1600€ - 2600€ |
| Grille articulée | 800€ - 1500€ | 350€ - 550€ | 1150€ - 2050€ |
| Coupe-feu certifié | 2000€ - 3500€ | 500€ - 800€ | 2500€ - 4300€ |

#### Liste à inclure
✅ Prise de mesures sur site  
✅ Étude technique personnalisée  
✅ Fabrication sur-mesure  
✅ Livraison et installation  
✅ Mise en service et réglages  
✅ Formation utilisation  
✅ Garantie 2 ans pièces et main d'œuvre  
✅ SAV réactif DRM Montpellier  

---

### 📄 ARTICLE 4 : Choisir son Rideau Métallique

| Élément | Contenu |
|---------|---------|
| **Slug** | `choisir-rideau-metallique-guide-achat-2025` |
| **H1** | Comment Choisir son Rideau Métallique en 2025 : Le Guide Complet |
| **Date** | Décembre 2025 |
| **Intention de recherche** | Quel rideau métallique choisir ? |
| **Mot-clé principal** | choisir rideau métallique |
| **Mots-clés secondaires** | quel rideau métallique, type rideau métallique, rideau métallique commerce |

#### Encadré "Pas le temps de tout lire ?"
> Pour choisir votre rideau métallique, évaluez votre besoin principal : sécurité maximale (lames pleines), visibilité vitrine (micro-perforé), ventilation (grille articulée) ou protection incendie (coupe-feu). DRM Montpellier vous conseille gratuitement au 04 11 93 76 76 pour trouver la solution adaptée à votre commerce.

#### Structure de l'article
- [ ] **Introduction** : Importance du bon choix pour la sécurité commerce Montpellier
- [ ] **H2 - Critère 1** : Niveau de sécurité requis
- [ ] **H2 - Critère 2** : Visibilité et esthétique
- [ ] **H2 - Critère 3** : Ventilation et aération
- [ ] **H2 - Critère 4** : Isolation thermique/phonique
- [ ] **H2 - Critère 5** : Budget disponible
- [ ] **H2 - Les 4 types de rideaux** : Comparatif détaillé
- [ ] **Tableau** : Comparatif des types de rideaux
- [ ] **Liste** : ✅ Questions à se poser avant achat
- [ ] **Conclusion** : Conseil personnalisé DRM Montpellier

#### Images requises
| Image | Dimensions | Alt Text |
|-------|------------|----------|
| `blog/choisir-rideau-hero.webp` | 1200x630 | Différents types de rideaux métalliques pour commerces à Montpellier |
| `blog/types-rideaux.webp` | 800x600 | Comparatif visuel lames pleines, micro-perforé et grille articulée |

#### Tableau à inclure
| Critère | Lames Pleines | Micro-Perforé | Grille | Coupe-Feu |
|---------|---------------|---------------|--------|-----------|
| Sécurité | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Visibilité | ❌ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ❌ |
| Ventilation | ❌ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ❌ |
| Isolation | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐ | ⭐⭐⭐⭐⭐ |
| Prix | €€ | €€€ | €€ | €€€€ |
| Idéal pour | Entrepôts, garages | Boutiques, vitrines | Restaurants, bars | ERP, parkings |

#### Liste à inclure
✅ Quelle est l'activité de mon commerce ?  
✅ Ai-je besoin de visibilité vitrine ?  
✅ La ventilation est-elle importante ?  
✅ Quel est mon budget maximal ?  
✅ Faut-il une motorisation ?  
✅ Y a-t-il des normes à respecter (ERP, coupe-feu) ?  
✅ Quelle largeur et hauteur d'ouverture ?  
✅ Manuel ou motorisé ?  

---

### 📄 ARTICLE 5 : Motorisation Rideau Existant

| Élément | Contenu |
|---------|---------|
| **Slug** | `motoriser-rideau-metallique-manuel-guide-2025` |
| **H1** | Motoriser un Rideau Métallique Manuel en 2025 : Guide Pratique |
| **Date** | Décembre 2025 |
| **Intention de recherche** | Peut-on motoriser un rideau métallique manuel ? |
| **Mot-clé principal** | motoriser rideau métallique manuel |
| **Mots-clés secondaires** | automatiser rideau métallique, transformation rideau manuel motorisé, kit motorisation rideau |

#### Encadré "Pas le temps de tout lire ?"
> Oui, il est possible de motoriser un rideau métallique manuel existant ! L'opération coûte entre 450€ et 800€ selon le type de moteur choisi (tubulaire, central ou latéral). À Montpellier, DRM réalise cette transformation en une demi-journée. Contactez-nous au 04 11 93 76 76 pour un devis gratuit.

#### Structure de l'article
- [ ] **Introduction** : Gain de confort pour commerçants Montpellier
- [ ] **H2 - Est-ce toujours possible ?** : Conditions et prérequis
- [ ] **H2 - Les 3 types de moteurs** : Tubulaire, central, latéral
- [ ] **H2 - Étapes de la motorisation** : Processus détaillé
- [ ] **H2 - Accessoires complémentaires** : Télécommande, clavier, détecteur
- [ ] **H2 - Avantages de la motorisation** : Confort, sécurité, longévité
- [ ] **H2 - Coût et retour sur investissement** : Prix et économies
- [ ] **Tableau** : Comparatif des 3 types de moteurs
- [ ] **Liste** : ✅ Avantages de la motorisation
- [ ] **Conclusion** : Installation par DRM Montpellier

#### Images requises
| Image | Dimensions | Alt Text |
|-------|------------|----------|
| `blog/motorisation-hero.webp` | 1200x630 | Installation moteur sur rideau métallique par technicien DRM à Montpellier |
| `blog/moteur-tubulaire.webp` | 800x600 | Moteur tubulaire pour rideau métallique |

#### Tableau à inclure
| Type Moteur | Prix | Puissance | Avantages | Idéal pour |
|-------------|------|-----------|-----------|------------|
| Tubulaire | 450€ - 600€ | Jusqu'à 100kg | Silencieux, compact | Rideaux standards |
| Central | 650€ - 850€ | Jusqu'à 300kg | Puissant, robuste | Grands rideaux |
| Latéral | 350€ - 500€ | Jusqu'à 150kg | Installation facile | Rideaux moyens |

#### Liste à inclure
✅ Ouverture/fermeture en 1 clic  
✅ Fin des efforts physiques quotidiens  
✅ Sécurité renforcée (anti-relevage)  
✅ Durée de vie prolongée du rideau  
✅ Arrêt automatique sur obstacle  
✅ Possibilité de programmation horaire  
✅ Compatible domotique et smartphone  
✅ Valorisation du local commercial  

---

## 🖼️ Images Blog à Créer

### Dossier à créer : `public/images/blog/`

| Fichier | Dimensions | Description |
|---------|------------|-------------|
| `entretien-hero.webp` | 1200x630 | Hero article entretien |
| `entretien-lubrification.webp` | 800x600 | Lubrification rideau |
| `rideau-bloque-hero.webp` | 1200x630 | Hero article blocage |
| `debrayage-manuel.webp` | 800x600 | Système débrayage |
| `prix-rideau-hero.webp` | 1200x630 | Hero article prix |
| `devis-rideau.webp` | 800x600 | Établissement devis |
| `choisir-rideau-hero.webp` | 1200x630 | Hero article choix |
| `types-rideaux.webp` | 800x600 | Comparatif types |
| `motorisation-hero.webp` | 1200x630 | Hero article motorisation |
| `moteur-tubulaire.webp` | 800x600 | Moteur tubulaire |

---

## ✅ Checklist SEO par Article

Pour chaque article, vérifier :

### Contenu
- [ ] H1 unique avec mot-clé principal + année
- [ ] Encadré "Pas le temps de tout lire ?" répondant à l'intention
- [ ] Introduction mentionnant Montpellier et DRM
- [ ] Minimum 1500 mots de contenu
- [ ] H2 structurés avec mots-clés secondaires
- [ ] 1 tableau récapitulatif
- [ ] 1 liste à puces (✅ ou ❌)
- [ ] 2 images avec alt text optimisés
- [ ] Conclusion avec CTA vers DRM
- [ ] Mentions de "Montpellier" (5-10 fois naturellement)
- [ ] Mentions de "DRM" ou "Dépannage Rideau Métallique" (3-5 fois)
- [ ] Numéro de téléphone 04 11 93 76 76 (2-3 fois)

### Technique SEO
- [ ] URL slug optimisée
- [ ] Meta title < 60 caractères
- [ ] Meta description < 160 caractères avec CTA
- [ ] Schema Article/BlogPosting
- [ ] Schema FAQPage si questions
- [ ] Balises Open Graph
- [ ] Temps de lecture affiché
- [ ] Date de publication visible
- [ ] Breadcrumb avec Schema

### Maillage Interne
- [ ] Lien vers page service associée
- [ ] Lien vers page contact
- [ ] Liens vers articles connexes
- [ ] Lien vers page zones (si pertinent)

---

## 📊 Métriques Cibles

| Métrique | Objectif |
|----------|----------|
| Mots par article | 1500 - 2500 |
| Images par article | 2 minimum |
| Liens internes | 3-5 par article |
| Temps de lecture | 5-8 minutes |
| Score SEO | > 85/100 |
| Lisibilité Flesch | > 60 |

---

## 🚀 Ordre de Priorité Création

1. **Article Prix** (intention transactionnelle forte)
2. **Article Rideau Bloqué** (requête urgence/problème)
3. **Article Entretien** (lien avec service DRM)
4. **Article Choisir** (intention informationnelle)
5. **Article Motorisation** (lien avec service DRM)

---

## 📅 Planning Suggéré

| Semaine | Tâche |
|---------|-------|
| S1 | Création structure technique (page listing + template) |
| S1 | Création composants blog |
| S2 | Rédaction Article 1 : Prix |
| S2 | Rédaction Article 2 : Rideau Bloqué |
| S3 | Rédaction Article 3 : Entretien |
| S3 | Rédaction Article 4 : Choisir |
| S4 | Rédaction Article 5 : Motorisation |
| S4 | Création/intégration images |
| S4 | Tests SEO et optimisations |

---

## 📝 Notes Importantes

### Ton et Style
- Professionnel mais accessible
- Vocabulaire technique expliqué simplement
- Ton expert et rassurant
- Orientation solution/conseil

### Référencement IA (ChatGPT, Perplexity, etc.)
- Réponses directes en début d'article (TLDR)
- Phrases affirmatives claires
- Données chiffrées et tableaux
- Structure logique et hiérarchisée
- Questions rhétoriques suivies de réponses

### Mentions Obligatoires
- **Entreprise** : DRM - Dépannage Rideau Métallique
- **Ville** : Montpellier
- **Téléphone** : 04 11 93 76 76
- **Disponibilité** : 24h/24 - 7j/7
- **Garantie** : 2 ans pièces et main d'œuvre

