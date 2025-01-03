/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3FACC0',
        secondary: '#18202f',
        'gray-light': '#CCCECB',
        'gray-medium': '#E8EAE9',
        accent: '#3FACC0'
      }
    },
  },
  plugins: [],
};