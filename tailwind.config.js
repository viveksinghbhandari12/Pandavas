/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#080808',
          secondary: '#121212',
          card: '#161616',
          elevated: '#1e1e1e',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F1D98A',
          dark: '#997D24',
          muted: '#8A7322',
        },
        surface: {
          DEFAULT: '#121212',
          border: 'rgba(212, 175, 55, 0.2)',
          'border-subtle': 'rgba(255, 255, 255, 0.08)',
          'gold-subtle': 'rgba(212, 175, 55, 0.08)',
        },
        text: {
          primary: '#F7F5EF',
          secondary: '#A7A7A7',
          muted: '#6F6F6F',
        },
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        cinzel: ['var(--font-cinzel)', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.25)',
        'gold-subtle': '0 0 15px -3px rgba(212, 175, 55, 0.15)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F1D98A 0%, #D4AF37 50%, #997D24 100%)',
        'gold-gradient-subtle': 'linear-gradient(135deg, rgba(241, 217, 138, 0.15) 0%, rgba(212, 175, 55, 0.05) 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, rgba(8, 8, 8, 0) 70%)',
      },
    },
  },
  plugins: [],
};
