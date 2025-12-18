# 🎯 TODO - Optimisation SEO Pages SubCity

## 📋 Vue d'ensemble

Améliorer les pages SubCity (service + ville) pour :
1. **Avis clients** citant explicitement le service ET la ville
2. **2 nouvelles sections** par type de service pour répondre à l'intention de recherche

---

## 📊 Ampleur du projet

| Service | Nb de zones | Total pages |
|---------|-------------|-------------|
| Dépannage | 19 | 19 |
| Fabrication | 19 | 19 |
| Entretien | 19 | 19 |
| Installation | 19 | 19 |
| Motorisation | 19 | 19 |
| **TOTAL** | | **95 pages** |

---

## 🚀 Phase 1 : Corriger le composant Reviews pour SubCity ✅ TERMINÉE

### 1.1 Problème actuel
Le composant `Reviews` attend un type `Review` avec `text`, mais les pages SubCity passent `comment`.

### 1.2 Solution ✅
- [x] Modifier le type `Review` pour accepter `text` OU `comment`
- [x] Rendre `id` et `avatarType` optionnels avec valeurs par défaut
- [x] Ajouter les champs `service` et `location` pour les pages SubCity

---

## 🚀 Phase 2 : Améliorer les avis locaux avec Service + Ville ✅ TERMINÉE

### 2.1 Structure des avis optimisés SEO
Chaque avis doit mentionner :
- Le **nom du service** (ex: "dépannage rideau métallique")
- La **ville** (ex: "Castelnau-le-Lez")
- Un contexte **réaliste** (commerce, garage, etc.)

### 2.2 Fichiers modifiés
- [x] `app/depannage-rideau-metallique/[zone]/page.tsx` - 5 avis optimisés SEO
- [x] `app/fabrication-rideau-metallique/[zone]/page.tsx` - 5 avis optimisés SEO
- [x] `app/entretien-rideau-metallique/[zone]/page.tsx` - 5 avis optimisés SEO
- [x] `app/installation-rideau-metallique/[zone]/page.tsx` - 5 avis optimisés SEO
- [x] `app/motorisation-rideau-metallique/[zone]/page.tsx` - 5 avis optimisés SEO

### 2.3 Template d'avis optimisé (exemple Dépannage)
```typescript
{
  id: "dep-1",
  name: "Laurent M.",
  rating: 5,
  date: "Il y a 2 semaines",
  text: `Excellent service de dépannage rideau métallique à ${zoneName}. Mon rideau de boutique était bloqué un samedi soir, le technicien DRM est intervenu en 45 minutes. Travail soigné, prix correct. Je recommande pour tout dépannage urgent à ${zoneName} !`,
  avatarType: "letter" as const,
}
```

---

## 🚀 Phase 3 : Ajouter 2 sections par type de service

### 3.1 Sections pour DÉPANNAGE SubCity
| Section | Intention de recherche | Position |
|---------|------------------------|----------|
| **"Pourquoi choisir DRM pour votre dépannage à {Ville}"** | Réassurance + confiance locale | Après Hero |
| **"Nos tarifs dépannage à {Ville}"** | Transparence prix | Avant FAQ |

### 3.2 Sections pour FABRICATION SubCity  
| Section | Intention de recherche | Position |
|---------|------------------------|----------|
| **"Fabrication sur mesure à {Ville}"** | Personnalisation locale | Après Hero |
| **"Normes et certifications"** | Qualité/confiance | Avant FAQ |

### 3.3 Sections pour ENTRETIEN SubCity ✅
| Section | Intention de recherche | Position | Composant |
|---------|------------------------|----------|-----------|
| **"Contrat d'entretien à {Ville}"** | Service récurrent | Après Hero | `ContratEntretien.tsx` ✅ |
| **"Signes qu'il faut entretenir votre rideau"** | Éducation client | Avant FAQ | `SignesUsureLocal.tsx` ✅ |

### 3.4 Sections pour INSTALLATION SubCity ✅
| Section | Intention de recherche | Position | Composant |
|---------|------------------------|----------|-----------|
| **"Types de rideaux installés à {Ville}"** | Choix/options | Après Hero | `TypesRideaux.tsx` ✅ |
| **"Processus d'installation"** | Transparence | Avant FAQ | `ProcessusInstallationLocal.tsx` ✅ |

### 3.5 Sections pour MOTORISATION SubCity ✅
| Section | Intention de recherche | Position | Composant |
|---------|------------------------|----------|-----------|
| **"Avantages de la motorisation à {Ville}"** | Bénéfices | Après Hero | `AvantagesMotorisation.tsx` ✅ |
| **"Marques de moteurs installés"** | Expertise technique | Avant FAQ | `MarquesMoteurs.tsx` ✅ |

---

## 📝 Phase 4 : Créer les composants de section

