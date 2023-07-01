/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'parisienne': ['Parisienne', 'cursive'],
        'oswald': ['Oswald', 'sans-serif'],
        'edu': ['Edu NSW ACT Foundation', 'cursive']
      }
    },
  },
  plugins: [],
}