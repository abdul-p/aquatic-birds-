/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
       backgroundImage : {
              front : "url('../public/img/aq3.jpg')",
              foot : "url('../public/img/aq7.jpg')"
       }
    },
  },
  plugins: [],
}

