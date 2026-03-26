/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          50:  '#f0f0ff',
          100: '#e4e2ff',
          200: '#cbc8fe',
          300: '#a89ffd',
          400: '#8470fb',
          500: '#6d4ef7',
          600: '#5e30ec',
          700: '#5022d8',
          800: '#431db6',
          900: '#391a96',
          950: '#220e65',
        },
        dark: {
          50:  '#f6f6f9',
          100: '#ededf3',
          200: '#d6d6e5',
          300: '#b3b3cc',
          400: '#8a8aae',
          500: '#6b6b94',
          600: '#57577a',
          700: '#474764',
          800: '#3c3c54',
          900: '#111128',
          950: '#0a0a18',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradientShift 8s ease infinite',
        'typewriter': 'typewriter 3s steps(40, end)',
        'blink': 'blink 0.75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#6d4ef7' },
        },
      },
    },
  },
  plugins: [],
}
