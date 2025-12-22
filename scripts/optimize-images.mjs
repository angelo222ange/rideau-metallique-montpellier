#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SCRIPT D'OPTIMISATION DES IMAGES POUR PERFORMANCE WEB
 * ═══════════════════════════════════════════════════════════════════════════
 * Optimise toutes les images WebP pour améliorer les scores PageSpeed.
 * 
 * Prérequis: npm install sharp
 * Usage: node scripts/optimize-images.mjs
 * ═══════════════════════════════════════════════════════════════════════════
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const IMG_DIR = 'public/images';

// Configuration par répertoire
const CONFIG = {
  hero: { maxWidth: 1920, quality: 75 },  // LCP critical - max 300KB
  services: { maxWidth: 1200, quality: 75 },
  fabrication: { maxWidth: 1200, quality: 75 },
  entretien: { maxWidth: 1200, quality: 75 },
  motorisation: { maxWidth: 1200, quality: 75 },
  installation: { maxWidth: 1200, quality: 75 },
  default: { maxWidth: 1200, quality: 75 }
};

let totalSaved = 0;
let filesOptimized = 0;
let filesProcessed = 0;

async function optimizeImage(filePath, config) {
  try {
    const originalBuffer = await fs.readFile(filePath);
    const originalSize = originalBuffer.length;
    
    // Obtenir les métadonnées
    const metadata = await sharp(originalBuffer).metadata();
    
    // Calculer la nouvelle largeur
    let newWidth = metadata.width;
    if (metadata.width > config.maxWidth) {
      newWidth = config.maxWidth;
    }
    
    // Optimiser
    const optimizedBuffer = await sharp(originalBuffer)
      .resize(newWidth, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: config.quality,
        effort: 6,  // Max compression effort
        smartSubsample: true
      })
      .toBuffer();
    
    const newSize = optimizedBuffer.length;
    filesProcessed++;
    
    // Sauvegarder seulement si plus petit
    if (newSize < originalSize) {
      await fs.writeFile(filePath, optimizedBuffer);
      const saved = (originalSize - newSize) / 1024;
      totalSaved += saved;
      filesOptimized++;
      
      const originalKB = (originalSize / 1024).toFixed(0);
      const newKB = (newSize / 1024).toFixed(0);
      console.log(`  ✓ ${path.basename(filePath)}: ${originalKB}KB → ${newKB}KB (-${saved.toFixed(0)}KB)`);
    } else {
      const sizeKB = (originalSize / 1024).toFixed(0);
      console.log(`  ○ ${path.basename(filePath)}: ${sizeKB}KB (déjà optimisé)`);
    }
  } catch (error) {
    console.error(`  ✗ ${path.basename(filePath)}: ${error.message}`);
  }
}

async function processDirectory(dirPath, config) {
  try {
    const files = await fs.readdir(dirPath);
    const webpFiles = files.filter(f => f.endsWith('.webp'));
    
    for (const file of webpFiles) {
      await optimizeImage(path.join(dirPath, file), config);
    }
  } catch (error) {
    // Directory doesn't exist, skip
  }
}

async function main() {
  console.log('═══════════════════════════════════════════════════════════');
  console.log('  OPTIMISATION DES IMAGES POUR PERFORMANCE WEB');
  console.log('═══════════════════════════════════════════════════════════');
  console.log('');

  // Créer backup
  const backupDir = `${IMG_DIR}-backup-${Date.now()}`;
  console.log(`📦 Création d'un backup dans ${backupDir}...`);
  await fs.cp(IMG_DIR, backupDir, { recursive: true });
  console.log('✓ Backup créé\n');

  // Traiter chaque répertoire
  for (const [dir, config] of Object.entries(CONFIG)) {
    if (dir === 'default') continue;
    
    const dirPath = path.join(IMG_DIR, dir);
    console.log(`🖼️  Optimisation ${dir}/ (max ${config.maxWidth}px, qualité ${config.quality})...`);
    await processDirectory(dirPath, config);
    console.log('');
  }
  
  // Images à la racine
  console.log(`🖼️  Optimisation images racine...`);
  const rootFiles = await fs.readdir(IMG_DIR);
  for (const file of rootFiles) {
    const filePath = path.join(IMG_DIR, file);
    const stat = await fs.stat(filePath);
    if (stat.isFile() && file.endsWith('.webp')) {
      await optimizeImage(filePath, CONFIG.default);
    }
  }
  console.log('');

  // Résumé
  console.log('═══════════════════════════════════════════════════════════');
  console.log('  RÉSUMÉ');
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`  Images traitées : ${filesProcessed}`);
  console.log(`  Images optimisées : ${filesOptimized}`);
  console.log(`  Espace économisé : ${totalSaved.toFixed(0)} KB (~${(totalSaved/1024).toFixed(1)} MB)`);
  console.log('');
  console.log('💡 Après déploiement, testez avec PageSpeed Insights');
  console.log('   https://pagespeed.web.dev/');
  console.log('');
  console.log('✓ Optimisation terminée !');
}

main().catch(console.error);

