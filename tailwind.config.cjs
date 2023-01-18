/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
