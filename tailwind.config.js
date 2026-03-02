/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF6F0',
          2: '#F5EDE0',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8CB7A',
          dark: '#8B6914',
        },
        blush: {
          DEFAULT: '#F2C4CE',
          deep: '#D4899A',
        },
        rose: {
          kerala: '#B5536A',
        },
        brand: {
          dark: '#2C1A0E',
          mid: '#6B4C35',
          light: '#A07850',
        },
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        jost: ['Jost', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        gold: '0 4px 24px rgba(201, 168, 76, 0.18)',
        deep: '0 8px 40px rgba(44, 26, 14, 0.15)',
      },
      backgroundImage: {
        'kerala-luxury': 'linear-gradient(135deg, #FAF6F0 0%, #F5EDE0 40%, #F2C4CE 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A84C, #8B6914)',
        'dark-gradient': 'linear-gradient(135deg, #2C1A0E, #6B4C35)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'slide-in': 'slideIn 0.35s cubic-bezier(0.32, 0.72, 0, 1) forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.32, 0.72, 0, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
