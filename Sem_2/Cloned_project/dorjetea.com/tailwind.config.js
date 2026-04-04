/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-dark': '#002839',
        'teal-primary': '#005152',
        'teal-light': '#2e4b45',
        'cream': '#fef6ed',
        'cream-dark': '#ffece1',
        'cream-card': '#feebd1',
        'brown-light': '#f8f0e8',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'georgia': ['Georgia', 'Times New Roman', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'card': '1px 1px 5px 3px rgba(215, 215, 215, 0.5)',
      }
    },
  },
  plugins: [],
}