/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF', // Bright Blue
        secondary: '#28A745', // Vibrant Green
        accent: '#FD7E14', // Bold Orange
        neutral: {
          light: '#FFFFFF', // White
          dark: '#212529', // Dark Charcoal
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