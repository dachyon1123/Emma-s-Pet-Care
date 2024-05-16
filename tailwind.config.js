/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/index.html"],
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
        freeman: ['freeman', 'sans-serif']
      },
      colors: {
        primaryColor: "#859D82",
        secondaryColor: "#D15F0e",
        accentColor: "#f1eacf",
        white: "white",
      },
      backgroundImage: {
        "sabo-image": "url('./assets/kona1.jpg')",
      },
    },
  },
  plugins: [],
};
