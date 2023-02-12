// eslint-disable-next-line no-undef
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  jit: true,
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
