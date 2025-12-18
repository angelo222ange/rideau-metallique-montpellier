# 🚀 Déploiement DRM Montpellier

Ce dossier contient les fichiers nécessaires pour déployer le site **depannage-rideau-metallique-montpellier.fr** sur un VPS.

## 📁 Fichiers

- `nginx.conf` : Configuration Nginx (HTTPS, cache, compression, sécurité)
- `deploy.sh` : Script de build et déploiement automatique

## ⚙️ Prérequis VPS

- Ubuntu 20.04+ ou Debian 11+
- Nginx installé (`apt install nginx`)
- Certbot installé (`apt install certbot python3-certbot-nginx`)
- Node.js 18+ (pour le build local)

## 🔧 Configuration

### 1. Configurer deploy.sh

Ouvrir `deploy.sh` et modifier les variables :

```bash
VPS_USER="root"                # Utilisateur SSH (ou votre user sudo)
VPS_HOST="votre-ip-vps.com"    # ← IP ou hostname du VPS
DOMAIN="depannage-rideau-metallique-montpellier.fr"
SLUG="drm-montpellier"
```

### 2. Configurer l'accès SSH

Assurez-vous que votre clé SSH est configurée :

```bash
# Copier la clé SSH sur le VPS (si pas déjà fait)
ssh-copy-id root@votre-ip-vps.com

# Tester la connexion
ssh root@votre-ip-vps.com
```

### 3. Premier déploiement

```bash
# Rendre le script exécutable
chmod +x deploy/deploy.sh

# Lancer le déploiement
./deploy/deploy.sh
```

### 4. Configurer le certificat SSL (première fois uniquement)

Sur le VPS, après le premier déploiement :

```bash
# Créer le dossier pour certbot
mkdir -p /var/www/certbot

# Obtenir le certificat SSL Let's Encrypt
certbot certonly --webroot -w /var/www/certbot \
  -d depannage-rideau-metallique-montpellier.fr \
  -d www.depannage-rideau-metallique-montpellier.fr

# Recharger Nginx
systemctl reload nginx
```

### 5. Configurer le renouvellement automatique SSL

```bash
# Tester le renouvellement
certbot renew --dry-run

# Le cron de renouvellement est automatiquement créé par certbot
```

## 🔄 Mises à jour

Pour mettre à jour le site après des modifications :

```bash
./deploy/deploy.sh
```

Le script effectue automatiquement :
1. ✅ Build du site (`npm run build` → export statique dans `/out`)
2. ✅ Synchronisation des fichiers sur le VPS via rsync
3. ✅ Rechargement de Nginx

## 📊 Structure sur le VPS

```
/var/www/drm-montpellier/
└── out/                    # Site statique Next.js
    ├── index.html
    ├── fabrication/
    ├── entretien/
    ├── motorisation/
    ├── contact/
    ├── _next/              # Assets Next.js
    └── images/             # Images du site

/etc/nginx/
├── sites-available/
│   └── depannage-rideau-metallique-montpellier.fr.conf
└── sites-enabled/
    └── depannage-rideau-metallique-montpellier.fr.conf → (symlink)

/etc/letsencrypt/live/depannage-rideau-metallique-montpellier.fr/
├── fullchain.pem
└── privkey.pem
```

## 🔍 Vérifications après déploiement

- [ ] Site accessible sur https://depannage-rideau-metallique-montpellier.fr
- [ ] Redirection HTTP → HTTPS fonctionne
- [ ] Redirection www → non-www fonctionne
- [ ] Certificat SSL valide (cadenas vert)
- [ ] Pages principales accessibles (/, /fabrication, /entretien, /motorisation, /contact)
- [ ] Page 404 personnalisée fonctionne

## 🐛 Dépannage

### Erreur SSL
```bash
# Vérifier les logs
tail -f /var/log/nginx/drm-montpellier.error.log

# Régénérer le certificat
certbot certonly --webroot -w /var/www/certbot -d depannage-rideau-metallique-montpellier.fr
```

### Erreur Nginx
```bash
# Tester la configuration
nginx -t

# Voir les erreurs
journalctl -u nginx -f
```

### Site non mis à jour
```bash
# Vider le cache navigateur ou tester en navigation privée
# Vérifier que rsync a bien copié les fichiers
ls -la /var/www/drm-montpellier/out/
```

## 📞 Informations du site

| Info | Valeur |
|------|--------|
| Domaine | depannage-rideau-metallique-montpellier.fr |
| Téléphone | 04 11 93 76 76 |
| Email | contact@depannage-rideau-metallique-montpellier.fr |
| Adresse | 15 Rue Marceau, 34000 Montpellier |