### 4.1 Composants à créer
- [x] `components/sections/subcity/WhyChooseUs.tsx` - Générique, paramétrable par service ✅
- [x] `components/sections/subcity/TarifsSection.tsx` - Pour dépannage ✅
- [x] `components/sections/subcity/SurMesureLocal.tsx` - Pour fabrication ✅
- [x] `components/sections/subcity/NormesCertificationsLocal.tsx` - Pour fabrication ✅
- [x] `components/sections/subcity/ContratEntretien.tsx` - Pour entretien ✅
- [x] `components/sections/subcity/SignesUsureLocal.tsx` - Pour entretien ✅
- [x] `components/sections/subcity/TypesRideaux.tsx` - Pour installation ✅
- [x] `components/sections/subcity/ProcessusInstallationLocal.tsx` - Pour installation ✅
- [x] `components/sections/subcity/AvantagesMotorisation.tsx` - Pour motorisation ✅
- [x] `components/sections/subcity/MarquesMoteurs.tsx` - Pour motorisation ✅

### 4.2 Props communes
```typescript
interface SubCitySectionProps {
  zoneName: string;
  postalCode: string;
  serviceName: string;
}
```

---

## 🔄 Ordre d'exécution recommandé

### Étape 1 - Fix Reviews (30 min) ✅ TERMINÉE
- [x] 1.1 Corriger le type Review pour accepter `text` ET `comment`
- [x] 1.2 Rendre `id` et `avatarType` optionnels avec valeurs par défaut

### Étape 2 - Avis Dépannage (30 min) ✅ TERMINÉE
- [x] 2.1 Réécrire `getLocalReviews()` dans `depannage/[zone]/page.tsx`
- [x] 2.2 Ajouter 5 avis variés citant "dépannage rideau métallique à {Ville}"

### Étape 3 - Sections Dépannage (1h) ✅ TERMINÉE
- [x] 3.1 Créer section "Pourquoi choisir DRM à {Ville}"
- [x] 3.2 Créer section "Tarifs dépannage"
- [x] 3.3 Intégrer dans `depannage/[zone]/page.tsx`

### Étape 4 - Avis Fabrication (30 min) ✅ TERMINÉE
- [x] 4.1 Réécrire `getLocalReviews()` dans `fabrication/[zone]/page.tsx`

### Étape 5 - Sections Fabrication (1h) ✅ TERMINÉE
- [x] 5.1 Créer/adapter sections pour fabrication (SurMesureLocal + NormesCertificationsLocal)
- [x] 5.2 Intégrer dans `fabrication/[zone]/page.tsx`

### Étape 6 - Avis Entretien (30 min) ✅ TERMINÉE
- [x] 6.1 Réécrire `getLocalReviews()` dans `entretien/[zone]/page.tsx`

### Étape 7 - Sections Entretien (1h) ✅ TERMINÉE
- [x] 7.1 Créer/adapter sections pour entretien (ContratEntretien + SignesUsureLocal)
- [x] 7.2 Intégrer dans `entretien/[zone]/page.tsx`

### Étape 8 - Avis Installation (30 min) ✅ TERMINÉE
- [x] 8.1 Réécrire `getLocalReviews()` dans `installation/[zone]/page.tsx`

### Étape 9 - Sections Installation (1h) ✅ TERMINÉE
- [x] 9.1 Créer/adapter sections pour installation (TypesRideaux + ProcessusInstallationLocal)
- [x] 9.2 Intégrer dans `installation/[zone]/page.tsx`

### Étape 10 - Avis Motorisation (30 min) ✅ TERMINÉE
- [x] 10.1 Réécrire `getLocalReviews()` dans `motorisation/[zone]/page.tsx`

### Étape 11 - Sections Motorisation (1h) ✅ TERMINÉE
- [x] 11.1 Créer/adapter sections pour motorisation (AvantagesMotorisation + MarquesMoteurs)
- [x] 11.2 Intégrer dans `motorisation/[zone]/page.tsx`

---

## ⏱️ Estimation totale

| Phase | Temps estimé |
|-------|--------------|
| Phase 1 - Fix Reviews | 30 min |
| Phase 2 - Avis (5 services) | 2h30 |
| Phase 3 - Sections (5 services) | 5h |
| **TOTAL** | **~8h** |

---

## ✅ Critères de validation

- [x] Chaque avis mentionne le service ET la ville
- [x] 2 sections uniques par type de service
- [x] Contenu unique pour éviter duplicate content
- [x] Mobile responsive
- [ ] Schema.org mis à jour si nécessaire

---

## 🎯 Projet TERMINÉ ✅

Toutes les étapes du TODO SubCity SEO ont été complétées :
- ✅ Phase 1 : Fix Reviews
- ✅ Phase 2 : Avis locaux (5 services)
- ✅ Phase 3 : Sections SEO (5 services × 2 sections = 10 composants)

