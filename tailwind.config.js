/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ═══════════════════════════════════════════════════════════════
        // PALETTE COULEURS MONTPELLIER - Bleu Méditerranée
        // ═══════════════════════════════════════════════════════════════
        primary: {
          50: '#e6f4fa',
          100: '#cce9f5',
          200: '#99d3eb',
          300: '#66bde1',
          400: '#33a7d7',
          500: '#0077B6',  // Bleu Méditerranée - couleur principale
          600: '#006699',
          700: '#004d73',
          800: '#023E8A',  // Bleu Nuit Écusson
          900: '#012a5e',
          950: '#001a3d',
        },
        // Terracotta - CTA urgence, boutons action
        secondary: {
          50: '#fef6f2',
          100: '#fdebe0',
          200: '#fbd7c4',
          300: '#f6b898',
          400: '#f0a060',
          500: '#E07B39',  // Terracotta Toiture
          600: '#c66830',
          700: '#a55528',
          800: '#864524',
          900: '#6d3a20',
        },
        // Azur Ciel - Highlights, badges
        accent: {
          50: '#edfbfe',
          100: '#d1f5fc',
          200: '#a8ebf8',
          300: '#6dd5f0',
          400: '#48CAE4',  // Azur Ciel
          500: '#30b8d5',
          600: '#1e98b4',
          700: '#1b7a92',
          800: '#1d6377',
          900: '#1c5264',
        },
        // Ocre Doré - Accents chaleureux
        gold: {
          400: '#f0b454',
          500: '#E6A23C',
          600: '#cc8a2a',
        },
        // Sable Calcaire - Backgrounds clairs
        sand: {
          50: '#FDFCFA',
          100: '#FAF8F0',  // Sable Calcaire principal
          200: '#f5f0e1',
          300: '#ebe4d0',
        },
        // Anthracite Métal - Textes principaux
        metal: {
          700: '#374151',
          800: '#1F2937',  // Anthracite Métal
          900: '#111827',
        },
      },
      fontFamily: {
        // Plus Jakarta Sans pour les titres
        heading: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        // DM Sans pour le corps de texte
        sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        // Gradients Montpellier
        'gradient-primary': 'linear-gradient(135deg, #0077B6 0%, #023E8A 100%)',
        'gradient-hero': 'linear-gradient(135deg, #023E8A 0%, #0077B6 50%, #48CAE4 100%)',
        'gradient-cta': 'linear-gradient(135deg, #E07B39 0%, #c66830 100%)',
        'gradient-sand': 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F0 100%)',
      },
      boxShadow: {
        'primary': '0 10px 40px -10px rgba(0, 119, 182, 0.4)',
        'secondary': '0 10px 40px -10px rgba(224, 123, 57, 0.4)',
        'card': '0 4px 20px -4px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
