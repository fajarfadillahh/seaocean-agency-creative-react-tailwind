/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Bree Serif", "serif"],
      },
      colors: {
        red: {
          600: "#f94962",
        },
      },
      lineHeight: {
        text: "185%",
      },
    },
  },
  plugins: [],
};
