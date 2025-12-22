/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  
  // Optimisations de compilation pour performance
  compiler: {
    // Supprimer les console.log en production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Désactiver les source maps en production pour réduire la taille
  productionBrowserSourceMaps: false,
  
  // Optimisation du bundling
  swcMinify: true,
  
  // Optimisations expérimentales pour la performance
  experimental: {
    // Optimisation des imports de packages
    optimizePackageImports: ['react', 'react-dom'],
  },
}

module.exports = nextConfig

