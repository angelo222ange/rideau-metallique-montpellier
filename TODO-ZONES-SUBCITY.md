# 🗺️ TODO - Zones d'Intervention & Pages SubCity

## 📋 Vue d'ensemble

Créer une section "Zone d'intervention" sur chaque page service avec des liens vers des pages SubCity locales pour améliorer le SEO local.

---

## 🎯 Phase 1 : Configuration des données

### 1.1 Créer le fichier de configuration des zones
- [ ] Créer `config/zones.ts` avec toutes les zones et leurs données :
  - Quartiers de Montpellier (4)
  - Communes des environs (15+)

```typescript
// Structure des données
interface Zone {
  name: string;
  slug: string;
  postalCode: string;
  isQuartier: boolean;
  image: string;
  description?: string;
}
```

### 1.2 Mapping des images zones
| Zone | Image | Code Postal |
|------|-------|-------------|
| **QUARTIERS MONTPELLIER** |
| Montpellier Centre | depannage-rideau-metallique-montpellier-centre.webp | 34000 |
| L'Écusson | ecusson-montpellier-depannage-rideau-metallique.webp | 34000 |
| Antigone | depannage-rideau-metallique-antigone-montpellier.webp | 34000 |
| Port Marianne | depannage-rideau-metallique-port-marianne-montpellier.webp | 34000 |
| **COMMUNES ENVIRONS** |
| Castelnau-le-Lez | depannage-rideau-metallique-castelnau-le-lez-montpellier.webp | 34170 |
| Lattes | depannage-rideau-metallique-lattes-montpellier.webp | 34970 |
| Pérols | depannage-rideau-metallique-perols-montpellier.webp | 34470 |
| Mauguio | depannage-rideau-metallique-Mauguio.webp | 34130 |
| Saint-Jean-de-Védas | depannage-rideau-metallique-saint-jean-de-vedas-montpellier.webp | 34430 |
| Juvignac | Juvignac-depannage-rideau-metallique.webp | 34990 |
| Grabels | Grabels-depannage-rideau-metallique.webp | 34790 |
| Clapiers | Clapiers-depannage-rideau-metallique.webp | 34830 |
| Le Crès | Le-Cres-depannage-rideau-metallique-34.webp | 34920 |
| Jacou | Jacou-depannage-rideau-metallique-drm.webp | 34830 |
| Villeneuve-lès-Maguelone | Villeneuve-les-Maguelone-depannage-rideau-metallique.webp | 34750 |
| Palavas-les-Flots | Palavas-les-Flots-depannage-rideau-metallique-montpellier.webp | 34250 |
| Carnon | Carnon-depannage-rideau-metallique-montpellier.webp | 34280 |
| Baillargues | Baillargues-depannage-rideau-metallique.webp | 34670 |
| Vendargues | Vendargues-34740-depannage-rideau-metallique.webp | 34740 |

---

## 🎯 Phase 2 : Composant Zone d'Intervention

### 2.1 Créer le composant `ZoneInterventionSection`
- [ ] Créer `components/sections/ZoneIntervention.tsx`
- [ ] Props : `serviceName`, `serviceSlug`, `mainCity`, `mainCityImage`
- [ ] Layout :
  - Gauche : Image de Montpellier avec badge "Rayon d'intervention"
  - Droite haut : Card Montpellier avec flèche (lien vers page zone)
  - Droite milieu : "Quartiers de Montpellier" + Slideshow 3 cards
  - Droite bas : "Communes des environs" + Slideshow 3 cards

### 2.2 Créer le composant `ZoneCard`
- [ ] Créer `components/ui/ZoneCard.tsx`
- [ ] Props : `zone`, `serviceSlug`, `showImage`
- [ ] Affiche : Image en fond, nom de ville, code postal
- [ ] Lien vers : `/${serviceSlug}/${zone.slug}`

### 2.3 Créer le composant `ZoneSlideshow`
- [ ] Créer `components/ui/ZoneSlideshow.tsx`
- [ ] Props : `zones`, `serviceSlug`, `itemsPerView`
- [ ] Slideshow avec navigation (flèches ou dots)
- [ ] Responsive : 3 cards sur desktop, 2 sur tablet, 1 sur mobile

---

## 🎯 Phase 3 : Intégration sur les pages services

### 3.1 Pages à modifier
- [ ] `app/page.tsx` (Home - Dépannage)
- [ ] `app/fabrication-rideau-metallique/page.tsx`
- [ ] `app/entretien-rideau-metallique/page.tsx`
- [ ] `app/motorisation-rideau-metallique/page.tsx`
- [ ] `app/installation-rideau-metallique/page.tsx`
- [ ] `app/depannage-rideau-metallique/page.tsx`

