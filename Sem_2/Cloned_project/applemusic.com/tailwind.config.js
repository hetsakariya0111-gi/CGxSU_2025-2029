/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-dark': '#121212',
        'apple-gray': '#2c2c2e',
        'apple-light-gray': '#3a3a3c',
        'apple-red': '#d60017',
        'apple-hover-red': '#fb4f67',
        'apple-sidebar': '#1c1c1e',
        'apple-text-gray': '#c7c7cc',
        'apple-text-darker': '#8e8e93',
      },
      spacing: {
        'header': '52px',
        'sidebar': '240px',
      },
      fontFamily: {
        'apple': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at center, #e60023, #c2001c)',
      }
    },
  },
  plugins: []  // Just remove the line-clamp plugin from here
}