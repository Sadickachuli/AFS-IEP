/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A365D',
          light: '#2A4A7F',
          dark: '#0F2A4A',
        },
        secondary: {
          DEFAULT: '#E53E3E',
          light: '#FC8181',
          dark: '#C53030',
        },
        accent: {
          DEFAULT: '#F6E05E',
          light: '#FAF089',
          dark: '#D69E2E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
} 