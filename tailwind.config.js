/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/index.html", "./src/pages/rates.html"],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ["Kaushan Script", "cursive"],
        neucha: ["Neucha", "cursive"],
        sriacha: ["Sriracha", "cursive"],
        kalam: ["Kalam", 'cursive'],
        contrail: ["Contrail-One", 'sans-serif'],
        poetsen: ["Poetsen One", 'sans-serif'],
        dosis: ["Dosis", 'sans-serif'],
        freeman: ['freeman', 'sans-serif'],
        girassol: ['girassol', 'sans-serif'],
        garamond: ['EB Garamond', 'serif']
      },
      colors: {
        primaryColor: "#859D82",
        secondaryColor: "#D15F0e",
        accentColor: "#f1eacf",
        white: "white",
      },
      backgroundImage: {
        "sabo-image": "url('./assets/dogphoto.jpg')",
        "dogImage1280": "url('./assets/dogphoto1280.jpg')"
      },
      boxShadow: {
        'screen': '0 0 0 10000px rgba(0,0,0,.50)'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
