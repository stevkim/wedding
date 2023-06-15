/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes':  ['Permanent Marker', 'cursive'],
        'parisienne': ['Parisienne', 'cursive'],
        'oswald': ['Oswald', 'sans-serif'],
        'sacramento': ['Sacramento', 'cursive']
      }
    },
  },
  plugins: [],
}