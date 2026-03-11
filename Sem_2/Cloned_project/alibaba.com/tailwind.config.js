/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#FF6A00',
        'orange-dark': '#cc5500',
        'orange-bg': '#FFF4E6',
        'topbar-bg': '#A24A00',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/alibaba.webp')",
      },
      lineClamp: {
        2: '2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}