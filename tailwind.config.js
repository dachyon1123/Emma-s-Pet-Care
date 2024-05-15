/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/index.html"
  ],
  theme: {
   extend: {
    fontFamily: {
      'kaushan': ['Kaushan Script', 'cursive'],
      'neucha': ["Neucha", 'cursive'],
      'sriacha': ["Sriracha", 'cursive']
    },
    colors: {
      "primaryColor": '#859D82',
      "secondaryColor": '#D15F0e',
      "accentColor": '#f1eacf',
      "white": "white"
    },
    backgroundImage: {
      'sabo-image': "url('. /src/assets/sabo1.jpg')"
    }
   }
  },
  plugins: [],
}
