/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sonata-blue': '#00306A',
        'sonata-orange': '#F14A16',
        'sonata-gray': '#f4f4f7',
        'sonata-border': '#e0e0e0',
        'sonata-text': '#333333',
        'sonata-light': '#f0f5f0',
        'sonata-bestseller': '#d9534f',
        'sonata-trending': '#0275d8',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        'header': '60px',
        'sidebar': '250px',
      },
      boxShadow: {
        'card': '0 6px 16px rgba(0, 0, 0, 0.1)',
        'banner': '0 6px 15px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale': 'scale 0.3s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}