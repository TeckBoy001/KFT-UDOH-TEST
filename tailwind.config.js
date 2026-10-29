/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kft-blue': {
          DEFAULT: '#0A3982',
          50: '#F0F5FD',
          100: '#E1ECFB',
          200: '#C3D8F8',
          500: '#0A3982',
          600: '#082F6B',
          700: '#062453',
          800: '#051B3E',
          900: '#031128',
        },
        'kft-red': {
          DEFAULT: '#D71920',
          50: '#FEF2F2',
          100: '#FDE4E4',
          500: '#D71920',
          600: '#B8141A',
          700: '#940E14',
          800: '#73090E',
          900: '#520609',
        },
        'kft-charcoal': '#333333',
        'kft-burgundy': '#170006',
        'kft-dark': '#0B132B',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #D71920 0%, #0A3982 100%)',
        'brand-gradient-reverse': 'linear-gradient(135deg, #0A3982 0%, #D71920 100%)',
      }
    },
  },
  plugins: [],
}
