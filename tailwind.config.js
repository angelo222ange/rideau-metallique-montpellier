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
        // COULEURS PRINCIPALES - MODIFIER ICI POUR CHAQUE SITE
        // Palette orange industriel par défaut
        // ═══════════════════════════════════════════════════════════════
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',  // Couleur principale
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Vous pouvez ajouter d'autres couleurs personnalisées ici
        // accent: {
        //   500: '#3b82f6',
        //   600: '#2563eb',
        // },
      },
      fontFamily: {
        // Police principale - MODIFIER ICI SI BESOIN
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
