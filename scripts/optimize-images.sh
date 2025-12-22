#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════
# SCRIPT D'OPTIMISATION DES IMAGES POUR PERFORMANCE WEB
# ═══════════════════════════════════════════════════════════════════════════
# Ce script optimise toutes les images WebP du projet pour améliorer
# les scores PageSpeed (mobile et desktop).
#
# Prérequis: cwebp (brew install webp) ou apt install webp
# Usage: ./scripts/optimize-images.sh
# ═══════════════════════════════════════════════════════════════════════════

set -e

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}  OPTIMISATION DES IMAGES POUR PERFORMANCE WEB${NC}"
echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
echo ""

# Vérifier si cwebp est installé
if ! command -v cwebp &> /dev/null; then
    echo -e "${RED}❌ cwebp n'est pas installé.${NC}"
    echo "   Installez-le avec: brew install webp (macOS) ou apt install webp (Linux)"
    exit 1
fi

# Répertoire des images
IMG_DIR="public/images"
BACKUP_DIR="public/images-backup-$(date +%Y%m%d-%H%M%S)"

# Créer un backup
echo -e "${YELLOW}📦 Création d'un backup dans $BACKUP_DIR...${NC}"
cp -r "$IMG_DIR" "$BACKUP_DIR"
echo -e "${GREEN}✓ Backup créé${NC}"
echo ""

# Compteurs
TOTAL=0
OPTIMIZED=0
SAVED=0

# Paramètres d'optimisation par catégorie
# Hero images : max 1920px de large, qualité 75
# Section images : max 1200px, qualité 75
# Thumbnails : max 600px, qualité 70

optimize_image() {
    local file="$1"
    local max_width="$2"
    local quality="$3"
    
    local original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    local original_kb=$((original_size / 1024))
    
    # Créer un fichier temporaire
    local temp_file="${file}.tmp.webp"
    
    # Obtenir les dimensions actuelles
    local current_width=$(identify -format "%w" "$file" 2>/dev/null || echo "0")
    
    if [ "$current_width" -gt "$max_width" ] 2>/dev/null; then
        # Redimensionner et recompresser
        cwebp -q "$quality" -resize "$max_width" 0 "$file" -o "$temp_file" 2>/dev/null
    else
        # Juste recompresser
        cwebp -q "$quality" "$file" -o "$temp_file" 2>/dev/null
    fi
    
    # Vérifier si le nouveau fichier est plus petit
    if [ -f "$temp_file" ]; then
        local new_size=$(stat -f%z "$temp_file" 2>/dev/null || stat -c%s "$temp_file" 2>/dev/null)
        local new_kb=$((new_size / 1024))
        
        if [ "$new_size" -lt "$original_size" ]; then
            mv "$temp_file" "$file"
            local saved_kb=$((original_kb - new_kb))
            SAVED=$((SAVED + saved_kb))
            OPTIMIZED=$((OPTIMIZED + 1))
            echo -e "  ${GREEN}✓${NC} $(basename "$file"): ${original_kb}KB → ${new_kb}KB (${GREEN}-${saved_kb}KB${NC})"
        else
            rm "$temp_file"
            echo -e "  ${YELLOW}○${NC} $(basename "$file"): ${original_kb}KB (déjà optimisé)"
        fi
    fi
    
    TOTAL=$((TOTAL + 1))
}

# Optimiser les images hero (LCP critical)
echo -e "${YELLOW}🖼️  Optimisation des images Hero (max 1920px, qualité 75)...${NC}"
for file in "$IMG_DIR"/hero/*.webp; do
    [ -f "$file" ] && optimize_image "$file" 1920 75
done
echo ""

# Optimiser les images services
echo -e "${YELLOW}🖼️  Optimisation des images Services (max 1200px, qualité 75)...${NC}"
for file in "$IMG_DIR"/services/*.webp; do
    [ -f "$file" ] && optimize_image "$file" 1200 75
done
echo ""

# Optimiser les autres répertoires
for dir in fabrication entretien motorisation installation; do
    if [ -d "$IMG_DIR/$dir" ]; then
        echo -e "${YELLOW}🖼️  Optimisation des images $dir (max 1200px, qualité 75)...${NC}"
        for file in "$IMG_DIR/$dir"/*.webp; do
            [ -f "$file" ] && optimize_image "$file" 1200 75
        done
        echo ""
    fi
done

# Images à la racine
echo -e "${YELLOW}🖼️  Optimisation des images racine (max 1200px, qualité 75)...${NC}"
for file in "$IMG_DIR"/*.webp; do
    [ -f "$file" ] && optimize_image "$file" 1200 75
done
echo ""

# Résumé
echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}  RÉSUMÉ${NC}"
echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
echo -e "  Images traitées : ${TOTAL}"
echo -e "  Images optimisées : ${OPTIMIZED}"
echo -e "  Espace économisé : ${GREEN}${SAVED} KB${NC} (~$((SAVED / 1024)) MB)"
echo ""
echo -e "${YELLOW}💡 Conseil :${NC} Après déploiement, testez avec PageSpeed Insights"
echo -e "   https://pagespeed.web.dev/"
echo ""
echo -e "${GREEN}✓ Optimisation terminée !${NC}"

