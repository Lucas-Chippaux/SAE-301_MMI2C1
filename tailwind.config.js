const bleu = "#3C6FAB";
const bleufonce = "#183E69";
const blanc = "#ffffff";
const bleuclair = "#02083D";
const gris = "#fafafa";
const noir = "#333434";

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'bold'],
        'nunito': ['Nunito', 'sans-serif'],
        'mitr': ['Mitr', 'sans-serif'],
        'palanquin': ['Palanquin Dark', 'sans-serif'],
      },
      colors: {
        bleu,
        bleufonce,
        blanc,
        bleuclair,
        gris,
        noir,
      },
    },
  },
  plugins: [],
};