### 3.2 Position de la section
- Placer **AU-DESSUS de la FAQ** sur chaque page
- Titre : "Intervention {Service} à Montpellier (34000) et ses environs"

---

## 🎯 Phase 4 : Pages SubCity dynamiques

### 4.1 Structure des routes
```
app/
├── depannage-rideau-metallique/
│   └── [zone]/
│       └── page.tsx          → /depannage-rideau-metallique/castelnau-le-lez
├── fabrication-rideau-metallique/
│   └── [zone]/
│       └── page.tsx          → /fabrication-rideau-metallique/castelnau-le-lez
├── entretien-rideau-metallique/
│   └── [zone]/
│       └── page.tsx          → /entretien-rideau-metallique/castelnau-le-lez
├── motorisation-rideau-metallique/
│   └── [zone]/
│       └── page.tsx          → /motorisation-rideau-metallique/castelnau-le-lez
└── installation-rideau-metallique/
    └── [zone]/
        └── page.tsx          → /installation-rideau-metallique/castelnau-le-lez
```

### 4.2 Créer les templates SubCity
- [ ] Template Dépannage SubCity (basé sur Home)
- [ ] Template Fabrication SubCity
- [ ] Template Entretien SubCity
- [ ] Template Motorisation SubCity
- [ ] Template Installation SubCity

### 4.3 Contenu unique par page
Pour éviter le duplicate content (pénalité Google) :
- [ ] Créer `content/subcity/` avec fichiers JSON par zone
- [ ] Chaque fichier contient :
  - Textes uniques adaptés à la ville
  - FAQ spécifiques à la ville
  - Avis locaux (fictifs mais réalistes)
  - Points d'intérêt locaux mentionnés

### 4.4 Structure H1
Format : `{Service} à {Ville} ({Code Postal})`
Exemples :
- "Dépannage Rideau Métallique à Castelnau-le-Lez (34170)"
- "Fabrication Rideau Métallique à Lattes (34970)"

---

## 🎯 Phase 5 : Maillage interne

### 5.1 Sur les pages SubCity
- [ ] Section "Nos Services" → liens vers autres services de la MÊME ville
  - Ex: Sur `/depannage-rideau-metallique/castelnau-le-lez`
  - Lien Fabrication → `/fabrication-rideau-metallique/castelnau-le-lez`
  - Lien Entretien → `/entretien-rideau-metallique/castelnau-le-lez`
  - etc.

### 5.2 Sur les pages services principales
- [ ] Section Zone d'intervention → liens vers SubCity
- [ ] Footer : Ajouter liens zones populaires

### 5.3 Sur les pages sans "Nos Services"
- [ ] Ajouter une section "Autres services à {Ville}"
- [ ] Ou intégrer dans le CTA final

---

## 🎯 Phase 6 : SEO & Sitemap ✅

### 6.1 Metadata dynamique ✅
- [x] Title : `{Service} {Ville} ({CP}) | Intervention Rapide | DRM`
- [x] Description : Texte unique mentionnant la ville et ses spécificités
- [x] Canonical : URL de la page SubCity

### 6.2 Schema.org ✅
- [x] LocalBusiness avec `areaServed` = ville spécifique
- [x] Service avec `serviceArea` = ville

### 6.3 Sitemap ✅
- [x] Générer toutes les URLs SubCity (sitemap.xml statique car output: 'export')
- [x] Priorité : 0.7 pour SubCity (vs 0.9 pour pages principales)

---

## 📊 Estimation

| Phase | Complexité | Temps estimé |
|-------|------------|--------------|
| Phase 1 | Facile | 30 min |
| Phase 2 | Moyenne | 2h |
| Phase 3 | Facile | 1h |
| Phase 4 | Complexe | 4h |
| Phase 5 | Moyenne | 2h |
| Phase 6 | Moyenne | 1h |
| **TOTAL** | | **~10h** |

---

## 🚀 Ordre d'exécution recommandé

1. ✅ Phase 1.1 - Config zones
2. ✅ Phase 2.1-2.3 - Composants
3. ✅ Phase 3 - Intégration pages existantes
4. ✅ Phase 4.1-4.2 - Routes et templates SubCity
5. ✅ Phase 4.3 - Contenu unique (peut être fait progressivement)
6. ✅ Phase 5 - Maillage interne
7. ✅ Phase 6 - SEO final

---

## ⚠️ Points d'attention

1. **Duplicate Content** : Chaque page SubCity DOIT avoir du contenu unique
2. **Performance** : Lazy load des images dans les slideshows
3. **Mobile** : Tester les slideshows sur mobile
4. **Canonical** : Bien configurer pour éviter la cannibalisation SEO
5. **Indexation** : Ne pas indexer toutes les SubCity d'un coup (sandbox Google)

