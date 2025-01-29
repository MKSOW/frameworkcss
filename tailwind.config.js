/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#225f82',
          light: '#71beeb',
        }
      }
    },
  },
  plugins: [],
}